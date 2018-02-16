/*
Tipos de Variables

const.- Variable con tamaño de memora no cambiante (definido desde el principio). <- Recomendado para los módulos de node
var.- Variable con tamaño escalable, puede cambiar de memoria.
let.- Variable disponible dentro de un scope.
*/

const http = require('http'); // <- Módulo de NodeJ para utilizar servidor tipo Http
const fs = require('fs'); // <- Módulo de NodeJs file system
const log4js = require('log4js') // <- Módulo de Npm para reportar en log

const logger = log4js.getLogger();
logger.level = 'debug';

//let file = fs.readFileSync("./index.html");

// Creación del servidor
http.createServer((request, response)=>{
  fs.readFile('./index.html', (err, html)=>{

    logger.info("Sever connection: OK 🤘"); // Log de Terminal

    if (err) {
      response.writeHead(404, {'Content-Type':'text/html'});
      response.write("404 - Not found:("); // Escribe en el navegador (SystemOut)
      logger.warn("HTML status: 404 😕"); // Log de Terminal
      response.end(); // Indica que una vez leida las instrucciones, termina el request y responde
    } else {
      response.write(html);
      logger.info("HTML status: 200 😃"); // Log de Terminal
      response.end();
    }
  });
}).listen(3000);


/*
Función anónima
http.createServer(function(){});
*/

/*
let server = function(){

};

http.createServer(server);
*/

/*
Polimorfismo
Es el como una serie de objetos hacen la misma acción de distinta forma
*/

//Función flecha (Arrow Flecha)
//Se hizo en ECMAS6 para no escribir muchas veces la palabra flecha
