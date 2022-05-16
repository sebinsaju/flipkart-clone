import React, { useState } from "react";
import style from "./Header.module.scss";
import Image from "next/image";
import SearchBox from "../search-box";
import Button from "../button";
import Modal from "react-modal";
import Login from "../login";
import Link from "next/link";
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setisSignUpOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  }
  const toggleSignUp = () => {
    setisSignUpOpen(!isSignUpOpen);
  }
  return (
    <div className={style.header}>
      <Modal isOpen={isSignUpOpen}>
      </Modal>
      <Modal isOpen={isLoginOpen}>
        <Login onClose={toggleLogin} />
      </Modal>
      <div className={style.logo}>
        <Image src="/assets/logo.png" width={100} height={30} alt="flipkart" />
      </div>
      <div className={style.search}>
        <SearchBox />
      </div>
      <div className={style.login_btn} onClick={toggleLogin}>
        <Button>Login</Button>
      </div>
      <div className={style.login_btn} onClick={toggleSignUp}>
        <Button>Signup</Button>
      </div>
      <Link href="/products/all">
        <a>
          <div className={style.cart} >
            <svg
              className="V3C5bO"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="_1bS9ic"
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg><span className={style.cart_title}>Cart</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
