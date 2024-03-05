import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div className=' w-[881px]  bg-white p-6 gap-6 flex flex-col rounded-lg'>
      <p className='font-medium text-2xl'> Team</p>
      <p className='font-medium text-base'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
    </div>
  )
}

export default Team
