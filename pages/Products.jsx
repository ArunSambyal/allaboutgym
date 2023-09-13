import React, { useState } from "react";
import "../styles/products.css";

import logo1 from "../images/content/20230904_171220.jpg";
import logo2 from "../images/content/20230904_171239.jpg";
import logo3 from "../images/content/20230904_171326.jpg";
import logo4 from "../images/content/20230904_171306.jpg";
import logo5 from "../images/content/20230904_171326.jpg";
import logo6 from "../images/content/20230904_171339.jpg";
import logo7 from "../images/content/20230904_171352.jpg";
import logo8 from "../images/content/meeting.jpg";
import ProductBox from "./ProductBox";

const Products = () => {
  const [showDetails, setShowDetails] = useState(Array(10).fill(false));

 
  const blogPosts = [
    {
      title: "Gym Upgradation & Refurbishment",
      imageSrc: logo1,
      link: "",
      description: "We develop club re-modelling with a performance design and accessories that fit in the industry in the present date. With significant experience in the industry, our dedicated team of professionals help you plan, design and build out your club!"
    },
    {
      title: "Employee Training & Education",
      imageSrc: logo2,
      link: "",
      description: "We offer customised/ exclusive workshops on Training & Nutrition and Gym Planning & Management to create up-skill training of your club staff and also provide education programs for the club members focussing on membership retention and club sales!"
    },
    {
      title: "Recruitment Services",
      imageSrc: logo3,
      link: "",
      description: "We offer recruitment services for gyms/ health clubs and for individuals- fitness trainers/ other industry professionals. Gyms/ health clubs who are finding the right candidate and individuals who are looking for a lucrative job opportunity; we are here to help!"
    },
    {
      title: "Social Media Marketing",
      imageSrc: logo4,
      link: "",
      description: "We offer a complete package on social media marketing from ideation/ designing to handling/ management. From conceptualisation to brand management our involvement reinforces clients marketing strategies for more measurable results!  "
    },
    {
      title: "Sales Revenue Improvement",
      imageSrc: logo5,
      link: "",
      description: "Our zero-risk partnership is an investment in your staff’s development and drive cultural changes in your club. We simplify database to capture performance database against sales for multiple plan period facilitating trend analysis and target allocation!  "
    },
    {
      title: "Interiors & Branding",
      imageSrc: logo6,
      link: "",
      description: "We strive to present a blend of aesthetics and performance to fashion new concepts in gym interiors and branding to create a unique brand image that includes the thorough research of the market demand and competition! "
    },
    {
      title: "Gym & Spa Equipment",
      imageSrc: logo7,
      link: "",
      description: "We strive to offer the most premium and most affordable gym & spa equipment and furnish our customer with the best possibilities in terms of selection and supply as per customer needs and budget with best in class after sales services! "
    },
    {
      title: "Gym Franchise",
      imageSrc: logo8,
      link: "",
      description: "We welcome you to be a part of revolutionary fitness industry with holistic brand experience with the very fresh fitness concepts with us and offer franchise opportunity from leaders of  the industry. Let’s connect if you want to explore more information on the same! "
    },
    {
      title: "Project Development",
      imageSrc: logo3,
      link: "",
      description: "We offer assistance on new gym set up including site selection, vendor selection, operations set up, pricing strategy, construction management, etc and help client to create a gym concept and its business model and run a successful gym facility!"
    },
    {
      title: "Project Feasibility Reports",
      imageSrc: logo6,
      link: "",
      description: "If you are still planning to open a gym and seeking for an expert advice; Please reach us for a non-obligation detailed report on project feasibility and help us contribute in your success story! "
    },
  ];


  const toggleDetails = (index) => {
    const updatedDetails = [...showDetails];
    updatedDetails[index] = !updatedDetails[index];
    setShowDetails(updatedDetails);
  };

  return (
    <section className="blog pt-lg bg-dark-100" style={{backgroundColor:"#F5F5FF"}}>
      <div className="large_font">
        <h2 className="floating_element text-dark-200 d-flex justify-content-center">Products & Services</h2>
      </div>
      <div className="container">
        <div className="section-header text-center has_line"></div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Use the ProductBox component */}
              <ProductBox
                title={post.title}
                imageSrc={post.imageSrc}
                description={post.description}
                showDetails={showDetails[index]}
                toggleDetails={() => toggleDetails(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;