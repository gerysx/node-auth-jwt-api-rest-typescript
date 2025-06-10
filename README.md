
#  Node.js REST API con JWT, Prisma y PostgreSQL

Este repositorio contiene una API REST desarrollada con **Node.js**, **Express**, **TypeScript** y autenticación **JWT**, usando **Prisma ORM** como capa de acceso a datos y **PostgreSQL** como base de datos relacional.

##  Tecnologías utilizadas

- **Node.js** y **Express** para el servidor y manejo de rutas.
- **TypeScript** para tipado estático y mejor mantenibilidad.
- **Prisma** como ORM para interactuar con PostgreSQL.
- **JWT (jsonwebtoken)** para autenticación segura.
- **bcrypt** para el hasheo de contraseñas.
- **dotenv** para gestión de variables de entorno.
- **ts-node-dev** para recarga automática en desarrollo.
- **rimraf** para limpieza del directorio `/dist`.

---

##  Instalación paso a paso

1. Clona el repositorio en tu ordenador
``git clone https://github.com/gerysx/node-auth-jwt-api-rest-typescript.git``
``cd node-auth-jwt-api-rest-typescript``
2. Actualiza tus variables de entrono y cambia el nombre del archivo de `.env.template` a `.env` o directamente desde tu carpeta del proyecto usa `cp .env.template .env`
3. Cambia según tus variables de entorno estas credeciales `DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"`
4. Importante ejecutar este comando`npx prisma migrate dev --name init`
5. Recuerda instalar 'Docker Desktop' para asegura que tu proyecto funciona en local, y Table Plus para poder ver que las peticiones realizadas con 'Postman' se reflejan correctamente.

##  Scripts en package.json


`npm run dev`
Ejecuta el servidor en modo desarrollo (`tsnd`) con recarga automática

`npm run build`
Compila el código TypeScript a JavaScript en `dist/`

`npm start`
Ejecuta el servidor desde `dist/server.js` (modo producción)
