
import initialDestinationsList from './App.js'
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name, id} = destinationDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} alt="name" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
