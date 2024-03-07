import "./Login.css";
import { useRef } from "react";

function Login({ onLogin }) {
  //Estados para manejar los datos del formulario
  const userRef = useRef(null);
  const pinRef = useRef(null);

  //Funcion para enviar el formulario
  const handleLogin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pin = Number(pinRef.current.value);
    onLogin(user, pin);

    // Dos pegas:
    // 1. accounts no está definido
    // 2. no puedo seleccionar el account actual logueado mediante setAccount (currentAccount)
    // const currentAccount = accounts.find (
    //   (account)=> account.username === user && account.pin === pin)
    // )
  };
  return (
    <div>
      <h1>Bienvenido</h1>
      <form className="login">
        <label>
          Usuario:
          <input
            type="text"
            placeholder="user"
            className="login__input login__input--user"
            ref={userRef}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="text"
            placeholder="PIN"
            maxlength="4"
            className="login__input login__input--pin"
            ref={pinRef}
          />
        </label>
        <br />
        <button className="login__btn" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
