import React from 'react'

function Categories() {
  return (
    <div>
      <section className="md:px-24  bg-blueGray-200 mt-2">
            <div className="flex flex-wrap">
                <div className="w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                        <img className='mx-auto' src={require('../../assets/images/pizza.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>Pizza</p>
                        </div>
                    </a>
                </div>
                <div className=" w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                        <img className='mx-auto' src={require('../../assets/images/burgur.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>Burger</p>
                        </div>
                    </a>
                </div>
                <div className=" w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                        <img className='mx-auto' src={require('../../assets/images/meat.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>BBQ</p>
                        </div>
                    </a>
                </div>
                <div className=" w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                        <img className='mx-auto' src={require('../../assets/images/sushi.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>Shushi</p>
                        </div>
                    </a>
                </div>
                <div className=" w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                        <img className='mx-auto' src={require('../../assets/images/broccoli.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>Vegan</p>
                        </div>
                    </a>
                </div>
                <div className=" w-full w-1/3 md:w-1/6 px-4 text-center">
                    <a href='#' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                        <div className="py-4 text-center  ">
                            <img className='mx-auto' src={require('../../assets/images/cake.png')} />
                            <p className='text-md mt-2 font-semibold text-[#2B2B43]'>Desserts</p>
                        </div>
                    </a>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Categories
