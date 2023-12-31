import React from 'react'
import { FooterBanner, HeroBanner, Products} from '../components';
import { client } from '../lib/client';

const Home = ({products,bannerData}) => {

  return (
    <div>
      <HeroBanner heroBanner ={bannerData && bannerData[0]}/>
       
      <div className='products-heading'>
        <h2>
          Best Selling Products
        </h2>
        <p>
          Speakers of many variations
        </p>
        <div className='products-container'>
          {products?.map((product)=><Products key={product._id} product={product}/>)}

        </div>
        <FooterBanner  footerBanner ={bannerData && bannerData[0]} />
      </div>
    </div>
  );
 
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

return{
  props:{
    products,bannerData
  }
}
};
export default Home;
