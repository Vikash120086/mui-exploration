import React from 'react';
import { Grid,Button, List, Card, Paper, ListItem, ListItemIcon, ListItemText, Link, Box, Avatar, ListSubheader, ListItemButton, ListItemAvatar, Typography } from "@mui/material";
import ResourceContent from './ResourceContent';


const ResourcesList = ({ props }) => {
  const columnWidths = props.columns ? Object.keys(props.columns).reduce((result, breakpoint) => {
    result[breakpoint] = `${100 / props.columns[breakpoint]}%`;
    return result;
  }, {}) : {
    xs: '100%',
    sm: '50%',
    md: '33.33%',
    lg: '25%',
    xl: '25%'
  }
  
    return (
      <List sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {props.resources && props.resources.map((resource) => {
          return (
            <ListItem key={`${resource.link}-${resource.heading}` } 
              sx={{
                width: columnWidths,
                display: 'flex',
                flexFlow: 'column'
                ,...props.resourceSX
              }}
            >
              <ResourceContent props={props} resource={resource}/>
            </ListItem>
          );
        })}
      </List>
    );
  
}

export default ResourcesList;
