import React from "react";
import styled from "styled-components";



class Services extends React.Component {
render() {
        const services = this.props.services.map((service) => {
          return (
            <div>
              <ProductCardContainer key={service.id}>
                <h3>{service.title}</h3>
                <p>Preço: {service.price}</p>
                <p>Prazo: {service.dueDate}</p>
                <div>
                  <button>Ver detalher</button>
                  <button>Adicionar no Carrinho</button>
                </div>
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

export default Services


const ProductCardContainer = styled.div`
  width: 300px;
  height: 250px;
  background-color: aliceblue;
  border: 1px solid black;
  text-align: center;
  margin: 16px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;
