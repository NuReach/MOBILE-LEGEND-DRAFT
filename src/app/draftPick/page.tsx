import Draft from '@/components/Draft'
import HeroPatch from '@/components/HeroPatch'
import React from 'react'

export default function DraftPick() {
  return (
    <div className=''>
      <div className="w-full mt-6 p-3 flex justify-center items-center ">
        <HeroPatch />
      </div>
      <div className="w-full p-3 flex justify-center items-center ">
        <Draft />
      </div>
    </div>
  )
}
