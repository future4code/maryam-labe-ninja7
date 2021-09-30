import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../../constants";
import {Button} from "antd";
import "antd/dist/antd.css";

const Container = styled.div`
    width:              100vw;
    min-height:         100vh;
    background-color:   rgb(250,250,250) ;
`

const Cont = styled.div`
    margin-top:         5vh;
    width:              97vw;
    min-height:         30vh;
    display:            flex;
    flex-direction:     column;
    align-items:        center;
    justify-content:    space-around;
    background-color:   rgb(250,250,250) ;
`


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

      <Container>
        <Cont>
          <h3>{this.state.service.title}</h3>

          <div>
            <p>Preço: R${this.state.service.price}</p>
            <p>Prazo: {dateFormat}</p>
            <p>{this.state.service.description}</p>
            <br />

            <p>Formas de pagamento: </p>
            <div>{paymentMethod}</div>
          </div>

          <br />
          <Button type="primary"
            onClick={() => {
              this.props.changePage("services", "");
            }}
          >
            Voltar
          </Button>

          </Cont>
      </Container>
    );
  }
}

export default ServiceDetail;
