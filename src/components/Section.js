import randomImage from '../images/random.png'

export default function Section() {
  return (<>
    <section className='main--section'>
      <img src={randomImage} className='section--image'/>
      <h1 className='section--h1'>Share your experience</h1>
      <p className='section--p'>Join our online community of people sharing their experience and get the most suitable outcome.</p>
    </section>
  </>);
}