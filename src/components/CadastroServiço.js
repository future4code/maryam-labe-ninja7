import React from "react";
import axios from "axios";
import styled from "styled-components"
import { key } from "../constants";

const TelaCadastro = styled.div`
    justify-items: center;
    align-items: center;
    width: 100%;
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
                <button onClick={this.props.irAppContainer}> Home </button>
                <h2>CADASTRE SEU SERVIÇO</h2>

            <input placeholder={"Título"}
                    value={this.state.titulo}
                    onChange={this.handleTitulo}/>
                    <p>

            <input placeholder={"Descrição"}
             value={this.state.descrição}
             onChange={this.handleDescrição}/>
             </p>

             <p>

             <input placeholder={"Preço"}
                value={this.state.preço}
                onChange={this.handlePreço}/>
                </p>
                <p>

            <select placeholder="Pagamento"
                value={this.state.pagamento}
                onChange={this.handlePagamento}>
                    
                <option>Cartão de Débito </option>
                <option>Cartão de Crédito</option>
                <option>Boleto</option>
                <option>Pix</option>
        </select>
                </p>
                <p>

                <input placeholder={"Prazo"}
                value={this.state.prazo}
                onChange={this.handlePrazo}/>
                </p>

            <button onClick={this.createUser}>Cadastrar Serviço</button>
            </TelaCadastro>
        )
    }
}