import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User, Tag, Facebook, Twitter, Instagram, Search } from 'lucide-react';
import { blogPosts, recentPosts, tags } from '../BlogData/Data';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id)); // Find the correct blog post

  if (!blog) {
    return <div className="text-center text-gray-700 text-xl py-10">Blog post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    By Leonard
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {blog.category}
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {blog.title}
                </h1>

                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    {blog.excerpt}
                  </p>

                  <blockquote className="bg-gray-50 border-l-4 border-[#26774b] p-6 my-8">
                    <p className="text-gray-600 italic">
                      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    </p>
                  </blockquote>

                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pharetra turpis. Suspendisse id erat venenatis, tincidunt quam sed, scelerisque risus.
                  </p>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                  <span className="text-gray-600">Share:</span>
                  <div className="flex gap-2">
                    <a href="#" className="p-2 bg-[#F8F3F0] rounded-full text-[#26774b] hover:bg-[#26774b] hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-[#F8F3F0] rounded-full text-[#26774b] hover:bg-[#26774b] hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-[#F8F3F0] rounded-full text-[#26774b] hover:bg-[#26774b] hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#26774b] focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-white bg-[#26774b] rounded-r-full hover:bg-[#d89589] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Blog</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <span className="text-[#26774b] text-sm">{post.category}</span>
                      <h4 className="text-gray-900 group-hover:text-[#26774b] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Tag Clouds</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 bg-[#F8F3F0] text-gray-600 rounded-full hover:bg-[#26774b] hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
