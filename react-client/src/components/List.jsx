import React from 'react';
import Dashboard from './components/Dashboard.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <Dashboard item={item}/>)}
  </div>
)

export default List;