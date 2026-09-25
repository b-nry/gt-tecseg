from database import SessionLocal
from models import Usuario
import subprocess

session = SessionLocal()

try:
    usuarios = session.query(Usuario).all()

    with open("hashes.txt", "w") as arquivo:
        for usuario in usuarios:
            arquivo.write(usuario.senha_hash + "\n")

    comando = [
        r"C:\hashcat\hashcat-7.1.2\hashcat.exe",
        "-m", "34000",
        "-d", "1",
        r"C:\Users\Marília\Desktop\UFF\projeto-fastapi\hashes.txt",
        "-a", "0",
        r"C:\Users\Marília\Desktop\UFF\projeto-fastapi\senhas.txt",
    ]

    subprocess.run(
        comando,
        cwd=r"C:\hashcat\hashcat-7.1.2"
    )

    comando_show = [
        r"C:\hashcat\hashcat-7.1.2\hashcat.exe",
        "-m", "34000",
        "-d", "1",
        r"C:\Users\Marília\Desktop\UFF\projeto-fastapi\hashes.txt",
        "--show"
    ]

    resultado = subprocess.run(
        comando_show,
        cwd=r"C:\hashcat\hashcat-7.1.2",
        capture_output=True,
        text=True
    )

    print(resultado.stdout)

    resultados = resultado.stdout.splitlines()

    for linha in resultados:
        linha = linha.strip()

        if ":" not in linha:
            continue

        partes = linha.rsplit(":", 1)

        hash_encontrado = partes[0]
        senha = partes[1]

        usuario = session.query(Usuario).filter(
            Usuario.senha_hash == hash_encontrado
        ).first()

        if usuario:
            usuario.senha_quebrada = True

            print(
                f"senha quebrada para {usuario.email}: {senha}"
            )

    session.commit()

finally:
    session.close()

print("tentativas de quebra de senhas concluída")
