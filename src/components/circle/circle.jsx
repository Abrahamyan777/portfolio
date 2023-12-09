import './circle.scss'


const CircleComp = (props) => {
    const arrowTop = () => {
        props.topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={props.fix1 ? "circleWrapper inVew" : 'circleWrapper '}
            onClick={() => arrowTop()}
        >
        </div>
    )
}

export default CircleComp;