import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import {
  IMG01,
} from "./img";

import Footer from "../../../footer";
import Header from "../../../header.jsx";
import CardDoctor from "./CardDoctor.jsx";

const Favourites = (props) => {
  const favourities = [
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
    {
      imgSrc:IMG01,
      name:"Dr. Ruby Perrin",
      description:"MDS - Periodontology and Oral Implantology, BDS",
      rateNumber:17,
      location:"Florida, USA",
      date:"Available on Fri, 22 Mar",
      amout:"$300 - $1000"
    },
  ]
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center  inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Favourites</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Favourites
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
               {favourities.map((favourite, index)=>{
                return <CardDoctor
                  key={`fav${index}`}
                  amout={favourite.amout}
                  date={favourite.date}
                  description={favourite.description}
                  imgSrc={favourite.imgSrc}
                  location={favourite.location}
                  name={favourite.name}
                  rateNumber={favourite.rateNumber}
                />
               })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Favourites;
