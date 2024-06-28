import React from 'react'
import blogData from './blogData'
import SingleBlog from './SingleBlog'

const Blogs = () => {
   return (
<div className='container pt-16'>
<div className="-mx-4 flex flex-wrap justify-center">
<div className="flex w-full justify-center px-4 flex-col">
            <h2 className="py-16 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
              Latest Blogs
            </h2>
          </div>
         {blogData.map((blog) => (
            <div
               key={blog.id}
               className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
               <SingleBlog blog={blog} />
            </div>
         ))}
      </div>
</div>
   )
}

export default Blogs