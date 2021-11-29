const express = require('express');
const app = express();
const path = require('path');   

// settings
app.set('port', 3000);  // puerto a utilizar por el servidor
app.set('view engine', 'ejs');  // configuración del motor de plantilla a utilizar, en este caso ejs
app.set('views', path.join(__dirname, 'views'));  //especifica la ruta base de las vistas (views o plantillas)
                //path.join ajusta las barras invertidas (\ o /) ya que difiere en distintos sistemas operativos.

// middlewares


// routes

app.use(require('./routes/index'));  // utilizamos un enrutador a las distintas páginas webs del sitio. 

// static files

app.use(express.static(path.join(__dirname, 'public')));

// listening the server

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});