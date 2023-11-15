import React from 'react';
import {
  List,
  ListItem,
  Link,
  Typography,
} from '@mui/material';

const Sublinks = ({sx, items, level = 0}) => {
    console.log('sublinks level', level)
    let listSx = {...sx};
    if (level=== 0){
      listSx = {
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        ...sx
      }
    }

    let listItemSx = {
      flexFlow: "column",
      flex: "1 1 300px",
      alignItems: "flex-start",
      p: 0,
      ...sx
    };

    return (
      <List sx={listSx}>
        {items.map((subItem, i) => (
          <ListItem key={`${subItem.linkText}-${i}`} sx={listItemSx}>
          
            {subItem.href ? (
                    <Link href={subItem.href}>
                      {subItem.linkText}
                    </Link>
                  ) : (
                    <Typography variant="h6" >
                      {subItem.linkText}
                    </Typography>
                  )}
            {subItem.items && subItem.items.length > 0 && (
              <Sublinks items={subItem.items} level={level+1} />
            )}
          </ListItem>
        ))}
      </List>
    );
  };

  export default Sublinks;