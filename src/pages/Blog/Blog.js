import React from "react";
import "../styles/blog.css";
import { Link } from 'react-router-dom';

const blogData = [
  {
    date: "June 15, 2023",
    author: "Jessica Chen",
    title: "10 UI/UX Design Trends to Watch in 2023",
    description:
      "Explore the latest trends in UI/UX design that are shaping the digital landscape in 2023 and beyond.",
    image: "/assets/Home/blog1.jpg",
  },
  {
    date: "May 28, 2023",
    author: "David Wilson",
    title: "The Future of Mobile App Development",
    description:
      "Discover the emerging technologies and methodologies that are transforming the mobile app industry.",
    image: "/assets/Home/blog2.jpg",
  },
  {
    date: "May 12, 2023",
    author: "Michael Brown",
    title: "How to Optimize Your Website for Speed",
    description:
      "Learn practical tips and techniques to improve your website's loading speed and enhance user experience.",
    image: "/assets/Home/blog3.jpg",
  },
];

function Blog() {
  return (
    <div>
      <>
        <section className="page-title pb-0 border-0">
          <div className="position-relative w-100 ">
            <img
              src="/assets/Home/contact-banner.jpg"
              alt="Banner"
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
            />

            <h1
              className="text-white text-right fw-bold"
              style={{
                position: "absolute",
                top: "40%",
                left: "30%",
                transform: "translate(-50%, 0%)",
                fontSize: "6rem",
                zIndex: 2,
              }}
            >
              OUR BLOGS
            </h1>
          </div>
        </section>

        <section className=" text-col">
          <div className="container">
            <h2 className="text-center text-theme fw-bold">Our latest blogs</h2>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="theme-title">
                  <h3 className="fw-400">
                    Stay updated with our latest insights, news, and tips
                  </h3>
                </div>
              </div>
            </div>
           <div className="container py-5">
  <div className="row">
    {blogData.map((post, index) => (
      <div key={index} className="col-md-4 mb-4">
        <Link to="/blogdetails" className="text-decoration-none text-dark">
          <div className="card blog-card h-100 shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <div className="blog-meta mb-2">
                <span className="me-3">
                  <i className="bi bi-calendar-event"></i> {post.date}
                </span>
                <span>
                  <i className="bi bi-person"></i> {post.author}
                </span>
              </div>
              <h5 className="card-title fw-bold">{post.title}</h5>
              <p className="card-text text-muted">
                {post.description}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Blog;
