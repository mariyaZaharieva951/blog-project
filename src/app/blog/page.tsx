"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="bg-gray-bg">
      <Header />
      <div className="lg:w-[1140px] mx-auto h-auto font-custom-font flex flex-col">
        <div className="flex flex-col gap-[120px] justify-center lg:items-start items-center mt-[80px]">
          <h1 className="lg:w-[689px] lg:text-6xl text-3xl font-bold">
            News and insights
            <span className="text-gray-darked"> from our experts</span>
          </h1>
          <div className="lg:w-[689px]">
            <ul className="flex lg:gap-[60px] gap-10 justify-start text-nowrap">
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                All Articles
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer  hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Sales
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Marketing
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                <Link href="/service">Service</Link>
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Product
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                News
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white-text">
        <div className="lg:w-[1140px] mx-auto lg:custom-container flex flex-col lg:flex-row gap-7 py-[100px] font-custom-font">
          <div className="flex flex-col items-start border-t-2 border-b-2 py-7 border-gray-darked mx-7 lg:mx-0">
            <p className="lg:text-sm text-xs uppercase text-gray-darked mb-5">
              Service
            </p>
            <h2 className="lg:text-4xl text-xl  font-bold">
              The 2024 State of Marketing & Trends Report: Data from 1400+
              Global Marketers
            </h2>
            <p className="lg:text-base text-sm mt-[125px]">
              05 Sep 2024,<span className="font-bold"> by Maxwell Iskiev</span>
            </p>
          </div>
          <img
            className="w-[555px] h-[370px] mx-auto lg:mx-0"
            src="./assets/blog-img.png" alt="img"
          />
        </div>

        <div className="lg:w-[1140px] mx-auto flex lg:flex-row flex-col justify-center flex-nowrap gap-7 mb-[80px]">
          <div className="flex flex-col gap-3 items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              News
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog1.png"  alt="img"/>
            <h3 className="w-[361px] font-bold lg:text-2xl text-xl">
              Learn from My Mistakes: 7 Digital Course Pitfalls to Skip
            </h3>
            <p className="lg:text-base text-sm mt-3">
              29 Jun 2024,
              <span className="font-bold text-gray-darked">
                {" "}
                by Joshua Nash
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Sales
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog2.png" alt="img"/>
            <h3 className="w-[361px]  font-bold lg:text-2xl text-xl">
              How To Do Representation in Marketing the Right Way
            </h3>
            <p className="lg:text-base text-sm mt-3">
              20 Mar 2022,
              <span className="font-bold text-gray-darked">
                {" "}
                by Bill Hollaway
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Sales
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog3.png" alt="img"/>
            <h3 className="w-[361px]  font-bold lg:text-2xl text-xl">
              The Psychology of Short-Form Content: Why We Love...
            </h3>
            <p className="lg:text-base text-sm mt-3">
              07 Jun 2024,
              <span className="font-bold text-gray-darked">
                {" "}
                by Stephen Henderson
              </span>
            </p>
          </div>
        </div>

        <div className="lg:w-[1140px] mx-auto flex lg:flex-row flex-col flex-nowrap gap-7">
          <div className="flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Sales
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog4.png" alt="img"/>
            <h3 className="w-[361px] font-bold lg:text-2xl text-xl">
              The Challenger Sale model: How to lead the conversation
            </h3>
            <p className="lg:text-base text-sm mt-3">
              09 Jan 2024,
              <span className="font-bold text-gray-darked">
                {" "}
                by Joshua Nash
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Product
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog5.png" alt="img"/>
            <h3 className="w-[361px] font-bold lg:text-2xl text-xl">
              3 ways To automate your lead generation process
            </h3>
            <p className="lg:text-base text-sm mt-3">
              08 Jul 2024,
              <span className="font-bold text-gray-darked">
                {" "}
                by Leroy Fugueroa
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Product
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog6.png" alt="img"/>
            <h3 className="w-[361px] font-bold lg:text-2xl text-xl">
              Marketplace Monthly Apps Spotlight: Aug 2023
            </h3>
            <p className="lg:text-base text-sm mt-3">
              05 Aug 2024,
              <span className="font-bold text-gray-darked">
                {" "}
                by Joshua Nash
              </span>
            </p>
          </div>
        </div>

        <div className="lg:w-[1140px] mx-auto mt-[80px] px-7">
          <p className="text-sm text-gray-dark uppercase text-left mb-3">
            Marketing
          </p>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-5">
            <div className="lg:w-[555px] lg:h-[581px] flex flex-col lg:items-start  gap-7 border-t-2 border-gray-dark pt-4">
              <img src="./assets/blog-marketing.png" alt="img"/>
              <h3 className="lg:w-[555px] lg:text-3xl text-xl font-bold">
                Email marketing best practices: 10 experts share their email
                tips
              </h3>
              <p className="lg:text-base text-sm mt-3">
                23 Nov 2023,
                <span className="font-bold text-gray-darked">
                  {" "}
                  by Joshua Nash
                </span>
              </p>
            </div>
            <div className="lg:w-[555px] lg:h-[581px] flex flex-col items-start">
              <div className="lg:w-[555px] flex flex-col items-start gap-5 border-t-2  border-gray-dark">
                <h3 className="lg:text-3xl text-xl font-bold mt-5">
                  Access Roooby leads features on your mobile
                </h3>
                <div className="lg:w-full flex justify-between gap-3">
                  <p className="lg:text-base text-sm mb-7">
                    11 Aug 2023,
                    <span className="font-bold text-gray-darked">
                      {" "}
                      by Joshua Nash
                    </span>
                  </p>
                  <p className="lg:text-base text-sm text-gray-darked uppercase font-bold">
                    Product
                  </p>
                </div>
              </div>
              <div className="lg:w-[555px] flex flex-col items-start gap-5 border-t-2  border-gray-dark">
                <h3 className="lg:text-3xl text-xl font-bold mt-5">
                  Sales presentations: templates, examples and ideas on how to
                  present like a pro
                </h3>
                <div className="lg:w-full flex justify-between gap-3">
                  <p className="lg:text-base text-sm mb-7">
                    11 Oct 2022,
                    <span className="font-bold text-gray-darked">
                      {" "}
                      by Laura Ryan
                    </span>
                  </p>
                  <p className="lg:text-base text-sm text-gray-darked uppercase font-bold">
                    Sales
                  </p>
                </div>
              </div>
              <div className="lg:w-[555px] flex flex-col items-start gap-5 border-t-2  border-gray-dark">
                <h3 className="lg:text-3xl text-xl font-bold mt-5">
                  How To Deliver a Successful Product Launch
                </h3>
                <div className="lg:w-full flex justify-between gap-3">
                  <p className="lg:text-base text-sm">
                    30 Jan 2022,
                    <span className="font-bold text-gray-darked">
                      {" "}
                      by Alice Washington
                    </span>
                  </p>
                  <p className="lg:text-base text-sm text-gray-darked uppercase font-bold">
                    News
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[1140px] mx-auto flex lg:flex-row flex-col flex-nowrap gap-7 pb-[100px] pt-[80px] px-7 lg:px-0">
          <div className="w-[361px] flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Service
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog7.png" alt="img"/>
            <h3 className="w-[361px] font-bold lg:text-2xl text-xl">
              Sales Funnels: Definition, Process, Stages and Examples
            </h3>
            <p className="lg:text-base text-sm mt-3">
              01 Dec 2022,
              <span className="font-bold text-gray-darked">by Edith Rose</span>
            </p>
          </div>
          <div className="w-[361px] flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Sales
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog8.png" alt="img"/>
            <h3 className="w-[361px]  font-bold lg:text-2xl text-xl">
              What is a sales and how do you build one?
            </h3>
            <p className="lg:text-base text-sm mt-3">
              29 Mar 2022,
              <span className="font-bold text-gray-darked">
                by Amanda Brooks
              </span>
            </p>
          </div>
          <div className="w-[361px] flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="text-base text-sm text-gray-darked uppercase font-bold">
              Service
            </p>
            <img className="w-[361px] h-[241px]" src="./assets/blog9.png" alt="img"/>
            <h3 className="w-[361px]  font-bold lg:text-2xl text-xl">
              10 real estate cold calling scripts to increase lead
            </h3>
            <p className="lg:text-base text-sm mt-3">
              27 Dec 2022,
              <span className="font-bold text-gray-darked">
                by Roxie Sandoval
              </span>
            </p>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default Blog;
