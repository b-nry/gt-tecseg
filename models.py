from sqlalchemy import Column, String, Integer, Boolean, Date
from sqlalchemy.orm import declarative_base
from database import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String, nullable=False)
    instituicao = Column(String, nullable=False)
    data_nasc = Column(Date, nullable=False)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    senha_hash = Column(String, nullable=False)
    senha_quebrada = Column(Boolean, default=False, nullable=False)
    