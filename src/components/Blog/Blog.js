import React from "react"
import "./Blog.css"
import Card from "./Card"
import {blogData} from "../../constants/data"
import { Col,Container, Row, } from "reactstrap";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={`/blogs/${title}`} className="blog__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read__more">
            Read More
          </Link>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i class="ri-user-line"></i> {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};



function Blog() {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="12" className="mb-5 text-center">
        <p className='text'>Explore our blogs.</p>        
        <h3 className='text-brown'>Latest <span className='text-dark'>Blogs</span></h3>
        </Col>
        <BlogList />
      </Row>
    </Container>
  </section>
  )
}

export default Blog;
