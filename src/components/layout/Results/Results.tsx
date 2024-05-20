const Results = () => {
    return (
        
        <div className="custom-container font-custom-font lg:pt-[180px] pt-[80px]">
            <div className="mb-12 text-center lg:text-left">
                <h3 className="font-bold lg:text-5xl text-3xl mb-3">Real-life results and revenue</h3>
                <p className="text-lg">See how companies, like yours have smashed their sales success goals</p>
            </div>
            <div>
                <article className="flex justify-between items-start border-t-2 gap-6 lg:gap-0 border-[#787878] py-12 mx-10 lg:mx-0">
                    <div className="flex flex-col">
                        <p className="lg:text-7xl text-2xl text-nowrap">$2.5 M</p>
                        <p className="lg:text-xl text-md text-wrap">Generate sales</p>
                    </div>
                    <div className="lg:w-[749px]">
                        <p className="lg:text-lg text-md">Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
                        <div className="flex items-center lg:gap-2 gap-5 mt-5">
                            <img className="w-[48px] h-[48px]" src="./assets/user1.png" alt="img"/>
                            <div className="flex lg:flex-row flex-col lg:text-base text-sm">
                                <p className="font-bold">Nellie Foster</p>
                                <p>Founder & CEO, Foster Business Strategies</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex justify-between items-start border-t-2 gap-6 lg:gap-0 border-[#787878] py-12 mx-10 lg:mx-0">
                    <div className="flex flex-col">
                        <p className="lg:text-7xl text-2xl text-nowrap">45%</p>
                        <p className="lg:text-xl text-md text-wrap">Grew revenue</p>
                    </div>
                    <div className="lg:w-[749px]">
                        <p className="lg:text-lg text-md">Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                        <div className="flex items-center lg:gap-2 gap-5 mt-5">
                            <img className="w-[48px] h-[48px]" src="./assets/user2.png" alt="img"/>
                            <div className="flex lg:flex-row flex-col lg:text-base text-sm">
                                <p className="font-bold">Lawrence Gibbs</p>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
  };
  
  export default Results;