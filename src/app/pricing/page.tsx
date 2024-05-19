"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const Pricing = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div className="bg-gray-bg">
      <Header />
      <div className="lg:w-[1140px] mx-auto h-auto font-custom-font flex flex-col">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-end items-center my-[80px]">
          <h1 className="lg:max-w-[689px] max-w-[450px] lg:text-6xl text-3xl font-bold">
            Choose the right plan
            <span className="text-gray-darked">  for your business</span>
          </h1>
          <p className="lg:max-w-[360px] max-w-[330px] lg:text-lg text-base mx-[70px] mt-5">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-2 mb-[80px] mx-[80px] lg:mx-0 gap-5">
          <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-7">
            <h3 className="lg:text-2xl text-xl font-bold">Starter</h3>
            <p className="lg:text-base items-end">
              Get organized and set up simple sales processes lorem ipsum
            </p>
            <p className="lg:text-5xl text-3xl font-bold items-end">
              $8,90<span className="text-gray-darked text-base">/month</span>
            </p>
            <div className="flex flex-col gap-2 text-center">
              <button className="lg:text-lg font-bold text-center py-2 border-2 border-gray-dark rounded-md hover:bg-gray-light">
                Try for Free
              </button>
              <p className="lg:text-sm text-gray-dark">
                Free 14-day trial. No credit card required.
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t-2 border-gray-dark">
              <li className="flex gap-2 mt-6">
                <img src="./assets/ic_done.png" alt="img"/>2 team members
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                1,000 Contacts & Companies
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>5 Campaign Workflows
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                10 Nodes Per Campaign
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>5 Automation Rules (Triggers)
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>3 Plugins/Integrations
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Marketing Automation
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Custom Deal Tracks
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Automated Voicemails
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Post-call Automation
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-7">
            <div className="flex gap-4">
              <h3 className="lg:text-2xl text-xl font-bold">Profesional</h3>
              <p className="text-xs font-bold uppercase text-green-tx bg-green-bg px-2 tracking-[1.2px] content-center">
                recommended
              </p>
            </div>

            <p className="lg:text-base items-end">
              Everything you need to boost performance and revenue lorem ipsum
            </p>
            <p className="lg:text-5xl text-3xl font-bold items-end">
              $29,90<span className="text-gray-darked text-base">/month</span>
            </p>
            <div className="flex flex-col gap-2 text-center">
              <button className="lg:text-lg font-bold text-center py-2 border-2 bg-button-bg text-white-text rounded-md hover:bg-gray-light">
                Try for Free
              </button>
              <p className="lg:text-sm text-gray-dark">
                Free 14-day trial. No credit card required.
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t-2 border-gray-dark">
              <li className="flex gap-2 mt-6">
                <img src="./assets/ic_done.png" alt="img"/>
                10 team members
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                2,500 Contacts & Companies
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>5 Campaign Workflows
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                10 Nodes Per Campaign
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>5 Automation Rules (Triggers)
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>3 Plugins/Integrations
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Marketing Automation
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Custom Deal Tracks
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Automated Voicemails
              </li>
              <li className="flex gap-2 text-gray-dark line-through">
                <img src="./assets/ic_done.png" alt="img"/>
                Post-call Automation
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-7">
            <h3 className="lg:text-2xl text-xl font-bold">Enterprise</h3>
            <p className="lg:text-base items-end">
              Customize without limits and access unrivaled support lorem ipsum
            </p>
            <p className="lg:text-5xl text-3xl font-bold items-end">
              $39,90<span className="text-gray-darked text-base">/month</span>
            </p>
            <div className="flex flex-col gap-2 text-center">
              <button className="lg:text-lg font-bold text-center py-2 border-2 border-gray-dark rounded-md hover:bg-gray-light">
                Try for Free
              </button>
              <p className="lg:text-sm text-gray-dark">
                Free 14-day trial. No credit card required.
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t-2 border-gray-dark">
              <li className="flex gap-2 mt-6">
                <img src="./assets/ic_done.png" alt="img"/>
                Unlimited team members
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                5,000 Contacts & Companies
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                25 Campaign Workflows
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                20 Nodes Per Campaign
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                15 Automation Rules (Triggers)
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                10 Plugins/Integrations
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Marketing Automation
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Custom Deal Tracks
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Automated Voicemails
              </li>
              <li className="flex gap-2">
                <img src="./assets/ic_done.png" alt="img"/>
                Post-call Automation
              </li>
            </ul>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:pb-[120px] pb-12 border-t-2 border-gray-darked mx-5 lg:mx-0">
          <h2 className="lg:text-3xl text-xl font-bold mt-12">
            Need help choosing right plan?
          </h2>
          <div className="flex gap-6 mt-12">
            <button className="lg:text-lg font-bold border-2 border-gray-light bg-white-text rounded-lg px-4 py-2 hover:bg-gray-light hover:cursor-pointer">
              Contact sales
            </button>
            <button className="lg:text-lg font-bold bg-blue-bg text-white-text rounded-lg px-4 py-2 hover:bg-gray-light hover:cursor-pointer">
              Compare plans
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white-text lg:items-end items-center pb-12">
        <h2 className="lg:max-w-[594px] max-w-[320px] lg:text-6xl text-3xl font-bold text-left mb-[80px] lg:ml-[190px] ml-12 pt-[120px] lg:mr-[760px]">
          Frequently asked questions
        </h2>
        <div className="lg:w-[945px] h-auto font-custom-font flex flex-col lg:mr-[190px] mx-5 lg:mx-0">
          <div className="flex flex-col border-t-2 border-gray-darked">
            <div className="flex justify-between lg:items-end items-start mb-12">
              <h3 className="lg:text-3xl text-xl font-bold lg:mt-10 mt-3">
                How Does Roooby CRM Compare To The Competition?
              </h3>
              <img onClick={toggleParagraphVisibility} src="./assets/add.png" alt="img"/>
            </div>
            {isParagraphVisible && (
              <p>
                Rooby CRM offers the most affordable, comprehensive platform to
                manage the entire customer journey, from generating leads, to
                closing deals and supporting your customers. With a full suite
                of CRM, sales enablement, marketing automation, and help
                desk/customer support capabilities, it’s all you need to manage
                the entire customer lifecycle. Most of our competitors offer one
                or two of these functions as separate products, leaving you with
                the headache of integrating them and increasing the overall
                price point.
              </p>
            )}
          </div>
          <div className="flex flex-col border-t-2 border-gray-darked mb-12 mt-5">
            <div className="flex justify-between lg:items-end items-start">
              <h3 className="lg:text-3xl text-xl font-bold lg:mt-10 mt-3">
                Can I Change Plans Or Cancel My Subscription At Any Time?
              </h3>
              <img onClick={toggleParagraphVisibility} src="./assets/add.png" alt="img"/>
            </div>
            {isParagraphVisible && (
              <p>
                Rooby CRM offers the most affordable, comprehensive platform to
                manage the entire customer journey, from generating leads, to
                closing deals and supporting your customers. With a full suite
                of CRM, sales enablement, marketing automation, and help
                desk/customer support capabilities, it’s all you need to manage
                the entire customer lifecycle. Most of our competitors offer one
                or two of these functions as separate products, leaving you with
                the headache of integrating them and increasing the overall
                price point.
              </p>
            )}
          </div>
          <div className="flex flex-col border-t-2 border-gray-darked mb-12 mt-5">
            <div className="flex justify-between lg:items-end items-start">
              <h3 className="lg:text-3xl text-xl font-bold lg:mt-10 mt-3">
                How Secure Is My Data With Roooby CRM?
              </h3>
              <img onClick={toggleParagraphVisibility} src="./assets/add.png" alt="img"/>
            </div>
            {isParagraphVisible && (
              <p>
                Rooby CRM offers the most affordable, comprehensive platform to
                manage the entire customer journey, from generating leads, to
                closing deals and supporting your customers. With a full suite
                of CRM, sales enablement, marketing automation, and help
                desk/customer support capabilities, it’s all you need to manage
                the entire customer lifecycle. Most of our competitors offer one
                or two of these functions as separate products, leaving you with
                the headache of integrating them and increasing the overall
                price point.
              </p>
            )}
          </div>
          <div className="flex flex-col border-t-2 border-gray-darked mb-12 mt-5">
            <div className="flex justify-between lg:items-end items-start">
              <h3 className="lg:text-3xl text-xl font-bold lg:mt-10 mt-3">
                What Is The Uptime Guarantee?
              </h3>
              <img onClick={toggleParagraphVisibility} src="./assets/add.png" alt="img"/>
            </div>
            {isParagraphVisible && (
              <p>
                Rooby CRM offers the most affordable, comprehensive platform to
                manage the entire customer journey, from generating leads, to
                closing deals and supporting your customers. With a full suite
                of CRM, sales enablement, marketing automation, and help
                desk/customer support capabilities, it’s all you need to manage
                the entire customer lifecycle. Most of our competitors offer one
                or two of these functions as separate products, leaving you with
                the headache of integrating them and increasing the overall
                price point.
              </p>
            )}
          </div>
          <div className="flex flex-col border-t-2 border-gray-darked mb-12 mt-5">
            <div className="flex justify-between lg:items-end items-start">
              <h3 className="lg:text-3xl text-xl font-bold lg:mt-10 mt-3">
                How Can I Add More Emails To My Account?
              </h3>
              <img onClick={toggleParagraphVisibility} src="./assets/add.png" alt="img"/>
            </div>
            {isParagraphVisible && (
              <p>
                Rooby CRM offers the most affordable, comprehensive platform to
                manage the entire customer journey, from generating leads, to
                closing deals and supporting your customers. With a full suite
                of CRM, sales enablement, marketing automation, and help
                desk/customer support capabilities, it’s all you need to manage
                the entire customer lifecycle. Most of our competitors offer one
                or two of these functions as separate products, leaving you with
                the headache of integrating them and increasing the overall
                price point.
              </p>
            )}
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Pricing;
