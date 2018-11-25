import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


// import Form from './components/Form.jsx';




class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items:[] ,
       Name: '',       
       HomeWork: ''

    }
  }
onChange1(e){

  this.setState({Name:e.target.value})
 

}

onChange2(e){

  this.setState({Homework:e.target.value})
}

  onSubmit() {
 this.props.postfunction({Name:this.state.Name, Homework:this.state.Homework})
 $('.txtName').val("")
 $('#homework-content').val("")
 alert("added successfully")
      
}

 append(){

   // $("#create").on('click',function(){
        $(".all").toggle();
    //});
}


 // componentDidMount() {
 //  var that= this
 //    $.ajax({
      
 //      url: '/items', 
 //      type:"GET",
 //      success: (data) => {
 //        //  
 //      that.setState({
 //          items: data
 //        })
 //      console.log(that.state.items,"tataatt")
 //      },
 //      error: (err) => {
 //        console.log('err', err);
 //      }
 //    });

 //  }




  render () {
  return(

  <div className="container-fluid page-body-cont">

    <h1 id="create" onClick={this.append.bind(this)}>Create New Homework</h1>
<div className="all" >
     <input type="text" name="name" className='txtName' onChange={this.onChange1.bind(this)}/>
    <div className="row body-row">
      <div className="col-12 textarea-col">
               
      <textarea name="homework" id="homework-content" onChange={this.onChange2.bind(this)}></textarea>
        
      <div className="centralized-div">
          <button  id="submit-button" onClick={this.onSubmit.bind(this)}>Send homework

          </button>


        </div> 
        <div className='homeWork'>

        <p> <span>Name:</span>  {this.props.lastItem && this.props.lastItem.Name }</p>
        <p><span>Homework:</span> {this.props.lastItem && this.props.lastItem.HomeWork }</p>


        </div>
       
       
        
      </div>
    </div>
  </div>
</div>
  )
  }
}
export default FormClass

