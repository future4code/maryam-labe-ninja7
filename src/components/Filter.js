import React from "react";
import styled from "styled-components";

class Filter extends React.Component {
    render() {
        return (
          <div>
            <FilterContainer>
              <input
                placeholder="Valor Mínimo"
                type="number"
                value={this.props.valorMin}
                onChange={this.props.atualizarMin}
              ></input>
              <input
                placeholder="Valor Máximo"
                type="number"
                value={this.props.valorMax}
                onChange={this.props.atualizarMax}
              ></input>
              <input
                placeholder="Busca por título ou descrição"
                value={this.props.pesquisaNome}
                onChange={this.props.atualizarpesquisaNome}
              ></input>
              <select
                name="sort"
                value={this.props.ordem}
                onChange={this.props.atualizarOrdem}
              >
                <option value="nenhum"></option>
                <option value="valorMin">Menor Valor</option>
                <option value="valorMax">Maior Valor</option>
                <option value="title">Título</option>
                <option value="dueDate">Prazo</option>
              </select>
            </FilterContainer>
          </div>
        );
    }
}

export default Filter;


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;

  input {
    width:            200px;
    background-color: rgb(240,240,201);
    border:           0px;

  }

  select {
    width: 200px;
    background-color: rgb(240,240,201);

  }
`;