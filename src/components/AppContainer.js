import React, { Component } from "react";
import styled  from 'styled-components';
import {Button} from "antd";
import "antd/dist/antd.css";


import HireService from "./HireService/HireService";
import Home from "./Home/Home";
import CadastroServiço from "./CadastroServiço"
import Carrinho from "./Carrinho/Carrinho";


const Header = styled.div`
  //background-color: rgb(18,78,120);
  background-color:   rgb(249,168,38);
  display:            flex;
  justify-content:    space-around;
  align-items:        center;
  height:             10vh;

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
        return(   <Carrinho mudaPagina = {this.mudaPagina}  /> )
      }

      else if(this.state.paginaAtual === "ninja") {
        return(   <CadastroServiço mudaPagina = {this.mudaPagina} /> )
      }

    }



    return (
      <div>
        <Header>

          Ninjas 

          <div>
            <Button type="primary" size="small" onClick={() => this.mudaPagina( "home"      )}  > Home      </Button>
            <Button type="primary" size="small" onClick={() => this.mudaPagina( "carrinho"  )}  > Carrinho  </Button>
          </div>

        </Header>

        <Corpo>
          {renderizaPagina()}
        </Corpo>
  
      </div>
    );
  }
}