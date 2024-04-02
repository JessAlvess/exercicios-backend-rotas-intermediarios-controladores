const express = require("express");
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;
let ultimoIndice;

const captalize = (string) => {
  const stringConvertedToArray = string.split("");
  stringConvertedToArray[0] = stringConvertedToArray[0].toUpperCase();
  for (let index = 1; index < stringConvertedToArray.length; index++) {
    stringConvertedToArray[index] = stringConvertedToArray[index].toLowerCase();
  }
  return stringConvertedToArray.join("");
};

app.get("/", (req, res) => {
  if (indice > jogadores.length - 1) {
    indice = 0;
    ultimoIndice = 0;
    res.send(`É a vez de ${jogadores[indice]} jogar!`);
  } else {
    if (ultimoIndice === 0 && indice === 0) {
      indice += 1;
      res.send(`É a vez de ${jogadores[indice]} jogar!`);
      ultimoIndice = indice;
      indice += 1;
    } else {
      res.send(`É a vez de ${jogadores[indice]} jogar!`);
      indice += 1;
      ultimoIndice = indice;
    }
  }
});

app.get("/remover", (req, res) => {
  let { indice } = req.query;
  indice = parseInt(indice);
  if (indice) {
    if (indice > jogadores.length) {
      res.send(
        `Não existe jogador no índice informado ${indice} para ser removido.`
      );
    } else {
      jogadores.splice(indice, 1);
      res.send(jogadores);
    }
  } else {
    res.send(`É obrigatório fornecer o indice do jogador.`);
  }
});

app.get("/adicionar", (req, res) => {
  let { nome, indice } = req.query;
  let indiceInt = parseInt(indice);
  let nomeCaptalized;
  if (nome) {
    nomeCaptalized = captalize(nome);
  }

  if (nome && indiceInt) {
    if (indiceInt > jogadores.length) {
      res.send(
        `O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`
      );
    } else {
      if (indiceInt == 0) {
        jogadores.unshift(nomeCaptalized);
        res.send(jogadores);
      } else {
        jogadores.splice(indiceInt, 0, nomeCaptalized);
        res.send(jogadores);
      }
    }
  } else if (nome && !indiceInt) {
    jogadores.push(nomeCaptalized);
    res.send(jogadores);
  } else if (!nome && indiceInt) {
    res.send("Informe o nome do jogador.");
  } else {
    res.send("É obrigatório informar o nome do jogador.");
  }
});

app.listen(8000);
