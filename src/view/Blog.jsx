import React, { useEffect, useRef, useState } from "react";

export default function Blog() {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPagePosts, setCurrentPagePosts] = useState([]);
  const pageCount = useRef(0);
  const loadPosts = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const promise = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      requestOptions
    );
    const allPosts = await promise.json();
    pageCount.current = allPosts.length / 10;

    setAllPosts(allPosts);
    document.getElementsByClassName("links")[0].click();
  };
  const loadNewPage = (event) => {
    const links = document.getElementsByClassName("links");
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#667788";
      links[i].style.backgroundColor = "#ecf2fa";
    }
    event.currentTarget.style.backgroundColor = "#be2664";
    event.currentTarget.style.color = "white";
    const pageNo = Number(event.currentTarget.innerText) * 10;
    const newPagePosts = [];
    for (let i = pageNo - 10; i < pageNo; i++) {
      newPagePosts.push(allPosts[i]);
    }
    setCurrentPagePosts(newPagePosts);
  };
  const getPageCount = () => {
    <li>
      <a style={{ cursor: "pointer" }} className="links" onClick={loadNewPage}>
        10
      </a>
    </li>;
    const pageCountArray = [];
    for (let i = 1; i <= pageCount.current; i++) {
      pageCountArray.push(
        <li key={i}>
          <a
            style={{ cursor: "pointer" }}
            className="links"
            onClick={loadNewPage}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageCountArray;
  };
  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <div>
      <header className="header">
        <div className="main-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a
                className="navbar-brand"
                href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html"
              >
                <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-logo.png" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="fa fa-bars"></span>
              </button>

              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blogging-tools.html"
                    >
                      Blogging Tools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#"
                    >
                      Google
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/internet-marketing.html"
                    >
                      Internet Marketing
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/services.html"
                    >
                      Our Services
                    </a>
                    <div className="sub-menu-toggle"></div>
                    <ul className="sub-menu">
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-design.html">
                          Web Design
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-development.html">
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/digital-marketing.html">
                          Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/graphic-design.html">
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/it-services.html">
                          IT Services
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/mobile-apps.html">
                          Mobile Apps
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/white-label-solutions.html">
                          White Label Solutions
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/outsourcing.html">
                          Outsourcing
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/printing.html">
                          Printing
                        </a>
                      </li>
                      <li>
                        <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/consultation.html">
                          Consultation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/advertise.html"
                    >
                      Advertise With Us
                    </a>
                  </li>
                </ul>
                <div className="header-btn">
                  <ul>
                    <li>
                      <a
                        href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#"
                        className="btn request-btn"
                      >
                        Request a Free quote
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/contact-us.html"
                        className="btn"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="newsletter-sec">
        <div className="container">
          <h1>
            Smart marketing <br />
            starts here
          </h1>
          <h4>
            Join over 150,000 marketing managers who get our best digital
            marketing insights, strategies and tips delivered straight to their
            inbox.
          </h4>
          <form
            action="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html"
            method=""
          >
            <div className="service-form-box">
              <div className="form-group">
                <input
                  type="email"
                  name=""
                  className="form-control"
                  placeholder="ENTER YOUR WORK EMAIL"
                />
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn arrow-btn red-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="blog-page-sec">
        <div className="container">
          <div className="blog-page-in">
            <div className="blog-list-top">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-list-top-img">
                    <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html">
                      <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-1.png" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-list-box">
                    <h3>
                      <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html">
                        Top Software Development Companies in London – Compare
                        Quotes
                      </a>
                    </h3>
                    <p className="blog-desc">
                      Kickstart the growth of your business with a
                      professionally designed website and software development
                      services offered by Logicsofts, one of the leading
                      software development
                    </p>
                    <a
                      href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html"
                      className="btn btn-white arrow-btn"
                    >
                      Read more
                    </a>
                    <div className="blog-list-author">
                      <div className="blog-author-img">
                        <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png" />
                      </div>
                      <div className="blog-author-name">
                        <h4>
                          <span>Author : </span>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            Sam Singh
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-list-bottom">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog-list-row">
                    <div className="row">
                      {currentPagePosts.map((post) => {
                        return (
                          <div key={post.title} className="col-md-6">
                            <div className="blog-list-box">
                              <div className="blog-list-img">
                                <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html">
                                  <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-2.png" />
                                </a>
                              </div>
                              <h3>
                                <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html">
                                  {post.title}
                                </a>
                              </h3>
                              <p className="blog-desc">{post.body}</p>
                              <a
                                href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/single-blog.html"
                                className="btn btn-white arrow-btn"
                              >
                                Read more
                              </a>
                              <div className="blog-list-author">
                                <div className="blog-author-img">
                                  <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png" />
                                </div>
                                <div className="blog-author-name">
                                  <h4>
                                    <span>Author : </span>
                                    <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                                      Sam Singh
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-sidebar">
                    <div className="blog-sidebar-box">
                      <h4>As featured on Linkio Top SEO Agencies</h4>
                      <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/linkio.png" />
                    </div>
                    <div className="blog-sidebar-box">
                      <h4>
                        As featured on Feedspot Top 100 UK Marketing Blogs
                      </h4>
                      <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/feedspot.png" />
                    </div>
                    <div className="blog-sidebar-list">
                      <h3>Recent Blog</h3>
                      <ul>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            Top Software Development Companies in London –
                            Compare Quotes
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            What is Web Application Development – A Beginner’s
                            Guide
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            The Ultimate Guide to Outsource Web Development
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            Web Developer vs Software Developer – What is the
                            Difference?
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                            The Ultimate Guide to Micro Influencers in the UK
                            2020
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="blog-sidebar-list">
                      <h3>Main Services</h3>
                      <ul>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-design.html">
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-development.html">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/digital-marketing.html">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/seo-marketing.html">
                            SEO
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/influencer-marketing.html">
                            Influencer Marketing
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-pagination">
                <ul>{getPageCount()}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-contact-left">
                <h3>Get in touch/ also schedule a call/meet </h3>
                <h4>
                  <span>Schedule a call or meeting</span> with our digital
                  marketing expert for <span>FREE consultation</span>.
                </h4>
                <a
                  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#"
                  className="btn arrow-btn red-btn"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-contact-form">
                <h4>
                  <span>
                    If you want us to prepare a digital marketing scope for your
                    business,
                  </span>{" "}
                  please fill in the necessary information required for us to
                  proceed.
                </h4>
                <form
                  action="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html"
                  method=""
                >
                  <div className="service-form-box">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Service Category</label>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Web Design</option>
                        <option>Web Development</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Design</option>
                        <option>IT Services</option>
                        <option>Mobile Apps</option>
                        <option>White Label Solutions</option>
                        <option>Outsourcing</option>
                        <option>Printing</option>
                        <option>Consultation</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input type="date" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <select className="form-control">
                        <option>Morning</option>
                        <option>Noon</option>
                        <option>Evening</option>
                      </select>
                    </div>
                  </div>
                  <div className="submit-btn text-right">
                    <button type="submit" className="btn arrow-btn red-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-6">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="footer-box">
                      <ul className="footer-menu">
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/index.html">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/about-us.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/our-work.html">
                            Our Work
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/faq.html">
                            Faq's
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/how-we-work.html">
                            How We Work
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="footer-box">
                      <h3>Services</h3>
                      <ul className="footer-service-menu">
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-design.html">
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/web-development.html">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/digital-marketing.html">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/graphic-design.html">
                            Graphic Design
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/it-services.html">
                            IT Services
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/mobile-apps.html">
                            Mobile Apps
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/white-label-solutions.html">
                            White Label Solutions
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/outsourcing.html">
                            Outsourcing
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/printing.html">
                            Printing
                          </a>
                        </li>
                        <li>
                          <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/consultation.html">
                            Consultation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="footer-box footer-contact">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <span>Address: </span>Suite 6, 17 Comalco Ct Thomastown,
                      3074
                    </li>
                    <li>
                      <span>Telephone:</span>
                      <a href="tel:03 8595 5246">03 8595 5246</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:info@logicsofts.com.au">
                        info@logicsofts.com.au
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-box footer-social">
                  <h3>Stay With Us</h3>
                  <ul>
                    <li>
                      <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-12 footer-tech-row">
                <div className="footer-box">
                  <h3>TECHNOLOGY USED</h3>
                  <div className="tech-img">
                    <ul>
                      <li>
                        <img src="./Logicsofts_files/drupal.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/wordpress.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/joomla.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/java.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/angular-i.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/html.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/css.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/bootstrap.png" />
                      </li>
                      <li>
                        <img src="./Logicsofts_files/node.png" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              Copyright - 2020-2021 All Right Reserved - Logicsofts Australia
              Ptv Ltd. - ABN29611694529
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
