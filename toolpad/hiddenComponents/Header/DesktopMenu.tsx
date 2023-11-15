import React, { useState } from 'react';
import {
  Toolbar,
  ListItem,
  Grid,
  Link,
  Modal,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import Sublinks from './Sublinks';

const Title = ({ item }) => {
  if (item.href) {
    return (
      <Grid item xs={12}>
        <Link href={item.href}>{item.linkText}</Link>
      </Grid>
    );
  }

  if (item.linkText) {
    return (
      <Grid item xs={12}>
        <Typography variant="h4">{item.linkText}</Typography>
      </Grid>
    );
  }

  return null;
};

const DesktopMenu = ({navData, sx}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalItems, setModalItems] = useState([]);
  
    const handleDesktopItemClick = (item) => {
      // Set the sub-menu items for the modal
      setModalItems(item.items || []);
      // Open the modal
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      // Close the modal
      setModalOpen(false);
    };
  
    return (
      <Toolbar sx={sx}>
        {navData.map((item) => (
          <div key={item.linkText}>
            <ListItem
              button
              onClick={() => handleDesktopItemClick(item)}
            >
              {item.linkText}
            </ListItem>
          </div>
        ))}
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position:  "absolute",
              top: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: 1152,
              width: { xs: '95vw', md: '95vw', lg:'85vw', xl:'70vw', xxl: '40vw' },
              overflow: "auto",
            }}
          >
            <Paper sx={{ 
                p: "1rem"
            }}>
              {modalItems.map((item, i) => (
                <Grid container key={`${item.linkText}-${i}`}>

                  <Title item={item}/>

                  {item.items && item.items.length > 0 && (
                    <Grid item xs={12}>
                        <Sublinks items={item.items}/>
                    </Grid>
                  )}
                </Grid>
              ))}
            </Paper>
          </Box>
        </Modal>
      </Toolbar>
    );
  };


export default DesktopMenu;