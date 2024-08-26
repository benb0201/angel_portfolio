import React, { useState } from "react";
import classes from "../styles/Projects.module.css";
import Audience from "./Audience";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Dedicated TikTok Video",
      description:
        "Your brand will be the main focus of the video. This can include product/service reviews, tutorials, or unboxing.",
      embedUrl: "https://www.tiktok.com/embed/7314652239593753888",
    },
    {
      title: "Carousel Styled Post",
      description:
        "Carousel posts receive better engagement, showcasing things you need, or product integration.",
      linkUrl:
        "https://www.tiktok.com/@angelojuola/photo/7291627268064005409?is_from_webapp=1&sender_device=pc&web_id=7406000924748285472", // Link to carousel post
    },
    {
      title: "Green Screen Awareness Video",
      description:
        "Highlight your company/event using a green screen video to raise awareness and combine it with storytelling.",
      embedUrl: "https://www.tiktok.com/embed/7342580566836907297",
    },
    {
      title: "Integrated Affiliate Code Video",
      description:
        "Your product/service will be mentioned in the video, with an affiliate code included in the post.",
      embedUrl: "https://www.tiktok.com/embed/7314660721227205920",
    },
  ];

  const toggleVisibility = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id="projects" className={classes.projects}>
        <p className={classes.sectionTextP1}>Explore My</p>
        <h1 className={classes.title}>Promotional Services</h1>
        <div className={classes.servicesContainer}>
          {services.map((service, index) => (
            <div
              className={`${classes.serviceCard} ${
                index % 2 === 0 ? classes.evenLayout : classes.oddLayout
              }`}
              key={index}
            >
              <div className={classes.textContainer}>
                <h2 className={classes.serviceTitle}>{service.title}</h2>
                <p className={classes.serviceDescription}>
                  {service.description}
                </p>
                <button
                  className={classes.toggleButton}
                  onClick={() => toggleVisibility(index)}
                >
                  {activeIndex === index ? "Hide Preview" : "Preview Example"}
                </button>
              </div>
              {activeIndex === index && (
                <div className={classes.tiktokContainer}>
                  {service.embedUrl ? (
                    <iframe
                      src={service.embedUrl}
                      className={classes.responsiveIframe}
                      height="450"
                      frameBorder="0"
                      allowFullScreen
                      title={service.title}
                    ></iframe>
                  ) : (
                    <a
                      href={service.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.carouselLink}
                    >
                      Link to Carousel
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={classes.sectionText}>
          <p className={classes.sectionTextP2}>
            Additional options include Collaborative Giveaways, Awareness
            Videos, Product Integration, and more. Get in touch for more details
            and pricing.
          </p>
        </div>
      </section>
      <Audience />
    </>
  );
};

export default Projects;
