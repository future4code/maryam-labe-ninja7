import React from "react";
import styled from "styled-components";

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
        <div key={job.id}>
          <li>{job.title}</li>
          <li>{job.price}</li>
          <li>{job.quantity}</li>
          <button
            onClick={() => {
              this.removeCart(job.id);
            }}
          >
            Remover
          </button>
        </div>
      );
    });
    return (
      <div>
        <div>{cartList ? cartList : <h2>Carrinho vazio</h2>}</div>
        <p>Total: R$ {this.totalValue()}</p>
        <button onClick={this.contratantes}>Finalizar</button>
        <button
          onClick={() => {
            this.props.mudaPagina("servicos");
          }}
        >
          Ir para Lista
        </button>
      </div>
    );
  }
}

export default Carrinho;
