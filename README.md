# 📋 Team To-Do (Aplicación de Tareas en Equipo)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)
![MySQL](https://img.shields.io/badge/MySQL-grey?logo=mysql)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-purple?logo=vite)

**Team To-Do** es una aplicación web full-stack diseñada para ayudar a los equipos a gestionar tareas de manera eficiente. Cuenta con un sistema seguro de autenticación de usuarios, actualizaciones de tareas y una interfaz de usuario moderna y adaptable.

## ✨ Características

- **Aplicación Full-Stack**: Arquitectura completa de frontend y backend.
- **Gestión de Tareas**: Crear, leer, actualizar y eliminar tareas.
- **Colaboración en Equipo**: Asignar tareas a miembros del equipo (funcionalidad en desarrollo).
- **Autenticación de Usuarios**: Sistema seguro de registro e inicio de sesión con JWT.
- **Encriptación de Contraseñas**: Usa `bcrypt` para hashear las contraseñas de los usuarios.
- **Búsqueda en Tiempo Real**: Funcionalidad de búsqueda con "debounce" para tareas y usuarios.
- **Filtrado de Tareas**: Visualiza tareas por estado (todas, pendientes, completadas).
- **Diseño Adaptable (Responsive)**: Una interfaz de usuario limpia y moderna que funciona en todos los dispositivos.

## 🛠️ Tecnologías Utilizadas

| Área      | Tecnología         | Descripción                               |
|-----------|--------------------|-------------------------------------------|
| **Frontend**  | React 18           | Una biblioteca de JavaScript para construir interfaces de usuario. |
|           | Vite               | Herramientas de frontend de nueva generación.         |
|           | React Router       | Enrutamiento declarativo para React.            |
|           | Tailwind CSS       | Un framework de CSS "utility-first".            |
|           | Axios              | Cliente HTTP basado en promesas.                |
| **Backend**   | NestJS             | Un framework progresivo de Node.js.          |
|           | Prisma ORM         | ORM de nueva generación para Node.js y TypeScript. |
|           | MySQL              | Base de datos relacional de código abierto.          |
|           | JWT                | JSON Web Tokens para autenticación.       |
| **DevOps**    | Netlify            | Despliegue y alojamiento del frontend.          |
|           | Render             | Despliegue y alojamiento del backend.           |

## 📦 Cómo Empezar

Sigue estas instrucciones para configurar y ejecutar el proyecto localmente.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una instancia de [MySQL](https://www.mysql.com/) en ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/team-todo.git
cd team-todo
```

### 2. Configuración del Backend

```bash
# Navega al directorio del backend
cd backend

# Instala las dependencias
npm install

# Crea el archivo .env a partir del ejemplo
cp .env.example .env
```

A continuación, abre el archivo `.env` recién creado y completa tus credenciales de la base de datos MySQL y un `JWT_SECRET`.

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="your-super-secret-key"
...
```

Finalmente, crea la base de datos y aplica el esquema con Prisma Migrate:

```bash
# Esto creará la base de datos y aplicará las migraciones
npx prisma migrate dev

# Genera el Cliente de Prisma
npx prisma generate
```

Ahora puedes iniciar el servidor del backend:

```bash
# Iniciar en modo de desarrollo con recarga automática
npm run start:dev
```
El backend estará disponible en `http://localhost:3000`.

### 3. Configuración del Frontend

```bash
# Navega al directorio del frontend (desde la raíz del proyecto)
cd frontend

# Instala las dependencias
npm install

# Crea el archivo .env a partir del ejemplo
cp .env.example .env
```

El archivo `.env` apunta al servidor local del backend por defecto, por lo que no se necesitan cambios si tu backend se está ejecutando en `http://localhost:3000`.

Ahora puedes iniciar el servidor de desarrollo del frontend:

```bash
# Inicia el servidor de desarrollo de Vite
npm run dev
```
El frontend estará disponible en `http://localhost:5173`.

## 🧪 Ejecución de Pruebas

El backend incluye un conjunto de pruebas. Puedes ejecutarlas usando los siguientes comandos desde el directorio `backend`:

```bash
# Ejecutar pruebas unitarias
npm test

# Ejecutar pruebas en modo "watch" (observador)
npm run test:watch

# Ejecutar pruebas "end-to-end" (de extremo a extremo)
npm run test:e2e
```

## 💅 Linting y Formateo de Código

Este proyecto utiliza ESLint y Prettier para mantener la calidad del código. Para ejecutarlos, usa los siguientes comandos desde el directorio `backend`:

```bash
# Ejecutar el linter y corregir problemas automáticamente
npm run lint

# Formatear todos los archivos de código fuente
npm run format
```

## 📡 Endpoints de la API

El backend expone los siguientes endpoints de la API REST.

#### Autenticación (Auth)
- `POST /auth/register`: Registrar un nuevo usuario.
- `POST /auth/login`: Iniciar sesión y recibir un JWT.

#### Usuarios (Users)
- `GET /users`: Obtener una lista de todos los usuarios.
- `POST /users`: Crear un nuevo usuario.

#### Tareas (Tasks)
- `GET /tasks`: Obtener una lista de todas las tareas.
- `POST /tasks`: Crear una nueva tarea.
- `GET /tasks/:id`: Obtener una tarea por su ID.
- `PATCH /tasks/:id`: Actualizar una tarea.
- `DELETE /tasks/:id`: Eliminar una tarea.

#### Equipos (Teams)
- `GET /teams`: Obtener una lista de todos los equipos.
- `POST /teams`: Crear un nuevo equipo.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o quieres mejorar el proyecto, siéntete libre de:
1. Hacer un "fork" del repositorio.
2. Crear una nueva rama (`git checkout -b feature/AmazingFeature`).
3. Hacer tus cambios y confirmarlos (`git commit -m 'Add some AmazingFeature'`).
4. Subir la rama (`git push origin feature/AmazingFeature`).
5. Abrir una "Pull Request".

## 📄 Licencia

Este proyecto no tiene licencia. Eres libre de usarlo, modificarlo y distribuirlo como consideres oportuno. Considera agregar una licencia de código abierto como la [MIT](https://opensource.org/licenses/MIT) si planeas compartirlo públicamente.

---

## Autor

Juan Rodríguez - [Github](https://github.com/Juan0510-10/team_to_do.git)