import * as React from "react";
import { createComponent } from "@mui/toolpad/browser";
import { Grid, Typography, Link, Box } from "@mui/material";
import { ResourceItem } from "../hiddenComponents/SharedResources";

export interface FooterProps {
  links: ResourceItem[];
  subLinks: ResourceItem[];
  logo: string;
  disclaimer: string;
  backgroundColor: string;
}

function Footer({
  links,
  subLinks,
  logo,
  disclaimer,
  backgroundColor,
}: FooterProps) {
  return (
    <Grid
      container
      spacing={2}
      style={{ backgroundColor, marginTop: "20px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} md={4}>
        {/* Logo (Left-aligned) */}
        <Typography variant="h6">{logo}</Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        {/* Links */}
        <Box display="flex" flexDirection="row" justifyContent="flex-start">
          {links.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              variant={resource.linkVariant}
              underline="none"
              color="inherit"
              sx={{ marginRight: '20px' }}
            >
              <Typography variant={resource.linkVariant}>
                {resource.linkText}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* SubLinks */}
        <Box display="flex" flexDirection="row" justifyContent="flex-start">
          {subLinks.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              variant={resource.linkVariant}
              underline="none"
              color="inherit"
              sx={{ marginRight: '20px' }}
            >
              <Typography variant={resource.linkVariant}>
                {resource.linkText}
              </Typography>
            </Link>
          ))}
        </Box>
      </Grid>


      <Grid item xs={12}>
        {/* Disclaimer (Centered) */}
        <Typography variant="body2" align="center">
          {disclaimer}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default createComponent(Footer, {
  argTypes: {
    backgroundColor: {
      type: "string",
      default: "#fff",
    },
    logo: {
      type: "string",
      default: "Your Logo",
    },
    disclaimer: {
      type: "string",
      default: "Disclaimer Text",
    },
    links: {
      type: "array",
      default: [
        {
          linkText: "Main Link 1",
          link: "#1",
          linkVariant: "body1",
        }
      ],
    },
    subLinks: {
      type: "array",
      default: [
        {
          linkText: "Sub Link 1",
          link: "#1",
          linkVariant: "body1",
        }
      ],
    },
  },
});
