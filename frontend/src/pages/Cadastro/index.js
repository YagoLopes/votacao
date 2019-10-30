import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Cadastro extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confsenha: "",
        error: "",
        administrador: false,
        avaliador: false
    };

    handleCadastro = e => {
        e.preventDefault();
        alert("Tela de Cadastro");
    };


    render() {
        return (
            <div className="container">
              <div>Novo Usuário</div>
            
        

          <form onSubmit={this.handleCadastro}>
          <input
            type="text"
            placeholder="Username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="email@gmail.com"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            onChange={e => this.setState({confsenha: e.target.value})}
          />
          <div className="check">
          <input 
            type="checkbox"
            placeholder="Administrador"
            onChange={e => this.setState({administrador: e.target.value})}
          />
          Administrador

          <input
            type="checkbox"
            placeholder="Avaliador"
            onChange={e => this.setState({avaliador: e.target.value})}
          />
          Avaliador</div>
          
          <Link to="/"><button className="sub" type="submit" >Cadastrar</button></Link>
          <Link to="/"><button className="res" type="reset">Fazer login</button></Link>
          </form>
          
       
      </div>
    );
  }
}

export default Cadastro;