const Service = () => {
    return (
      <div className="custom-container flex lg:flex-row gap-12 flex-col lg:justify-between border-t-2 border-gray-dark font-custom-font lg:pt-10 pb-12">
        <div className="lg:w-[487px] w-[420px] mx-auto lg:mx-0 lg:h-auto flex flex-col items-start pr-5 mt-12">
            <p className="uppercase bg-yellow lg:text-sm text-xs font-bold px-2 py-1 rounded-md mb-3">service</p>
            <h2 className="lg:text-5xl text-3xl leading-relaxed font-bold">Help Desk Software</h2>
            <p className="mt-7 lg:text-lg leading-7">Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. </p>
            <ul className="lg:text-lg mt-5">
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Close more deals with single-page contact managementResolve every issue in the shortest possible time with powerful ticketing features</li>
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</li>
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</li>
            </ul>
        </div>
        <div className="lg:w-[555px] w-[500px] flex mx-auto lg:mx-0 lg:h-[555px]">
            <img className="lg:w-full h-auto" src="./assets/service.png" alt="img"/>
        </div>
      </div>
    );
  };
  
  export default Service;