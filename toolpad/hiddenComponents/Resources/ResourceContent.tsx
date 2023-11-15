import React from 'react';
import * as Muicon from "@mui/icons-material";
import { Grid, Button, List, Card, Paper, ListItem, ListItemIcon, ListItemText, Link, Box, Avatar, ListSubheader, ListItemButton, ListItemAvatar, Typography } from "@mui/material";

const ResourceContent = ({ props, resource }) => {
  // Dynamically import the icon based on the muiIcon property
  const IconComponent = resource.muiIcon ? Muicon[resource.muiIcon] : null;
  return (
    <>
      {/* Optional Icon */}
      {IconComponent &&
        <Avatar variant={resource.iconVariant} sx={resource.iconSX}>
          <IconComponent size="large" color="inherit" />
        </Avatar>}
      {resource.iconSrc && <Avatar src={resource.iconSrc} sx={resource.iconSX} variant={resource.iconVariant}> </Avatar>}


      {resource.heading &&
        <Typography variant={props.resourceHeadingVariant} sx={{ margin: "10px 0" }}>{resource.heading}</Typography>}
      {resource.body &&
        <Typography variant={props.resourceBodyVariant} sx={{ margin: "10px 0 15px" }}>{resource.body}</Typography>}


      {resource.linkText && <Button
        variant={props.resourceButtonVariant}
        component={Link}
        sx={{ marginTop: '15px' }}
        href={resource.link}
        target={resource.linkTarget}
      >{resource.linkText}</Button>}
    </>
  );
}

export default ResourceContent;
