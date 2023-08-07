import Container from '../components/container/container';
import './project.scss'


const Project = () => {
    return (
        <div className='projectContainer'>
            <Container>
                <div className='projectInner'>
                    <div className='projectElem'>
                        <h3>31<span>+</span></h3>
                        <p>Projects</p>
                    </div>
                    <div className='projectElem'>
                        <h3>23<span>+</span></h3>
                        <p>Clients</p>
                    </div>
                    <div className='projectElem'>
                        <h3 className='countre'>5<span>+</span></h3>
                        <p>Countries</p>
                    </div>
                    <div className='projectElem'>
                        <h3>11<span>+</span></h3>
                        <p>Awords</p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Project;