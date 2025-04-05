const B=({name,onclick})=>{
    return(
        <button onClick={onclick} className=" bg-prime-50 p-2   md:py-3 md:px-5 rounded-[5px] border-2 border-prime-50 text-base text-[#FAFAFA] hover:text-[#605DEC] hover:bg-white hover:border-2 hover:border-prime-50 transition-all duration-200"  >{name}</button>
    );
};  
export default B;