import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import Nav from './SideNav'

class Header extends Component{

    state = {
        showNav: false
    }

    onHideNav = ()=>{
        this.setState ({showNav: false })
    }

    render(){
        return (
            <header>
                <div className="open_nav">
                    <FontAwesome name="bars"
                        onClick = {()=>{this.setState({showNav:true})}}
                        style={{
                            color: "#ffffff",
                            cursor: "pointer",
                            padding: "10px"
                        }}
                    />
                </div>
                <Nav
                    showNav = {this.state.showNav}
                    onHideNav = {()=>{this.onHideNav()}}
                />
                
                <Link to='/' className='logo'>
                    The Book Shelf
                </Link>
            </header>
        )
    }
}

export default Header 