import * as React from "react";
import { createComponent } from "@mui/toolpad/browser";
import { Grid, Typography, Link} from "@mui/material";
import { defaultVariantMapping, ResourceItem } from "../hiddenComponents/SharedResources";
import Resources from "../hiddenComponents/Resources/Resources";
import { SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";


// https://www.npoint.io/docs/2dd60a226465f83be7e3
export interface ColumnListProps {
  heading: string;
  headingVariant: Variant;
  subHeading: string;
  subHeadingVariant: Variant;

  resourceHeadingVariant: Variant;
  resourceBodyVariant: Variant;
  resourceButtonVariant: string;
  resourceDisplayType: string;
  resourceSX: SxProps;
  cardElevation:number;
  columns: object;
  resources: ResourceItem[];
  sx: SxProps;
}

function ColumnList(props: ColumnListProps) {
  return (
  <Grid container spacing={2}  sx={props.sx}
  > 
    {props.heading && (<Grid item xs={12} sx={{marginBottom: '15px'}}  >
      <Typography variant={props.headingVariant}>{props.heading}</Typography>
    </Grid>)}
    {props.subHeading && (<Grid item xs={12}  sx={{marginBottom: '15px'}} >
      <Typography variant={props.subHeadingVariant}>{props.subHeading}</Typography>
    </Grid>)}
    <Resources props={props}/>
  </Grid>);
}

export default createComponent(ColumnList, {
  argTypes: {
    heading: {
      type: "string",
      default: ""
    },
    headingVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    subHeadingVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    subHeading: {
      type: "string",
      default: "",
    },
    columns: {
      type: "object",
      default: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4
      },
    },
    cardElevation: {
      type: "number",
      default: 3,
    },
    resourceHeadingVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    resourceBodyVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    resourceButtonVariant: {
      type: "string",
      default: "contained",
      enum: ["contained", "outlined", "text"]
    },
    resourceDisplayType: {
      type: "string",
      default: "list",
      enum: ["list", "card"]
    },
    resourceSX: {
      type: "object",
      default: {
        textAlign: "center",
        alignItems: {xs: 'center'},
        justifyContent: {xs: 'center'}
      }
    },
    sx: {
      type: "object",
      default: {
        alignItems: {xs: 'center'},
        justifyContent: {xs: 'center'}
      }
    },
    resources: {
      type: "array",
      default: [
        {
          "heading": "",
          "body": "",
          "linkText": "Link 1",
          "link": "#1",
          "linkTarget": "_blank",
          "muiIcon": "",
          "iconSrc": "https://assets.maccarianagency.com/backgrounds/img8.jpg",
          "iconVariant": "square",
          "iconSX": {}
        },
        {
          "heading": "",
          "body": "",
          "linkText": "Link 2",
          "link": "#2",
          "linkTarget": "_blank",
          "muiIcon": "ThreeSixty",
          "iconSrc": "",
          "iconVariant": "square",
          "iconSX": {
            "bgcolor": "rgba(255, 235, 59, 0.1)",
            "color": "rgb(255, 235, 59)"
          }
        },
        {
          "heading": "",
          "body": "",
          "linkText": "Link 3",
          "link": "#3",
          "linkTarget": "_blank",
          "muiIcon": "ThreeSixty",
          "iconSrc": "",
          "iconVariant": "square",
          "iconSX": {
            "bgcolor": "rgba(75, 175, 80, 0.1)",
            "color": "rgb(76, 175, 80)"
          }
        },
        {
          "heading": "",
          "body": "",
          "linkText": "Link 4",
          "link": "#4",
          "linkTarget": "_blank",
          "muiIcon": "ThreeSixty",
          "iconSrc": "",
          "iconVariant": "square",
          "iconSX": {
            "bgcolor": "rgba(244, 67, 54, 0.1)",
            "color": "rgb(244, 67, 54)"
          }
        },
        {
          "heading": "",
          "body": "",
          "linkText": "Link 5",
          "link": "#5",
          "linkTarget": "_blank",
          "muiIcon": "ThreeSixty",
          "iconSrc": "",
          "iconVariant": "square",
          "iconSX": {
            "bgcolor": "rgba(3, 169, 244, 0.1)",
            "color": "rgb(3, 169, 244)"
          },
          

        },
      ]
    }
  },
});



