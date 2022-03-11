import React  from 'react';
import { OverTrendingPage } from './OverTrendingPage/OverTrendingPage';
import { TopbrandsOverBlogs } from './TopBrand & OverBlogs';
import { BannerPage } from './BannerPage/BannerPage';
import { NewArrival } from './NewArrival/NewArrival';
import {TopBeauty_TopFootwear as  TopBeautyTopFootwear } from './TopBeauty&TopFootwear';
import { LastestFootwearPage } from './LastestFootwearPage/LastestFootwearPage';
import BagKidsCollectionPage from './Bags&KidsCollectionPage/BagKidsCollectionPage';
import BlogPage from './BlogPage/BlogPage';
import BigSalePage from './BigSalePage/BigSalePage';
import TopFootwearPage from './TopFootwearPage/TopFootwearPage';

function HomePage() {
  
  return (
    <div>
      <BannerPage />
      <NewArrival  />
      <OverTrendingPage  />
      <LastestFootwearPage  />
      <TopBeautyTopFootwear />
      <BagKidsCollectionPage />
      <TopbrandsOverBlogs  />
      <TopFootwearPage/>
      <BlogPage/>
      <BigSalePage/>
    </div>
  )
}
export { HomePage };