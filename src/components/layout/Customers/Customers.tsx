const Customers = () => {
  return (
    <div className=" bg-gray-bg">
      <div className="custom-container font-custom-font pt-10 pb-[80px]">
        <div className="flex lg:flex-row flex-col lg:items-end justify-between my-[80px] mx-9 lg:mx-0">
          <h3 className="lg:w-[570px] text-center lg:text-start lg:text-5xl text-3xl font-bold">
            We love our Customers and They love us too
          </h3>
          <p className="text-base text-end">
            See all <span className="text-green-300">{">"}</span>
          </p>
        </div>

        <div className="flex flex-nowrap mx-5 lg:mx-0 justify-between gap-7">
          <article>
            <img className="pb-10" src="./assets/apostrophe.png" />
            <p className="lg:text-xl text-sx border-t-2 border-gray-dark pt-5">
              The best thing we love about Yoora is it does two-way sync with
              Google Apps. It has helped us to better organize and keep
              everything on track.
            </p>
            <div className="flex gap-2 mt-10">
              <img src="./assets/customer1.png" />
              <div className="flex flex-col lg:text-base text-xs">
                <p className="font-bold">Lola Ross</p>
                <p>Marketing Director</p>
              </div>
            </div>
          </article>
          <article>
            <img className="pb-10" src="./assets/apostrophe.png" />
            <p className="lg:text-xl text-sx border-t-2 border-gray-dark pt-5">
              The best thing we love about Yoora is it does two-way sync with
              Google Apps. It has helped us to better organize and keep
              everything on track.
            </p>
            <div className="flex gap-2 mt-10">
              <img src="./assets/customer1.png" />
              <div className="flex flex-col lg:text-base text-xs">
                <p className="font-bold">Lola Ross</p>
                <p>Marketing Director</p>
              </div>
            </div>
          </article>
          <article>
            <img className="pb-10" src="./assets/apostrophe.png" />
            <p className="lg:text-xl text-sx border-t-2 border-gray-dark pt-5">
              The best thing we love about Yoora is it does two-way sync with
              Google Apps. It has helped us to better organize and keep
              everything on track.
            </p>
            <div className="flex gap-2 mt-10">
              <img src="./assets/customer1.png" />
              <div className="flex flex-col lg:text-base text-xs">
                <p className="font-bold">Lola Ross</p>
                <p>Marketing Director</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Customers;
