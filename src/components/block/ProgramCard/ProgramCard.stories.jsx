import React from "react";
import ProgramCard from "./ProgramCard";
import img from "./stories/sample.jpg";

export default {
  title: "Block/ProgramCard",
  component: ProgramCard,
};

const Template = ({ image, imageAlt, title, description }) => (
  <ProgramCard
    image={image}
    imageAlt={imageAlt}
    title={title}
    description={description}
  />
);

export const DefaultProgramCard = Template.bind({});
DefaultProgramCard.args = {
  image: img,
  imageAlt: "ShelterTech booth with 4 volunteers smiling.",
  title: "ShelterConnect",
  description:
    "Every year, our ShelterConnect program provides 3XXX homeless and housing insecure people with free and unlimited internet access and we plan to provide every homeless individual with the digital infrastructure that meets their needs by 2024.",
};
