# Proyecto aplicación de Banco

## Descripción

El objetivo es realizar una pequeña aplicación en React o JavaScript con la siguiente funcionalidad:

- Login de usuario
- Mostrar los movimientos de la cuenta del usuario después de hacer login y sus datos personales:
    * Nombre y apellidos
    * DNI
    * Número de cuenta
    * Dirección
- Poder realizar ingresos o retiradas de dinero.
- Poder realizar transferencias a cuentas de otros usuarios
- Puedes apoyarte en el desarrollo que ya hicimos en https://github.com/juanda99/banco-app y en la documentación de Obsidian relacionada.

La aplicación se puede realizar en parejas. En este caso recomiendo el uso de react para que, al trabajar con varios ficheros (componentes) no os solapéis escribiendo el código.

## Servidor

- Se dispone de una base de datos en formato texto (fichero accounts.js).
- El servidor presenta una API para recibir/enviar datos mediante HTTP (GET & POST)
- El servidor se arranca mediante ```npm run start```
- Para documentación sobre la app de servidor, te recomiendo mires los tests (fichero app.test.js)
- Los endpoints relacionados con alteraciones en las cuentas de los usuarios están autenticados   con JWT
    * Ver https://jwt.io/

## Requerimientos

- Realiza un fork del repositorio y trabaja en tu propio repositorio. Deberás hacer un commit por cada funcionalidad o error de código que implementes. En caso de hacer el proyecto con otra persona, deberá haber commits de ambos.
- Se valorará que utilices varias tecnologías o que profundices en el uso de alguna. Ejemplos:
   * Realizar la aplicación tanto en React como en JavaScript
   * Uso de algún framwork de CSS
   * En el caso de ser una aplicación en React, el uso de varias páginas (login, ingresos y       gastos, transferencias) utilizando por ejemplo [React Router](https://reactrouter.com/en/main)
- En el caso de transferencias, deberás validar en cliente que la cuenta tenga un formato correcto (usando el evento adecuado). Puedes ayudarte del fichero `validateAccount.js`
- Las llamadas a la API deberán contemplar la posibilidades de errores, tal y como aparecen en los tests:

```
➜  npm run test

> bank-server@1.0.0 test
> NODE_ENV=test mocha app.test.js

Server is running on port 3000


  Login endpoint
    ✔ should return account details and token on valid login
    ✔ should return error on invalid credentials

  GET /user
    ✔ should return user data with a valid token
    ✔ should handle unauthorized access with an invalid token
    ✔ should handle invalid token format
    ✔ should handle missing token

  Transfer endpoint
    ✔ should transfer money between accounts
    ✔ should handle insufficient balance error
    ✔ should handle destination account not found
    ✔ should handle unauthorized access

  Movements endpoint
    ✔ should update movements successfully
    ✔ should handle insufficient balance when taking money out
    ✔ should handle unauthorized access


  13 passing (38ms)
```



Lo primero que hacemos es crear dos carpetas dentro de nuestra carpeta principal del proyecto. 
Las dos carpetas que he creado son:
  * servidor
  * react_banco

Dentro de la carpeta servidor, tenemos todos los ficheros que existian dentro de la carpeta principal de mi proyecto, excepto el fichero README.md que se encuentra fuera de ambas carpetas que acabo de crear.

Accedo a la carpeta servidor y una vez que he accedido ejecuto el comando npm i para instalar las dependencias.

Para crear la carpeta react_banco, ejecuto el comando npx create-react-app react_banco y, se me creada dicha carpeta con todas las dependencias que contiene, como son: node_modules, public y src.

Todos los ficheros que va a contener mi proyecto, se guardarán en la carpeta react_banco.

Para empezar con mi proyecto, lo primero que voy a hacer es la función de login. Para ello, dentro de la carpeta react_banco, voy a crear una carpeta llamada componentes; dicha carpeta, contendrá distintas carpetas, cada una de ellas destinada a cada componente y, la carpeta componentes, debe estar alojada dentro de la carpeta src. Una vez que he creado dicha carpeta, voy a crear la carpeta login, porque lo primero que voy a hacer es crear la función login de mi aplicación.

Accedo a la carpeta login y, allí, crearé los ficheros que correspondan al login. En primer lugar, creo un fichero llamado login.js y, también creo un fichero llamado login.css.

En la carpeta componentes, crearé las distintas carpetas con los distintos componentes. Accedo a la casrpeta componentes y, creo el componente balance, movements, summary y welcome; todos ellos con sus respectivas carpetas y, en cada carpeta de cada componente, estarán los respectivos ficheros css y js.

Para arrancar el servidor, debo acceder a la carpeta servidor y, una vez que me encuentro dentro de ésta, debo ejecutar el comando npm start.

Dentro del fichero app.js debe hacer la llamada al servidor para ello debo ejecutar: 
fetch("http://localhost:3000?username=" + user + "&pin=" + pin)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la llamada a la API");
        }
        return res.json();
      })
      .then((datos) => setAccount(datos))
      .catch((error) => console.error(error, "**********"));

Además dentro de mi carpeta src, he creado un fichero js llamado api.js. En dicho fichero defino el objeto API. Dicho fichero queda de la siguiente manera:
const SERVER_URL = "https://pilar.certweb.infenlaces.com";
const BALANCE_URL = `${SERVER_URL}/balance`;
const LOGIN_URL = `${SERVER_URL}/login`;
const MOVEMENTS_URL = `${SERVER_URL}/movements`;
const SUMMARY_URL = `${SERVER_URL}/summary`;
const WELCOME_URL = `${SERVER_URL}/welcome`;


//Definimos el objeto API
const API = {
  BALANCE_URL,
  LOGIN_URL,
  MOVEMENTS_URL,
  SUMMARY_URL,
  WELCOME_URL,
};

export default API;





