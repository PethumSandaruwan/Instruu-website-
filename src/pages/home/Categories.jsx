import React from 'react';
const categoryItems=[
  {id:1,title:"Guitars",des:"(100+ items)",Image:"/public/img1.jpg"},
  {id:2,title:"Keyboards",des:"(100+ items)",Image:"/public/img2.jpg"},
  {id:3,title:"Drummes",des:"(100+ items)",Image:"/public/img3.jpg"},
  {id:4,title:"others",des:"(100+ items)",Image:"/public/img1.jpg"}
]

const Categories = () => {
  return (
    <div className='section-container py-16'>
        <div className='text-center'>
          <p className='subtitle'>Best Instruu</p>
          <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug'>Special For You</h2>

        </div>
        {/*category cards*/}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-5'>
          {
            categoryItems.map((item, i)=>(
              <div key={i}>
                <div>
                  <img src={item.Image} alt="" className='bg-[#c1f1c6] p-5 rounded-full w-28 h-28' />
                </div>
                <div className='mt-5 space-y-1'>
                  <h5>{item.title}</h5>
                  <p>{item.des}</p>
                </div>

            </div>
            ))
          }
        </div>
      </div>
  );
}

export default Categories;
