import React, { Component } from "react";
import styled  from 'styled-components';
import {Button} from "antd";
import "antd/dist/antd.css";
import logo from "./ninja.png"

const Container = styled.div`
    width:              97vw;
    min-height:         97vh;
    display:            flex;
    flex-direction:     column;
    align-items:        center;
    justify-content:    space-around;
    background-color:   rgb(250,250,250) ;
`

const ContainerBotao = styled.div`
    display:            flex;
    flex-direction:     column;
    align-items:        center;
    justify-content:    space-around;
`

const ContainerTexto = styled.div`
    display:            flex;
    flex-direction:     column;
    align-items:        center;
`

const Img = styled.img`
    width:          80vw;
    height:         auto;
    margin-top:     1vh;

`

export default class Home extends Component {

    render(){
        return(
            <Container>
                <ContainerTexto>
                    <h1>LabeNinjas7</h1>
                    <h2>O talento certo no momento certo!</h2>
                </ContainerTexto>

                <ContainerBotao>
                    <Button type="primary" onClick={() => this.props.mudaPagina("ninja")   }>Quero ser um Ninja</Button>
                    <br />
                    <Button type="primary" onClick={() => this.props.mudaPagina("servicos")}>Contactar um Ninja</Button>  
                </ContainerBotao> 

                <Img src={logo} />
            </Container>

        )
    }
}
