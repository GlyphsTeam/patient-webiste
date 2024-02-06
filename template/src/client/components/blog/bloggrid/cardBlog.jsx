/* eslint-disable react/prop-types */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from "react-router-dom";

function CardBlog({imgSrc, imgSrcTwo, doctorName, date, description, blogDetails}) {
  return (
    <div className="col-md-6 col-sm-12">
    <div className="blog grid-blog">
      <div className="blog-image">
        <Link to="/blog/blog-details">
          <LazyLoadImage className="img-fluid" src={imgSrc} alt="Post" />
        </Link>
      </div>
      <div className="blog-content">
        <ul className="entry-meta meta-item">
          <li>
            <div className="post-author">
              <Link to="/patient/doctor-profile">
                <LazyLoadImage src={imgSrcTwo} alt="Post Author" />
                <span>{doctorName}</span>
              </Link>
            </div>
          </li>
          <li>
            <i className="far fa-clock"></i> {date}
          </li>
        </ul>
        <h3 className="blog-title">
          <Link to="/blog/blog-details">
            {blogDetails}
          </Link>
        </h3>

        <p className="mb-0">
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default CardBlog
