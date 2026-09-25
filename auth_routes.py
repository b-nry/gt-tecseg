from fastapi import APIRouter, Depends, HTTPException
from models import Usuario
from dependencias import pegar_sessao
from security import gerar_hash, verificar_senha
from schemas import UsuarioSchema, LoginSchema

auth_router = APIRouter(prefix="/auth", tags=["auth"])

@auth_router.get("/")
async def home():
    return {
        "mensagem": "você acessou a rota padrão de autenticação", 
        "autenticado": False
    }


@auth_router.post("/cadastrar")
async def cadastrar(
    usuario_schema: UsuarioSchema, 
    session = Depends(pegar_sessao)
):
    usuario_email = session.query(Usuario).filter(Usuario.email==usuario_schema.email).first()
    usuario_user = session.query(Usuario).filter(Usuario.username==usuario_schema.username).first()

    if usuario_email:
        raise HTTPException(status_code=400, detail="email do usuário já cadastrado")

    elif usuario_user:
        raise HTTPException(status_code=400, detail="username indisponível")

    else:
        senha_hash = gerar_hash(usuario_schema.senha)

        novoUsuario = Usuario(
            nome = usuario_schema.nome, 
            email = usuario_schema.email, 
            instituicao = usuario_schema.instituicao,
            data_nasc = usuario_schema.data_nasc,
            username = usuario_schema.username,
            senha_hash = senha_hash
        )

        session.add(novoUsuario)
        session.commit()

        return {"mensagem": "usuário cadastrado com sucesso"}


@auth_router.post("/login")
async def login(
    login_schema: LoginSchema,
    session = Depends(pegar_sessao)
):
    usuario = session.query(Usuario).filter((Usuario.email==login_schema.login)|(Usuario.username==login_schema.login)).first()
    if usuario:
        senha_correta = verificar_senha(login_schema.senha, usuario.senha_hash)
        if senha_correta:
            return {"mensagem": "usuário autenticado com sucesso"}
        else:
            raise HTTPException(status_code=400, detail="senha incorreta")
    else:
        raise HTTPException(status_code=400, detail="email não cadastrado")


# @auth_router.post("/testar-senha")
# async def teste(
#     login: LoginSchema,
#     session = Depends(pegar_sessao)
# ):
#     usuario = session.query(Usuario).filter(Usuario.email == login.email).first()
#     if usuario:
#         senha_correta = verificar_senha(login.senha, usuario.senha_hash)
#         return {
#             "email": usuario.email,
#             "senha_correta": usuario.senha_correta,
#             "senha_quebrada": usuario.senha_quebrada
#         }
#     return {"mensagem": "email não cadastrado"}