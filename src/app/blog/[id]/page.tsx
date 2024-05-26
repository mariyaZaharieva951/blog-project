"use client";
import { useEffect, useState } from 'react';

const Post = ({ params }: any) => {

  const [post, setPost] = useState<{
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    date: string;
  } | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {

    const fetchPost = async (postId: string) => {
      try {
        const responsePost = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!responsePost.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postData = await responsePost.json();


        const responsePhotos = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${postId}`
        );
        if (!responsePhotos.ok) {
          throw new Error("Failed to fetch photos");
        }
        const photoData = await responsePhotos.json();

        
          setPost(postData);
          setPhoto(photoData.url);
          
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (params.id) {
        const postId = Array.isArray(params.id) ? params.id[0] : params.id;
        fetchPost(postId as string);
      }
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="lg:w-[555px] mx-auto pt-[120px]">
      <div className="flex flex-col gap-6">
        <div className="">
          <img
            src={photo!}
            alt={post.title}
            className="lg:w-[555px] lg:h-[370px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="lg:text-xl text-base font-bold my-2">{post.title}</h2>
          <div className="flex justify-between items-end">
            <p className="lg:text-md text-sm text-gray-darked">Author: Joshua Nash</p> 
            <p className="lg:text-md text-sm text-gray-darked">Date: {new Date().toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;