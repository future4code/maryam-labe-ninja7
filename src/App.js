import React from 'react'
import { AppContainer } from './components/AppContainer'

export default class  App extends React.Component{

	state ={
		servicos: [
			{
				"titulo": "serviço 1",
				"descricao": "Segue aqui a descrição do serviço 1",
				"preco": "R$ 50,00",
				"pagamento": "",
				"prazo": "23/10/2021",
			},
			{
				titulo: "serviço 2",
				descricao: "Segue aqui a descrição do serviço 2",
				preco: "R$ 200,00",
				pagamento: "",
				prazo: "23/01/2022",
			},
			{
				titulo: "serviço 3",
				descricao: "Segue aqui a descrição do serviço 3",
				preco: "R$ 799,85",
				pagamento: "",
				prazo: "23/11/2021",
			},

		]
	}

	render(){
		let servicos = this.state.servicos 

		return (
			
			
			<AppContainer servico={servicos} />
		)
	};
};

