import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const limit = 6; // Tumhare design ke hisab se

  const fetchBlogs = async (currentPage = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=8&status=2&page=${currentPage}&limit=${limit}`,
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      if (response.data.status === "success") {
        const newBlogs = response.data.data || [];
        const pagination = response.data.pagination || {};

        setBlogs((prev) => [...prev, ...newBlogs]);

        if (pagination.total_pages) {
          setTotalPages(pagination.total_pages);
        }

        if (currentPage >= pagination.total_pages) {
          setHasMore(false);
        }
      } else {
        console.error("Blog API error:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        !loading &&
        hasMore
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  return (
    <div>
      <section className="page-title pb-0 border-0">
        <div className="position-relative w-100">
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

      <section className="text-col">
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
            {blogs.length === 0 ? (
              <div className="text-center py-5">No blogs available</div>
            ) : (
              <div className="row">
                {blogs.map((post) => (
                  <div key={post.id} className="col-md-4 mb-4">
                    <Link
                      to={`/blog_details/${post.slug}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="card blog-card h-100 shadow-md">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="card-img-top rounded-top"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <div className="blog-meta mb-2">
                            <span className="me-3">
                              <i className="bi bi-calendar-event"></i>{" "}
                              {new Date(post.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <h5 className="card-title fw-bold">{post.title}</h5>
                          <p className="card-text text-muted">{post.summary}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Loader */}
            {loading && (
              <div className="flex justify-center mt-6">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {!hasMore && blogs.length > 0 && (
              <p className="text-center mt-4 text-muted">No more blogs to load</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
