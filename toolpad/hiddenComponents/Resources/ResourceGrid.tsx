import React from 'react';
import { Grid, Paper, Card } from "@mui/material";
import ResourceContent from './ResourceContent';

const ResourceGrid = ({ props }) => {
  const totalColumns = 12;

  // Create an object to store the converted values
  const columnsOutput: { [key: string]: number } = {};

  // Calculate the equivalent column count for each breakpoint
  for (const breakpoint in props.columns) {
    if (props.columns.hasOwnProperty(breakpoint)) {
      const columnCount = props.columns[breakpoint];
      const equivalentColumns = Math.round(totalColumns / columnCount);
      columnsOutput[breakpoint] = equivalentColumns;
    }
  }
  const isCard = props.resourceDisplayType === 'card';

  return (
    <Grid container spacing={2}>
      {props.resources && props.resources.map((resource) => (
        <Grid item xs={columnsOutput.xs} sm={columnsOutput.sm} md={columnsOutput.md} lg={columnsOutput.lg} xl={columnsOutput.xl} key={`${resource.link}-${resource.heading}`}>
          {isCard && <Card elevation={props.cardElevation} sx={{display: 'flex',
        flexFlow: 'column',  padding: '16px',...props.resourceSX}}>
            <ResourceContent props={props} resource={resource} />
          </Card>}
        </Grid>
      ))}
    </Grid>
  );
};

export default ResourceGrid;
