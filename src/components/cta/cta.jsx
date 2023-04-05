import CV from '../../assets/Cesar_Villanueva_CV.pdf'

const Cta = () => {

    return (
        <div>
            <a href={CV} download className='bg-violet-400 '>Download</a>
            <a href='#lettalk'>Let´s Talk</a>
        </div>
    )
}

export default Cta