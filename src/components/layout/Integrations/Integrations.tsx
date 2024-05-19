const Integrations = () => {
    return (
      <div className="w-full h-auto flex flex-col font-custom-font text-center bg-gray-bg py-[100px]">
        <h2 className="lg:text-5xl text-3xl font-bold">Over 300+ integrations</h2>
        <p className="lg:text-lg mt-3 lg:mb-12 mb-8">Expand the capabilities of <span className="font-bold">Roooby</span> with hundreds of apps and integrations</p>
        <div className="lg:w-[1140px] lg:h-auto flex flex-wrap justify-center mx-auto gap-2">
            <img className="lg:w-[120px] lg:h-[120px]" src="./assets/app1.png" alt="img"/>
            <img className="lg:w-[288px] lg:h-[120px]" src="./assets/app2.png" alt="img"/>
            <img className="lg:w-[288px] lg:h-[120px]" src="./assets/app3.png" alt="img"/>
            <img className="lg:w-[120px] lg:h-[120px]" src="./assets/app4.png" alt="img"/>
            <img className="lg:w-[288px] lg:h-[120px]" src="./assets/app5.png" alt="img"/>
            <img className="lg:w-[372px] lg:h-[120px]" src="./assets/app6.png" alt="img"/>
            <img className="lg:w-[120px] lg:h-[120px]" src="./assets/app7.png" alt="img"/>
            <img className="lg:w-[120px] lg:h-[120px]" src="./assets/app8.png" alt="img"/>
            <img className="lg:w-[372px] lg:h-[120px]" src="./assets/app9.png" alt="img"/>
            <img className="lg:w-[120px] lg:h-[120px]" src="./assets/app10.png" alt="img"/>
        </div>
        <p className="lg:text-2xl font-bold mt-12 pt-8">See all apps and extensions {'>'}</p>
      </div>
    );
  };
  
  export default Integrations;