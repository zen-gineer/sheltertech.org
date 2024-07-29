import * as React from "react";
import { useState } from "react";

import BaseHead from "../components/BaseHead";
import YouTubeEmbed from "../components/block/YouTubeEmbed";
import ArticleSpotlightCard from "../components/grid-aware/ArticleSpotlightCard";
import BlockQuoteBlock from "../components/grid-aware/BlockQuoteBlock/BlockQuoteBlock";
import HomePageLargeParagraph from "../components/grid-aware/HomePageLargeParagraph";
import Modal from "../components/grid-aware/Modal";
import PartnersAndSponsorsBlock from "../components/grid-aware/PartnersAndSponsorsBlock";
import ProgramsBlock from "../components/grid-aware/ProgramsBlock";
import communityDevelopmentImg from "../components/grid-aware/ProgramsBlock/stories/community-development.jpg";
import sfServiceGuideImg from "../components/grid-aware/ProgramsBlock/stories/sf-service-guide.jpg";
import shelterConnectImg from "../components/grid-aware/ProgramsBlock/stories/shelter-connect.jpg";
import Spacer from "../components/grid-aware/Spacer";
import ThreeParagraphBlock from "../components/grid-aware/ThreeParagraphBlock";
import datathonClassroomImage from "../components/grid-aware/ThreeParagraphBlock/stories/image3.png";
import TitleBlock from "../components/grid-aware/TitleBlock";
import VideoHeader from "../components/grid-aware/VideoHeader/VideoHeader";
import videoHeaderImage from "../components/grid-aware/VideoHeader/stories/VideoHeader.png";
import VideoSpotlightBlock from "../components/grid-aware/VideoSpotlightBlock";
import videoSpotlightBlockImage from "../components/grid-aware/VideoSpotlightBlock/stories/VideoSpotlightBlock.png";
import Layout from "../components/layout";
import PartnershipSignupForm from "../components/thirdparty/mailchimp/PartnershipSignupForm";
import partnersAndSponsorsLogos from "../data/partnersAndSponsorsLogos";
import annualReportPDF from "./ShelterTech-Annual-Report-2019-Q1.pdf";
import articleSpotlightImage from "./images/mission-hotel.jpeg";

