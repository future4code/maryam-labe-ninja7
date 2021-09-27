import axios from 'axios'
import React from 'react'
import { axiosConfig, baseUrl } from '../../constants'

class HireService extends React.Component {
    state = {
        services: [],
    }
    componentDidMount = () => {
        this.fetchServices()
    }

    // Get All Jobs
    fetchServices = () => {
        axios.get(baseUrl + "/jobs", axiosConfig)
        .then((res) => {
            this.setState({ services: res.data.jobs})
            console.log(this.state.services)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    render() {
        const services = this.state.services.map( service => {
            return (
              <div key={service.id}>
                <h3>{service.title}</h3>
                {service.description}
              </div>
            );
        })
        return (
          <div>
            <p>Pagina de Serviços:</p>
            <div>{services}</div>
          </div>
        );
    }

}

export default HireService;