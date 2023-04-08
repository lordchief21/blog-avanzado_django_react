import CV from '../../assets/Cesar_Villanueva_CV.pdf'
import './style.css'

const Cta = () => {

    return (
        <div>
            <a href={CV} download className='bg-green-700 rounded-lg downloadCv '>Download</a>
            <a className='rounded-lg talk' href='#letstalk'>Let´s Talk</a>
        </div>
    )
}
    
export default Cta; 