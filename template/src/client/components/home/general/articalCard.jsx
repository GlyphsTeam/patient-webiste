/* eslint-disable react/prop-types */
import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { Link } from "react-router-dom";

function ArticalCard({imgSrc, name, date, blogDetails, description, key}) {
    return (
        <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up" key={key}>
            <div className="articles-grid w-100">
                <div className="articles-info">
                    <div className="articles-left">
                        <Link to="/blog/blog-details">
                            <div className="articles-img">
                                <img
                                    src={imgSrc}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="articles-right">
                        <div className="articles-content">
                            <ul className="articles-list nav">
                                <li>
                                    <i><FeatherIcon icon="user" /></i> {name}
                                </li>
                                <li>
                                    <i><FeatherIcon icon="calendar" /></i> {date}
                                </li>
                            </ul>
                            <h4>
                                <Link to="/blog/blog-details">
                                    {blogDetails}
                                </Link>
                            </h4>
                            <p>
                               {description}{" "}
                            </p>
                            <Link to="/blog/blog-details" className="btn">
                                View Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticalCard;
