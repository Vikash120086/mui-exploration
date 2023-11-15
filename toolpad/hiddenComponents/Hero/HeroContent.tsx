import React from "react";
import { Typography, Grid, Button, Link } from "@mui/material";

const HeroContent = ({content}) => {
  return (
    <>
      <Typography variant={content.headingVariant}  sx={{marginBottom: '15px'}}>{content.heading}</Typography>
      <Typography variant={content.subHeadingVariant} sx={{marginBottom: '15px'}}>{content.subHeading}</Typography>
      <Typography variant={content.bodyVariant} sx={{marginBottom: '15px'}}>{content.body}</Typography>
      <Grid >
        <Button
          variant={content.ctaButtonVariant1}
          color="primary"
          component={Link}
          sx={{marginRight: '15px'}}
          href={content.ctaLink1}
          target={content.ctaLink1Target}
        >
          {content.ctaText1}
        </Button>
        {content.ctaText2 && (
          <Button
            variant={content.ctaButtonVariant2}
            color="primary"
            component={Link}
            href={content.ctaLink2}
            target={content.ctaLink2Target}
          >
            {content.ctaText2}
          </Button>
        )}
      </Grid>
    </>
  );
}

export default HeroContent;
