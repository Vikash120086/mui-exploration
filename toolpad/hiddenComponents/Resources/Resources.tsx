import React from 'react';
import ResourcesList from './ResourceList';
import ResourcePaper from './ResourceGrid';
import ResourceCard from './ResourceCard';
import ResourceGrid from './ResourceGrid';

const Resources = ({ props }) => {
  
  const isList = props.resourceDisplayType === 'list' || !props.resourceDisplayType
  const isGrid = props.resourceDisplayType === 'card';

  if (props.resources) {
    return (
      <>
        {isList && <ResourcesList props={props}></ResourcesList>}
        {isGrid && <ResourceGrid props={props}></ResourceGrid>}
      </>
    );
  }

  return null;
}

export default Resources;
