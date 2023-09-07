# Fastify Template For Bohr.io

This is a README translated into Portuguese, English, and Spanish, where we will talk about the Fastify template made for Bohr.io. For any questions, please access [discord](https://discord.com/invite/p3hhfGg2Uy) for more information. If you find any translation errors, please notify us on [discord](https://discord.com/invite/p3hhfGg2Uy). The translations are just below...

# Translations

<details>
<summary>
  <code> Portuguese</code>
</summary>

# O que é o Fastify?

O Fastify é um framework web focado em proporcionar uma melhor qualidade e experiência aos desenvolvedores com o mínimo de sobrecarga. O Fastify foi inspirado em Hapi, Express e outros. Caso queira saber mais sobre o fastify, recomendo consultar a [documentação](https://fastify.dev/docs/latest/) para saber de mais detalhes sobre esse framework.

## Para que serve este template?

Neste projeto, você encontrará um modelo criado para oferecer aos desenvolvedores uma base para iniciar o desenvolvimento de suas aplicações com o Fastify no Bohr.io. Pensando em atender às necessidades desses desenvolvedores, este template foi iniciado. No entanto, este template pode sofrer alterações em futuras atualizações.

## Como iniciar o projeto?

Comece a inicialização do seu projeto a partir daqui...

Ao desenvolver, recomendamos que você utilize o seguinte comando:

```sh
cd ./api/core && npm run dev
```

Para construir o arquivo principal, onde todos os builds serão armazenados, digite o seguinte comando:

```sh
cd ./api/core && npm run build
```

Observação: Este arquivo será armazenado na pasta `./dist/serve.js`.

Para iniciar o projeto, utilize o seguinte comando:

```sh
cd ./api/core && npm run start
```

## Como funcionam as Rotas neste projeto

No Bohr.io, já está definida uma rota padrão para as APIs, que é `/api`. Atualmente, não é possível modificar a rota padrão das APIs implementadas no Bohr.io, portanto, tudo começa na rota `/api` - esta é a sua rota principal.

Observação: Se você definiu o código desta maneira...

```ts
app.get('/api', (request: FastifyRequest, reply: FastifyReply) => {
  return { Exemplo: "Olá, mundo!" }
})
```

A rota será `/api/api`, como mencionado anteriormente, a rota principal é `/api`, então neste modelo, seria mais adequado usar `/` em vez de `/api`.

Feito para o [Bohr.io](https://bohr.io)
</details>

<details>
<summary>
  <code>English</code>
</summary>

# What is Fastify?

Fastify is a web framework focused on providing a better quality and experience for developers with minimal overhead. Fastify was inspired by Hapi, Express, and others. If you want to learn more about Fastify, I recommend checking out the [documentation](https://fastify.dev/docs/latest/) for more details about this framework.

## What is the purpose of this template?

In this project, you will find a template created to give developers a foundation to start their application development with Fastify on Bohr.io. With the aim of meeting the needs of these developers, this template was initiated. However, this template may undergo changes in future updates.

## How to start the project?

Begin the initialization of your project from here...

When developing, we recommend using the following command:

```sh
cd ./api/core && npm run dev
```

To build the main file where all builds will be stored, enter the following command:

```sh
cd ./api/core && npm run build
```

Note: This file will be stored in the `./dist/serve.js` folder.

To start the project, use the following command:

```sh
cd ./api/core && npm run start
```

## How do routes work in this project?

In Bohr.io, a default route for APIs is already defined, which is `/api`. Currently, it is not possible to modify the default route of APIs implemented on Bohr.io, so everything starts at the `/api` route - this is your main route.

Note: If you have defined the code like this...

```ts
app.get('/api', (request: FastifyRequest, reply: FastifyReply) => {
  return { Example: "Hello, world!" }
})
```

The route will be `/api/api`, as mentioned earlier, the main route is `/api`, so in this template, it would be more appropriate to use `/` instead of `/api`.

Made for [Bohr.io](https://bohr.io)
</summary>
</details>

<details>
<summary>
  <code> Spanish </code>
</summary>

# ¿Qué es Fastify?

Fastify es un marco web enfocado en proporcionar una mejor calidad y experiencia para los desarrolladores con una sobrecarga mínima. Fastify se inspiró en Hapi, Express y otros. Si deseas obtener más información sobre Fastify, te recomiendo consultar la [documentación](https://fastify.dev/docs/latest/) para obtener más detalles sobre este marco.

## ¿Cuál es el propósito de esta plantilla?

En este proyecto, encontrarás una plantilla creada para brindar a los desarrolladores una base para comenzar el desarrollo de sus aplicaciones con Fastify en Bohr.io. Con el objetivo de satisfacer las necesidades de estos desarrolladores, se inició esta plantilla. Sin embargo, esta plantilla puede sufrir cambios en futuras actualizaciones.

## ¿Cómo iniciar el proyecto?

Comienza la inicialización de tu proyecto desde aquí...

Al desarrollar, recomendamos usar el siguiente comando:

```sh
cd ./api/core && npm run dev
```

Para construir el archivo principal donde se almacenarán todas las compilaciones, ingresa el siguiente comando:

```sh
cd ./api/core && npm run build
```

Nota: Este archivo se almacenará en la carpeta `./dist/serve.js`.

Para iniciar el proyecto, utiliza el siguiente comando:

```sh
cd ./api/core && npm run start
```

## ¿Cómo funcionan las rutas en este proyecto?

En Bohr.io, ya se ha definido una ruta predeterminada para las API, que es `/api`. Actualmente, no es posible modificar la ruta predeterminada de las API implementadas en Bohr.io, por lo que todo comienza en la ruta `/api`, que es tu ruta principal.

Nota: Si has definido el código de esta manera...

```ts
app.get('/api', (solicitud: FastifyRequest, respuesta: FastifyReply) => {
  return { Ejemplo: "¡Hola, mundo!" }
})
```

La ruta será `/api/api`, como se mencionó anteriormente, la ruta principal es `/api`, por lo que en esta plantilla sería más apropiado usar `/` en lugar de `/api`.

Hecho para [Bohr.io](https://bohr.io).

</details>
