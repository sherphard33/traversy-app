import PropTypes from 'prop-types';
import Button from './button';
function Header({title}) {
    return ( 
        <header className='header'>
            <h1>Task tracker{title}</h1>
            <Button color='green' text='Add'/>
        </header>
        
     );

     // eslint-disable-next-line no-unreachable
     Header.defaultProps = {
        title: 'Sugar Hill'
     }

     Header.propTypes = {
         title: PropTypes.string.isRequired,
     }
}

export default Header;