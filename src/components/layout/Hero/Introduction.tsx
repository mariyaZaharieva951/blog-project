import Form from "./Form";

const Introduction = () => {
  return (
    <div className=" flex lg:w-[1180px] lg:flex-row flex-col mx-auto relative mt-7 pt-7 pb-5 gap-1">
      <div className="flex flex-col lg:items-start items-center font-custom-font w-full lg:w-max-[639px] lg:">
        <h1 className="w-full lg:text-left text-center lg:w-[652px] lg:text-6xl text-4xl text-blue-h font-bold tracking-[-0.89px] leading-tight z-1">
          Bringing companies and customers together, anywhere
        </h1>
        <p className="text-lg lg:text-left text-center leading-7 lg:w-[452px] mt-12 lg:mb-10 lg:pr-12">
          An awesome & powefull tools for your business, increase business
          revenue with enterprise-grade links built to acquire and engage
          cutomers.
        </p>
        <Form />
      </div>
      <img className="lg:w-[757px] lg:h-[548px] w-full h-auto" src="./assets/hero-whole.png"/>
    </div>
  );
};

export default Introduction;
