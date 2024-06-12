import React from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

export default function HeroPatch() {
  return (
    <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden w-full'>
        <h1 className='font-bold text-xl'>Hero in patch</h1>
        <div className='mt-3 '>
                <ScrollArea className="w-full pb-6 ">
                    <div className='flex justify-between gap-6 '>
                        {
                            Array(15).fill(null).map((_, i) =>(
                                <div key={i} className='min-w-14 w-14 h-14 bg-white rounded-lg  hover:cursor-pointer'></div>
                            ))
                        }

                    </div>
                <ScrollBar orientation="horizontal" />
                </ScrollArea>
        </div>
    </div>
  )
}
