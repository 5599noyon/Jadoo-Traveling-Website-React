
const Button = ({ TagName = "button", btnStyle = "default", children, ...props }) => {
    const buttonStyle = () => { // Renamed buttonStyle1 to buttonStyle
        if (btnStyle === "default") {
            return " bg-transparent border-[1px] border-[#212832] hover:bg-blue-500  hover:text-blue-50  btn ";
        }
        if (btnStyle === "secondery") {
            return " bg-transparent border-[1px] border-[#212832] hover:bg-green-500  hover:text-blue-50  btn text-nowrap ";
        }
        if (btnStyle === "third") {
            return " bg-[#F1A501] border-none rounded-[10px] py-[28px] px-[18px] text-[#FFFFFF] text-[18px] btn ";
        }
        if (btnStyle === "play") {
            return " bg-[#DF6951] border-none rounded-[50%] py-[20px] px-[20px] cursor-pointer text-[#FFFFFF] shadow-2 ";
        }
        if (btnStyle === "information") {
            return " bg-[#FF7D68] border-none rounded-[10px] py-[22px] px-[50px]  text-[#FFFFFF] font-semibold text-[17px] font-open-sans ";
        }
    };

    return (
        <TagName className={buttonStyle()} {...props}> {/* Use the defined buttonStyle function and spread props */}
            {children}
        </TagName>
    );
};

export default Button;