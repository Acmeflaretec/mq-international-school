"use client"
import axios from 'axios';
import Image from 'next/image'
import React from 'react'

interface ImageItem {
   _id: string;
   imageUrl: string;
}

const SectionTwo = () => {

   const [data, setData] = React.useState([])
   const fetchData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
      setData(res?.data)
   }
   React.useEffect(() => {
      fetchData()
   }, [])

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
            {data?.map((item: ImageItem) => (
               <div key={item._id}>
                  <Image
                     className="h-auto max-w-full rounded-lg"
                     width={400}
                     height={300}
                     src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${item.imageUrl}`}
                     alt={item._id}
                  />
               </div>
            ))}
         </div>
      </div>
   )
}

export default SectionTwo