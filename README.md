# NodeJS: De cero a experto (GITHUB WEBHOOKS + DISCORD BOT)

## Acerca de

Este es un repositorio personal para ejecución de los proyectos del cursos **NodeJS: De cero a experto** de **Fernando Herrera** en Udemy. Para acceder al curso completo puede hacer [clic aquí](https://www.udemy.com/course/node-de-cero-a-experto/)

El proyecto desarrollado a continuación es un sistema que se conecta a este repositorio mediante un Web Hook para enviar los eventos sobre acciones específicas del mismo a un Bot de Discord.

## Requerimientos

- Node 20.9.0 LTS

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```
npm install
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Clonar el archivo `.env.template` a `.env`
2. Configurar variables de entorno. Si desea usar la integración con el bot de discord debe proveer una URL de integración; para más información diríjase a la documentación de Discord.

Para el flujo de autenticación debe generar un token seguro que debe ser configurado en las variables de entorno y en la configuración del webhook en GitHub. Para más información visite la documentación de Github.

```
PORT=
DISCORD_WEBHOOK_URL=
SECRET_TOKEN=
```

3. Correr el proyecto usando alguno de los siguientes scripts según el entorno

Ejecutar entorno de desarrollo

```
npm run dev
```

Ejecutar entorno de producción

```
npm start
```
