import hashlib

def gerar_hash(senha: str):
    return hashlib.md5(senha.encode()).hexdigest()


def verificar_senha(senha: str, senha_hash: str):
    return gerar_hash(senha) == senha_hash

senha = "123456"

hash_gerado = gerar_hash(senha)

print("Senha:", senha)
print("Hash:", hash_gerado)
print("Senha correta:", verificar_senha("123456", hash_gerado))
print("Senha errada:", verificar_senha("654321", hash_gerado))