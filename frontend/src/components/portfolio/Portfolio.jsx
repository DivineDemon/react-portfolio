import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

// Data for Dynamic Data Display
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dark Dashboard",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/709816/screenshots/17634226/media/7f0c1a180b085b7be88e9ecd63268799.png",
  },
  {
    id: 2,
    image: IMG2,
    title: "Tea Vendor Branding",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/1714897/screenshots/17600514/media/1bd5b409eaad0ab542a1eeee4ec1b473.png",
  },
  {
    id: 3,
    image: IMG3,
    title: "NFT Dark Dashboard",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/709816/screenshots/17530601/media/fe6ba975b14c10cd612f96dff77897f6.png",
  },
  {
    id: 4,
    image: IMG4,
    title: "Guidelines Figma GUI",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/108183/screenshots/17565633/media/77c3ed97da7570589916d78dd7d78e28.png",
  },
  {
    id: 5,
    image: IMG5,
    title: "Farm Website Landing Page",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/674925/screenshots/16778940/media/f9f1fc553bcdf26dab438fb0345afa80.png",
  },
  {
    id: 6,
    image: IMG6,
    title: "Light Dashboard",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/709816/screenshots/16555880/media/83a7aca78b62d1290b8b7b5c692345e3.png",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_black"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_black"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
