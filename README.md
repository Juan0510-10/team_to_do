# 📋 Team To-Do

## 1. Descripción del Proyecto

**Team To-Do** es una aplicación web full-stack diseñada para ayudar a los equipos a gestionar tareas de manera colaborativa y eficiente. Permite a los usuarios registrarse, iniciar sesión, y administrar un listado de tareas en un entorno compartido.

## 2. Stack Tecnológico

| Área           | Tecnología     | Descripción                               |
|----------------|----------------|-------------------------------------------|
| **Frontend**   | React (Vite)   | Biblioteca para construir interfaces de usuario.    |
|                | Tailwind CSS   | Framework de CSS "utility-first".         |
| **Backend**    | NestJS         | Framework progresivo de Node.js para APIs.  |
|                | Prisma         | ORM para Node.js y TypeScript.            |
| **Base de Datos**| MySQL          | Sistema de gestión de bases de datos relacional. |

## 3. Estructura del Repositorio

```
.
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── auth/
│   │   ├── tasks/
│   │   ├── teams/
│   │   └── users/
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── services/
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── API.md
├── ARQUITECTURA.md
├── LICENSE
└── README.md
```

## 4. Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:
- **Node.js**: v18 o superior.
- **npm**: v9 o superior (generalmente se instala con Node.js).
- **Git**: Para clonar el repositorio.
- **MySQL**: Una instancia de base de datos MySQL activa y accesible.

## 5. Cómo Ejecutar el Backend en Local

1.  **Navegar al directorio del backend:**
    ```bash
    cd backend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` a partir del ejemplo y configúralo (ver sección 7).
    ```bash
    cp .env.example .env
    ```

4.  **Aplicar migraciones de la base de datos:**
    Este comando creará las tablas en tu base de datos según el `schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

5.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run start:dev
    ```
    El backend estará disponible en `http://localhost:3000`.

## 6. Cómo Ejecutar el Frontend en Local

1.  **Navegar al directorio del frontend:**
    ```bash
    cd frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` a partir del ejemplo (ver sección 7).
    ```bash
    cp .env.example .env
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El frontend estará disponible en `http://localhost:5173`.

## 7. Configuración de Variables de Entorno

Debes crear un archivo `.env` en los directorios `frontend` y `backend` respectivamente.

### Backend (`backend/.env`)

Copia el contenido de `.env.example` y rellena los valores, especialmente la URL de conexión a tu base de datos.

```env
# URL de conexión para tu base de datos MySQL
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

# Puerto del servidor
PORT=3000

# URL del frontend para CORS
FRONTEND_URL="http://localhost:5173"

# Clave secreta para firmar JWTs
JWT_SECRET="tu-clave-secreta-aqui"
```

### Frontend (`frontend/.env`)

Copia el contenido de `.env.example`. Por defecto, apunta al backend local, por lo que no necesita cambios si mantienes la configuración estándar.

```env
# URL del servidor backend
VITE_API_URL=http://localhost:3000/api
```

## 8. Links a Entornos Desplegados

- **Frontend (Netlify):** (https://todolistproyecto.netlify.app)
- **Backend (Render):** (https://team-to-do.onrender.com)

---

## Documentación Adicional

- **Arquitectura del Sistema:** Para un entendimiento detallado de los componentes y flujos de datos, consulta el documento `ARQUITECTURA.md`.
- **Documentación de la API:** Todos los endpoints, métodos, y ejemplos de respuestas están documentados en `API.md`.

---

## 📋 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### Copyright (c) 2025 Juan Rodríguez

Se otorgan los permisos siguientes:

1. **Uso:** Se puede usar este software de cualquier forma, incluidos, entre otros, los fines comerciales, sin restricciones.
2. **Copiar y distribuir:** Se puede copiar, modificar, fusionar, publicar, distribuir, sublicenciar y vender copias del software.
3. **Modificar:** Se pueden realizar modificaciones al software, siempre y cuando se incluyan las modificaciones en una distribución del software.
4. **Distribuir copias modificadas:** Se pueden distribuir versiones modificadas del software bajo los mismos términos de la Licencia MIT.

**Limitaciones:**

- No se otorgan garantías de ningún tipo, expresas o implícitas, sobre la adecuación para un propósito particular o la seguridad del software.
- El autor o los titulares de derechos de autor no serán responsables de ningún daño o perjuicio que surja del uso del software.

Este proyecto utiliza otros componentes y bibliotecas que pueden estar bajo diferentes licencias. Asegúrate de consultar las licencias correspondientes de cada uno de ellos.

## 👤 Autor

Juan Rodríguez [Github](https://github.com/Juan0510-10/team_to_do.git)