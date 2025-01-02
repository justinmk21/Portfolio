/* eslint-disable react/prop-types */
import './ButtonIcon.css';

function ButtonIcon(props) {

    return (
        <div className="iconbutton">
        <button onClick={props.handleClick} style={{borderRadius:'100%'}} {...props}>
            {props.Icon}
        </button>
        </div>
    )
}

export default ButtonIcon;