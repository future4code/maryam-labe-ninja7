import React from "react";
import axios from "axios";
import styled from "styled-components"
import { key } from "../constants";
import {Button} from "antd";
//import "../styles/temp.css";


const TelaCadastro = styled.div`
    display:            flex;
    flex-direction:     column;
    justify-content:    center;
    align-items:        center;
    width:              100%;
    `

const Input = styled.input`
    margin:             1vh;
    width:              35vw;
    background-color:   rgb(240,240,201);
    border:             0px;


`

export default class CadastroServiço extends React.Component{
    state = {
        titulo: "",
        descrição: "",
        preço: "",
        pagamento:"",
        prazo:""
    }

    handleTitulo = (e) => {
        this.setState({ titulo: e.target.value })
        };
    
    handleDescrição = (e) => {
        this.setState({ descrição: e.target.value })
    };


    handlePreço = (e) => {
        this.setState({ preço: e.target.value })
        };

        
    handlePagamento = (e) => {
        this.setState({ pagamento: e.target.value })
        };

        
    handlePrazo = (e) => {
        this.setState({ prazo: e.target.value })
        };


        createUser = () => {
            const url =
            "https://labeninjas.herokuapp.com/jobs";
        
            const body = {
                titulo: this.state.titulo,
                descrição: this.state.descrição,
                preço: this.state.preço,
                pagamento: this.state.pagamento,
                prazo: this.state.prazo 
            }
        
            axios
            .post(url, body, {               
                headers: {
                Authorization: key
                }
            })

            .then((res) => {
                alert("Serviço cadastrado com sucesso!")
                this.setState({ titulo: "", descrição: "", preço: "", pagamento: "", prazo:""})
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
        }

    render(){
        return (
            <TelaCadastro>
                <br/>

                <h2>Cadastre seu serviço</h2>

                <Input placeholder={"Título"}
                        value={this.state.titulo}
                        onChange={this.handleTitulo}/>

                <Input placeholder={"Descrição"}
                    value={this.state.descrição}
                    onChange={this.handleDescrição}/>
                

                
                <Input placeholder={"Preço"}
                    value={this.state.preço}
                    onChange={this.handlePreço}/>


                <select placeholder="Pagamento"
                    value={this.state.pagamento}
                    onChange={this.handlePagamento}>
                            
                    <option>Cartão de Débito </option>
                    <option>Cartão de Crédito</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>


                <Input placeholder={"Prazo"}
                    value={this.state.prazo}
                    onChange={this.handlePrazo}/>



                <Button type="primary" onClick={this.createUser}>Cadastrar Serviço</Button>
            </TelaCadastro>
        )
    }
}