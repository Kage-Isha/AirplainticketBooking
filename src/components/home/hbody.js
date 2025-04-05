import Menu from "./selection";

const Hbody = () => {
    return (
        <section className="bg-bannerImg bg-no-repeat bg-cover flex flex-col items-center justify-center h-screen " >
            <div className=" pb-11 ">
                <h1 className="text-[5rem] justify-center md:text-[6rem] text-center p-5 pb-8 items-center inline-block  bg-gradient-to-r from-blue-300 via-prime-100 to-blue-300 text-transparent bg-clip-text">It's more than <br />just a trip</h1>
            </div>
            <Menu/>
        </section>
    );
};
export default Hbody;