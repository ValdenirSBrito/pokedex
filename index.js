const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
let message = "";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [];


app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    titulo: "Blue",
    devList: devList,
    analyticsList: analyticsList,
    pokedex: pokedex,
    message,
  });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});
app.get("/detalhes", (req, res) => {
    res.render("detalhes"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});
app.post("/new", (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  const pokemon = ({ numero: numero, nome: nome, tipo: tipo, imagem: imagem, descricao: descricao, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade });
  pokedex.push(pokemon);
  message = `Parabéns!!!! O Cadastro do Pokemon ${nome} foi realizada com sucesso!`;
  res.redirect("/"); 
});


// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));