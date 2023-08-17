/*
Confeccionaremos un sitio que contenga una serie de archivos html, css, jpg, mp3, mp4 e ico.
Crearemos un directorio llamado ejercicio10 y dentro de este otro directorio interno llamado static 
donde dispondremos todos los archivos html,css, jpg, mp3, mp4 e ico.
En el directorio ejercicio10 tipearemos nuestra aplicacion Node.js
que tiene por objetivo servir las páginas HTML y otros recursos que pidan los navegadores web.
La aplicación Node.js la llamamos ejercicio10.js
*/
const http = require('http')
const fs = require('fs')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'static' + url.pathname
  if (camino == 'static/')
    camino = 'static/index.html'
  fs.stat(camino, error => {
    if (!error) {
      fs.readFile(camino, (error, contenido) => {
        if (error) {
          respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
          respuesta.write('Error interno')
          respuesta.end()
        } else {
          const vec = camino.split('.')
          const extension = vec[vec.length - 1]
          const mimearchivo = mime[extension]
          respuesta.writeHead(200, { 'Content-Type': mimearchivo })
          respuesta.write(contenido)
          respuesta.end()
        }
      })
    } else {
      respuesta.writeHead(404, { 'Content-Type': 'text/html' })
      respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
      respuesta.end()
    }
  })
})

servidor.listen(8888)

console.log('Servidor web iniciado')