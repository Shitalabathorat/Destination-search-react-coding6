
//import destinationsList from './App.js'
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name, id} = destinationsList

  return (
    <li className="user-card-container">
      <img src={imgUrl} alt="name" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
