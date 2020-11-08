import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-sm navbar-dark px-0">

                {/* <div className="col-4">
                    <h2 className="myName text-left">Kenneth Sørensen</h2>
                </div> */}


                {/* Navbar collapse button */}
                <div className="pl-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button></div>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav py-2 mx-auto">
                        <li className="nav-item active navlist">
                            <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Home</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/Bookpage" className="navbar_link" activeClassName="navbar_link--active">Books</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/Admin" className="navbar_link" activeClassName="navbar_link--active">ADMIN</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/Weather" className="navbar_link" activeClassName="navbar_link--active">Weather</NavLink>
                        </li>
                    </ul>


                </div>

            </nav>

        </div>
    )
}

export default Navbar