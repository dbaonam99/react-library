import React, { Component } from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom"; 

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </div>
            </div>
        )
    }
}