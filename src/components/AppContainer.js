import React, { Component } from "react";
import styled  from 'styled-components';

import HireService from "./HireService/HireService";
import Home from "./Home/Home";
import CadastroServiço from "./CadastroServiço"
import Carrinho from "./Carrinho/Carrinho";

import {Button} from "antd";
import "../styles/antd.css";

const Header = styled.div`
  background-color:   rgb(249,168,38);
  display:            flex;
  justify-content:    space-between;
  align-items:        center;
  height:             10vh;
  width:              100vw;

`

const Corpo = styled.div`
  display:          flex;
  flex-direction:   column;
  align-items:      center;
`

const Cont = styled.div`
  width:            20vw;
  display:          flex;
  align-items:      center;
  justify-content:  space-around;
`

const Nome = styled.div`
margin-left:        2vw;
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
        return(   <Home             mudaPagina = {this.mudaPagina}  /> )
      }

      else if(this.state.paginaAtual === "servicos") {
        return(   <HireService />                       )
      }

      else if(this.state.paginaAtual === "carrinho") {


        return(   <Carrinho mudaPagina = {this.mudaPagina}  /> )

      }

      else if(this.state.paginaAtual === "ninja") {
        return(   <CadastroServiço  mudaPagina = {this.mudaPagina}  /> )
      }

    }



    return (
      <div>
        <Header>

          <Nome>
            <h2>LabeNinjas7 </h2>
          </Nome>

          <Cont>
            <Button type="default"  size="medium" onClick={() => this.mudaPagina( "home"      )}  > Home      </Button>
            <Button type="default"  size="medium" onClick={() => this.mudaPagina( "carrinho"  )}  > Carrinho  </Button>
          </Cont>

        </Header>

        <Corpo>
          {renderizaPagina()}
        </Corpo>
  
      </div>
    );
  }
}