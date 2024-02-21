/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Title({ title, subTitle }) {
    const {t} = useTranslation()

    return (
        <div className="breadcrumb-bar-two">
            <div className="container">
                <div className="row align-items-center inner-banner">
                    <div className="col-md-12 col-12 text-center">
                        <h2 className="breadcrumb-title">{title}</h2>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/index-2">{t("Home")}</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    {subTitle}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title
