import React from 'react';

function Hello(props){

	function Clickme(){
		alert("Button Is Clicked");
	}


	return(
		<div>
			<h1> My Name is {props.name } and my last name is {props.lastname} </h1>
			<button className='btn btn-success' onClick = {Clickme}> Click Me </button >
        </div>
		);
}
export default Hello;