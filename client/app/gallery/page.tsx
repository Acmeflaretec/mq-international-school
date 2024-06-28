import Breadcrumb from '@/components/Common/Breadcrumb'
import SectionOne from '@/components/gallery/SectionOne'
import SectionTwo from '@/components/gallery/SectionTwo'
import React from 'react'

const page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Gallery"
        description="Welcome to our Gallery! Explore a captivating collection of images showcasing our vibrant school community, dynamic events, and inspiring moments. Dive in to experience the essence of MQ International Schooling through our visual stories."
      />
      {/* <SectionOne/> */}
      <SectionTwo/>
    </>
  )
}

export default page
