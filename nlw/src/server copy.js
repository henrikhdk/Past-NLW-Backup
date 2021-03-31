// Dados
const proffys = [
    {
       name: "Diego Fernandes",
       avatar: "https://github.com/diego3g.png", 
       whatsapp: "0102030405", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
       subject: "Química", 
       cost: "15", 
       weekday: [0], 
       time_from: [720], 
       time_to: [1200]
     },
     {
        name: "Daniele Evangelista",
        avatar: "https://avatars3.githubusercontent.com/u/6615685?s=200&v=4", 
        whatsapp: "11121314", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "10", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1200]
      },
     {
       name: "Mayk Brito",
       avatar: "https://github.com/maykbrito.png", 
       whatsapp: "20212223", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
       subject: "Química", 
       cost: "21", 
       weekday: [1], 
       time_from: [720], 
       time_to: [1200]
     }
   ]
   
   const subjects = [
     "Artes",
     "Biologia",
     "Ciências",
     "Educação física",
     "Física",
     "Geografia",
     "História",
     "Matemática",
     "Portugês",
     "Química"
   ]
   
   const weekdays = [
     "Domingo",
     "Segunda-feira",
     "Terça-feira",
     "Quarta-feira",
     "Quinta-feira",
     "Sexta-feira",
     "Sábado",
   ]


   // Funcionalidades
   function getSubjects(subjectNumber) {
     const position = +subjectNumber - 1
     return subjects[position]
   }
   
   function pageLanding(req, res) {
     return res.render("index.html")
   }
   
   function pageStudy(req, res) {
     const filters = req.query
     return res.render("study.html", { proffys, filters, subjects, weekdays })
   }
   
   function pageGiveClasses(req, res) {
     const data = req.query
   
     // Se tiver dados (data)
     const isNotEmpty = Object.keys(data).length > 0
     if(isNotEmpty) {
   
       data.subject = getSubjects(data.subject)

       //adicionar data ao lista de proffys
       proffys.push(data)
       
       return res.redirect("/study")
     }
     // Se não, mostar a pagina
     return res.render("give-classes.html", {subjects, weekdays})
   }
   

   // Servidor
   const express = require('express');
   const server = express();
   
   // Configura nunjucks (template engine)
   const nunjucks = require('nunjucks');
   nunjucks.configure('src/views', {
     express: server,
     noCache: true,
   })

   // Inicio e configuração do servidor
   server
   // Configurar arquivos estáticos (css, scripts, imagens)
   .use(express.static("public"))
   // rotas da aplicação
   .get("/", pageLanding)
   .get("/study", pageStudy)
   .get("/give-classes", pageGiveClasses)
   // start do servidor
   .listen(5500);