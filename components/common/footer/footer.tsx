import { Facebook, Instagram, Twitter } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footerparent">
        <div className="footer-header">
          <img src="/ppw.png" className="manik" alt="" />
          <hr />
        </div>
        <div className="main">
          <div className="col_main">
            <div className="col_sub1">
              <div className="logo-row">
                <div className="logo-des">
                  <h3>Office</h3>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus -
                    1234
                  </p>
                  <a href="#">abc.abc@abc.com</a>
                  <p>+91 123459680</p>
                </div>
                <div className="s_tags flex">
                  <span>
                    <Instagram />
                  </span>
                  <span>
                    <Twitter />
                  </span>
                  <span>
                    <Facebook />
                  </span>
                </div>
              </div>
            </div>

            <div className="col_sub2">
              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Quick Links</h3>
                </div>
                <div className="link-des">
                  <a href="#" className="footer-links">
                    Home
                  </a>
                  <a href="#" className="footer-links">
                    About Us
                  </a>
                  <a href="#" className="footer-links">
                    Our Mission
                  </a>
                  <a href="#" className="footer-links">
                    Galary
                  </a>
                  <a href="#" className="footer-links">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Our Services</h3>
                </div>

                <div className="link-des">
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                </div>
              </div>
            </div>
            <div className="col_sub3">
              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Ipsum Lorem</h3>
                </div>

                <div className="link-des">
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                  <a href="#" className="footer-links">
                    Lorem Ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="disclaimer">
          <div className="head_disc">
            <h3>Disclaimer</h3>
          </div>
          <div className="para_disc">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et corrupti quos dolores
            </p>
          </div>
        </div>

        <div className="copyright_main">
          <hr className="f2_hr" />

          <div className="col-12">
            <span className="copyright">
              ©Copyright 2023-2026 Rove Group. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
