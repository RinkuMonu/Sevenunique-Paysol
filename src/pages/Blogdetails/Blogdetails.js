import React from 'react'
import "../styles/blogdetails.css";





function Blogdetails() {


const trendingPosts = [
    {
      id: 1,
      rank: "#1",
      category: "Web Development",
      title: "How to Optimize Your Website for Speed",
      views: "3,200 views",
      image: "/assets/Home/blog1.jpg",
    },
    {
      id: 2,
      rank: "#2",
      category: "Marketing",
      title: "The Power of Content Marketing for Tech Companies",
      views: "2,800 views",
      image: "/assets/Home/blog3.jpg",
    },
    {
      id: 3,
      rank: "#3",
      category: "Design",
      title: "10 UI/UX Design Trends to Watch in 2023",
      views: "2,500 views",
      image: "/assets/Home/blog2.jpg",
    },
    {
      id: 4,
      rank: "#4",
      category: "Design",
      title: "Responsive Design Best Practices",
      views: "2,300 views",
      image: "/assets/Home/blog1.jpg",
    },
    {
      id: 5,
      rank: "#5",
      category: "Technology",
      title: "The Role of AI in Modern Software Development",
      views: "2,100 views",
      image: "/assets/Home/blog3.jpg",
    },
  ]



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
BLOGDETAILS
            </h1>
          </div>
        </section>



 <div className="container-fluid py-4">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8 col-md-7">
          <div className="blog-content border border-dark rounded p-3">
            {/* Back to Blog Link */}
            <div className="back-link mb-4">
              <a href="/Blog" className="text-brightorange d-flex align-items-center">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Blog
              </a>
            </div>

            <div className="">
            <img
              src="/assets/Home/blog1.jpg"
              alt="Banner"
              className=" w-75 mb-5"
              style={{ objectFit: "cover", height: "50%", minHeight: "50px" }}
            />
</div>

            {/* Blog Description */}
            <p className="blog-description text-muted mt-1">
              Discover the emerging technologies and methodologies that are transforming the mobile app development
              landscape.
            </p>

            {/* Blog Content Sections */}
            <div className="blog-sections">
              <div className="my-5">
                <h2 className="section-title text-black">1. Cross-Platform Development</h2>
                <p className="section-content">
                  Frameworks like Flutter and React Native enable faster, cost-effective development for both iOS and
                  Android.
                </p>
              </div>

              <div className="my-5">
                <h2 className="section-title text-black">2. 5G Integration</h2>
                <p className="section-content">
                  5G technology is enabling richer, more interactive mobile experiences.
                </p>
              </div>

              <div className="my-5">
                <h2 className="section-title text-black">3. AI and Machine Learning</h2>
                <p className="section-content">
                  AI-driven features like personalization and automation are becoming standard in mobile apps.
                </p>
              </div>

              <div className="my-5">
                <h2 className="section-title text-black">4. AR/VR</h2>
                <p className="section-content">
                  Augmented and Virtual Reality technologies are creating immersive mobile experiences across various
                  industries.
                </p>
              </div>
            </div>
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
                {trendingPosts.map((post) => (
                  <div key={post.id} className="trending-post d-flex mb-3">
                    <div className="post-image-container me-3">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="post-thumbnail" />
                    </div>
                    <div className="post-details flex-grow-1">
                      <div className="d-flex align-items-center mb-1">
                        <span className="post-rank me-2">{post.rank}</span>
                        <span className="post-category">{post.category}</span>
                      </div>
                      <h5 className="post-title mb-1">{post.title}</h5>
                      <p className="post-views mb-0">{post.views}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    </div>
  )
}

export default Blogdetails
