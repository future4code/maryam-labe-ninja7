import React, { Component } from "react";


export default class Home extends Component {

    render(){
        return(
            <div>
                <h1>Labeninjas</h1>
                <h2>Nosso slogan!</h2>

                <div>
                    <button>Quero ser ninja</button>
                    <button onClick={() => this.props.mudaPagina("servicos")}>Contratar um ninja</button>  
                </div> 
            </div>

        )
    }
}
