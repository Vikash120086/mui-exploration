import * as React from 'react';
import { createComponent } from "@mui/toolpad/browser";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { defaultVariantMapping } from '../hiddenComponents/SharedResources';
import { Variant } from "@mui/material/styles/createTypography";


export interface AccordionData {
  title: string;
  content: string;
  panelId: string;
}

export interface AccordionProps {
  heading: string;
  headingVariant: Variant;
  subHeading: string;
  subHeadingVariant: Variant;
  accordionHeadingVariant: Variant;
  accordionBodyVariant:Variant;
  type: string;
  data: AccordionData[];
  sx: SxProps;
}

function BasicAccordion(props: AccordionProps) {
  return (
    <Grid container spacing={2}  sx={props.sx}>
      {props.heading && (<Grid item xs={12} sx={{marginBottom: '15px'}}  >
        <Typography variant={props.headingVariant}>{props.heading}</Typography>
      </Grid>)}
      {props.subHeading && (<Grid item xs={12}  sx={{marginBottom: '15px'}} >
        <Typography variant={props.subHeadingVariant}>{props.subHeading}</Typography>
      </Grid>)}

      <Grid item xs={12}>
      {props.data && props.data.map((acc) => {
      return (<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${acc.panelId}-content`}
          id={`${acc.panelId}-header`}
        >
          <Typography variant={props.accordionHeadingVariant}>{acc.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  variant={props.accordionBodyVariant}>
            {acc.content}
          </Typography>
        </AccordionDetails>
      </Accordion>);
      })}
      </Grid>
    </Grid>
  );
}

export default createComponent(BasicAccordion, {
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
    accordionHeadingVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    accordionBodyVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    data: {
      type: "array",
      default: [
        {
          "title": "panel1 title",
          "content": "content1",
          "panelId": "id1"
        },
        {
          "title": "panel2 title",
          "content": "content2",
          "panelId": "id2"
        },
      ]
    },
    sx: {
      type: "object",
      default: {
        alignItems: {xs: 'center'},
        justifyContent: {xs: 'center'}
      }
    },
  },
});
