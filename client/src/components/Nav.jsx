import { NavLink } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <div>
                <NavLink to={`/library/${user.id}`} className='nav-link library'>User Library</NavLink>
                <NavLink to='/about' className='nav-link about'>About</NavLink>
                <NavLink onClick={handleLogOut} to='/' className='nav-link logout'>Log Out</NavLink>
                <NavLink to='/listings' className='nav-link listings'>My Listings</NavLink>
            </div>
        );
    }

    const globalOptions = (
        <div>
            <NavLink to='/about' className='nav-link about'>About</NavLink>
            <NavLink to='/login' className='nav-link login'>Login</NavLink>
            <NavLink to='/register' className='nav-link register'>Register</NavLink>
        </div>
    );


    return (
        <div className="header">
            <div className="header-text">ReVinyl

            </div>
            <h1 className='username-display'>Welcome{user && ` ${user.email}`}!</h1>
            <nav className="nav-container">


                <div className='nav-links'>
                    <NavLink to='/' className='nav-link home'>Feed</NavLink>
                    {authenticated && user ? userOptions : globalOptions}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;