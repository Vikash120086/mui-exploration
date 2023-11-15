import * as React from "react";
import { Link, Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";

export interface Picture {
  imageSrc: string;
}
export interface StoryProps {
  imageSrc: Picture,
  cardType: string, //  main , small
  imageEffect: string, // image zoom
  headline: string,
  headlineVariant: string,
  body: string,
  category: string,
  link: string,
}
function Story({ imageSrc, imageEffect, body, headline, headlineVariant, category, link, cardType }: StoryProps) {
  return (<div className={cardType}>
      <span className={"image-container " + imageEffect}>
        <img src={imageSrc} style={{maxWidth:"100%"}}/>
      </span>
      <section className="content">
        <Link href={link} underline="none" color="inherit">
          <Typography variant="body1">{category}</Typography>
          <Typography variant={headlineVariant}>{headline}</Typography>
          <Typography variant="body1">{body}</Typography>
        </Link> 
      </section>
  </div>);
}


export default createComponent(Story, {
  argTypes: {
    imageSrc: {
      type: "string",
      default: "",
    },
    cardType: {
      type: "string",
      default: "main",
      description: "The type of card (main or small) for the story.",
      enum: ["main", "small"]
    },
    imageEffect: {
      type: "string",
      default: "default",
      enum: ["zoom", "default"],
      description: "The image effect for the story."
    },
    headline: {
      type: "string",
      default: "",
      description: "The headline for the story.",
    },
    headlineVariant: {
      type: "string",
      default: "h2",
      description: "The variant of the headline Typography component.",
      enum: Object.keys(defaultVariantMapping)
    },
    body: {
      type: "string",
      default: "",
      description: "The body for the story.",
    },
    category: {
      type: "string",
      default: "",
      description: "The category of the story.",
    },
    link: {
      type: "string",
      default: "",
      description: "The link associated with the story.",
    },
  },
});
