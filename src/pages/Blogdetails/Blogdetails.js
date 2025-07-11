import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "../styles/blogdetails.css";
// import homebanner from "../../Assets/images/homebnner.png";

const cleanContent = (html) => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: ["style"],
  });
};

function Blogdetails() {
  // const { seo } = useUser();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [categoryname, setCategoryName] = useState([]);
  const sanitizedSlug = slug?.trim().toLowerCase();

  useEffect(() => {
    setLoading(true);
    const fetchBlogDetails = async () => {
      try {
        const [postRes, relatedRes, categoryapi] = await Promise.all([
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&slug=${sanitizedSlug}&website_id=8`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&limit=5&website_id=8`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=8`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);

        const postJson = await postRes.json();
        const relatedJson = await relatedRes.json();
        const categoryapijson = await categoryapi.json();

        if (postJson.status === "success" && postJson.data.length > 0) {
          const rawPost = postJson.data.find((item) => item.slug === slug);
          if (rawPost) {
            rawPost.content = cleanContent(rawPost.content);
            setBlog(rawPost);
          } else {
            console.warn("No matching post found for slug:", slug);
          }
        }
        setCategoryName(categoryapijson);
        setRelatedPosts(relatedJson);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading blog details...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-5 text-danger">
        <h2>Blog not found!</h2>
        <p>
          The article you're looking for doesn't exist or may have been removed.
        </p>
        <Link to="/blog" className="btn btn-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
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
            BLOGDETAILS
          </h1>
        </div>
      </section>
      <div>
        {/* <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      /> */}

        <div className="container-fluid py-4">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-md-7">
              <div className="blog-content border border-dark rounded p-2">
                {/* Back to Blog Link */}
                <div className="back-link mb-4">
                  <Link
                    to="/blog"
                    className="text-brightorange d-flex align-items-center"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Blog
                  </Link>
                </div>

                <div className="w-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-100 mb-5"
                    style={{
                      objectFit: "none",
                      width: "100%",
                      height: "auto",
                      maxHeight: "600px",
                    }}
                  />
                </div>

                {/* Blog Title */}
                <h1 className="blog-title mb-4">{blog.title}</h1>

                {/* Blog Meta */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <span className="badge bg-primary fs-6 px-3 py-2">
                    <i className="fas fa-user me-2"></i>
                    FinUnique Team
                  </span>
                  {categoryname?.data?.name && (
                    <span className="badge bg-success fs-6 px-3 py-2">
                      <i className="fas fa-tag me-2"></i>
                      {categoryname.data.name}
                    </span>
                  )}
                  <span className="badge bg-secondary fs-6 px-3 py-2">
                    <i className="fas fa-eye me-2"></i>
                    {blog.views || "0"} views
                  </span>
                  <span className="badge bg-info fs-6 px-3 py-2">
                    <i className="fas fa-calendar me-2"></i>
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Blog Content */}
                <div
                  className="blog-content-text"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-5">
              <div className="sidebar">
                <div className="trending-section">
                  <h3 className="trending-title d-flex align-items-center mb-4">
                    <i className="fas fa-chart-line trending-icon me-2"></i>
                    Trending Posts
                  </h3>

                  <div className="trending-posts mt-5">
                    {relatedPosts?.data?.slice(0, 5).map((post, index) => (
                      <div key={post.id} className="trending-post d-flex mb-3">
                        <div className="post-image-container me-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="post-thumbnail"
                          />
                        </div>
                        <div className="post-details flex-grow-1">
                          <div className="d-flex align-items-center mb-1">
                            <span className="post-rank me-2">#{index + 1}</span>
                            <span className="post-category">
                              {categoryname?.data?.name || "Uncategorized"}
                            </span>
                          </div>
                          <h5 className="post-title mb-1">
                            <Link
                              to={`/blog_details/${post.slug}`}
                              className="text-decoration-none"
                            >
                              {post.title}
                            </Link>
                          </h5>
                          <p className="post-views mb-0">
                            <i className="fas fa-eye me-1"></i>
                            {post.views || "0"} views
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogdetails;
