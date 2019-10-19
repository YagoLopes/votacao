import React from 'react';
import Logo from '../../assets/logoin.png';
import './style.css';

export default function Login() {
  return (
    <div className="container">
    <div className="img"> <img src={Logo} alt="logo"/></div>
    <div className="form">
        <form>
            <input type="text" placeholder="email@example.com"/>
            <input type="password" placeholder="******"/>
            <select name="eventos" id="1">
                <option value=""></option>
                <option value="evento teste1"></option>
            </select>
            <button type="submit">Entrar</button>
        </form>
    </div>
</div>

  );
}
