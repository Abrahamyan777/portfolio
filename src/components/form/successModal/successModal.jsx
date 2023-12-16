import './successModal.scss'
import { FaCheck } from "react-icons/fa";


const SuccessModal = ({ active, setActive }) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_contant act ' : 'modal_contant'} onClick={(e) => e.stopPropagation()}>
                <div className='circle'>
                    <FaCheck />
                </div>
                <h2>Success!</h2>
                <p>
                Your booking has been confirmed.
                </p>
                <button onClick={() => setActive(false)}>Ok</button>

            </div>
        </div>
    )
}

export default SuccessModal;