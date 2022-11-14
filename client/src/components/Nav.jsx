import { NavLink } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <div>
                <NavLink to='/library' className='nav-link library'>User Library</NavLink>
                <NavLink to='/about' className= 'nav-link about'>About</NavLink>
                <NavLink onClick={handleLogOut} to='/' className='nav-link logout'>Log Out</NavLink>
            </div>
        );
    }

    const globalOptions = (
        <div>
            <NavLink to='/about' className='nav-link about'>About</NavLink>
            <NavLink to='/login' className='nav-link login'>Login</NavLink>
        </div>
    );


    return (
        <nav>
            <NavLink to='/' className='nav-logo-link'>
                <div className='logo-wrapper' alt='logo'>
                    <img
                    className='logo'
                    src='https://wallpapercrafter.com/desktop/28304-vinyl-record-music-vector-heap-4k.jpg'
                    alt='nav banner'
                    />
                    <h1 className='nav-title'>ReVinyl</h1>
                </div>
            </NavLink>
            <h1 className='username-display'>Welcome{user && ` ${user.username}`}!</h1>
            <div className='nav-links'>
                <NavLink to='/' className='nav-link home'>Home</NavLink>
                {authenticated && user ? userOptions : globalOptions}
            </div>
        </nav>
    );
};

export default NavBar;