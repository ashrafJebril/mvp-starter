
import React from 'react';
//import $ from 'jquery'



const Form = (props)=>{


return(

	<div className="container-fluid page-body-cont">
		<h1>Create New Homework</h1>
		 <label>Name</label>
		 <input type="text" name="name" className='txtName'/>
		<div className="row body-row">
			<div className="col-12 textarea-col">
               
			<textarea name="homework" id="homework-content"></textarea>
				
			<div className="centralized-div">
					<button id="submit-button">Send homework</button>
				<textarea name="nameview" id="view"></textarea>
				</div>
			</div>
		</div>
	</div>

	)
}
			
export default Form;



	