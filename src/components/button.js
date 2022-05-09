import PropTypes from 'prop-types';


const Button = ({color, text}) => {
    const add = () =>{
        console.log('yeah');
    }
    return (
        <button onClick={add} style={{backgroundColor: color}} className='btn'>{text}</button>
    );

    Button.defaultProps = {
        color:'steelblue'
    };

    Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,

    }
}

export default Button