import "./contact.scss"
import GoogleMapComponent from "../components/googleMap/googleMap";
import ContactForm from "../components/form/form";
import Container from "../components/container/container";
import { useTranslation } from "react-i18next";



const Contact = ({ active, setActive , contactRef}) => {

    const {t} = useTranslation()

    return (
        <div className="contactContainer" ref={contactRef}>
            <Container>
                <div className="contactInner">
                    <h2 className="title">{t("Contact.Get in")}
                        <span className="touch">{t("Contact.Touch")}</span>
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