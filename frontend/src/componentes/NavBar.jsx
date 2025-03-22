"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

const NAVIGATION = [

    {
        segment: '/dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: '/gastos',
        title: 'Gastos',
        icon: <CreditCardOffIcon/>,
    },
    {
        segment: '/ingresos',
        title: 'Ingresos',
        icon: <CreditCardIcon />,
    },
    
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
   
    
   
    const toggleDrawer = (e) => () => {
        setOpen(e);
    };

  const loginOut = () =>{
    localStorage.removeItem('token');
    window.location.replace('/');
  }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" >
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon onClick={toggleDrawer(true)} />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <List>
                            {NAVIGATION.map((text, index) => (
                                <ListItem key={index} disablePadding>
                                     <Link href={text.segment} passHref legacyBehavior>
                                    <ListItemButton >
                                        <ListItemIcon>
                                            {text.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text.title} />
                                    </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>

                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }} >
                        Menu
                    </Typography>
                    <Button color="inherit" onClick={loginOut}>Login Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default NavBar