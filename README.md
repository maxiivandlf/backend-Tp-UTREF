# Backend Tp UTREF

## Iniciar el proyecto

---

#### Clonar el repositorio

```
git clone https://github.com/maxiivandlf/backend-Tp-UTREF.git
```

#### Instalar dependencias

```
npm install
```

#### Variable de entorno

Crear un archivo .env en la raiz y agrergar
la siguiente variable de entorno:

```
SERVER_PORT= ("Nro del puerto deseado")
```

#### Levantar el server

```
npm run dev
```

## Lista de endpoints

---

### Crear productos

| Metodo | Ruta                    | Dato                                                                         |
| ------ | ----------------------- | ---------------------------------------------------------------------------- |
| POST   | localhost:3003/products | JSON {imagen: "CHAR (EMOJI) ",nombre:"STRING",importe:"FLOAT",precio:"INT" } |

### Optener todos los productos

| Metodo | Ruta                    | Dato |
| ------ | ----------------------- | ---- |
| GET    | localhost:3003/products |      |

### Opterner productos por id

| Metodo | Ruta                        | Dato |
| ------ | --------------------------- | ---- |
| GET    | localhost:3003/products/:id |      |

### Actualizar un productos

| Metodo | Ruta                        | Dato                                                                                                   |
| ------ | --------------------------- | ------------------------------------------------------------------------------------------------------ |
| PUT    | localhost:3003/products/:id | JSON {imagen: "CHAR (EMOJI) ",nombre:"STRING",importe:"FLOAT",precio:"INT" } (no son necesarios todos) |

### ELiminar producto

| Metodo | Ruta                        | Dato |
| ------ | --------------------------- | ---- |
| DELETE | localhost:3003/products/:id |      |
