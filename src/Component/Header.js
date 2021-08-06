import React from 'react'
import "../Style/Header.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


export default function Header(){
    return (
        <div className="Header">
            <AppBar position="static">
                <Toolbar>
                <Button color="inherit"  >
                    <NavLink className="Navigation" color="inherit"  to="/">
                            Bluepad
                    
                    </NavLink>
                </Button>
                <Button color="inherit"  >
                    <NavLink className="Navigation" color="inherit"  to="/articles">
                        Articles                        
                    </NavLink>
                </Button>
                <Button color="inherit"  >
                    <NavLink className="Navigation" to="/about">
                        About
                    </NavLink>
                </Button>
                </Toolbar>
            </AppBar>
        </div>
      );
}