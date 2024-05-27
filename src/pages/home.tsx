import "../assets/styles/home.css";
import {
  HomeOutlined,
  TrophyOutlined,
  AppstoreOutlined,
  GiftOutlined,
  BlockOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import Button from "../components/button";
import { useState } from "react";
import obSports from "../assets/video/ob-sports.mp4";
import liveCasino from "../assets/video/DB_live_casino.mp4";
import db_games from "../assets/images/db_games_sports2.png";
import heguan_new from "../assets/images/heguan_new.png";
import dianjing from "../assets/images/dianjing.png";
import qipai from "../assets/images/qipai.png";
import caipiao from "../assets/images/caipiao.png";
import SectionHeader from "../components/section_header";
import Industry from '../assets/images/icon/advantages/icon.png'
import Vision from '../assets/images/icon/advantages/shiye.png'
import Technologies from '../assets/images/icon/advantages/dingjian.png'
import Management from '../assets/images/icon/advantages/zhuanzhushuju.png'
import One_stop from '../assets/images/icon/advantages/yizhanshi.png'
import Service from '../assets/images/icon/advantages/kefu7.png'
import Efficiency from "../assets/images/background/about_us/xiaolvtisheng.png";
import Experience from "../assets/images/background/about_us/jingyan.png";
import Rating from "../assets/images/background/about_us/manyidu.png";
import Customer from "../assets/images/background/about_us/kehuxuanze.png";

import KM from '../assets/images/icon/subline/kmbw.png'
import DBW from '../assets/images/icon/subline/obbw.png'
import Externals from '../assets/images/icon/subline/wbyxapi.png'
import Flagship from '../assets/images/icon/subline/db_qijian.png'
import SPORTSBET from '../assets/images/icon/subline/saibo_icon.png'
import BOYA from '../assets/images/icon/subline/boya_icon.png'
import Rental from '../assets/images/icon/subline/zrapizl.png'

import Kaiyun from '../assets/images/collaboration/collaboration.png'
import Sports from '../assets/images/collaboration/sports.png'
import Bbn from '../assets/images/collaboration/b4f2f781-5715-49c0-bc32-72414d4e15ef.png'
import Img6686 from '../assets/images/collaboration/6686.png'
import Leyu from '../assets/images/collaboration/leyu.png'
import Zenith from '../assets/images/collaboration/zenith.png'
import Fun from '../assets/images/collaboration/funbb.png'
import Mgty from '../assets/images/collaboration/mgty.png'
import Tech from '../assets/images/collaboration/24tech.png'
import Bd from '../assets/images/collaboration/bd.png'
import Bb from '../assets/images/collaboration/bb.png'
import M6 from '../assets/images/collaboration/m6.png'

import EuropeanCup from '../assets/images/promotion/promotion.jpg'
import ModernDance from '../assets/images/promotion/e13bef19-5183-4a36-b08c-c687ea6118a5.jpg'
import Ardent from '../assets/images/promotion/c1f15e35-6b3f-401f-8f9c-1abc0071cd28.jpg'
import Drop from '../assets/images/promotion/f98b5a58-a3b4-4f5e-b682-62a0d7fa339c.jpg'
import Anchor from '../assets/images/promotion/c728195e-b9b0-4a19-83a5-92fe73ece09b.jpg'
import Lottery from '../assets/images/promotion/upload_b34329402067f300e83d4b663e63f38e.png'
import Ame from '../assets/images/promotion/upload_2c8241b9910b194f53497b3250b2042a.jpg'
import Baccarat from '../assets/images/promotion/upload_80bbb90289516146a4f60a34f88e0301.jpg'
import Dueling from '../assets/images/promotion/upload_473b390221959d6098e42736c50ae2f6.jpg'
import Fascin from '../assets/images/promotion/upload_929e65cb2443c07fb0cfe5ecfbe1b1ef.jpg'
import Lol from '../assets/images/promotion/upload_1363068f0ee2c2eac310dcc44cf379c5.png'
import Reu from '../assets/images/promotion/upload_423a50ddf54a58cf295baabd601a655c.jpg'
import World from '../assets/images/promotion/upload_e00c1cc6e0e5cbac2a97a24bd919e0c4.jpg'
import New from '../assets/images/promotion/upload_f2fbe3c01082b42e4e1152e80402278f.jpg'
import May from '../assets/images/promotion/upload_376a00a06cd51ceca14b1335e7bb9e2a.jpg'
import Global from '../assets/images/promotion/upload_b0f1a8f9f35a58e65acc2479204e9dff.jpg'
import OB from '../assets/images/promotion/upload_21b68ff7101a3c1631d293c3930b4f0d.jpg'
import Live from '../assets/images/promotion/upload_0f66aab29026ceee146ce751cdcb7017.jpg'
import Asia from '../assets/images/promotion/upload_4d74077b04c29146e92c406d58562e9d.jpg'
import Random from '../assets/images/promotion/upload_651c89838b77ddee3cac253a76a1a89f.jpg'
import Era from '../assets/images/promotion/upload_e78764f2017f583e18c0b8c38b8341db.jpg'
import Expert from '../assets/images/promotion/upload_94317de49159c92e802e32cddc94f254.jpg'
import Competition from '../assets/images/promotion/upload_c095fbde8251e314690418456a02f05d.jpg'
import Clever from '../assets/images/promotion/upload_db4cde17025cc528f7f84436ea3d66ec.jpg'

import Sigma from '../assets/images/industry/industry_info.jpg'
import Oblive from '../assets/images/industry/upload_ffe78636d2437ac7c57150bdb78f3105.jpg'
import Obgame from '../assets/images/industry/upload_045a4e2746526f01771320b31c7fb7f6.jpg'
import Starry from '../assets/images/industry/upload_148470d5f8366bde67c29216bedc1bee.jpg'
import Event from '../assets/images/industry/upload_093093ce898a585f81d8003aebf28465.jpg'
import Presidential from '../assets/images/industry/upload_d86c292acda72e68bff71eaf3d5ef4aa.jpg'

import MainBanner from '../assets/images/yingwen.png'
const Home = () => {
  const { t } = useTranslation();
  const [selectItem, setSelectItem] = useState("SPORTS");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
  };
  const menuItems = [
    { icon: <TrophyOutlined />, label: "SPORTS" },
    { icon: <HomeOutlined />, label: "LIVE CASINO" },
    { icon: <TrophyOutlined />, label: "E-SPORTS" },
    { icon: <AppstoreOutlined />, label: "POKER GAMES" },
    { icon: <GiftOutlined />, label: "LOTTERY" },
    { icon: <BlockOutlined />, label: "SLOTS" },
    { icon: <BarsOutlined />, label: "BLOCKCHAIN HASH" },
    { icon: <BarsOutlined />, label: "Scratch Cards" },
  ];
  const videoData = [
    {
      id: "SPORTS",
      title: "DB SPORTS",
      content:
        "DB SPORTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: obSports,
      img: db_games,
    },
    {
      id: "LIVE CASINO",
      title: "DB LIVE CASINO",
      content:
        "DB LIVE CASINO: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: liveCasino,
      img: heguan_new,
    },
    {
      id: "E-SPORTS",
      title: "DB E-SPORTS",
      content:
        "DB E-SPORTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: obSports,
      img: dianjing,
    },
    {
      id: "POKER GAMES",
      title: "DB POKER GAMES",
      content:
        "DB POKER GAMES: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: liveCasino,
      img: qipai,
    },
    {
      id: "LOTTERY",
      title: "DB LOTTERY",
      content:
        "DB LOTTERY: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: obSports,
      img: caipiao,
    },
    {
      id: "SLOTS",
      title: "DB SLOTS",
      content:
        "DB SLOTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: liveCasino,
      img: db_games,
    },
    {
      id: "BLOCKCHAIN HASH",
      title: "DB BLOCKCHAIN HASH",
      content:
        "DB BLOCKCHAIN HASH: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: obSports,
      img: db_games,
    },
    {
      id: "Scratch Cards",
      title: "DB Scratch Cards",
      content:
        "DB Scratch Cards: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: liveCasino,
      img: db_games,
    },
  ];
  const advantages = [
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products` development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Industry,
    },
    {
      title: "Global Vision",
      content:
        "The global vision brings us huge advantages, providing our customers with the most ideal market feedback, gradually improving and innovating better products, and accurately obtaining commercial profits for customers.",
      icon: Vision,
    },
    {
      title: "Outstanding Technologies",
      content:
        "Safe/fast/reliable, with Asia's best service platform, technical team, R&D equipment and sites, and dedicated to serving the market and customer operations throughout.",
      icon: Technologies,
    },
    {
      title: "Specialized Data Management",
      content:
        "Explore the development of new revenue data streams, unlock new potential models for economic growth, and use data 24/7 to track your needs and create solutions just for you.",
      icon: Management,
    },
    {
      title: "One-stop Service",
      content:
        "One-stop Service: Our company which is rich in resources and promises to provide the most complete support and services in the industry, it can effectively reduce merchant costs and improve the operating efficiency, All those needs can be met at DB Games",
      icon: One_stop,
    },
    {
      title: "24/7 Customer Service",
      content:
        "24/7 Customer Service: Our customer service doesn’t have a day-off. We provide 24 hours support a day, every day. Our technical staff are here to give clients the best services management system and guarantee your VIP benefits at best. ",
      icon: Service,
    },
  ];
  const AboutUsData = [
    {
      icon: Efficiency,
      title: "90%",
      content: "Efficiency improved",
    },
    {
      icon: Experience,
      title: "20yr",
      content: "Experience",
    },
    {
      icon: Rating,
      title: "100%",
      content: "Rating",
    },
    {
      icon: Customer,
      title: "1,000+",
      content: "Customer choice",
    },
  ];
  const SubLineData = [
    {
      title: "KM White Label",
      img: KM
    },
    {
      title: "DB White Label",
      img: DBW
    },
    {
      title: "External Game API",
      img: Externals
    },
    {
      title: "DB Flagship",
      img: Flagship
    },
    {
      title: "SPORTSBET GAME",
      img: SPORTSBET
    },
    {
      title: "BOYA GAMES",
      img: BOYA
    },
    {
      title: "Live Casino API Rental",
      img: Rental
    },
  ]
  const PromotionData = [
    {
      img: EuropeanCup,
      title: "DB Gaming teams up with BBIN Group to take on European Cup"
    },
    {
      img: ModernDance,
      title: "Modern Dance Baccarat is coming"
    },
    {
      img: Ardent,
      title: "Ardent with OB, grant whatever requested"
    },
    {
      img: Drop,
      title: "Million Red Packet Drop/World Cup Warmup"
    },
    {
      img: Anchor,
      title: "Sexy Anchor to Livestream at Night"
    },
    {
      img: Lottery,
      title: "Thai Lottery Solemnly Launched"
    },
    {
      img: Ame,
      title: "AMERICAN HALL JUBILANTLY LAUNCHED"
    },
    {
      img: Baccarat,
      title: "BACCARAT TOURNAMENT LIVE COMBAT"
    },
    {
      img: Dueling,
      title: "DUELING THE WORLD CUP"
    },
    {
      img: Fascin,
      title: "Fascinating European Hall launched!"
    },
    {
      img: Lol,
      title: "Lol Theme Game - Champion's Summon"
    },
    {
      img: Reu,
      title: "Reupgrade Classic Battle 21"
    },
    {
      img: World,
      title: "World Premiere Baccarat"
    },
    {
      img: New,
      title: "NEW THAI VERSION LAUNCH"
    },
    {
      img: May,
      title: "May DD Championship"
    },
    {
      img: Global,
      title: "Global is coming"
    },
    {
      img: Global,
      title: "OB GAMES & TC GAMING JOIN HANDS"
    },
    {
      img: Asia,
      title: "Asia Pacific Online"
    },
    {
      img: Global,
      title: "Global is coming"
    },
    {
      img: Random,
      title: "Random Magnum Happy Lucky"
    },
    {
      img: Era,
      title: "New Era Lotto"
    },
    {
      img: Expert,
      title: "Expert KCC King Aspiration"
    },
    {
      img: Competition,
      title: "Baccarat Game Competition"
    },
    {
      img: Clever,
      title: "Red Blue Clever Collections"
    },
  ]
  const IndustryData = [
    {
      img: Sigma,
      title: "SIGMA Manila luxury dinner party ended gorgeously"
    },
    {
      img: Oblive,
      title: "OB LIVE Shines in Manila"
    },
    {
      img: Obgame,
      title: "OB Games Asian Strategy Conference Revealed"
    },
    {
      img: Starry,
      title: "OB Games Starry Night ended successfully"
    },
    {
      img: Event,
      title: "2022 SIGMA Manila Luxury dinner party Sponsor"
    },
    {
      img: Presidential,
      title: "Presidential Party in Partnership with Conrad"
    },
  ]
  return (
    <div className="w-full">
      <section className="relative">
        <img src={MainBanner} alt="" className="absolute translate-x-[-50%] top-[50%] left-[50%] w-[774px] z-[1000000]"  />
        <video
          className="min-h-[100vh] object-cover"
          src={"https://dbgaming.com/video/DBGAMING.mp4"}
          muted

          // autoPlay
          controls
        // loop
        >
          <div className="overlay absolute top-0 left-0 w-[100%] h-[100%]"></div>
          <img src="https://dbgaming.com/img/sports111.png" alt="" />
        </video>
      </section>
      <section className="text-center py-[30px] flex justify-center">
        <div className="max-w-[1200px]">
          <div className="container">
            <Slider  {...settings}>
              <div className="px-[10px]">
                <SectionHeader title={t('Advantages')} />
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[10px]">

                  {advantages.map((item) => (
                    <div className="text-center flex flex-col justify-center items-center border border-[#ff9a53] rounded-[20px] p-[15px]">
                      <img src={item.icon} width={"80px"} alt="" />
                      <div className="text-[18px] text-[#6454f] mt-[10px] font-bold">{item.title}</div>
                      <p className="text-[#666] text-[13px]">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" px-[10px]">
                <div>
                  <SectionHeader title="About Us" />
                  <div className="grid grid-cols-1 text-left lg:grid-cols-2">
                    <div>
                      <div>
                        <div className="text-[24px] mb-[7px]">About DB</div>
                        <div className="leading-[30px] tracking-normal text-[14px]">
                          With the brand spirit "Do The Best, Double The Fun", DB
                          Gaming is committed to creating innovative games in the
                          industry, specializing in the fields of sports, live
                          games, e-sports, chess and card games, lotteries and
                          electronics field. DB Gaming has earned the trust of users
                          all over the world with its professional, safe and
                          excellent services.
                        </div>
                        <div className="text-[24px] mb-[7px]">Our projects</div>
                        <div className="leading-[30px] tracking-[1.56] text-[14px]">
                          The mission of DB Gaming is to constantly surpass itself plus provide hundreds of millions of users with the best entertainment experience. DB continuously strives to innovate, ensure security,committed to providing high-quality, reliable software solutions to meet customer needs
                        </div>
                      </div>
                      <Button text="Click to view" />
                    </div>
                    <div className="grid grid-cols-2">
                      {AboutUsData.map((item) => (
                        <div key={item.title} className="flex p-[16px] min-h-[250px] justify-center itmes-center flex-col relative text-center">
                          <img src={item.icon} width={"100%"} alt="" />
                          <div className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]">
                            <div className="z-[10] text-[42px]">{item.title}</div>
                            <div className="z-[10]">{item.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center h-auto py-[20px] text-white video">
        {videoData.map((item) => (
          <div className={item.id === selectItem ? "block" : "hidden"}>
            <div className="relative ">
              <video
                className="object-cover md:min-h-[1100px] lg:min-h-[800px] min-h-[1300px]"
                src={item.video}
                muted
                // autoPlay
                loop
              >
                <img src="https://dbgaming.com/img/sports111.png" alt="" />
              </video>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%]"></div>
            </div>
          </div>
        ))}

        <div className="absolute top-0 left-0 w-[100%] h-[100%]">
          <div className="relative text-center">
            <SectionHeader title="Products" />
            <div className="relative flex flex-wrap justify-center py-2">
              {menuItems.map((item, index) => (
                <div
                  key={item.label}
                  onClick={() => {
                    setSelectItem(item.label);
                  }}
                  className="cursor-pointer relative w-[155px] flex flex-col justify-center items-center mx-[-11px] px-5 py-3"
                >
                  {selectItem === item.label && (
                    <img
                      width={"100%"}
                      className="absolute"
                      src="https://dbgaming.com/img/companypage/sport_active.png"
                      alt=""
                    />
                  )}
                  {selectItem !== item.label && (
                    <img
                      width={"100%"}
                      className="absolute"
                      src="https://dbgaming.com/img/companypage/sport_defult.png"
                      alt=""
                    />
                  )}

                  <div className="z-[5]">{item.icon}</div>
                  <div className="z-[5] text-center text-[12px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            {videoData.map((data) => (
              <div className={data.id === selectItem ? "block" : "hidden"}>
                <div className="left-panel  flex-col flex justify-start text-left px-[200px] ml-[94px] media-p-x-10">
                  <div className="animation translate-y-[50%] z-10 w-auto sm:w-[552px]">
                    <div className={"text-[40px] mb-[29px] "}>{data.title}</div>
                    <div className="text-[17px] w-auto sm:w-[552px] mb-[63px]">
                      {data.content}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {data.list.map((item) => (
                        <div className="flex items-center mb-[32px]">
                          <img
                            src="https://dbgaming.com/img/tuoyuanxing.png"
                            className="w-[16px] h-[16px]"
                            alt=""
                          />
                          <span className="ml-[7px]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="media-hidden lg:absolute  mt-[60px] top-[130px] right-[0] w-[532px] img-animation"
                      src={data.img}
                      alt=""
                    />
                    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
                  </div>
                  <Button text={"Try now"} className="my-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col text-center py-[80px]">
        <div className="max-w-[1200px] px-[40px]">
          <div className="container">
            <SectionHeader title="Sub-line products" />
            <Slider responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
              }
            ]}  {...settings} slidesToShow={3} slidesToScroll={3} className="">
              {SubLineData.map(item =>
                <div className="relative" key={item.title}>
                  <img src={item.img} className="px-5 " alt="" />
                  <div className="absolute bottom-[25%] left-[50%] translate-x-[-50%]">{item.title}</div>
                  <Button text="Check out" className="absolute bottom-[10%] left-[50%] translate-x-[-50%]" />
                </div>
              )}
            </Slider>
          </div>
        </div>
      </section>
      <section className="relative w-full text-center py-[80px] justify-center items-center flex">
        <div className="max-w-[1200px]">
          <div className="container">
            <SectionHeader title="Collaboration" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[10px]">
              <img src={Kaiyun} className="grayscale hover:grayscale-0" alt="" />
              <img src={Sports} className="grayscale hover:grayscale-0" alt="" />
              <img src={Bbn} className="grayscale hover:grayscale-0" alt="" />
              <img src={Img6686} className="grayscale hover:grayscale-0" alt="" />
              <img src={Leyu} className="grayscale hover:grayscale-0" alt="" />
              <img src={Zenith} className="grayscale hover:grayscale-0" alt="" />
              <img src={Fun} className="grayscale hover:grayscale-0" alt="" />
              <img src={Mgty} className="grayscale hover:grayscale-0" alt="" />
              <img src={Tech} className="grayscale hover:grayscale-0" alt="" />
              <img src={Bd} className="grayscale hover:grayscale-0" alt="" />
              <img src={Bb} className="grayscale hover:grayscale-0" alt="" />
              <img src={M6} className="grayscale hover:grayscale-0" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full flex justify-center items-center text-center py-[80px]">
        <div className="max-w-[1200px]">
          <div className="container">
            <SectionHeader title="Promotions" />
            <Slider
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 1, slidesToScroll: 1 }
                }
              ]}  {...settings} slidesToShow={3} slidesToScroll={3} className="">
              {PromotionData.map(item =>
                <div className="relative px-[10px]">
                  <img src={item.img} alt="" className="rounded-tl-[5px] rounded-tr-[5px]" />
                  <div className="min-h-[100px] text-center bg-[#1c1021] text-white p-[14px] rounded-bl-[5px] rounded-br-[5px]">
                    {item.title}
                    <div className="pro-line"></div>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </section>
      <section className="relative w-full flex justify-center items-center text-center py-[80px]">
        <div className="max-w-[1200px]">
          <div className="container">
            <SectionHeader title="Industry Info" />
            <Slider
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 1, slidesToScroll: 1 }
                }
              ]}  {...settings} slidesToShow={3} slidesToScroll={3} className="">
              {IndustryData.map(item =>
                <div className="relative px-[10px] rounded-[5px]">
                  <img src={item.img} className="rounded-tl-[5px] rounded-tr-[5px]" alt="" />
                  <div className="min-h-[100px] rounded-bl-[5px] rounded-br-[5px] text-center bg-[#1c1021] text-white p-[14px]">
                    {item.title}
                    <div className="pro-line"></div>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </section>
    </div >
  );
};
export default Home;
