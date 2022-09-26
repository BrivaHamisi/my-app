import React, { Component } from 'react';

class Name extends Component{

	constructor(){
		super()
		this.state = {
			name: "Briva Hamisi"
		}
	}
	clickedMe(){
		this.setState({
			// name: 'Changed Text'

			name: this.state.name === "Briva Hamisi" ? "John Doe" : "Briva Hamisi"
		})
	}
	render(){
		return(
			<div>
				<h1 classame="bg-primary">{this.state.name}</h1>
				<button onClick = {()=> this.clickedMe()} className='btn btn-success'> Change Text </button>
			</div>
			)
	}
}

export default Name;