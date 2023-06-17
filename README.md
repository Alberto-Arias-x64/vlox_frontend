# Vlox - README

## Descripción

Vlox es un proyecto frontend desarrollado en Angular que tiene como objetivo proporcionar una plataforma para la venta de blogs a clientes. Esta aplicación permitirá a los usuarios explorar diferentes blogs disponibles, visualizar detalles de cada uno y realizar compras de manera sencilla.

## Requisitos previos

Antes de utilizar esta aplicación, asegúrate de tener instalado lo siguiente:

- Node.js: Puedes descargar e instalar Node.js desde su sitio web oficial: [https://nodejs.org](https://nodejs.org)
- Angular CLI: Puedes instalar Angular CLI ejecutando el siguiente comando en la terminal:

```bash
npm install -g @angular/cli
```

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación Vlox en tu entorno de desarrollo:

1. Clona el repositorio de Vlox desde GitHub:

```bash
git clone https://github.com/tu-usuario/vlox.git
```

2. Navega hasta el directorio del proyecto:

```bash
cd vlox
```

3. Instala las dependencias del proyecto utilizando el siguiente comando:

```bash
npm install
```

4. Una vez que se hayan instalado todas las dependencias, puedes ejecutar la aplicación en modo de desarrollo con el siguiente comando:

```bash
ng serve
```

5. Abre tu navegador web y ve a `http://localhost:4200` para acceder a la aplicación Vlox.

## Estructura del proyecto

La estructura de archivos y directorios del proyecto es la siguiente:

```
vlox/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── card/
  │   │   │   ├── card-blog/
  │   │   │   ├── footer/
  │   │   │   ├── header/
  │   │   │   ├── slide/
  │   │   │   ├── spinner/
  │   │   ├── guards/
  │   │   ├── mock/
  │   │   ├── models/
  │   │   │   ├── auth/
  │   │   ├── pages/
  │   │   ├── pipes/
  │   │   ├── services/
  │   │   │   ├── store.service.ts
  │   ├── assets/
  │   ├── ...
  ├── ...
```

- El directorio `components` contiene los componentes principales de la aplicación, como la lista de blogs y los detalles del blog.
- El directorio `services` contiene los servicios utilizados para obtener y administrar los datos de los blogs.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error, tienes alguna idea para mejorar la aplicación o deseas agregar nuevas características, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Si utilizas este proyecto en tu propia aplicación, agradecemos un enlace o atribución al repositorio original.

---

¡Disfruta trabajando en el proyecto Vlox! Si tienes alguna pregunta o necesitas ayuda, no dudes en comunicarte con nosotros.
