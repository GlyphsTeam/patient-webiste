import {
  IMG_blog_th01,

} from ".././bloglist/img.jsx";
//link
import React from "react";
import LastBlogCard from './LastBlogCard';
import { useTranslation } from "react-i18next";
const LastestBlog = () => {
  const { t } = useTranslation();

  const blodData = [
    {
      id: 1,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 2,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 3,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 4,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 5,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 6,
      img: IMG_blog_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
  ]
  return (
    <div className="card post-widget">
      <div className="card-header">
        <h4 className="card-title">{t("Latest Posts")}</h4>
      </div>
      <div className="card-body">
        <ul className="latest-posts">
          {blodData.map((last, index) => {
            return <LastBlogCard
              date={last.date}
              description={last.description}
              imgSrc={last.img}
              key={`lastBlog_${index}`}
            />
          })
          }
        </ul>
      </div>
    </div>
  );
};

export default LastestBlog;
