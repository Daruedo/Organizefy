npm init
npm install express body-parser mongoose node-restful mongoose-paginate lodash express-query-int pm2 --save
npm install nodemon --save-dev
\AppData\Roaming\npm-cache\_logs\2022-07-26T19_08_44_843Z-debug.log


    "mongoose": "^5.11.18",



































----------------------------------------------------------------------------------------------------

Erro do bodyParser deprecated
Fala galera! Tudo bom?

Temos recebido algumas perguntas sobre a questão do bodyParser is deprecated, e viemos abordar alguns detalhes sobre essa extensão.

O primeiro deles é que, quando se usa as mesmas dependências do projeto que está sendo desenvolvido, realmente essa mensagem aparece. Mesmo assim o projeto funciona corretamente, então vocês não precisam se assustar caso vejam a mensagem ou, ainda, vejam a extensão riscada no meio.

Caso decidam por corrigir esse comportamento, é só usar algo como:

// Express v4.16.0 e superior
// --------------------------
const express = require('express');
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 
// For Express 4.16.0 ou abaixo
// ------------------------------------
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
Enfatizando sempre a importância de procurar manter seus projetos o mais fiéis possível aos do curso, para que não ocorram grandes discrepâncias de comportamento, como mudanças de uma versão para outra.

No mais, segundo o próprio site do Express JS, sobre o bodyParser no Express 4:

As funções de middleware integradas do Express(...), express.bodyParser e (...) não estão mais disponíveis no objeto express. É preciso instalar manualmente as alternativas e carregá-las no aplicativo.

A importação do bodyParser continua a mesma:

const bodyParser = require('body-parser');
E na hora de usar, seria algo como:

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
Com isso, os comportamentos estranhos sumirão e assim vocês podem continuar o desenvolvimento dos trabalhos de vocês.

Atentamos ainda que essa extensão é usada novamente em projetos em seções futuras, mas resolvemos trazer na mais cedo possível para resolver logo o problema e responder as dúvidas quanto a esse comportamento.

Bons estudos!