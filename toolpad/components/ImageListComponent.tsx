
import * as React from 'react';
import ImageList, { ImageListOwnProps } from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";
import { createComponent } from "@mui/toolpad/browser";
import { SxProps } from '@mui/material';
import { ImageListItemBarProps } from '@mui/material/ImageListItemBar';
import { Variant } from '@mui/material/styles/createTypography';
import { Typography, Grid } from "@mui/material";
import useBreakpoint from '../hiddenComponents/hooks/useBreakPoint';
export interface ImageItem {
  img: string;
  title: string;
  author: string;
  featured: boolean
  cols: number;
  rows: number;
}

export interface ImageListProps {
  heading: string;
  headingVariant: Variant;
  subHeading: string;
  subHeadingVariant: Variant;
  variant: ImageListOwnProps;
  titlePosition: ImageListItemBarProps;
  columns: object;
  sx: SxProps;
  imageData: ImageItem[];
}

function ImageListComponent(props: ImageListProps) {

  const [first] = useBreakpoint();
  const cols = props.columns && props.columns[first] ?   props.columns[first] : 3;
  console.log('bp', first, props.columns, cols)

  return (
    <Grid>
      {props.heading && (<Grid item xs={12} sx={{ marginBottom: '15px' }}  >
        <Typography variant={props.headingVariant}>{props.heading}</Typography>
      </Grid>)}
      {props.subHeading && (<Grid item xs={12} sx={{ marginBottom: '15px' }} >
        <Typography variant={props.subHeadingVariant}>{props.subHeading}</Typography>
      </Grid>)}
      <Grid>
        <ImageList variant={props.variant} cols={cols}>
          {props.imageData.map((item) => (
            <ImageListItem key={item.img}  cols={item.cols || 1} rows={item.rows || 1}>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
              {/* srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`} */}
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                position={props.titlePosition}

              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}

export default createComponent(ImageListComponent, {
  argTypes: {
    variant: {
      type: "string",
      default: "standard",
      enum: ["standard", "quilted", "woven", "masonry"]
    },
    titlePosition: {
      type: "string",
      default: "below",
      enum: ["below", "bottom", "top"]
    },
    columns: {
      type: "object",
      default: {
        "xs": 1,
        "sm": 2,
        "md": 3,
        "lg": 4,
        "xl": 4
      },
    },
    heading: {
      type: "string",
      default: "Heading",
    },
    headingVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    subHeading: {
      type: "string",
      default: "sub Heading",
    },
    subHeadingVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    sx: {
      type: "object"
    },
    imageData: {
      type: "array",
      default: [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
        },
      ]
    }
  },
});
