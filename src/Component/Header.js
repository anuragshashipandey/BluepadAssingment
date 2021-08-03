import React from 'react'
import "../Style/Header.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Header(){
    return (
        <div className="Header">
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" href="/" >
                            Bluepad
                    </Button>
                    <Button color="inherit" href="/articles">
                        Articles    
                    </Button>
                    <Button color="inherit" href="/about" >
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
      );
}