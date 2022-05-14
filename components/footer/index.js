import Image from "next/image";
import React from "react";
import Container  from "../container";
import style from "./Footer.module.scss";
const DATA = [
  {
    title: "About",
    links: [
      { link: "Contact" },
      { link: "About" },
      { link: "Careers" },
      { link: "Flipkart Store" },
      { link: "Press" },
      { link: "Wholesale" },
      { link: "Information" },
    ],
  },
  {
    title: "Help",
    links: [
      { link: "Contact" },
      { link: "About" },
      { link: "Careers" },
      { link: "Flipkart Store" },
      { link: "Press" },
      { link: "Wholesale" },
      { link: "Information" },
    ],
  },
  {
    title: "Policy",
    links: [
      { link: "Contact" },
      { link: "About" },
      { link: "Careers" },
      { link: "Flipkart Store" },
      { link: "Press" },
      { link: "Wholesale" },
      { link: "Information" },
    ],
  },
  {
    title: "Social",
    links: [
      { link: "Contact" },
      { link: "About" },
      { link: "Careers" },
      { link: "Flipkart Store" },
      { link: "Press" },
      { link: "Wholesale" },
      { link: "Information" },
    ],
  },
];
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_top}>
        <Container>
          <div className={`row ${style.footer_inner_wrapper}`}>
            <div className="col-7">
              <div className="row">
                {DATA.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <div className={style.inner_title}>{item.title}</div>
                      <ul>
                        {item.links.map((link, index) => {
                          return <li key={index}>{link.link}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-6">
                  <div className={style.footer_mail_wrapper}>
                    <div className={style.inner_title}>Mail Us:</div>
                    <div className={style.content}>
                      Flipkart Internet Private Limited, Buildings Alyssa,
                      Begonia & Clove Embassy Tech Village, Outer Ring Road,
                      Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                      India
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={style.footer_address_wrapper}>
                    <div className={style.inner_title}>
                      Registered Office Address:
                    </div>
                    <div className={style.content}>
                      Flipkart Internet Private Limited, Buildings Alyssa,
                      Begonia & Clove Embassy Tech Village, Outer Ring Road,
                      Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                      India CIN : U51109KA2012PTC066107
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={style.footer_bottom}>
        <Container>
          <div className={style.footer_bottom_inner_wrapper}>
            <div className={`row ${style.row}`}>
              <div className="col-6">
                <div className="row">
                  <div className={`col-3 ${style.bottom_link}`}><Image src="/assets/seller.svg" width={20} height={20} alt="icon"/>Become a Seller</div>
                  <div className={`col-3 ${style.bottom_link}`}><Image src="/assets/advertise.svg" width={20} height={20} alt="icon"/>Advertise</div>
                  <div className={`col-3 ${style.bottom_link}`}><Image src="/assets/gift.svg" width={20} height={20} alt="icon"/>Gift Cards</div>
                  <div className={`col-3 ${style.bottom_link}`}><Image src="/assets/help.svg" width={20} height={20} alt="icon"/>Help Center</div>
                </div>
              </div>
              <div className="col-6">
                <div className={`row ${style.row}`}>
                  <div className="col-5">© 2007-2022 Flipkart.com</div>
                  <div className="col-7">
                    <Image src="/assets/payment.svg" width={400} height={40} alt="icon"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
