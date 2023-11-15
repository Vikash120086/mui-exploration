import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  Collapse,
} from '@mui/material';
import Sublinks from './Sublinks';

const MobileMenu = ({navData, mobileOpen, onDrawerToggle}) => {  
  const [mobileNavData, setMobileNavData] = useState(navData);

  // listening to navdata update
  useEffect(() => {
    setMobileNavData(navData);
  }, [navData]);


  const handleMobileItemClick = (clickedItem) => {
    // Create a new copy of navData with the updated 'open' property
    const updatedNavData = mobileNavData.map((item) => ({
      ...item,
      open: item.linkText === clickedItem.linkText ? !item.open : false,
    }));
    setMobileNavData(updatedNavData);
  };


  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={onDrawerToggle}
    >
      <List>
        {mobileNavData.map((item) => (
          <div key={item.linkText}>
            <ListItem button onClick={() => handleMobileItemClick(item)}>
              {item.linkText}
            </ListItem>
            

            {item.items && item.items.length > 0 && (
              <Collapse in={item.open}>
                <ListItem item xs={12}  sx={{p:"10"}}>
                  <Sublinks items={item.items} sx={undefined}/>
                </ListItem>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
  };


export default MobileMenu;