import React, { Component } from 'react'
import styled  from 'styled-components'

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
  render() {
    return (
      <div>
        <Header>

          Ninjas 

          <div>
            <button>Home</button>
            <button>Carrinho</button>
          </div>

        </Header>

        <Corpo>
          <h1>Labeninjas</h1>
          <h2>Nosso slogan!</h2>
          
          {console.log(this.props.servico)}

          <div>
            <button>Quero ser ninja</button>
            <button>Contratar um ninja</button>  
          </div> 

        </Corpo>     
      </div>
    )
  }
}
