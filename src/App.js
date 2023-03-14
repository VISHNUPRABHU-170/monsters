import { Component } from "react";
import './App.css';
import Cardlist from './Components/card-list/Cardlist'
import Searchview from './Components/search-view/Searchview'

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }



  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((users) =>{
         this.setState(
          () => {
            return {monsters: users}
          }
         )
       })
  }

  onSearchChange = (event) => {
    const searchField=event.target.value.toLowerCase();
    this.setState(
      () => {
        return {searchField}
      }
    )
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredString = monsters.filter((monster) => {
      return  monster.name.toLowerCase().includes(searchField)
    })

    return(
      <div className="App">
        <h1>MONSTERS</h1>
        <Searchview onChangeHandler={this.onSearchChange} placeholder="search for monsters" type="search"/>
        <Cardlist monsters={filteredString}/>
      </div>
    )
  }
}

export default App;