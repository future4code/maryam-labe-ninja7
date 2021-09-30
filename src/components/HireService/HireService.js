import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../../constants";
import Filter from "../Filter";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Services from "../ServicesCard";
import {Button} from "antd";
import "antd/dist/antd.css";



class HireService extends React.Component {
  state = {
    services: [],
    serviceID: "",
    currentPage: "services",
    valorMin: "",
    valorMax: "",
    pesquisaNome: "",
    ordem: "",
    cart: [],
  };

  componentDidMount = () => {
    this.fetchServices();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.cart !== this.state.cart) {
      this.saveInLocalStorage();
    }
  };

  saveInLocalStorage = () => {
    const cart = this.state.cart;
    const cartString = JSON.stringify(cart);
    window.localStorage.setItem("cart", cartString);
  };

  controlarInputMax = (event) => {
    this.setState({ valorMax: event.target.value });
  };
  controlarInputMin = (event) => {
    this.setState({ valorMin: event.target.value });
  };
  controlarInputNome = (event) => {
    this.setState({ pesquisaNome: event.target.value });
  };
  controlarInputOrdem = (event) => {
    this.setState({ ordem: event.target.value });
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

  filterServices = (serviceList) => {
    const filterServices = serviceList
      .filter((service) => {
        return (
          this.state.valorMin === "" || service.price >= this.state.valorMin
        );
      })
      .filter((service) => {
        return (
          this.state.valorMax === "" || service.price <= this.state.valorMax
        );
      })
      .filter((service) => {
        return (
          service.title
            .toLowerCase()
            .includes(this.state.pesquisaNome.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(this.state.pesquisaNome.toLowerCase())
        );
      })
      .sort((a, b) => {
        switch (this.state.ordem) {
          case "title":
            return a.title.localeCompare(b.title);
          case "valorMin":
            return a.price - b.price;
          case "valorMax":
            return b.price - a.price;
          case "nenhum":
            break;
          case "dueDate":
            return Date.parse(b.dueDate) - Date.parse(a.dueDate);
          default:
            break;
        }
      });

    return filterServices;
  };

  changePage = (currentPage, serviceID) => {
    this.setState({
      currentPage: currentPage,
      serviceID: serviceID,
    });


  };

  addToCart = (id) => {

    // tem q pegar do localStorage e não d cart
  
    let serviceInCart = this.state.cart.find((service) => {
      return id === service.id;
    });

    if (serviceInCart) {
      const newServiceInCart = this.state.cart.map((service) => {
        if (id === service.id) {
          return {
            ...service,
            quantity: service.quantity + 1,
          };
        }
        return service;
      });
      this.setState({ cart: newServiceInCart });
      alert("Serviço adicionado novamente!");
    } else {
      const serviceToAdd = this.state.services.find(
        (service) => id === service.id
      );
      const newServiceInCart = [
        ...this.state.cart,

        { ...serviceToAdd, quantity: 1 },
      ];
      this.setState({ cart: newServiceInCart });
      alert("Serviço adicionado com sucesso!");
    }

  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "services") {
        return (
          <div>
            <Filter
              atualizarMax={this.controlarInputMax}
              atualizarMin={this.controlarInputMin}
              atualizarpesquisaNome={this.controlarInputNome}
              valorMax={this.state.valorMax}
              valorMin={this.state.valorMin}
              pesquisaNome={this.state.pesquisaNome}
              ordem={this.state.ordem}
              atualizarOrdem={this.controlarInputOrdem}
            />
            <Services
              services={this.filterServices(this.state.services)}
              changePage={this.changePage}
              addToCart={this.addToCart}
            />
          </div>
        );
      }
      if (this.state.currentPage === "seeDetails") {
        return (
          <ServiceDetail
            changePage={this.changePage}
            serviceID={this.state.serviceID}
          />
        );
      }
    };
    return <div>{renderCurrentPage()}</div>;
  }
}

export default HireService;
