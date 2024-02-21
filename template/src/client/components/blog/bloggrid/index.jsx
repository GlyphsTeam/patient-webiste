import React from "react";
import StickyBox from "react-sticky-box";
import Title from '../../title/Title.jsx'
import CardBlog from "./cardBlog.jsx";
//images
import { IMG01, IMG_th01 } from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog";
import CategoryWidget from "../categoryWidget";
import TagsWidget from "../tagswidget";
import Header from "../../header";
import Footer from "../../footer";

const BlogGrid = (props) => {

  const blodData = [
    {
      id: 1,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 2,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 3,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 4,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 5,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
    {
      id: 6,
      img: IMG01,
      img2: IMG_th01,
      name: "Dr. Ruby Perrin",
      date: "4 Dec 2019",
      deatiles: "Doccure – Making your clinic painless visit?",
      description: "Lorem ipsum dolor sit amet, consectetur em adipiscingelit, sed do eiusmod tempor."
    },
  ]
  return (
    <div>
      <Header {...props} />
      <Title title="Blog" subTitle="Blog" />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row blog-grid-row">
                {blodData.map((blog) => {
                  return <CardBlog
                    blogDetails={blog.deatiles}
                    date={blog.date}
                    description={blog.description}
                    doctorName={blog.name}
                    imgSrc={blog.img}
                    imgSrcTwo={blog.img2}
                    key={blog.id}
                  />
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BlogListSearch />
                <LastestBlog />
                <CategoryWidget />
                <TagsWidget />
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default BlogGrid;
