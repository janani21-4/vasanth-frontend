import React from 'react'
import ProductImg from '../../assets/images/eleven.jpg';
import ProductImg2 from "../../assets/images/fivee.jpg";
import ProductImg3 from "../../assets/images/three.jpg";
import ProductImg4 from "../../assets/images/four.jpg";



const FeaturedProducts = () => {
  return (
    
    <section className='section-2 py-5'>
            <div className='container'>
                <h2>Featured Products</h2>
                <div className='row mt-4'>
                    <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg} alt="" className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=""> Red Plain T-shirt for men</a>
                                <div className='price'>
                                    $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                            </div>
    
                        </div>
                        </div>
                        <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg2} alt="" className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=""> Lavender T-shirt for men</a>
                                <div className='price'>
                                    $30 <span className='text-decoration-line-through'>$60</span>
                                </div>
                            </div>
    
                        </div>
                        </div>
                        <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg3} alt="" className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=""> Blue denim for men</a>
                                <div className='price'>
                                    $60 <span className='text-decoration-line-through'>$100</span>
                                </div>
                            </div>
    
                        </div>
                        </div>
                        <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg4} alt="" className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=""> Green sweat shirt for men</a>
                                <div className='price'>
                                    $90 <span className='text-decoration-line-through'>$120</span>
                                </div>
                            </div>
    
                        </div>
                        </div>
                        </div>
            </div>
    
    
         </section>
  )
}

export default FeaturedProducts