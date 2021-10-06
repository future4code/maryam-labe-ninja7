import React from "react";
import styled from "styled-components";
import {Button} from "antd";
import "../styles/antd.css";


class Services extends React.Component {
  render() {

    const services = this.props.services.map((service) => {
      let date = new Date(service.dueDate);
      let dateFormat =
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

      return (

        <div>
          <ProductCardContainer key={service.id}>
            <h3>{service.title}</h3>
            <p>Preço: R$ {service.price}</p>
            <p>Prazo: {dateFormat} </p>
            <ContainerBotao>
              <Button type="primary"
                onClick={() => {
                  this.props.changePage("seeDetails", service.id);
                }}
              >
                Ver detalhes
              </Button>
              <Button type="primary"
                onClick={() => {
                  this.props.addToCart(service.id);
                }}
              >
                Adicionar no Carrinho
              </Button>
            </ContainerBotao>
          </ProductCardContainer>
        </div>
      );
    });

    return (
      <div>
        <ProductsContainer>{services}</ProductsContainer>
      </div>
    );
  }
}

export default Services;

const ProductCardContainer = styled.div`
  width:            300px;
  height:           150px;
  background-color: rgb(240,240,201);
  border:           1px solid black;
  text-align:       center;
  margin:           16px 12px;
  display:          flex;
  flex-direction:   column;
  border-radius:    4px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-around;
`;
