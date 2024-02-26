import React from "react";
import './Nav.scss';
import {
    NavLink
  } from "react-router-dom";

class  Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="selected">TodoList</NavLink>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <NavLink to="/users" activeClassName="selected">Users</NavLink>
            </div>
        )
    }
}

export default Nav