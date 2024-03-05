import React from 'react'
import Image from "../assets/sandeep.png"

const TeamMember = () => {
  return (
    <div className='w-[821px] h-[178px] bg-[#E8F4Fd] rounded-lg flex justify-evenly p-4'>

      <div className='flex flex-col justify-center gap-2  w-[128.61px] '>
        <img src={Image} alt="team-member" className='w-24 mx-auto h-[106px]'/>
        <div>
          <p className='text-base text-center font-semibold'>John Smith</p>
        <p className='text-xs text-center '>Designation here</p>
        </div>
      </div>
      <div className='flex w-[646px] '>
        <p className='text-[14px] my-auto'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
      </div>
    </div>
  )
}

export default TeamMember
