const News = () => {
    return (
        <div className="custom-container font-custom-font">
            <div className="flex items-end justify-between mt-12 ml-9 lg:ml-0">
                <h2 className="lg:text-6xl text-4xl font-bold">What`s new at Rooby?</h2>
                <p className="text-base text-nowrap">See all <span className="text-green-300">{'>'}</span></p>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-10 mt-12 mx-2 lg:mx-0">
                <div className="lg:w-[555px] lg:h-[580px]">
                    <p className="text-gray-dark font-bold uppercase">service</p>
                    <img className="border-t-2 border-gray-dark pt-6" src="./assets/new1.png" alt="img"/>
                    <h3 className="lg:text-3xl font-bold text-xl mt-5">How To Deliver a Successful 
                        Product Launch</h3>
                    <p className="text-gray-dark text-base mt-5"><span className="font-bold text-black-tx">05 Sep 2024,</span> by Joshua Nash</p>
                </div>
                <div className="lg:w-[555px] lg:h-[580px]">
                    <p className="text-gray-dark uppercase font-bold">service</p>
                    <img className="border-t-2 border-gray-dark pt-6" src="./assets/new2.png" alt="img"/>
                    <h3 className="lg:text-3xl font-bold text-xl mt-5">What Makes an Authentic Employee Profile, and Why Does It Matter?</h3>
                    <p className="text-gray-dark text-base mt-5"><span className="font-bold text-black-tx">07 Sep 2023,</span> by Ivan Neshev</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default News;