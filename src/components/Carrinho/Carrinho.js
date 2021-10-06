import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import "../../styles/antd.css";


class Carrinho extends React.Component {
  state = {
    cart: [],
  };

  componentDidMount = () => {
    this.getFromLocalStorage();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.cart !== this.state.cart) {
      this.saveInLocalStorage();
    }
  };

  getFromLocalStorage = () => {
    const cartString = window.localStorage.getItem("cart");
    if (cartString) {
      const cart = JSON.parse(cartString);
      this.setState({ cart: [...cart] });
    }
  };

  saveInLocalStorage = () => {
    const cart = this.state.cart;
    const cartString = JSON.stringify(cart);
    window.localStorage.setItem("cart", cartString);
  };

  totalValue = () => {
    let soma = 0;
    this.state.cart.map((job) => {
      return <div>{(soma += job.price * job.quantity)}</div>;
    });
    return soma;
  };

  removeCart = (id) => {
    const newCart = this.state.cart
      .map((job) => {
        if (job.id === id) {
          return {
            ...job,
            quantity: job.quantity - 1,
          };
        }
        return job;
      })
      .filter((job) => job.quantity > 0);

    this.setState({ cart: newCart });

    console.log(this.state.cart);
  };

  contratantes = () => {
    if (this.state.cart) {
      alert("Serviços contratados");
    } else {
      alert("Selecione ao menos um serviço");
    }
  };
  render() {
    const cartList = this.state.cart.map((job) => {
      return (
        <CardContainer key={job.id}>
          <p>{job.title}</p>
          <p>R$ {job.price}</p>
          <p>{job.quantity}</p>
          <Button
            className="ant-btn-primary"
            onClick={() => {
              this.removeCart(job.id);
            }}
          >
            Remover
          </Button>
        </CardContainer>
      );
    });
    return (
      <div>
        {cartList ? cartList : <h2>Carrinho vazio</h2>}
        <p>Total: R$ {this.totalValue()}</p>
        <ButtonContainer>
          <Button className="ant-btn-primary" onClick={this.contratantes}>
            Finalizar
          </Button>
          <Button
            className="ant-btn-primary"
            type="default"
            size="medium"
            onClick={() => {
              this.props.mudaPagina("servicos");
            }}
          >
            Ir para Lista
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

export default Carrinho;


const CardContainer = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 50px;
  background-color: rgb(240, 240, 201);
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`