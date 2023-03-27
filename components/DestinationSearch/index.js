// Write your code here
import {Component} from 'react'
import './index.css'
import Destination from './components/DestinationItem'
import destinationsList from './App.js'

class DestinationSearch extends Component {
  render() {
    return (
      <div class="app-container">
        <h1 className="head">Destination Search</h1>
        <input type="search" />
        <ul className="list-container">
          {destinationsList.map(eachItem => (
            <Destination destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
