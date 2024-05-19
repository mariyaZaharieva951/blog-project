"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const Service = () => {
  return (
    <div>
        <div className="bg-gray-bg">
      <Header />
      </div>
      <div className="w-full bg-gray-bg pt-[80px]">
      <div className="lg:w-[1140px] mx-auto h-auto font-custom-font flex flex-col">
        <div className="lg:w-[865px] mx-auto flex flex-col gap-3 items-start">
          <p className="lg:text-sm text-xs uppercase text-gray-darked ml-12">Service</p>
          <div className="lg:w-full">
            <div className="flex flex-col gap-5  border-t-2  border-gray-dark mx-12">
              <h2 className="lg:text-5xl text-3xl font-bold mt-5">
                The Psychology of Short-Form Content: Why We Love Bite
              </h2>
              <p className="lg:text-base text-sm mb-[60px]">
                05 Sep 2024,<span className="font-bold"> by Joshua Nash</span>
              </p>
            </div>
           
          </div>
        </div>
        <img
              className="lg:w-[945px] mx-auto lg:h-[511px]"
              src="./assets/service-blog.png"
              alt="img" />
      </div>
      </div>

      <div className="lg:w-[750px] mx-auto flex  flex-col gap-5 px-[60px] lg:px-[25] my-[60px] bg-white-text">
        <p className="lg:text-lg  text-base font-bold mb-8">
          The Psychology of Short-Form Content: Why We Love Bite-Sized Videos.
          The Psychology of Short-Form Content: Why We Love Bite-Sized Videos.
          The Psychology of Short-Form Content: Why We Love Bite-Sized Videos
        </p>
        <h2 className="lg:text-5xl text-3xl font-bold">
          What is a sales funnel?
        </h2>
        <p className="lg:text-lg  text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
         </p> 
        <p className="lg:text-lg text-base mt-3">  
           Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
        <p className="lg:text-2xl text-lg font-bold border-t-2  border-gray-dark pt-3">
          “At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident”
        </p>
        <div className="flex flex-col  gap-5">
          <p className="text-base  text-gray-darked"> Matthew Barker </p>
          <img className="w-[748px] h-[405px]" src="./assets/barker.png" alt="img"/>
        </div>
        <h2 className="lg:text-5xl text-3xl font-bold mt-12">
          What is a sales funnel?
        </h2>
        <p className="lg:text-lg  text-base">
          In order to fully answer the question “What is a sales funnel?”, we
          need to tackle the different steps of the funnel. While different
          organizations have their own ways of managing and naming the sales
          process and customer touchpoints, these are usually structured into
          three distinct stages.
        </p>
        <h3 className="lg:text-3xl text-xl font-bold mt-10">
          1. Top of the sales funnel: Awareness and discovery
        </h3>
        <p className="lg:text-lg  text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
         </p> 
          <p className="lg:text-lg  text-base mt-3">  
          Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
        <div className="flex justify-between  border-y-2 border-gray-darked py-3 mb-[120px]">
          <div className="flex gap-3 items-center my-3">
            <img src="./assets/oval.png" alt="img"/>
            <div className="flex flex-col">
              <p className="font-bold">Brandon Show</p>
              <p className="text-gray-dark">Founder & CEO</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="./assets/facebook.png" alt="img"/>
            <img src="./assets/twitter.png" alt="img"/>
            <img src="./assets/linkedin.png" alt="img"/>
          </div>
        </div>
        
      </div>

      <div className="w-[full] bg-gray-bg">
            <h2 className="lg:w-[945px] mx-auto lg:text-5xl ml-[190px] text-3xl font-bold pt-[60px]">More from this topic</h2>
            <div className="lg:w-[1140px] mx-auto flex lg:flex-row flex-col items-center flex-nowrap gap-7 pb-[100px] pt-[80px]">
          <div className="w-[361px] flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="lg:w-full text-base text-sm border-b-2 border-gray-darked pb-5 text-gray-darked uppercase font-bold ">
              Service
            </p>
            <img className="w-[361px] h-[241px] mt-3" src="./assets/blog7.png" alt="img"/>
            <h3 className="lg:w-[361px] font-bold lg:text-2xl text-xl">
            Sales Funnels: Definition, Process, Stages and Examples
            </h3>
            <p className="lg:text-base text-sm mt-3">
            01 Dec 2022,
              <span className="font-bold text-gray-darked">
               by Edith Rose
              </span>
            </p>
          </div>
          <div className="w-[361px] flex flex-col gap-3 lg:items-start mx-[130px] lg:mx-0">
            <p className="lg:w-full text-base text-sm border-b-2 border-gray-darked pb-5 text-gray-darked uppercase font-bold">
              Sales
            </p>
            <img className="w-[361px] h-[241px] mt-3" src="./assets/blog8.png" alt="img"/>
            <h3 className="lg:w-[361px]  font-bold lg:text-2xl text-xl">
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
            <p className="lg:w-full text-base text-sm border-b-2 border-gray-darked pb-5 text-gray-darked uppercase font-bold">
              Service
            </p>
            <img className="w-[361px] h-[241px] mt-3" src="./assets/blog9.png" alt="img"/>
            <h3 className="lg:w-[361px]  font-bold lg:text-2xl text-xl">
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

export default Service;
