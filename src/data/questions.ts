export const questions = [
    {
        id: 1,

        question:
            "Com que frequência você costuma trocar suas senhas corporativas?",

        options: [
            "Menos de 3 meses",
            "Menos de 2 meses",
            "Menos de 1 mês",
            "Menos de 1 semana",
            "Menos de 2 segundos"
        ],

        context: {
            title: "VOCÊ SABIA?",

            paragraphs: [
                "De acordo com o estudo Linguagem Digital da Kaspersky, quatro em cada dez funcionários no Brasil (40%) admite nunca ter mudado a senha da rede corporativa, enquanto 37% dizem que só o fazem quando a organização exige.",

                "Essa é uma realidade que desafia as empresas do país: senhas fracas ou reutilizadas continuam sendo uma das principais portas de entrada para ataques em ambientes corporativos."
            ],

            source:
                "Fonte: https://www.kaspersky.com.br/about/press-releases/empresas-em-risco-4-em-cada-10-brasileiros-nunca-mudou-sua-senha-corporativa"
        }
    },

    {
        id: 2,

        question:
            "Você costuma utilizar a mesma senha em diferentes sistemas?",

        options: [
            "Sempre",
            "Frequentemente",
            "Às vezes",
            "Raramente",
            "Nunca"
        ],

        context: {
            title: "VOCÊ SABIA?",

            paragraphs: [
                "Utilizar a mesma senha em diferentes sistemas pode aumentar os riscos de segurança caso uma dessas credenciais seja comprometida.",

                "Quando uma senha é reutilizada, um atacante que consiga obtê-la pode tentar utilizá-la em outros serviços."
            ],

            source:
                "Fonte: Material educativo do projeto LHSA."
        }
    }
];