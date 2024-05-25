import { useEffect, useState } from "react";
import { Dropdown, Space, } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "../assets/styles/header.css";
import LanguageSwitcher from "./languageSwitcher";
import Ham from '../assets/images/images.png'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const items = [
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "2",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed z-[100] w-[100%]  transition-all duration-300 flex flex-col items-center shadow ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="lg:w-[1467px] w-full">
        <header className="container hidden mx-auto lg:block">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="">
              <img
                className="w-[169px] h-[49px]"
                src="https://dbgaming.com/img/en/db_logo.png"
                alt=""
              />
            </div>
            <div>
              <ul className="flex flex-row items-center nav">
                <li>Home</li>
                <li>Products</li>
                <li>
                  {" "}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <Space>
                      Sub-line products
                      <CaretDownOutlined />
                    </Space>
                  </Dropdown>
                </li>
                <li>Collaboration</li>
                <li>
                  {" "}
                  <Dropdown
                    overlayStyle={{ marginTop: '50px' }}
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <Space>
                      Latest News
                      <CaretDownOutlined />
                    </Space>
                  </Dropdown>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <LanguageSwitcher />
              </ul>
            </div>
          </nav>
        </header>
        <header className="container block mx-auto lg:hidden">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="">
              <img
                className="w-[169px] h-[49px]"
                src="https://dbgaming.com/img/en/db_logo.png"
                alt=""
              />
            </div>
            <div>
              <ul className="flex flex-row items-center nav">
                <LanguageSwitcher />
                <li><img width={"auto"} className="h-[40px]" src={Ham} alt="" /></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Header;
