import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#DAF7A6] from-0% to-[#25D3B9] to-100%'>
     <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
          {/*image*/}
          <div className='md:w-1/2'>
            <img  className='rounded-[200px]' src="main.jpg" alt="" /> 
        </div>
        {/*text*/}
        <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='text-6xl font-bold'>Srilanka's <span className='text-green'>#1 </span>Instrument Supplier</h2>
            <p className='text-2xl text[#6082B6]'>Explore our instrument website for top-quality products and services.</p>
            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>View My Instruu</button>
        </div>
       
     </div>
    </div>
  )
}

export default Banner
