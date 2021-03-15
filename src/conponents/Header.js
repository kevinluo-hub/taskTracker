import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button 
                color={props.showAdd ? 'red' : 'green'}
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// gives warning but not terminate for type error
Header.propTypes = {
    //gives error when title not passed in nor defaulted
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string,
}

// add style={headingStyle} in h1 to use
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }

export default Header
