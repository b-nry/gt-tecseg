# Repositório para o desenvolvimento do GT-TecSeg (atualmente protótipo).

Deixei alguns comentários em alguns códigos para se tiver dúvida, estou fazendo igual o projetinho daquele curso de React que a Bianca mandou (talvez tenha que mudar umas coisas mais pra frente ==> mesmo que tenha pelo menos conseguimos apresentar algum progresso na sexta ^^)

LOG 3

- percebi que tem um espacinho branco na página de login, registro e sidebar em todos os lados, deve ser algo do css para corrigir
- texto preto no registro (culpa do h3)
- deve ser bom aumentar o tamanho da sidebar, questionário e contexto
- sobre ter dois arquivos para os componentes, o gpt disse pra usar um tal de css modules, continua sendo dois arquivos mas parece ser o jeito mais profissional de lidar com a situação
- Fiz um arquivo css global mas tá dando erro quando eu substituo questionary-page e context-page por lhsa-page, o conteúdo desce pra baixo, mesmo eles tendo as mesmas propriedades (???)

('-')/ adiós

# ...

Modifiquei o CSS em tudo e adicionei ao global (exceto em componentes). A Sidebar precisa de funcionalidade e retrabalho (está feia ainda). Acredito que não é preciso importar global.css em tudo.

/- b-nry