import posts from "../data/projects.json" assert { type: "json" };
import { useZkConnect } from "@sismo-core/zk-connect-react";
import { useState } from "react";

export default function Projects({ ZkConnect }: any) {
  const { responseBytes } = useZkConnect({
    config: {
      appId: "0x03e869be5fa809ca90f1b77a8e31b86f",
    },
  });

  return (
    <>
      {responseBytes ? (
        <div className="blur-none">
          <div className="absolute inset-0 flex justify-center items-center z-10"></div>
          <div className="bg-white py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Vote for the best project
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  You can only vote for 1 projet.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col items-start justify-between"
                  >
                    <div className="relative w-full">
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.datetime}
                          className="text-gray-500"
                        >
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <ZkConnect />
          </div>
          <div className="blur-md">
            <div className="absolute inset-0 flex justify-center items-center z-10"></div>
            <div className="bg-white py-24 sm:py-32 ">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    From the blog
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    Learn how to grow your business with our expert advice.
                  </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="flex flex-col items-start justify-between"
                    >
                      <div className="relative w-full">
                        <img
                          src={post.imageUrl}
                          alt=""
                          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="max-w-xl">
                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                          <time
                            dateTime={post.datetime}
                            className="text-gray-500"
                          >
                            {post.date}
                          </time>
                          <a
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {post.category.title}
                          </a>
                        </div>
                        <div className="group relative">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={post.href}>
                              <span className="absolute inset-0" />
                              {post.title}
                            </a>
                          </h3>
                          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
