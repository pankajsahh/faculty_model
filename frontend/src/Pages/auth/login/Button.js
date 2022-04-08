import './Button.css';

const Button =(props) =>{
    let title = props.title;
    return (
        <button id='button' >{title}</button>
    );
}
export default Button;