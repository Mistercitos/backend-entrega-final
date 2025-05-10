# Backend III · Entrega Final

API REST para la gestión de usuarios y solicitudes de adopción, dockerizada y testeada end-to-end.

## Tabla de contenido

1. [Stack](#stack)
2. [Requisitos previos](#requisitos-previos)
3. [Instalación local](#instalación-local)
4. [Tests funcionales](#tests-funcionales)
5. [Documentación Swagger](#documentación-swagger)
6. [Docker](#docker)
7. [Variables de entorno](#variables-de-entorno)
8. [Estructura del proyecto](#estructura-del-proyecto)

---

## Stack

- **Node.js 20 LTS**
- **Express 4**
- **Mongoose 8**
- **Swagger UI**
- **Mocha + Chai + Supertest**
- **Docker multistage** (imagen final ≈ 237 MB)

---

## Requisitos previos

| Herramienta | Versión mínima |
| ----------- | -------------- |
| Node.js     | 20 LTS         |
| npm         | 10             |
| Docker      | 24             |
| Git         | 2.40           |

---

## Instalación local

```bash
git clone https://github.com/<TU_USUARIO>/backend-entrega-final.git
cd backend-entrega-final

# instala dependencias
npm install

# copia variables de entorno
cp .env.example .env   # edita con tu URI de Mongo

# inicia la API en hot-reload
npm run dev
```

- **GET /** → `{"message":"API OK"}`
- **Swagger** → `http://localhost:3000/api-docs`

---

## Tests funcionales

```bash
npm test
```

Los tests cubren el 100 % de los endpoints de `adoption.router.js`.

---

## Documentación Swagger

Disponible en `GET /api-docs`

---

## Docker

### Pull & run (sin clonar el repo)

```bash
docker pull mistercitos/backend-entrega-final:latest
docker run -p 3000:3000 --env-file .env mistercitos/backend-entrega-final
```

- Imagen pública: <https://hub.docker.com/r/mistercitos/backend-entrega-final>
- Swagger UI: `http://localhost:3000/api-docs`

### Build local

```bash
docker build -t mistercitos/backend-entrega-final:local .
```

---

## Variables de entorno

| Variable    | Ejemplo                                              | Descripción                        |
| ----------- | ---------------------------------------------------- | ---------------------------------- |
| `PORT`      | `3000`                                               | Puerto donde escucha el servidor   |
| `MONGO_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/dbName` | Cadena de conexión a MongoDB Atlas |

Archivo de referencia → **.env.example**

```env
PORT=3000
MONGO_URI=
```

---

## Estructura del proyecto

```
.
├─ src/
│  ├─ config/          # conexión DB
│  ├─ models/          # esquemas Mongoose
│  ├─ routes/          # routers REST
│  ├─ swagger.js       # definición OpenAPI
│  └─ app.js
├─ server.js           # entrypoint
├─ test/               # tests funcionales
├─ Dockerfile
└─ README.md
```

---

### Autor

Christian Del Barco – <https://github.com/mistercitos> – Coderhouse **Backend III**
