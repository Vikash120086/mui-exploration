import { createComponent } from "@mui/toolpad/browser";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DesktopMenu from "../hiddenComponents/Header/DesktopMenu";
import MobileMenu from "../hiddenComponents/Header/MobileMenu";


export interface linkItem {
  linkText: string;
  href: string
  items: linkItem[];
}

export interface HeaderProps {
  headerMessage: string;
  loggedIn:boolean;
  loggedInData:object;
  navData: linkItem[];
}

const Header = ({ navData }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const Logo = ({sx}) => {
    return (<Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        ...sx
      }}
    >
      LOGO
    </Typography>)
  }

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" >
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleMobileDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Logo sx={{flexGrow: {xs: 1, md: 0}}}/>

          <DesktopMenu navData={navData} 
              sx={{ display: { xs: 'none', md: 'flex' } }}
          />

        </Toolbar>
      </AppBar>
      <MobileMenu onDrawerToggle={handleMobileDrawerToggle} navData={navData} mobileOpen={mobileOpen}/>
    </>
  );
};

export default createComponent(Header, {
  argTypes: {
    headerMessage: {
      type: "string",
      default: "Header Component",
    },
    loggedIn: {
      type: "boolean",
      default:false
    },
    loggedInData: {
      type: "object",
      default: null
    },

    navData: {
      type: "array",
      default: [    {
        "linkText": "Link 1",
        "items": [
          {
            "linkText": "Products Home",
            "href": "#",
            "items": [
              {
                "linkText": "Product Specifications",
                "href": "#"
              }
            ]
          }
        ]
      },{
        "linkText": "Link 2",
        "items": [
          {
            "linkText": "Products Home",
            "href": "#2-1",
            "items": [
              {
                "linkText": "Level 2 Link",
                "href": "#2-1",
                "items": [
                  {
                    "linkText": "Level 3-1 items",
                    "href": "#2-3-1"
                  },
                  {
                    "linkText": "Level 3-2 items",
                    "href": "#2-3-2"
                  }
                ]
              }
            ]
          }
        ]
      }]
    }
  },
});
