'use client';
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { heros } from '@/lib/hero';
import { Input } from './ui/input';
import { HeroDetail } from '@/lib/heroDetail';
import { getHero } from '@/app/Utils/utils';

interface Hero {
    name : string |null,
    heroid : string |null,
    key : string |null
}

interface HeroDetailSchema {
    heroid: string;
    counter: string[];
    compatability: string[];
}

export default function Draft() { 
  const [allHeros,setAllHeros] = useState(heros);
  const [index,setIndex] = useState(0);
  const [firstBanned, setFirstBanned] = useState<Hero[]>([
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null}
  ]);
  const [firstPick, setFirstPick] = useState<Hero[]>([
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null}
  ]);
  const [secondBanned, setsecondBanned] = useState<Hero[]>([
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null}
  ]);
  const [secondPick, setsecondPick] = useState<Hero[]>([
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null},
    {name : null , heroid : null, key:null}
  ]);

  const [firstExpectation, setFirstExpectation] = useState<string[]>([]);
  const [firstCompatibility, setFirstCompatibility] = useState<string[]>([]);
  const [firstCounter, setFirstCounter] = useState<string[]>([]);



  const [search,setSearch] = useState('');
  const [isOpen , setisOpen] = useState(false);
  const [startsWith,setStartWith] = useState('');
  
  
  const closeDailog = (payload:string,hero:Hero)=>{
    if (payload.startsWith('firstBanned')) {
        setFirstBanned((prevFirstBan:Hero[])=>{
            const newItems = [...prevFirstBan];
            newItems.splice(index, 1, hero);
            return newItems;
       })
    }  
    if (payload.startsWith('firstPick')) {
        setFirstPick((prevFirstBan:Hero[])=>{
            const newItems = [...prevFirstBan];
            newItems.splice(index, 1, hero);
            return newItems;
       })
    }  
    if (payload.startsWith('secondBanned')) {
        setsecondBanned((prevFirstBan:Hero[])=>{
            const newItems = [...prevFirstBan];
            newItems.splice(index, 1, hero);
            return newItems;
       })
    }  
    if (payload.startsWith('secondPick')) {
        setsecondPick((prevFirstBan:Hero[])=>{
            const newItems = [...prevFirstBan];
            newItems.splice(index, 1, hero);
            return newItems;
       })
    }   
    setisOpen(!isOpen);
    setSearch('');
  }

  const openDailog = (index:number,startsWith:string)=>{
    setStartWith(startsWith);
    setisOpen(!isOpen);
    setIndex(index);
  }

  useEffect(() => {
    const heroIds = firstBanned.filter((item)=>item.heroid != null).map(item => item.heroid);
    const filteredItems = HeroDetail.filter(item => heroIds.includes(item.heroid));
    const firstExpectation = filteredItems.flatMap((item)=>item.counter);
    setFirstExpectation(firstExpectation);
  }, [firstBanned]);

  useEffect(() => {
    const heroIds = firstPick.filter((item)=>item.heroid != null).map(item => item.heroid);
    const filteredItems = HeroDetail.filter(item => heroIds.includes(item.heroid));
    const firstExpectation = filteredItems.flatMap((item)=>item.compatability);
    const firstCounter = filteredItems.flatMap((item)=>item.counter);
    setFirstCompatibility(firstExpectation);
    setFirstCounter(firstCounter);
  }, [firstPick]);


  
  return (
    <div className='columns-1 md:columns-2 space-y-6 w-full'>
        <Dialog open={isOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Choose Hero</DialogTitle>
            <DialogDescription>
                <div className='py-3'>
                    <Input type="text" onChange={(e)=>setSearch(e.target.value)} defaultValue={search} placeholder="Search..." />
                </div>
                <div className='flex gap-9 flex-wrap py-3'>
                    {
                        search != "" ? 
                        allHeros.filter((x)=>x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item,i)=>(
                            <div onClick={()=>closeDailog(startsWith,item)} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                     alt={item.heroid}
                                     width={150}
                                     height={150}
                                     src={item.key}
                                     className='w-full h-full object-cover rounded-lg'
                                    />  
                            </div>
                        ))    
                        :
                        allHeros.slice(0,5).map((item, i) =>(
                            <div onClick={()=>closeDailog(startsWith,item)} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                     alt={item.heroid}
                                     width={150}
                                     height={150}
                                     src={item.key}
                                     className='w-full h-full object-cover rounded-lg'
                                    />  
                            </div>
                        ))
                    }
                </div>
            </DialogDescription>
            <DialogFooter>
                <div className='flex gap-3 mt-3'>
                    <Button onClick={()=>openDailog(0,'firstBanned')} >Close</Button>
                </div>
            </DialogFooter>
            </DialogHeader>
        </DialogContent>
        </Dialog>
        <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden'>
            <h1 className='font-bold text-xl text-white'>Phase One</h1>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        firstBanned.map((item:Hero, i) =>(
                            <div onClick={()=>openDailog(i,'firstBanned')} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                     alt={item.heroid || 'hero'}
                                     width={150}
                                     height={150}
                                     src={item.key || '/favicon.ico'}
                                     className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        firstPick.map((item:Hero, i) =>(
                            <div onClick={()=>openDailog(i,'firstPick')} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                        alt={item.heroid || 'hero'}
                                        width={150}
                                        height={150}
                                        src={item.key || '/favicon.ico'}
                                        className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>They might play</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        firstExpectation.map((item, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                    alt={getHero(item)?.heroid || 'hero'}
                                    width={150}
                                    height={150}
                                    src={getHero(item)?.key || '/favicon.ico'}
                                    className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Combo</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        firstCompatibility.map((item, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                    alt={ getHero(item)?.heroid || 'hero'}
                                    width={150}
                                    height={150}
                                    src={getHero(item)?.key || '/favicon.ico'}
                                    className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Counter</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        firstCounter.map((item, i) =>(
                            <div key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                    alt={ getHero(item)?.heroid || 'hero'}
                                    width={150}
                                    height={150}
                                    src={getHero(item)?.key || '/favicon.ico'}
                                    className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='p-3 md:p-6 bg-white bg-opacity-15 rounded-lg overflow-hidden'>
            <h1 className='font-bold text-xl text-white'>Phase Two</h1>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Ban Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        secondBanned.map((item:Hero, i) =>(
                            <div onClick={()=>openDailog(i,'secondBanned')} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                     alt={item.heroid || 'hero'}
                                     width={150}
                                     height={150}
                                     src={item.key || '/favicon.ico'}
                                     className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='font-medium text-white'>Pick Hero</h2>
                <div className='mt-3 columns-3 sm:columns-5 space-y-3'>
                    {
                        secondPick.map((item:Hero, i) =>(
                            <div onClick={()=>openDailog(i,'secondPick')} key={i} className='w-14 h-14 bg-white rounded-lg overflow-hidden hover:cursor-pointer'>
                                <img
                                        alt={item.heroid || 'hero'}
                                        width={150}
                                        height={150}
                                        src={item.key || '/favicon.ico'}
                                        className='w-full h-full object-cover rounded-lg'
                                />  
                            </div>
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
