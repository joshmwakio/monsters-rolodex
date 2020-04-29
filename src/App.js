import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/card-list/card-list.component';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox} from './Components/SearchBox/searchbox.component';

class App extends Component {

  constructor(){
    super();
    this.state= {
      string: 'hello Josh',
      monsters:[],
      searchField:''
    };
  }
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").
  then(response=>response.json())
  .then(users=>this.setState({monsters:users}))
}
handleChange=e=>{
  this.setState({searchField: e.target.value})
}
  render() {
    const{monsters,searchField}=this.state;
    const filtredMonsters=monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filtredMonsters}/>
      </div>
    );
  }
}

export default App;
