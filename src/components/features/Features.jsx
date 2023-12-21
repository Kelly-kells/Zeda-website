import React from 'react'
import "./features.css"
const Features = () => {
  return (
    <section id='feature' className='w-full justify-center flex features-bg'>
      <div className='justify-center  flex flex-col md:flex-row lg:flex-row  '>
      <div className='relative  flex flex-1 mt-12 ml-10 lg:m-10 sm:p-2 '>
   <span className="absolute bottom-0 top-0  left-0 ml-10 bg-green-500 h-1 w-60 "></span>
    <h1 className='text-3xl text-white font-bold mt-6'>Easy Solutions For All Difficult <br/> IT Problems, Keep Business <br/>Safe & Ensure  <br/> High Availability </h1>
   
  </div>

  <div className=' bg-green-500 flex-1 mt-12 justify-center'>
    <div className='flex justify-around mt-4 ml-4 '>
        <div className='flex-1 mt-8'>
            <h3 className='text-xl text-white font-bold'>
             450,000+ client's<br/> interactions!
            </h3>
        </div>

        <div className='flex-1 flex-col mt-8'>
            <p className=' text-white  '>
             provide users with appropriate veiw access   to requests,  problems, changes, contracts &
             solutions with experienced professionals.<br/> 
              As one of the world's largest IT services, <br/>
             we are ready to help.
            </p>
            <button className='rounded border border-solid border-white text-white w-40 h-8 mt-3  '>Download Brochure</button>
            
        </div>

          
    </div>

    <div className='flex  flex- col justify-center mt-20 lg:m-10 sm:m-4 '>
      <div className='flex-1 justify-center m-4'>
        <h1 className='text-white text-3xl font-bold '>
          6,154
        </h1>
        <p className='text-white pt-2 font-semibold' >
          Projects and Softwares developed in 2021
        </p>

      </div>

      <div className='flex-1 m-4'>
        <h1 className='text-white text-3xl font-bold'>
          2,154
        </h1>
        <p className='pt-2 text-white font-semibold'>
         Qualified Employees and Developers with us
        </p>

      </div>
      <div className='flex-1 m-4'>
        <h1  className='text-white text-3xl font-bold '>
          1,784
        </h1>
        <p className='pt-2 text-white font-semibold'>
          Satisfied Clients We Have Served Globally.
        </p>

      </div>

    </div>






  </div>




      </div>

  

</section>
  )
}

export default Features;