const Cta = () => {
    return (
      <div className="lg:w-full h-[468px] bg-[url('/assets/cta.png')] bg-no-repeat bg-cover bg-center relative">
        <div className="custom-container flex lg:flex-row flex-col lg:justify-between font-custom-font text-white-text absolute inset-0 flex items-center justify-center text-white">
           <div className="lg:w-[570px] mx-5 lg:mx-0 text-center lg:text-start mb-7 lg:mb-0">
                <h3 className="text-center lg:text-start lg:text-5xl text-3xl font-bold mb-7">Ready to supercharge your business?</h3>
                <p>Ask about Roooby products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
           </div>
            <div className="text-center">
                <button className="lg:text-base text- bg-white-text px-4 py-2 rounded-md text-black-tx font-bold hover:bg-gray-light">Try for Free {'>'}</button>
                <p className="lg:text-sm text-xs mt-3">Full access. No credit required</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Cta;