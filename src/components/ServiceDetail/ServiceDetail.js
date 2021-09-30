import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../../constants";
import {Button} from "antd";
import "antd/dist/antd.css";


class ServiceDetail extends React.Component {
  state = {
    service: {},
    paymentMethods: []
  };

  componentDidMount = () => {
    this.GetJobById(this.props.serviceID);
  };

  GetJobById = (id) => {

    axios
      .get(baseUrl + "/jobs/" + id, axiosConfig)
      .then((res) => {
        this.setState({ service: res.data, paymentMethods: res.data.paymentMethods });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let date = new Date(this.state.service.dueDate);
    let dateFormat =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    console.log(this.state.service.paymentMethods);

    const paymentMethod = this.state.paymentMethods.map(
      (service) => <li key={service}>{service}</li>
    );

    return (
      <div>
        <h3>{this.state.service.title}</h3>
        <p>Preço: R${this.state.service.price}</p>
        <p>Prazo: {dateFormat}</p>
        <p>{this.state.service.description}</p>
        <div>{paymentMethod}</div>
        <Button type="primary"
          onClick={() => {
            this.props.changePage("services", "");
          }}
        >
          Voltar
        </Button>
      </div>
    );
  }
}

export default ServiceDetail;
