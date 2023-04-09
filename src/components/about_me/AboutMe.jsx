import './style.css';
import Cta from '../cta/cta';
import ME from '../../assets/ME.jpeg'
import HeaderSocial from 'components/headerSocial/HeaderSocial';


export const AboutMe = () => {

    return (
        <div className="bg-aboutMe">
           <h5>Hello, my name is</h5>
           <h1>Cesar A. Villanueva O.</h1>
           <h5>Full Stack Developer</h5>
           
           <Cta />

           <div >
                <img src={ME} alt="César Villanueva" className='me' />
           </div>
           
           <a href="#contact" className='scroll_down'>Scroll Down</a>
           
           <HeaderSocial />
        </div>
        
    )
}