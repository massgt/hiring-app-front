import React, { Component } from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Styles/Home.css'
import Pictarka from '../Images/arka.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            token:''
        }
    }

    logout = e => {
        localStorage.removeItem('token :')
        this.props.history.push ('/login');
        
    }

    componentDidMount() {
        let token = localStorage.getItem('token :')

        if (!token) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
        <div className='container-home'>
        <Navbar className='navbar-style'>
            <Navbar.Brand>
                <img
                    alt="Pictarka"
                    src={Pictarka}
                />
            </Navbar.Brand>
            <input className='navbar-search' type="text" name="search" placeholder="Search.."></input>
            <Link to = '/home'>
                <Navbar.Text id='nav-text'>
                HOME
                </Navbar.Text>
            </Link>
            <img src={Avatar} alt="Avatar" className="nav-avatar"/>
            
            <NavDropdown id="nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider/>
                <NavDropdown.Item onClick={e => {this.logout(e)
                    }}>Logout
                </NavDropdown.Item>
            </NavDropdown>

                <div className='border-vertical'>
                </div>
                <img src={Chat} alt="Chat" className="nac-chat"/>
                <img src={Bell} alt="Bell" className="nav-bell"/>

        </Navbar>
        </div> 
        );
    }
}

export default Home;