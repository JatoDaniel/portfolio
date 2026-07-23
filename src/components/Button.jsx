


 const Button= ({
    className="",
     size= "default",
     children ,
    }) =>{
        const baseClasses =
        "relative overflow-hidden   rounded-full bg-[#D4AF37] text-white hover:[#C59B27] px-6 py-3";

        const sizeClasses ={
            sm: "px-4 py-2 text-sm",
            default : "px-6 py-6 text-base",
            lg : " px-8 py-4 text-lg",
        };

        const classes = `${baseClasses}  ${sizeClasses [size]}  ${className}`;
        
        return(
            <button className= {classes} >
                { children}
            </button>
        );
     };
     export default Button;