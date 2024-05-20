
const Benefits = () => {
  return (
    <div className="w-full h-auto bg-blue-bg font-custom-font lg:pt-12 pt-5 pb-[90px] text-white-text">
        <div className="lg:w-max-[1140px] flex flex-col mx-auto h-auto lg:flex-row justify-center lg:text-start text-center text-white-text pt-10 pb-12 mt-10 mb-12">
            <h2 className="lg:w-[633px] min-w-[350px] lg:text-5xl text-3xl mx-auto lg:mx-0 lg:text-left text-center font-bold pb-3 lg:pb-0">Here`s how Roooby can benefit your business</h2>
            <p className="lg:w-[487px] min-w-[350px] lg:text-left text-center mx-auto lg:mx-0">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
        </div>
        <div className="lg:custom-container lg:justify-center flex lg:flex-row flex-col items-center mx-2 lg:mx-0 gap-4 lg:gap-2">
            <section className="lg:w-[374px] lg:h-[439px] w-[374px] h-auto py-4 sm:pb-3 flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px] w-[30%]  sm:my-12 xs:my-12">
                    <img src='./assets/b1.svg' className='w-full group-hover:invert my-4 lg:my-0' alt="img"/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
            <section className="lg:w-[374px] lg:h-[439px] w-[374px] h-auto py-4 sm:pb-3 flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px] w-[30%] sm:my-12 xs:my-12">
                    <img src='./assets/b2.svg' className='w-full group-hover:invert my-4 lg:my-0' alt="img"/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
            <section className="lg:w-[374px] lg:h-[439px] w-[374px] h-auto py-4 sm:pb-3 flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px] w-[30%] sm:my-12 ">
                    <img src='./assets/b3.svg' className='w-full group-hover:invert my-4 lg:my-0' alt="img"/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
        </div>
    </div>
  );
};

export default Benefits;
