import React from "react";
import Footer from "./Footer";
import shelterTechLogoWhite from "./sheltertech-logo-white.svg";
import facebookLogo from "./stories/facebook.svg";
import githubLogo from "./stories/github.svg";
import sealOfTransparency from "./stories/guidestar-seal-of-transparency.svg";
import instagramLogo from "./stories/instagram.svg";
import twitterLogo from "./stories/twitter.svg";

export default {
  title: "Grid-Aware/Footer",
  component: Footer,
};

const Template = ({
  formInputPlaceholder,
  formInputValue,
  formDescription,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  employerIdentificationNumber,
}) => (
  <Footer
    formInputPlaceholder={formInputPlaceholder}
    formInputValue={formInputValue}
    formDescription={formDescription}
    footerNavigation={footerNavigation}
    seals={seals}
    shelterTechLogo={shelterTechLogo}
    socialMediaLinks={socialMediaLinks}
    address={address}
    employerIdentificationNumber={employerIdentificationNumber}
  />
);

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  formInputPlaceholder: "email address",
  formInputValue: "email",
  formDescription: "Subscribe to get updates",
  footerNavigation: [
    { text: "Programs", internalLink: "/new" },
    { text: "Volunteer", internalLink: "/new/volunteer" },
    { text: "Donate", internalLink: "/new/donate" },
  ],
  seals: [
    {
      link: "https://www.guidestar.org/profile/38-3984099",
      logo: sealOfTransparency,
      alt: "GuideStar Seal of Transparency",
    },
  ],
  shelterTechLogo: { url: shelterTechLogoWhite, alt: "ShelterTech Logo" },
  socialMediaLinks: [
    {
      link: "https://www.facebook.com/ShelterTechOrg/",
      logo: facebookLogo,
      alt: "Facebook Logo",
    },
    {
      link: "https://twitter.com/sheltertechorg",
      logo: twitterLogo,
      alt: "Twitter Logo",
    },
    {
      link: "https://www.instagram.com/shelter_tech",
      logo: instagramLogo,
      alt: "Instagram Logo",
    },
    {
      link: "https://github.com/ShelterTechSF",
      logo: githubLogo,
      alt: "GitHub Logo",
    },
  ],
  address: "268 Bush Street #4302, San Francisco CA, 94104 USA",
  employerIdentificationNumber: "ein: 38-3984099",
};