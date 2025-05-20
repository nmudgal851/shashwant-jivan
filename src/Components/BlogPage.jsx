import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight,Play } from 'lucide-react';
import { blogPosts } from '../BlogData/Data';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <div className="flex items-center justify-center gap-2 text-[#26774b]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#26774b] text-sm font-medium">Blog</span>
          <h2 className="text-4xl font-bold mt-2">Our Latest News</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Link 
                    to={`/category/${post.category}`}
                    className="text-[#26774b] hover:text-[#d89589] text-sm font-medium"
                  >
                    {post.category}
                  </Link>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 hover:text-[#26774b] transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#26774b] hover:text-[#d89589] font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
       {/* Video Section */}
       <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop&q=80"
            alt="Ayurvedic Treatment"
            className="w-full h-[400px] object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <div className="bg-[#26774b] w-16 h-16 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
