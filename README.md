# Repositório para o desenvolvimento do GT-TecSeg (atualmente protótipo).

Deixei alguns comentários em alguns códigos para se tiver dúvida, estou fazendo igual o projetinho daquele curso de React que a Bianca mandou (talvez tenha que mudar umas coisas mais pra frente ==> mesmo que tenha pelo menos conseguimos apresentar algum progresso na sexta ^^)

LOG 3

- sobre ter dois arquivos para os componentes, o gpt disse pra usar um tal de css modules, continua sendo dois arquivos mas parece ser o jeito mais profissional de lidar com a situação

('-')/ adiós pedro-hfw

# ...

Modifiquei o CSS em tudo e adicionei ao global (exceto em componentes). A Sidebar precisa de funcionalidade e retrabalho (está feia ainda). Acredito que não é preciso importar global.css em tudo.

/- b-nry

# ...

- mexi um pouco no css da tela de login e cadastro pra caber melhor na tela (o link pra se cadastrar tava escondido)
- deixei a sidebar funcionando, só não mexi no estilo dela (pra mim tá bonitinho pro protótipo, depois vê o que vc acha que precisa mudar)
- tentei organizar um pouquinho os códigos
- deixei uns comentários onde imagino que será feita a chamada do fastapi
- botei de volta a caixinha dizendo que o usuário foi criado, acho mais bonito que deixar só o texto (só deve precisar mexer na cor, embora eu ache que o verde não fica tão ruim assim)
- tá faltando deixar o css da sidebar com aquele módulo igual o do navbuttons

('-')/ adiós pedro-hfw

# ...

- botei todos os campos de cadastro conforme nós combinamos, só não implementei a verificação do tamanho da senha pro registro ou login (precisa de um texto explicando isso na tela ou um (i) que quando passa o mouse fala)
- falta estilizar o campo do calendário, ele tá quadradão (e ele n usa css igual os outros) e o aviso da senha criada tá numa posição ruim, deve ser interessante fazer ele aparecer sobre tudo na parte superior da tela (tipo sobrepondo as coisas)
- componetizei o input dos usuários, só não deu o seletor (instituição) e data pq eles só usamos uma vez (será que é bom componetizar mesmo assim)?
*obs. o calendário é uma opção externa pra ficar bonitão, o do react é tenebroso de feio e não funcional, esse é muito mais adaptável (pelo que eu vi eles deixam usar de boa)
**obs. deixei os inputs todos descendo, será que é bom deixar eles de lado?

('-')/ adiós pedro-hfw

# 16/09

- cadastro completo e botei uma mensagem de aviso se as senhas não forem idênticas ou se o tamanho for maior que 8 caracteres
- não botei nada para ver se o usuário preencheu todos os campos, como a execução da ferramenta vai ser acompanhada não sei se é necessário fazer isso (se for deixar livre é bom colocar, mas é algo bem simples de se fazer)
- o campo das datas ainda tem um leve contorno preto quando seleciona ele, isso tá me incomodando
- amanhã e dpsdamanhã vou tentar implementar as sugestões da Bianca no figma aqui na plataforma para nós testarmos
- falta só o negócio de analisar a senha, de resto só uns ajustes de organização do código...

('-')/ adiós pedro-hfw

# 17/09 -> 18/09
- Utilizei a biblioteca zxcvbn-ts (aquela recomendada porém na versão mais moderninha e com typescript).
- **npm install @zxcvbn-ts/core @zxcvbn-ts/language-common @zxcvbn-ts/language-pt-br**
- (Considerar outras linguagens comuns como inglês depois para dicionário e afins).
- Ela é configurada em src/lib/zxcvbn.ts porque exige muito texto na importação.
- Foi criada a página PasswordStrength para demonstração. Não há navegação direta então vá em ENDEREÇOLOCAL/passwordstrength para ver a página.
- A biblioteca faz muito do trabalho braçal com o RESULT mágico dela tradução em português br.
- O card de senha pode virar componente dependendo de como usaremos.
- Mais para frente é preciso explorar melhor o visual e as opções da biblioteca. São várias. Seria bom confirmar que o que ela diz é mesmo verdade e decidir o que é exatamente uma senha "muito forte".

b-nry