interface TitleProps {
  title: string;
  className?: string;
}
const SectionHeader: React.FC<TitleProps> = ({ title, className = "" }) => {
  return (
    <div className="mb-[30px]">
      <h2 className={`text-[36px] relative font-medium ${className}`}>{title}</h2>
      <div className="line ">
        <span className="bg-[#ffc10f]"></span>
        <span className="bg-[#ffc10f]"></span>
        <span className="bg-[#ff7e04]"></span>
      </div>{" "}
    </div>
  );
};
export default SectionHeader;
