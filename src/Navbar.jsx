import reactLogo from './assets/react.svg'

function Navbar() {
    return (
        <div className='nav-bar'>
            <img className='nav-bar__icon' src = {reactLogo} />
            <div className='nav-bar__logo'>
                ReactFacts
            </div>
            <div className='nav-bar__title'>
                React Course - Project 1
            </div>
        </div>
    )
}

export default Navbar