import React from 'react'

const SectionTwo = () => {
   const images = [
      "AJI_3786.jpg",
      "AJI_3854.jpg",
      "AJI_3858.jpg",
      "AJI_3868.jpg",
      // "AJI_3998.jpg",
      "AJI_4031.jpg",
      "AJI_4147.jpg",
      "AJI_4208.jpg",
      "AJI_4252.jpg",
      "AJI_4414.jpg",
      "AJI_4516.jpg",
      "AJI_4536.jpg",
   ]
   return (
      <div className="container">
         {/* <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500">All categories</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Shoes</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Bags</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Electronics</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Gaming</button>
            </div> */}
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images?.map(item => (
               <div>
                  <img className="h-auto max-w-full rounded-lg" src={`/images/gallery/${item}`} alt="" />
               </div>
            ))}
         </div>

      </div>
   )
}

export default SectionTwo