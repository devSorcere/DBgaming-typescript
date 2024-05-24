import "../assets/styles/button.css";

interface ButtonProps {
  text: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex items-center justify-start mt-10 gap-x-6 ${className}`}>
      <button className="relative button flex items-center justify-center text-center w-[210px] h-[55px] border-[#FC8615] rounded-md px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-[#000] border-[3px] bg-[#FC8615]   hover:transition-colors rounded-[7px 7px 7px 7px]">
        <span className="z-[10]">{text}</span>
        <div className="absolute up down bg-[#000] top-[-3px] rounded-tr-[15px] right-[-3px] "></div>
        <div className="absolute up down bg-[#000] bottom-[-3px] rounded-bl-[15px]  left-[-3px]"></div>
      </button>
    </div >
  );
};
export default Button;
