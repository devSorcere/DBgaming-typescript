import '../assets/styles/sidebar.css'
const SideBar: React.FC = () => {
    return (
        <div className="fixed  top-[50%] right-[10px] translate-y-[-50%] sidebar flex flex-col justify-between items-center pt-[25px]">
            <div className='flex flex-col items-center justify-center cursor-pointer icon-hover z-[100]'>
                <img src={"https://dbgaming.com/img/home/phone.svg"} className="z-[100]" alt="" />
                <div className='text-white scale-[0.85] text-[12px] mt-[5px] z-[100]'>Telephone</div>
                <div className="absolute overflow-hidden translate-x-[-66px] right-0 pl-[20px] py-[5px]">
                    <div className='text-[#ea5d2c] translate-x-[100%]    phone-box  px-[20px] py-[5px] h-[50px] w-[218px]  shadow-[0_5px_8px_1px_rgba(0,0,0,0.1)]  bg-white rounded-tl-[20px] rounded-bl-[20px] flex flex-col justify-center'>
                        <div className='text-[12px] leading-[15px]'>Telephone</div>
                        <div className='text-[14px] font-bold'>+63 951 666 6666</div>
                    </div>
                </div>

            </div>
            <div className='cursor-pointer'>
                <a href="https://api.whatsapp.com/send?phone=639516666666" className="flex flex-col items-center justify-center " rel="noreferrer" target='_blank' >
                    <img src={"https://dbgaming.com/img/home/phone.svg"} alt="" />
                    <div className='text-white scale-[0.85] text-[12px] mt-[5px]'>Whatsapp</div>
                </a>

            </div>
            <div className='cursor-pointer'>
                <a className="flex flex-col items-center justify-center " href="https://t.me/dbgame" rel="noreferrer" target='_blank' >
                    <img src="https://dbgaming.com/img/home/Telegram.svg" alt="" />
                    <div className='text-white scale-[0.85] text-[12px] mt-[5px]'>Telegram</div>
                </a>
            </div>
            <div className='cursor-pointer'>
                <a className="flex flex-col items-center justify-center " href="skype:live:.cid.e99e564c0b9126ee?chat" rel="noreferrer" target='_blank' >
                    <img src="https://dbgaming.com/img/home/skype.svg" alt="" />
                    <div className='text-white scale-[0.85] text-[12px] mt-[5px]'>Skype</div>
                </a>
            </div>
            <div className=''>
                <img src="https://dbgaming.com/img/home/top.svg" alt="" />
            </div>
        </div>
    )
}
export default SideBar;