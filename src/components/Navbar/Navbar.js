import React, { Componet } from 'react';
import { Menu, MenuItems } from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"

class Navbar extends React.Component {
    state = { clicked: false }

handleClick = () => {
    this.setState({ clicked: !this.state.cliked})
}

    render () {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Coder<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>

            
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                          <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}</a>                       
                        </li>
                        )
                        })}
                   
                </ul>
                <Button> <i className="fa-solid fa-cart-shopping"></i> </Button>
            </nav>
        )
    }
}

export default Navbar