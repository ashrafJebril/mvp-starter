import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './components/Menu.jsx';
import Dashboard from './components/Dashboard.jsx';
// import Form from './components/Form.jsx';
import FormClass from './components/FormClass.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
       name: ' ',
       
       email: ' ',

      object:[],
      items: []

    }
  }



//   onSubmit(e) {
//         name: this.state.name,
//         email: this.state.email
// }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      type:"GET",
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

    Post(send) {
    $.ajax({
      url: '/items', 
      type:"POST",
      data:send,
      success: (data) => {
       
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  render () {
    return (<div >
  

      <Menu />
      <Dashboard ashraf={this.state.items}/>
      <FormClass lastItem={this.state.items && this.state.items[this.state.items.length-1]}reciver={this.state.items} postfunction={this.Post.bind(this)} object={this.state.object} />

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));