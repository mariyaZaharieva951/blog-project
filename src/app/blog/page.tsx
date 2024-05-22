"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Link from "next/link";
import BlogComponent from "@/components/layout/Blog/Blog";

const Blog = () => {

  return (
    <div className="bg-gray-bg">
      <Header />
      <BlogComponent/>
      <Cta />
      <Footer />
    </div>
  );
};

export default Blog;
