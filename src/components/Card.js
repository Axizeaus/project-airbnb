import defaultPerson from '../images/defaultPerson.jpeg'
import star from '../images/star.png'

export default function Card(){
  return (
    <div className='card'>
      <img src={defaultPerson} alt="default person" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className='card--star' />
        <span>(6) </span>
        <span>Mars</span>
        <p>This is a good place</p>
        <p><b >From 35$</b>/person</p>
      </div>
    </div>
  ); 
}