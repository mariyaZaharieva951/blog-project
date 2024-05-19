const Marketing= () => {
    return (
      <div className="custom-container flex lg:flex-row gap-12 flex-col lg:justify-between mx-12 border-t-2 border-gray-dark font-custom-font pt-10 pb-12">
        <div className="lg:w-[555px] w-[500px] mx-auto lg:mx-0 flex lg:h-[555px]">
            <img className="lg:w-full h-auto rounded-lg" src="./assets/marketing.png"/>
        </div>
        <div className="lg:w-[487px] w-[420px] mx-auto lg:h-auto flex flex-col items-start pt-5 mt-12">
            <p className="uppercase bg-yellow lg:text-sm text-xs font-bold px-2 py-1 rounded-md mb-3">marketing</p>
            <h2 className="lg:text-5xl text-3xl leading-relaxed font-bold">Marketing</h2>
            <p className="mt-7 lg:text-lg leading-7">Market like the most successful companies in the world with Agile CRM`s marketing automation software. </p>
            <ul className="lg:text-lg mt-5">
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Marketing workflows with an easy drag-and-drop designer</li>
                <li className="flex items-start mb-3"><img  className="mr-3" src="./assets/list.svg" alt="img"/>
                    Use our templates to create high converting, mobile responsive landing pages</li>
                <li className="flex items-start mb-3"><img  className="mr-3" src="./assets/list.svg" alt="img"/>
                    Integrate social media easily into your marketing campaigns & contact views</li>
            </ul>
        </div>
      </div>
    );
  };
  
  export default Marketing;