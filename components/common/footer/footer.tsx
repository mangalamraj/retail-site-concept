import { Facebook, Instagram, Twitter } from "lucide-react";
import "./footer.css";
import { Separator } from "@/components/ui/separator";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { CTA } from "@/components/cta/cta";

const Footer = () => {
  return (
    <div>
      {" "}
      <CTA />
      <div className="footer-sec">
        <div className="footerparent">
          <div className="footer-header">
            <img src="/ppw.png" className="manik" alt="" />
            <hr className="backdrop-opaci" />
          </div>
          <div className="main ">
            <div className="col_main">
              <div className="col_sub1">
                <div className="logo-row">
                  <div className="logo-des">
                    <h3>Office</h3>

                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      - 1234
                    </p>
                    <a href="#">abc.abc@abc.com</a>
                    <p>+91 123459680</p>
                  </div>
                  <div className="s_tags flex">
                    <span>
                      <Instagram size={20} />
                    </span>
                    <span>
                      <Twitter size={20} />
                    </span>
                    <span>
                      <Facebook size={20} />
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
                      Case Studies
                    </a>
                    <a href="#" className="footer-links">
                      About{" "}
                    </a>
                    <a href="#" className="footer-links">
                      Privacy{" "}
                    </a>
                    <a href="#" className="footer-links">
                      Terms{" "}
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
    </div>
  );
};

export default Footer;
