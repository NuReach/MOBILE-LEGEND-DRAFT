'use client';
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function Draft() {
  const [firstBan,setFirstBan] = useState([]);
  return (
    <div className='columns-1 md:columns-2 space-y-6 w-full'>
        <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden'>
            <h1 className='font-bold text-xl text-white'>Phase One</h1>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
                <div>

                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Dialog>
                </div>

            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Expectaion</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Counter</h2>
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
            <h1 className='font-bold text-xl text-white'>Phase One</h1>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
                <div>

                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Dialog>
                </div>

            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(5).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Expectaion</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        Array(10).fill(null).map((_, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'></div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Counter</h2>
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
