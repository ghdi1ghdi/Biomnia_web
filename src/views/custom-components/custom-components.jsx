import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PageTable from "./sections/table.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction";
// import TeamComponent from "./sections/teamcomponent.jsx";
// import HeaderComponent from "./sections/headercomponent.jsx";
// import BannerComponent from "./sections/bannercomponent.jsx";
// import FormBannerComponent from "./sections/formbannercomponent.jsx";
// import PricingComponent from "./sections/pricingcomponent.jsx";
// import TestimonialComponent from "./sections/testimonialcomponent.jsx";
// import BlogComponent from "./sections/blogcomponent.jsx";

const CustomComponents = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner2 />
          <PageTable />
          <PortfolioComponent />
          <ContactComponent />
          {/* 
          <CallToAction />
          <TeamComponent />
          <HeaderComponent />
          <BannerComponent />
          <FormBannerComponent />
          <PricingComponent />
          <TestimonialComponent />
          <BlogComponent /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

CustomComponents.propTypes = {
  classes: PropTypes.object,
};

export default CustomComponents;
