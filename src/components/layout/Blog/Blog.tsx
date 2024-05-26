"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BlogComponent = () => {
  const [newData, setNewData] = useState<
    {
      id: number;
      title: string;
      imageUrl: string;
      body: string;
      date: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePosts = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=50"
        );

        if (!responsePosts.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postsData = await responsePosts.json();

        const responsePhotos = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=50"
        );
        if (!responsePhotos.ok) {
          throw new Error("Failed to fetch photos");
        }
        const photosData = await responsePhotos.json();

        const data: {
          id: number;
          title: string;
          imageUrl: string;
          body: string;
          date: string;
        }[] = [];

        postsData.forEach((post: any, index: number) => {
          const newPost = {
            ...post,
            imageUrl: photosData[index].url,
          };

          data.push(newPost);
        });
        setNewData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="lg:w-[1140px] mx-auto h-auto font-custom-font flex flex-col">
        <div className="flex flex-col gap-[120px] justify-center lg:items-start items-center mt-[80px]">
          <h1 className="lg:w-[689px] lg:text-6xl text-3xl font-bold text-center lg:text-start">
            News and insights
            <span className="text-gray-darked"> from our experts</span>
          </h1>
          <div className="lg:w-[689px]">
            <ul className="flex lg:gap-[60px] gap-3 justify-start text-nowrap mx-2 lg:mx-0">
              <li className=" text-gray-darked lg:text-lg text-sm pb-7 hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                All Articles
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-sm hover:cursor-pointer  hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Sales
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-sm hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Marketing
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-sm hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                <Link href="/service">Service</Link>
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-sm hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                Product
              </li>
              <li className=" text-gray-darked lg:text-lg pb-7 text-sm hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">
                News
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:w-[1140px] mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newData.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={index}>
              <div className="post-item overflow-hidden flex flex-col mx-1 lg:mx-0 h-full cursor-pointer">
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="lg:w-[555px] lg:h-[370px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow mt-2">
                  <h2 className="lg:text-xl text-base font-bold my-2 flex-grow">
                    {post.title}
                  </h2>
                  <div className="flex justify-between items-end mt-auto">
                    <p className="lg:text-md text-sm text-gray-darked">
                      Author: Joshua Nash
                    </p>
                    <p className="lg:text-md text-sm text-gray-darked">
                      Date: {new Date().toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
