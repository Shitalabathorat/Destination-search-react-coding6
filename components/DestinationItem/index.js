
import initialDestinationsList from './App.js'
import '.index.css'

class Destination = props =>{
    const {destinationDetails}=props
    const {imgUrl, name, id}=destinationDetails

    return(
        <li className="list">
            <div className="container">
                <img src={imgUrl} className="image"/>
                <p>{name}</p>
            </div>
       </li>
    )
}
export default Destination
