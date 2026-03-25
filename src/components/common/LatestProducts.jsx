import React from 'react'
import ProductImg from '../../assets/images/eight.jpg';
import ProductImg2 from "../../assets/images/ten.jpg";
import ProductImg3 from "../../assets/images/twelve.jpg";
import ProductImg4 from "../../assets/images/two.jpg";

const LatestProducts = () => {
  return (
   <section className='section-2 pt-5'>
        <div className='container'>
            <h2>New Arrivals</h2>
            <div className='row mt-4'>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg} alt="" className='w-100' />
                        </div>
                        <div className='card-body pt-3'>
                            <a href=""> Red checked shirt for men</a>
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
                            <a href=""> Blue checked shirt for men</a>
                            <div className='price'>
                                $80 <span className='text-decoration-line-through'>$100</span>
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
                            <a href=""> Plain white shirt for men</a>
                            <div className='price'>
                                $60 <span className='text-decoration-line-through'>$90</span>
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
                            <a href=""> Peach Formal Suit for men </a>
                            <div className='price'>
                                $80 <span className='text-decoration-line-through'>$120</span>
                            </div>
                        </div>

                    </div>
                    </div>
                    </div>
        </div>


     </section>

  )
}

export default LatestProducts