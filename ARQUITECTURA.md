# Arquitectura del Sistema - Team To-Do

Este documento describe la arquitectura de alto nivel de la aplicación, los componentes clave y los flujos de datos principales.

## 1. Diagrama de Arquitectura (C4 - Nivel 2)

El siguiente diagrama muestra el flujo general de la aplicación, desde el usuario final hasta la base de datos.

### Diagrama Simple

```
+---------+       +---------------------+       +-------------------+       +--------------------+
|         |       |                     |       |                   |       |                    |
| Usuario |------>|  Frontend (React)   |------>|  Backend (NestJS) |------>| Base de Datos (MySQL) |
|         |       | (Alojado en Vercel) |       | (Alojado en Render)|       | (Alojada en Railway) |
|         |       |                     |       |                   |       |                    |
+---------+       +---------------------+       +-------------------+       +--------------------+
```

### Diagrama con Mermaid

```mermaid
graph TD
    A[Usuario] --> B{Frontend (React en Vercel)};
    B --> C{Backend (NestJS en Render)};
    C --> D[(Base de Datos MySQL en Railway)];
```

---

## 2. Descripción de los Componentes

### a. Frontend

- **Tecnología:** Aplicación de Página Única (SPA) construida con **React**, **Vite** y **Tailwind CSS**.
- **Responsabilidades:**
  - Renderizar la interfaz de usuario.
  - Gestionar el estado de la aplicación (sesión de usuario, listado de tareas, etc.).
  - Validar las entradas del usuario (formularios).
  - Comunicarse con el Backend a través de una API REST para obtener y enviar datos.
- **Pantallas Principales:**
  - **Login/Registro:** Formularios para la autenticación de usuarios.
  - **Home (`/`):** Vista principal que muestra la lista de tareas. Permite crear, editar, eliminar y filtrar tareas.
  - **Usuarios (`/users`):** Muestra una lista de los usuarios registrados.

### b. Backend

- **Tecnología:** API REST construida con **NestJS** (Node.js) y **Prisma** como ORM.
- **Arquitectura:**
  - **Controllers:** Exponen los endpoints HTTP, reciben las peticiones y devuelven las respuestas.
  - **Services:** Contienen la lógica de negocio principal. Son llamados por los controladores y orquestan las operaciones.
  - **Prisma Service:** Un servicio dedicado a interactuar con la base de datos a través del cliente de Prisma, abstrayendo las consultas.
- **Responsabilidades:**
  - Exponer una API REST segura para el frontend.
  - Gestionar la lógica de negocio (autenticación, autorización, validaciones).
  - Interactuar con la base de datos para persistir y recuperar datos.

### c. Base de Datos

- **Tecnología:** **MySQL**, gestionada a través de **Prisma ORM**.
- **Modelo de Datos:**
  El esquema (`prisma/schema.prisma`) define las siguientes tablas principales:
  - `User`: Almacena la información de los usuarios (nombre, email, contraseña).
  - `Team`: Agrupa a los usuarios en equipos de trabajo.
  - `Task`: Representa una tarea, con sus propiedades (título, estado, prioridad) y relaciones con `User` y `Team`.
  - `SimpleTask`, `Comment`, `Tag`: Modelos adicionales para extender la funcionalidad.

---

## 3. Flujo de una Operación Típica: "Crear una Tarea"

1.  **Usuario (Frontend):** El usuario rellena el formulario para crear una nueva tarea en la interfaz de React y hace clic en "Guardar".
2.  **Petición HTTP (Frontend):** La aplicación cliente realiza una petición `POST` al endpoint `/tasks` del backend, enviando los datos de la tarea en el cuerpo (body) de la solicitud.
3.  **Controlador (Backend):** El `TasksController` recibe la petición. Valida que el DTO (Data Transfer Object) `CreateTaskDto` sea correcto.
4.  **Servicio (Backend):** El controlador invoca al método `create()` del `TasksService`, pasándole los datos de la tarea.
5.  **Lógica de Negocio (Backend):** El `TasksService` aplica cualquier lógica necesaria (ej. verificar permisos, asignar valores por defecto).
6.  **Acceso a Datos (Backend):** El servicio utiliza el `PrismaService` para ejecutar una consulta `create` en la tabla `Task` de la base de datos MySQL.
7.  **Respuesta (Backend):** La base de datos confirma la creación y devuelve el nuevo registro. El backend responde al frontend con un código `201 Created` y el objeto de la nueva tarea.
8.  **Actualización de UI (Frontend):** El frontend recibe la respuesta, actualiza su estado local y muestra la nueva tarea en la lista sin necesidad de recargar la página.

---

## 4. Pipeline de CI/CD

Actualmente, el proyecto **no cuenta con un pipeline de Integración Continua (CI) y Despliegue Continuo (CD) configurado**.

Un pipeline de CI/CD típico para este proyecto se configuraría en un proveedor como GitHub Actions y realizaría los siguientes pasos en cada `push` a la rama `main`:

1.  **Instalar Dependencias:** Ejecutar `npm install` tanto para el frontend como para el backend.
2.  **Análisis de Código Estático:** Ejecutar `npm run lint` para asegurar la calidad y consistencia del código.
3.  **Ejecutar Pruebas:** Correr las pruebas unitarias y e2e del backend con `npm test` y `npm run test:e2e`.
4.  **Construir Artefactos (Build):** Generar las compilaciones de producción con `npm run build` en ambos proyectos.
5.  **Desplegar:**
    - **Frontend:** Desplegar el contenido del directorio `frontend/dist` en **Vercel**.
    - **Backend:** Desplegar el código del backend en **Render**, ejecutando las migraciones de la base de datos (`prisma migrate deploy`) antes de iniciar el servidor.
