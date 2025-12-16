# Documentación de la API - Team To-Do

Este documento detalla todos los endpoints disponibles en la API del backend.

## Base URL

Todas las rutas están prefijadas con `/api` en el despliegue, pero el código fuente no refleja este prefijo. La URL base para el entorno local es `http://localhost:3000`.

---

## Autenticación (`/auth`)

Endpoints para el registro e inicio de sesión de usuarios.

### `POST /auth/register`

Registra un nuevo usuario en el sistema.

- **Método HTTP:** `POST`
- **Body Esperado:**
  ```json
  {
    "name": "Nombre de Usuario",
    "email": "usuario@example.com",
    "password": "una-contraseña-segura"
  }
  ```
- **Respuesta de Éxito (Código `201`):**
  Retorna el objeto del usuario creado sin la contraseña.
  ```json
  {
    "id": 1,
    "name": "Nombre de Usuario",
    "email": "usuario@example.com",
    "avatarUrl": null,
    "createdAt": "2025-12-16T12:00:00.000Z",
    "updatedAt": "2025-12-16T12:00:00.000Z"
  }
  ```
- **Códigos de Estado:**
  - `201 Created`: Usuario creado exitosamente.
  - `400 Bad Request`: Si el `email` o `name` ya existen.

---

### `POST /auth/login`

Autentica a un usuario y le da acceso.

- **Método HTTP:** `POST`
- **Body Esperado:**
  Puedes iniciar sesión con `email` o `name`.
  ```json
  {
    "email": "usuario@example.com",
    "password": "una-contraseña-segura"
  }
  ```
- **Respuesta de Éxito (Código `200`):**
  Retorna el objeto del usuario sin la contraseña.
  ```json
  {
    "id": 1,
    "name": "Nombre de Usuario",
    "email": "usuario@example.com",
    // ...otros campos del usuario
  }
  ```
- **Códigos de Estado:**
  - `200 OK`: Inicio de sesión exitoso.
  - `401 Unauthorized`: Credenciales inválidas.

---

## Tareas (`/tasks`)

Endpoints para la gestión de tareas (CRUD).

### `GET /tasks`

Obtiene una lista de todas las tareas.

- **Método HTTP:** `GET`
- **Respuesta de Éxito (Código `200`):**
  ```json
  [
    {
      "id": 1,
      "title": "Configurar el backend",
      "description": "...",
      "status": "PENDING",
      "priority": "HIGH",
      "dueDate": null,
      "teamId": 1,
      "creatorId": 1,
      "createdAt": "2025-12-16T12:00:00.000Z",
      "updatedAt": "2025-12-16T12:00:00.000Z"
    }
  ]
  ```

### `POST /tasks`

Crea una nueva tarea.

- **Método HTTP:** `POST`
- **Body Esperado:** (`CreateTaskDto`)
  ```json
  {
    "title": "Nueva Tarea",
    "description": "Descripción opcional",
    "teamId": 1,
    "creatorId": 1
  }
  ```
- **Respuesta de Éxito (Código `201`):** Retorna la tarea creada.

### `PUT /tasks/:id`

Actualiza una tarea existente.

- **Método HTTP:** `PUT`
- **Parámetros de URL:** `id` (el ID de la tarea).
- **Body Esperado:** (`UpdateTaskDto`)
  ```json
  {
    "title": "Título actualizado",
    "status": "IN_PROGRESS"
  }
  ```
- **Respuesta de Éxito (Código `200`):** Retorna la tarea actualizada.

### `DELETE /tasks/:id`

Elimina una tarea.

- **Método HTTP:** `DELETE`
- **Parámetros de URL:** `id` (el ID de la tarea).
- **Respuesta de Éxito (Código `200`):** Retorna la tarea eliminada.

---

## Equipos (`/teams`)

Endpoints para gestionar equipos.

### `GET /teams`

Obtiene una lista de todos los equipos.

- **Método HTTP:** `GET`
- **Respuesta de Éxito (Código `200`):**
  ```json
  [
    {
      "id": 1,
      "name": "Equipo Frontend",
      "description": "Responsables de la interfaz de usuario."
    }
  ]
  ```

### `GET /teams/:id`

Obtiene un equipo por su ID.

- **Método HTTP:** `GET`
- **Parámetros de URL:** `id` (el ID del equipo).
- **Respuesta de Éxito (Código `200`):** Retorna el objeto del equipo.

### `POST /teams`

Crea un nuevo equipo.

- **Método HTTP:** `POST`
- **Body Esperado:** (`CreateTeamDto`)
  ```json
  {
    "name": "Nuevo Equipo",
    "description": "Descripción del equipo"
  }
  ```
- **Respuesta de Éxito (Código `201`):** Retorna el equipo creado.

---

## Usuarios (`/users`)

Endpoints para la gestión de usuarios.

### `GET /users`

Obtiene una lista de todos los usuarios.

- **Método HTTP:** `GET`
- **Respuesta de Éxito (Código `200`):** Retorna una lista de objetos de usuario (sin contraseña).

### `GET /users/:id`

Obtiene un usuario por su ID.

- **Método HTTP:** `GET`
- **Parámetros de URL:** `id` (el ID del usuario).
- **Respuesta de Éxito (Código `200`):** Retorna el objeto del usuario (sin contraseña).

### `POST /users`

Crea un nuevo usuario (generalmente se usa `/auth/register` en su lugar).

- **Método HTTP:** `POST`
- **Body Esperado:** (`CreateUserDto`)
  ```json
  {
    "name": "Otro Usuario",
    "email": "otro@example.com",
    "password": "password123"
  }
  ```
- **Respuesta de Éxito (Código `201`):** Retorna el usuario creado.
