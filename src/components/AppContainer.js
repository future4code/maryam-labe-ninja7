import React, { Component } from "react";
import HireService from "./HireService/HireService";
import styled  from 'styled-components';



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

  render() {

    const renderizaPagina = () => {
      if(this.state.paginaAtual === "home") {
        return( 
          <Corpo>
            <h1>Labeninjas</h1>
            <h2>Nosso slogan!</h2>

            <div>
              <button>Quero ser ninja</button>
              <button  onClick={() => mudaPagina( "servicos"  )}>Contratar um ninja</button>  
            </div> 
          </Corpo>  
        )
      }
      else if(this.state.paginaAtual === "servicos") {
        return (
          <Corpo>
            <HireService />
          </Corpo>
        )
      }

    }

    const mudaPagina = (pagina) => {

      this.setState({paginaAtual: pagina})

    }

    return (
      <div>
        <Header>

          Ninjas 

          <div>
            <button onClick={() => mudaPagina( "home"      )}  > Home      </button>
            <button onClick={() => mudaPagina( "carrinho"  )}  > Carrinho  </button>
          </div>

        </Header>

        {renderizaPagina()}
  
      </div>
    );
  }
}