import * as React from "react";
import { Typography, Grid, Box, Link } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";
import HeroContent from "../hiddenComponents/Hero/HeroContent";
import { SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

export interface HeroProps {
  heroType: string;
  src: string;
  alt?: string;
  maxWidth: string;
  heading: string;
  headingVariant: Variant;
  subHeading: string;
  subHeadingVariant: Variant;
  contentAlignment: string;
  body: string;
  bodyVariant: Variant;
  ctaButtonVariant1: Variant;
  ctaText1: string;
  ctaLink1: string;
  ctaLink1Target: string;
  ctaButtonVariant2: string;
  ctaText2: string;
  ctaLink2: string;
  ctaLink2Target: string;
  backgroundColor: string;
  heroMinHeight: string;
  sx: SxProps;
  imageSx: SxProps;
  textSx: SxProps;
  }


const Hero = (props: HeroProps) => {
  const isLeftText = props.heroType === "leftText";
  const isRightText = props.heroType === "rightText";
  const isBelowText = props.heroType === "belowText";
  const isNoImage = props.heroType === "noImage";
  const isImageBackground = props.heroType === "imageBackground";
  // Image Settings
    // halfwidthImage: isLeftText, isRightText
    // NoImage : isNoImage, isImageBackground
    // fullWidthImage: isBelowText
    
  const isHalfWidthImage = isLeftText || isRightText;
  const isFullWidthImage = isBelowText;

  // Content Settings
    // 50% 50%: isLeftText is RightText 50% 50%
    const isHalfWidthContent = isLeftText || isRightText;
    //   100% text width: isBelowText isImageBackground && isNoImage same display 100% text width
    const fullWidthContent = isBelowText || isImageBackground || isNoImage;

    const imageStyle = { width: "100%", maxHeight: '500px', objectFit: 'cover'};
  return (
    <Grid
      container
      spacing={2}
      sx={props.sx}
      style={{
        backgroundColor: isImageBackground ? "transparent" : props.backgroundColor,
        backgroundImage: isImageBackground ? `url(${props.src})` : "none",
        backgroundSize: isImageBackground ? "cover" : "auto",
        minHeight: props.heroMinHeight,
        marginTop: (isImageBackground|| props.backgroundColor) ? '0px': '',
        marginLeft: (isImageBackground|| props.backgroundColor) ? '0px': ''
      }}
      alignItems={{ xs: 'center' }}
      justifyContent={{ xs: 'center' }}
    >

      {isHalfWidthImage && (
        <Grid item xs={12} md={6} order={isLeftText ? 2 : 1} sx={{textAlign: 'center', ...props.imageSx}}>
          <img src={props.src} alt={props.alt} style={{ width: "100%", maxWidth: '600px', maxHeight: '500px', objectFit: 'cover'}} />
        </Grid>
      )}

      {isFullWidthImage && (
        <Grid item xs={12} md={12} sx={{textAlign: 'center', ...props.imageSx}}>
          <img src={props.src} alt={props.alt} style={{ width: "100%", maxWidth: '600px', maxHeight: '500px', objectFit: 'cover'}} />
        </Grid>
      )}

      {isHalfWidthContent && (
        <Grid item xs={12} md={6} order={isRightText ? 2 : 1} sx={{ padding: '16px', textAlign: { xs: 'center', md: props.contentAlignment || "center" }, ...props.textSx }} >
          <HeroContent content={props}  />
        </Grid>)}

      {fullWidthContent && (
        <Grid item xs={12}  sx={{ padding: '16px 0 ', textAlign: (props.contentAlignment || "center"), ...props.textSx }} >
          <HeroContent content={props} />
        </Grid>
      )}
    </Grid>
  );
}
export default createComponent(Hero, {
  argTypes: {
    heroType: {
      type: "string",
      default: "leftText",
      enum: ["leftText", "rightText", "belowText", "noImage", "imageBackground"],
    },
    heroMinHeight: {
      type: "string",
      default: "0"
    },
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
    contentAlignment: {
      type: "string",
      enum: ["center", "left", "right"]
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
      default: "#sdfsfsd",
    },
    ctaLink1Target: {
      type: "string",
      default: "#sdfsfsd",
      enum: ["_blank", "_new"]
    },
    ctaButtonVariant2: {
      type: "string",
      default: "contained",
      enum: ["contained", "outlined", "text"]
    },
    ctaText2: {
      type: "string",
      default: "",
    },
    ctaLink2: {
      type: "string",
      default: "#sdfsfsd",
    },
    ctaLink2Target: {
      type: "string",
      default: "#sdfsfsd",
      enum: ["_blank", "_new"]
    },
    backgroundColor: {
      type: "string"
    },
    sx: {
      type: "object"
    },
    textSx: {
      type: "object"
    },
    imageSx: {
      type: "object"
    }
  },
});

