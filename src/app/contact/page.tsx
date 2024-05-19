"use client";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

import Clients from "@/components/layout/Hero/Clients";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-bg">
        <Header />
      </div>
      <div className=" bg-gray-bg pt-[80px] pb-[70px] mb-12 lg:mb-0">
        <div className="lg:w-[1140px] mx-auto bg-gray-bg ">
          <h2 className="lg:w-[555px] lg:h-[148px] lg:text-6xl text-3xl font-bold mx-12 lg:mx-0">
            Get in touch with our lovely team
          </h2>
          <div className="lg:w-full mx-auto flex lg:flex-row flex-col gap-10">
            <div className="lg:w-[555px] lg:h-[462px]">
              <p className="font-bold lg:text-lg text-base mx-12 lg:mx-0">
                Roooby Technologies
              </p>
              <p className="lg:text-lg text-base text-gray-darked pb-5 mx-12 lg:mx-0">
                Plovdiv, Bulgaria, bul Vasil Levski 96
              </p>
              <iframe className="mx-12 lg:mx-0 lg:h-[288px] h-[326px] w-[555px]"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d23661.304981853667!2d24.73369452710239!3d42.157495207563706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2z0KHQtdCy0LXRgNC10L0sINGD0LsuIOKAntCS0LDRgdC40Lsg0JvQtdCy0YHQutC44oCcIDk2LCA0MDAzINCf0LvQvtCy0LTQuNCy!3m2!1d42.1625957!2d24.743444399999998!5e0!3m2!1sbg!2sbg!4v1714642166594!5m2!1sbg!2sbg"
width="458"
                loading="lazy"
              ></iframe>
              <div className="flex justify-between gap-12 pt-5 mx-12 lg:mx-0">
                <div className="border-l-2 border-gray-darked pl-2">
                  <p className="font-bold lg:text-lg text-base">General</p>
                  <p className="lg:text-lg text-base text-gray-darked">
                    hello@me.com
                  </p>
                </div>
                <div className="border-l-2 border-gray-darked pl-2">
                  <p className="font-bold lg:text-lg text-base">Support</p>
                  <p className="lg:text-lg text-base text-gray-darked">
                    support@me.com
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <form className="lg:w-[555px] p-8">
                <div className="mb-4">
                  <input
                    className="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[60px]"
                    id="field1"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[60px]"
                    id="field2"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[180px] placeholder-top-0"
                    id="field3"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  className="lg:text-lg text-sm bg-green-tx text-white-text py-2 px-4 rounded-md"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Clients />
      <div className="pb-[100px]"></div>
      <Footer />
    </div>
  );
};

export default Contact;
