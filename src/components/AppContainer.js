import React, { Component } from "react";
import styled  from 'styled-components';

import HireService from "./HireService/HireService";
import Home from "./Home/Home";



const Header = styled.div`
  background-color: grey;
  display:          flex;
  justify-content:  space-around;
`

const Corpo = styled.div`
  display:          flex;
  flex-direction:   column;
  align-items:      center;
`

export class AppContainer extends Component {

  state ={
    paginaAtual: "home",
  }

  mudaPagina = (pagina) => {
    this.setState({   paginaAtual: pagina   })
  }

  render() {




    const renderizaPagina = () => {
      if(this.state.paginaAtual === "home") {
        return(   <Home mudaPagina = {this.mudaPagina}  /> )
      }

      else if(this.state.paginaAtual === "servicos") {
        return(   <HireService />                       )
      }

      else if(this.state.paginaAtual === "carrinho") {
        return(   <Home mudaPagina = {this.mudaPagina}  /> )
      }

      else if(this.state.paginaAtual === "ninja") {
        return(   <Home mudaPagina = {this.mudaPagina}  /> )
      }

    }



    return (
      <div>
        <Header>

          Ninjas 

          <div>
            <button onClick={() => this.mudaPagina( "home"      )}  > Home      </button>
            <button onClick={() => this.mudaPagina( "carrinho"  )}  > Carrinho  </button>
          </div>

        </Header>

        <Corpo>
          {renderizaPagina()}
        </Corpo>
  
      </div>
    );
  }
}