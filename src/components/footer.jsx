
import FooterLogo from "../assets/images/gcb.png"

const Footer = () => {
    return (
        <div>
            <div className="bg-[#1c1c1c] flex border-solid justify-center items-center border-b-[2px] min-h-[100px] border-b-[#444]">

                <img src={FooterLogo} className="w-[56px] h-[66px] mr-[10px]" alt="" />
                <div className="text-[#595b5c]">库拉索博彩控制委员会（GCB）</div>
            </div>
            <div className="bg-[#1c1c1c] flex justify-center items-center min-h-[100px]">
                <div className="text-[#919092]">DB GAMING 多寶游戏 ALL RIGHTS RESERVED</div>
            </div>
        </div>
    )
}
export default Footer;