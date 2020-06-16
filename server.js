// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();


const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title:"Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729069.svg",
        title:"Exercícios",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729076.svg",
        title:"Live",
        category:"Diversão em Familia",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729013.svg",
        title:"Comer",
        category:"Diversão em Familia",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729072.svg",
        title:"Lavar Roupa",
        category:"Diversão em Familia",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
        url:"https://google.com.br"
    }
]

// configurar arquivos estáticos (css, scripts, imagens...)
    server.use(express.static("public"));

// configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    // não salvar cache quando minha aplicação está em desenvolvimento depois eu posso tirar
    noCache: true, // variavel tipo boolean
})


// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    const reversedIdeas = [...ideas].reverse();
    
    // pegar as ultimas ideias e reverter elas e mostrar primeiro
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 3) {
            lastIdeas.push(idea);
        }
    }

    return res.render("index.html", { ideas: lastIdeas });
});


server.get("/ideias", function(req, res) {
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", { ideas: reversedIdeas });
});


// liguei meu servidor na porta 3000
server.listen(3000);