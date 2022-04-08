import './Contact.css';

const Contact=() =>{
    return (
        <>
        
        <div className='Feedback_container '>

    
            <div className='Feedback'>
            <div className='Feedback_header'>
        <h2>We are here </h2>
        <small>Let's have a talk.</small>
        <hr></hr>
    </div>
         <p className='contact'><a className='contact' href='tel:+91 9142277970'>+91: 9142277970</a> </p>
         <p className='contact'><a className='contact' href='tel:+91 8010011556'>+91: 8010011556</a></p>
         <p className='contact'>Drop a mail.</p>
         <p className='contact'><a className='contact' href='mailto:avengershahnwaz1@gmail.com'>avengershahnwaz1@gmail.com</a></p>

        </div>
        </div>
        </>
    );
};
export default Contact;
