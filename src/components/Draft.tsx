import React from 'react'

export default function Draft() {
  return (
    <div className='columns-1 md:columns-2 space-y-6 w-full'>
        <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden'>
            <h1 className='font-bold text-xl'>Phase One</h1>
            <div className='mt-3'>
                <h2 className='font-medium'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Expectaion</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Counter</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden'>
            <h1 className='font-bold text-xl'>Phase Two</h1>
            <div className='mt-3'>
                <h2 className='font-medium'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Expectaion</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium'>Counter</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
