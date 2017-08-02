import React, { Component } from 'react';
import './App.css';
import Componente1 from './componentes/Componente1.jsx';

class App extends Component {
	constructor(){
		super();
		this.state = {
			apiResponse:''}
	}

	componentWillMount(){
		fetch("http://pokeapi.co/api/v1/pokedex/1")
	.then((response)=>{ return (response.json())})
		
	.then((objetoJSON) =>
		  {this.setState({apiResponse: objetoJSON})})	   
    
	}

    render(){
		return(
		 <div className="App">
        <h1>HOLA POKEMON!</h1>
		<Componente1 info={this.state.apiResponse.pokemon}/>
		
      </div>
		);
	}
}
export default App;
