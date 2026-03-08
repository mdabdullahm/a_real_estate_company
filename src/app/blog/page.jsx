import BlogCategories from '@/components/blog/BlogCategories'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogSearch from '@/components/blog/BlogSearch'
import FeaturedPost from '@/components/blog/FeaturedPost'
import Newsletter from '@/components/blog/Newsletter'
import Pagination from '@/components/blog/Pagination'
import React from 'react'

export default function page() {
  return (
    <div>
      <BlogHeader/>
      <BlogSearch/>
      <BlogCategories/>
      <FeaturedPost/>
      <Pagination/>
      <Newsletter/>
    </div>
  )
}
