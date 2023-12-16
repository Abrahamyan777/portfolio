import "./contact.scss"
import GoogleMapComponent from "../components/googleMap/googleMap";
import ContactForm from "../components/form/form";
import Container from "../components/container/container";



const Contact = ({ active, setActive , contactRef}) => {

    return (
        <div className="contactContainer" ref={contactRef}>
            <Container>
                <div className="contactInner">
                    <h2 className="title">Get in
                        <span className="touch">Touch</span>
                    </h2>
                    <div className="contactInfo">
                        <div className="contactMap">
                            <GoogleMapComponent />
                        </div>
                        <div className="contactForm">
                            <ContactForm 
                             active={active} setActive={setActive}
                             />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Contact;