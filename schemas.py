from pydantic import BaseModel, Field, model_validator, EmailStr
from datetime import date

class UsuarioSchema(BaseModel):
    nome: str
    email: EmailStr
    data_nasc: date
    username: str
    instituicao: str
    senha: str = Field(min_length=1, max_length=8)
    confirmacao_senha: str = Field(min_length=1, max_length=8)

    @model_validator(mode="after")    
    def verificar_senha(self):
        if self.senha != self.confirmacao_senha:
            raise ValueError("as senhas não coincidem")
        return self

    class Config:
        from_attributes = True

class LoginSchema(BaseModel):
    login: str
    senha: str

    class Config:
        from_attributes = True

