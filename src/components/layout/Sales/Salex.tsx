const Sales = () => {
    return (
      <div className="custom-container flex lg:flex-row gap-12 flex-col lg:justify-center border-t-2 border-gray-dark font-custom-font lg:pt-10 pb-12">
        <div className="lg:w-[487px] w-[420px] mx-auto lg:mx-0 lg:h-auto flex flex-col items-start pr-5 mt-12">
            <p className="uppercase bg-yellow lg:text-sm text-xs font-bold px-2 py-1 rounded-md mb-3">sales</p>
            <h2 className="lg:text-5xl text-3xl leading-relaxed font-bold">Increase company revenue up to 65%</h2>
            <p className="mt-7 lg:text-lg leading-7">Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
            <ul className="lg:text-lg mt-5">
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Close more deals with single-page contact management</li>
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Enjoy one-click calling, call scripts and voicemail automation</li>
                <li className="flex items-start mb-3"><img className="mr-3" src="./assets/list.svg" alt="img"/>
                    Track stages and milestones of your deals to keep the sales process on track</li>
            </ul>
        </div>
        <div className="lg:w-[555px] w-[450px] flex mx-auto lg:mx-0 lg:h-[555px] h-auto relative">
            <img className="lg:w-full h-auto rounded-lg bg-blue-bg py-12 px-[60px]" src="./assets/sales1.png" alt="img"/>
            <img className="lg:w-[50%] w-[30%] absolute top-[80px] right-8" src="./assets/sales2.png" alt="img"/>
        </div>
      </div>
    );
  };
  
  export default Sales;