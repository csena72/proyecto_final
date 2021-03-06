# Proyecto Final

_coderhouse - Curso Programaci贸n Backend: Proyecto Final - E-commerce project_

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._


### Pre-requisitos 馃搵

_Es necesario tener intalado:_ 

_Node.js y npm_ [https://nodejs.org/es/](https://nodejs.org/es/)

_Git si se quiere clonar el proyecto_ [https://git-scm.com/](https://git-scm.com/)

_Una cuenta de Mongo DB para la DB del proyecto_ [https://www.mongodb.com/es/](https://www.mongodb.com/es)


### Instalaci贸n 馃敡

_Abrir una terminal o consola e ir al directorio donde se quiera instalar ej.:_

```
cd /home/fulano/proyects
```
_Clonar o descargar el proyecto desde github https://github.com/csena72/proyecto_final.git_

```
git clone https://github.com/csena72/proyecto_final.git
```
_Si se descarg贸 el zip, descomprimirlo en la ubicaci贸n de su agrado._

_Para levantar el Backend del proyecto entrar en la carpeta:_

```
cd proyecto_final/backend
```

_Ejecutar:_

```
cp .env.example .env
```

_Agregar las credenciales de acceso a tu DB (MONGO_URI=):_

```
MONGO_URI=mongodb+srv://<tu_usuario>:<tu password>@cluster0.qsdfx.mongodb.net/<nombre_db>?retryWrites=true&w=majority
```

_Ejecutar:_

```
npm install
npm run start:dev
```
_Para levantar el Frontend del proyecto entrar en la carpeta:_

```
cd proyecto_final/frontend
```

_Ejecutar:_

```
npm install
```

## Despliegue 馃摝

_Para ver la app en el navegador, desde el directorio del proyecto ejecutar:_

```
npm start
```

_Para ver la app en el navegador:_

http://localhost:3000/

## Para realizar una prueba de performance con  Artillery:
```
artillery quick -c 50 -n 20 "http://localhost:3000/home" > artillery_prof.txt
```

## Back Construido con 馃洜锔?

* [Node.js](https://nodejs.org/es/) - Entorno de ejecuci贸n para JavaScript
* [Npm](https://github.com/npm/npm) - Sistema de gesti贸n de paquetes
* [express](https://expressjs.com/es/) - Infraestructura web r谩pida, minimalista y flexible para Node.js
* [mongoose](https://mongoosejs.com/) - Modelado elegante de objetos MongoDB para Node.js


## Front Construido con 馃洜锔?

* [Node.js](https://nodejs.org/es/) - Entorno de ejecuci贸n para JavaScript
* [Npm](https://github.com/npm/npm) - Sistema de gesti贸n de paquetes
* [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
* [React Hook Form](https://react-hook-form.com/) - Librer铆a para validar formularios en React
* [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap Front-end framework para React
* [React Icons](https://react-icons.github.io/react-icons/) - Iconos para proyectos de React
* [Animate.css](https://animate.style/) - Librer铆a de animaciones CSS
* [Sweetalert2](https://sweetalert2.github.io/) - Librer铆a para generar popups 


## Versionado 馃搶

Usamos [github](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/csena72/proyecto_final.git/tags).

## Autor 鉁掞笍

* **Cristian Sena** - [csena72](https://github.com/csena72)

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia (MIT) - mira el archivo [LICENSE](./LICENSE) para detalles

## Expresiones de Gratitud 馃巵

* Muchas gracias al profesor, tutores y compa帽eros! 馃.

---
鈱笍 con 鉂わ笍 por [Cristian Sena](https://github.com/csena72) 馃槉