
import {Component} from 'react'
import './index.css'
import Destination from './components/DestinationItem'
import initialDestinationsList from './App.js'

class DestinationSearch extends Component {
    state={
        searchInput: ''
        destinationsList: initialDestinationsList 
    }
    onChangeSearchInput= event=>{
        this.setState({searchInput: event.target.value})
    }
   
  render() {
      const {searchInput,destinationsList}=this.state

      const searchResults=destinationsList.filter(eachUser=>eachUser.name.includes(searchInput),)
    return (
      <div class="app-container">
        <h1 className="head">Destination Search</h1>
        <input type="search" value={searchInput} onChange={this.onChangeSearchInput}/>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <Destination destinationDetails={eachUser} deleteUser={eachUser} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
