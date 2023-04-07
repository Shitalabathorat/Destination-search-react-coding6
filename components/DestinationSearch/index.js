import {Component} from 'react'
import destinationsList from './App.js'
import './index.scc'
import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
