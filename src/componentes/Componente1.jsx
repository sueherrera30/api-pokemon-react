import React from 'react';

export default class Componente1 extends React.Component{
	
  render() {
	  let arregloPokemones = this.props.info;
	  if(arregloPokemones){
		  var nuevoArreglo = arregloPokemones.map((nombrePokemon)=>{
			  return <div>{nombrePokemon.name}</div>
		  })
	  }

    return (
		<div>{nuevoArreglo}</div>
	/*<div>
		<div>{this.props.info.created}</div>
		<div>{this.props.info.modified}</div>
		
	</div>*/
		
      
    );
  }
  }