export default () => {
  const [partnershipFormIsOpen, setPartnershipFormIsOpen] = useState(false);
  const [videoHeaderModalIsOpen, setVideoHeaderModalIsOpen] = useState(false);
  const [videoSpotlightBlockModalIsOpen, setVideoSpotlightBlockModalIsOpen] =
    useState(false);
  return (
    <Layout>
      <Modal
        isOpen={partnershipFormIsOpen}
        setIsOpen={setPartnershipFormIsOpen}
        contentLabel="Partnership"
      >
        <PartnershipSignupForm />
      </Modal>
      <Modal
        isOpen={videoHeaderModalIsOpen}
        setIsOpen={setVideoHeaderModalIsOpen}
        contentLabel="Video"
        noBezel
      >
        <YouTubeEmbed
          url="https://www.youtube.com/embed/V1u2l_8C75k"
          title="Accelerating digital inclusion for people experiencing homelessness"
        />
      </Modal>
      <Modal
        isOpen={videoSpotlightBlockModalIsOpen}
        setIsOpen={setVideoSpotlightBlockModalIsOpen}
        contentLabel="Video"
        noBezel
      >
        <YouTubeEmbed
          url="https://www.youtube.com/embed/AUAGqr8Uf_o"
          title="ShelterTech in 2020"
        />
      </Modal>
      <VideoHeader
        title="Less than half of the nearly 28,000 people experiencing homelessness in the Bay Area have reliable access to the internet, making it harder for them to find and access the services they need."
        description="ShelterTech is a technology-focused nonprofit organization making it easier for this community to connect with  resources that can help them address their challenges."
        image={videoHeaderImage}
        ctaButtons={[
          { text: "Donate", internalLink: "/donate" },
          { text: "Volunteer", internalLink: "/volunteer" },
        ]}
        playButtonOnClick={() => setVideoHeaderModalIsOpen(true)}
      />
      <HomePageLargeParagraph description="Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends." />
      <ThreeParagraphBlock
        title="Get involved"
        paragraph1={{
          title: "Volunteer",
          description:
            "Volunteers make our work possible. There are several ways to support our mission. Learn more and get involved.",
          button: {
            text: "Become a Volunteer",
            internalLink: "/volunteer",
          },
        }}
        paragraph2={{
          title: "Partnerships",
          description:
            "We work with companies, nonprofits, and local governments to connect the community. Reach out to us.",
          button: {
            text: "Work With Us",
            onClick: () => setPartnershipFormIsOpen(true),
          },
        }}
        paragraph3={{
          title: "Donate",
          description:
            "Our programs are largely funded by donations from people who care about bridging the digital divide. Support ShelterTech today.",
          button: { text: "Donate", internalLink: "/donate" },
        }}
        leftBottomImage={{
          url: datathonClassroomImage,
          alt: "Multiple volunteers working at a datathon.",
        }}
      />
      <ProgramsBlock
        title="Our programs"
        programs={[
          {
            image: shelterConnectImg,
            imageAlt: "ShelterTech booth with 4 volunteers smiling.",
            title: "ShelterConnect",
            description:
              "Through partnerships with the City of San Francisco and Cisco, residents can use free wifi and hardware at shelters and transitional housing facilities.",
          },
          {
            image: sfServiceGuideImg,
            imageAlt:
              "Two people looking at the monitor of a Macbook, where person #1 is pointing out something on the screen to person #2.",
            title: "SF Service Guide",
            description:
              "Anyone with access to a smartphone, tablet, or computer can utilize this online directory of human services provided in San Francisco.",
          },
          {
            image: communityDevelopmentImg,
            imageAlt: "ShelterTech community member smiling.",
            title: "Community Development",
            description:
              "We depend on Community Representatives to inform our work from their lived experiences and rely on volunteers to continuously updated the resources we develop.",
          },
        ]}
        theme="white"
      />
      <Spacer heightDesktop="91px" heightMobile="19px" />
      <VideoSpotlightBlock
        eyebrowText="Our Impact"
        description="Over 1,600 people have daily internet access in local shelters and resource centers, thanks to ShelterTech and partner organizations."
        button={{ text: "View Annual Report", externalLink: annualReportPDF }}
        imageURL={videoSpotlightBlockImage}
        playButtonOnClick={() => setVideoSpotlightBlockModalIsOpen(true)}
      />
      <Spacer heightDesktop="42px" heightMobile="0" />
      <TitleBlock title="What Our Partners Say" />
      <BlockQuoteBlock
        quotes={[
          {
            quote:
              "We’ve heard from San Franciscans, including as part of our recent strategic planning community outreach that it’s hard to know where to go when you’re looking for supportive services. It’s hard to know where to start, and hard to navigate different resources to find accurate information. We’re glad to be supporting ShelterTech and the broader community to build SF Service Guide – a one-stop, reliable place to help connect residents to the services they need.",
            attribution:
              "Barry Roeder, Mayor’s Office of Housing and Community Development",
          },
          {
            quote:
              "Wi-fi has been a top request among young people here at Larkin Street. Now that we have it with ShelterTech we are seeing more young people come in and stay around and get the things they need so that they can move past homelessness, permanently.",
            attribution:
              "Gayle Roberts, Chief Development Officer, Larkin Street Youth Services",
          },
          {
            quote:
              "There’s an overwhelming number of resources for the [at-risk] populations that live here and it’s important to have a place where they can go where they know all the information is accurate, up-to-date, and consistent with what their understanding has been of that particular resource. And if there are any changes that need to be made those will be reflected.",
            attribution:
              "Julie Rosenthal, Director of Social Services, Homeless Advocacy Project",
          },
        ]}
      />
      <Spacer heightDesktop="20px" heightMobile="0" />
      <PartnersAndSponsorsBlock
        title="Partners and sponsors"
        partnersAndSponsors={partnersAndSponsorsLogos}
      />
      <ArticleSpotlightCard
        eyebrowText="ShelterConnect Spotlight"
        title="Mission Hotel"
        description="We recently reached a major milestone. The biggest SRO in San Francisco now provides free wifi and hardware to hundreds of people."
        button={{
          text: "Read More",
          externalLink:
            "https://medium.com/shelter-tech/the-mission-hotel-san-franciscos-largest-sro-now-provides-free-internet-to-hundreds-of-at-risk-f72761c62c2e",
        }}
        backgroundImage={articleSpotlightImage}
      />
      <Spacer heightDesktop="170px" heightMobile="80px" />
    </Layout>
  );
};

export const Head = () => (
  <BaseHead title="ShelterTech - Technology for the under-resourced" />
);
