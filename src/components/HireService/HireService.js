import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../../constants";
import styled from "styled-components";

class HireService extends React.Component {
  state = {
    services: [],
  };
  componentDidMount = () => {
    this.fetchServices();
  };

  // Get All Jobs
  fetchServices = () => {
    axios
      .get(baseUrl + "/jobs", axiosConfig)
      .then((res) => {
        this.setState({ services: res.data.jobs });
        console.log(this.state.services);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    const services = this.state.services.map((service) => {
      return (
        <div>
          <ProductCardContainer key={service.id}>
            <h3>{service.title}</h3>
            <p>Preço: {service.price}</p>
            <p>Prazo: {(service.dueDate)}</p>
            <div>
            <button>Ver detalher</button>
            <button>Adicionar no Carrinho</button>
            </div>
          </ProductCardContainer>
        </div>
      );
    });
    return (
      <Container>
        <FilterContainer>
          <input placeholder="Valor Mínimo"></input>
          <input placeholder="Valor Máximo"></input>
          <input placeholder="Busca por título ou descrição"></input>
          <select>
            <option></option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Título</option>
            <option>Prazo</option>
          </select>
        </FilterContainer>

        <ProductsContainer>{services}</ProductsContainer>
      </Container>
    );
  }
}

export default HireService;

const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;

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
//So pra centralizar os cards
const Container = styled.div`
  margin: 50px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-around;
background-color: aliceblue;
padding: 40px;

input {
  width: 200px;
}

select {
  width: 200px;
}
`