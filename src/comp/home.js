import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import Shop from './shop'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
const Home = ({addtocart}) => {
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) =>
  {
    const filterproduct = Homeproduct.filter((curElm) =>
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() =>
  {
    productcategory()
  })
  const productcategory = () =>
  {
    // New Product
    const newcategory = Homeproduct.filter((x) =>
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) =>
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    // Top Product
    const topcategory = Homeproduct.filter((x) =>
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
      <>
        <div className='home'>
          <div className='top_banner'>
            <div className='contant'>
              <h3>WELCOME TO</h3>
              <h2>MUSIC LIFESTYLE</h2>
              <p> we offer 10% discount + free delivery at your first odder</p>
              <Link to='/shop' className='link'>Shop Now</Link>
            </div>
          </div>
          <div className='trending'>
            <div className='container'>
              <div className='left_box'>
                <div className='header'>
                  <div className='heading'>
                    <h2 onClick={() => allTrendingProduct ()}>POPULAR</h2>
                  </div>
                  <div className='cate'>
                    <h3 onClick={() => filtercate ('new')}>new</h3>
                    <h3 onClick={() => filtercate ('featured')}>for you</h3>
                    <h3 onClick={() => filtercate ('top')}></h3>
                  </div>
                </div>
                <div className='products'>
                  <div className='container'>
                    {
                      trendingProduct.map((curElm) =>
                      {
                        return(
                            <>
                              <div className='box'>
                                <div className='img_box'>
                                  <img src={curElm.image} alt=''></img>
                                  <div className='icon'>
                                    <div className='icon_box'>
                                      <AiFillEye />
                                    </div>
                                    <div className='icon_box'>
                                      <AiFillHeart />
                                    </div>
                                  </div>
                                </div>
                                <div className='info'>
                                  <h3>{curElm.Name}</h3>
                                  <p>R{curElm.price}</p>
                                  <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                                </div>
                              </div>
                            </>
                        )
                      })
                    }
                  </div>
                  <button>Show More</button>
                </div>
              </div>
            </div>
          </div>
          {/*<div className='banners'>*/}
          {/*  <div className='container'>*/}
          {/*    <div className='left_box'>*/}
          {/*      <div className='box'>*/}
          {/*        <img src='image/Multi-Banner-1.avif' alt='banner'></img>*/}
          {/*      </div>*/}
          {/*      <div className='box'>*/}
          {/*        <img src='image/Multi-Banner-2.avif' alt='banner'></img>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className='right_box'>*/}
          {/*      <div className='top'>*/}
          {/*        <img src='image/Multi-Banner-3.webp' alt=''></img>*/}
          {/*        <img src='image/Multi-Banner-4.avif' alt=''></img>*/}
          {/*      </div>*/}
          {/*      <div className='bottom'>*/}
          {/*        <img src='image/Multi-Banner-5.webp' alt=''></img>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className='product_type'>
            <div className='container'>
              <div className='box'>
                <div className='header'>
                  <h2>New</h2>
                </div>
                {
                  newProduct.map((curElm) =>
                  {
                    return(
                        <>
                          <div className='productbox'>
                            <div className='img-box'>
                              <img src={curElm.image} alt=''></img>
                            </div>
                            <div className='detail'>
                              <h3>{curElm.Name}</h3>
                              <p>R {curElm.price}</p>
                              <div className='icon'>
                                <button><AiFillEye /></button>
                                <button><AiFillHeart /></button>
                                <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                              </div>
                            </div>
                          </div>
                        </>
                    )
                  })
                }
              </div>
              <div className='box'>
                <div className='header'>
                  <h2>For you</h2>
                </div>
                {
                  featuredProduct.map((curElm) =>
                  {
                    return(
                        <>
                          <div className='productbox'>
                            <div className='img-box'>
                              <img src={curElm.image} alt=''></img>
                            </div>
                            <div className='detail'>
                              <h3>{curElm.Name}</h3>
                              <p>R {curElm.price}</p>
                              <div className='icon'>
                                <button><AiFillEye /></button>
                                <button><AiFillHeart /></button>
                                <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                              </div>
                            </div>
                          </div>
                        </>
                    )
                  })
                }
              </div>
              <div className='box'>
                <div className='header'>
                  <h2>Top Selling</h2>
                </div>
                {
                  topProduct.map((curElm) =>
                  {
                    return(
                        <>
                          <div className='productbox'>
                            <div className='img-box'>
                              <img src={curElm.image} alt=''></img>
                            </div>
                            <div className='detail'>
                              <h3>{curElm.Name}</h3>
                              <p>$ {curElm.price}</p>
                              <div className='icon'>
                                <button><AiFillEye /></button>
                                <button><AiFillHeart /></button>
                                <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                              </div>
                            </div>
                          </div>
                        </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Home