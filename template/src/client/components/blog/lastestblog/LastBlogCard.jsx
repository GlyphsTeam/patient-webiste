/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LastBlogCard({imgSrc, description, date, key}) {
  return (
    <li key={key}>
    <div className="post-thumb">
      <Link to="/blog/blog-details">
        <LazyLoadImage className="img-fluid" src={imgSrc} alt="" />
      </Link>
    </div>
    <div className="post-info">
      <h4>
        <Link to="/blog/blog-details">
          {description}
        </Link>
      </h4>
      <p>{date}</p>
    </div>
  </li>
  )
}

export default LastBlogCard
