"use client";
import React from "react";
import blogPosts from "../data/blogs.json";

function BlogPage() {
  return (
    <section
      id="blog"
      className="bg-emerald-50
 py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl font-bold text-red-700">Travel Blog</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Get inspired with stories, tips, and guides from our travel experts.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-red-700 mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="text-sm text-red-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
