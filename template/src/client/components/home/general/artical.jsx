import React from 'react'
import { blog_11 } from '../image'
import ArticalCard from './articalCard';
import { useTranslation } from 'react-i18next';

function Artical() {
    const { t } = useTranslation();

    const articalData = [
        {
            imgSrc: blog_11,
            name: "John Doe",
            date: "13 Aug, 2023",
            blogDetails: "Doccure – Making your clinic painless visit?",
            description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium",
        },
        {
            imgSrc: blog_11,
            name: "John Doe",
            date: "13 Aug, 2023",
            blogDetails: "Doccure – Making your clinic painless visit?",
            description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium",
        },
        {
            imgSrc: blog_11,
            name: "John Doe",
            date: "13 Aug, 2023",
            blogDetails: "Doccure – Making your clinic painless visit?",
            description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium",
        },
        {
            imgSrc: blog_11,
            name: "John Doe",
            date: "13 Aug, 2023",
            blogDetails: "Doccure – Making your clinic painless visit?",
            description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium",
        },
    ]
    return (
        <>
            <section className="articles-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 aos" data-aos="fade-up">
                            <div className="section-header-one text-center">
                                <h2 className="section-title">{t("Latest Articles")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {articalData.map((artical, index) => {
                            return <ArticalCard
                                imgSrc={artical.imgSrc}
                                blogDetails={artical.blogDetails}
                                date={artical.date}
                                name={artical.name}
                                description={artical.description}
                                key={`artical_${index}`}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Artical