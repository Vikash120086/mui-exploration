import * as React from "react";
import { Typography, Grid } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";
import { Variant } from "@mui/material/styles/createTypography";
import { SxProps } from "@mui/material";

export interface StackedItem {
  title: string;
  body: string;
  backgroundImage: string;
  color: string;
}

export interface StackedHeroProps {
  headingVariant: Variant;
  bodyVariant: Variant;
  data: StackedItem[];
  itemSx: SxProps;
}

function StackedHero(props: StackedHeroProps) {
  return (<Grid xs={12} container>

    {props.data && props.data.map((resource) => {
      return (
        <Grid item xs={12}
          style={{ backgroundImage: `url(${resource.backgroundImage}` }}
          sx={{
            display: "flex",
            flexFlow: "column",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize:"cover",
            backgroundPositionX:"center",
            backgroundPositionY: "0px",
            color: resource.color,
            ...props.itemSx,
            
          }
          }
        >
          <Typography variant={props.headingVariant}>{resource.title}</Typography>
          <Typography variant={props.bodyVariant}>{resource.body}</Typography>
        </Grid>);
    })
    }
  </Grid >);
}

export default createComponent(StackedHero, {
  argTypes: {
    headingVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    bodyVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    itemSx: {
      type: "object",
      default: {
        height: "100vh",
        textAlign: "center",
        alignItems: { xs: 'center' },
        justifyContent: { xs: 'center' },
      }
    },
    data: {
      type: "array",
      default: [
        {
          "title": "this is a header1 ",
          "body": "body section 1",
          "backgroundImage": "https://assets.maccarianagency.com/backgrounds/img48.jpg",
          "color": "#ffffff"
        },
        {
          "title": "this is a header 2",
          "body": "body section 2",
          "backgroundImage": "https://assets.maccarianagency.com/backgrounds/img44.jpg",
          "color": "#ffffff"
        },
        {
          "title": "this is a header3",
          "body": "body section 3",
          "backgroundImage": "https://assets.maccarianagency.com/backgrounds/img45.jpg",
          "color": "orange"
        },
        {
          "title": "this is a header 4",
          "body": "body section4",
          "backgroundImage": "https://assets.maccarianagency.com/backgrounds/img46.jpg",
          "color": "yellow"
        },
        {
          "title": "this is a header 5",
          "body": "body section 5",
          "backgroundImage": "https://assets.maccarianagency.com/backgrounds/img47.jpg",
          "color": "red"
        },
      ]
    }
  },
});
