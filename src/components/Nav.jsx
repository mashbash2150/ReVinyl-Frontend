import { NavLink } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <div className="nav-text">
                <NavLink to='/' className='zoom nav-link home'>Home</NavLink>
                <NavLink to={`/library/${user.id}`} className='zoom nav-links library'>Wish List</NavLink>
                <NavLink to='/about' className='zoom nav-links about'>About</NavLink>
                <NavLink to='/listings' className='zoom nav-links listings'>My Listings</NavLink>
                <NavLink onClick={handleLogOut} to='/' className='zoom nav-links logout'>Log Out</NavLink>
            </div>
        );
    }

    const globalOptions = (
        <div className="nav-text">
            <NavLink to='/' className='zoom nav-link home'>Home</NavLink>
            <NavLink to='/about' className='zoom nav-links about'>About</NavLink>
            <NavLink to='/login' className='zoom nav-links login'>Login</NavLink>
            <NavLink to='/register' className='zoom nav-links register'>Register</NavLink>
        </div>
    );


    return (
        <div>
            <div className="header">
                <div className="header-text">ReVinyl</div>
                <h1 className='username-display'>Welcome{user && ` ${user.email}`}!</h1>
                <nav className="nav-container">
                    <div>
                        {authenticated && user ? userOptions : globalOptions}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;