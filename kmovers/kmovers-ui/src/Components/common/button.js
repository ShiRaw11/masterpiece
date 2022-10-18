

function Button ({text, buttonType, style,onClickButtonHandler,}){

  return (
    <>
        <button className={`items-center  justify-center  transition-colors duration-200 ease-in-out bg-buttonBlue text-black w-[250px] h-[50px] rounded-lg text-[18px] font-medium  hover:font-bold  hover:outline-none 
        ${ style ? style : ""}`}
         type={`${buttonType ? buttonType : "button"}`} 
         onClick={onClickButtonHandler}>
         {text}
     
        </button>
    </>
  )
}



export default Button;