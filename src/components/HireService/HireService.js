import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../../constants";
import Filter from "../Filter";
import Services from "../Services";

class HireService extends React.Component {
  state = {
    services: [],
    valorMin: "",
    valorMax: "",
    pesquisaNome: "",
    ordem: "",
    carrinho: [],
  };

  componentDidMount = () => {
    this.fetchServices();
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
            return b.dueDate - a.dueDate;
          default:
            break;
        }
      });

    return filterServices;
  };

  render() {
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
        <Services services={this.filterServices(this.state.services)} />
      </div>
    );
  }
}

export default HireService;
