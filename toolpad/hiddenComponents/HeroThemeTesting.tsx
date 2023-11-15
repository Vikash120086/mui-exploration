import * as React from "react";
import { Typography, Grid, Button, Link, ThemeProvider, CssBaseline } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";
import { appTheme } from "../src/themes/theme";
import { Variant } from "@mui/material/styles/createTypography";

export interface ImageProps {
  src: string;
  alt?: string;
  maxWidth: string;
  heading: string;
  headingVariant: Variant;
  subHeading: string;
  subHeadingVariant: Variant;
  body: string;
  bodyVariant: Variant;
  ctaButtonVariant1: Variant;
  ctaText1: string;
  ctaLink1: string;
  ctaButtonVariant2: Variant;
  ctaText2: string;
  ctaLink2: string;
  backgroundColor: Variant;
  heroType: string;

}
function HeroThemeTesting( props : ImageProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Grid container spacing={2} style={{ backgroundColor: props.backgroundColor }} alignItems={{ xs: 'center' }}
        justifyContent={{ xs: 'center' }}
      >
        <Grid item xs={12} md={6}  >
          <img src={props.src} alt={props.alt} style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={props.headingVariant}>{props.heading}</Typography>
          <Typography variant={props.subHeadingVariant}>{props.subHeading}</Typography>
          <Typography variant={props.bodyVariant}>{props.body}</Typography>
          <div>
            <Button
              variant={props.ctaButtonVariant1} // Customize the button variant as needed
              color="primary" // Customize the button color as needed
              component={Link} // Use the Link component as a button
              href={props.ctaLink1}
            >{props.ctaText1}
            </Button>

            <Button color="primary" variant="contained">
              Primary
            </Button>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
            <Button color="primary" variant="dashed">
              dashed primary
            </Button>
            <Button color="secondary" variant="dashed">
              dashed Secondary
            </Button>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default createComponent(HeroThemeTesting, {
  argTypes: {
    maxWidth: {
      type: "string",
      default: "xl"
    },
    src: {
      type: "string"
    },
    alt: {
      type: "string"
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
    body: {
      type: "string",
      default: "Body",
    },
    bodyVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    ctaButtonVariant1: {
      type: "string",
      default: "contained",
      enum: ["contained", "outlined", "text"]
    },
    ctaText1: {
      type: "string",
      default: "Body",
    },
    ctaLink1: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    ctaButtonVariant2: {
      type: "string",
      default: "contained",
      enum: ["contained", "outlined", "text"]
    },
    ctaText2: {
      type: "string",
      default: "Body",
    },
    ctaLink2: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    },
    
    backgroundColor: {
      type: "string"
    },
    heroType: {
      type: "string"
    }
  },
});

