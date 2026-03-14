"use client"
import React, { useContext } from 'react';
import { CreateContextExport } from '../Context/Context';
import Card from './Card';
import { Search } from 'lucide-react';

const AllJobs = () => {
    const { allJobs, setAllJobs } = useContext(CreateContextExport)
    //  console.log(allJobs);
    return (
        <div className='bg-gray-100'>
            <div className='w-10/12 mx-auto py-7  '>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <p className='text-3xl relative '><span className='absolute bg-green-600 w-18 h-0.5 bottom-1 rounded-full'></span> Find Your Dream Job</p>
                    <div className='bg-white p-2 flex  items-center gap-x-4 w-full'>
                        <input type="text" className='border border-gray-400/70 rounded basis-11/12 outline-0 p-1' placeholder='Search Job'/>
                         <div className='basis-1/12 text-center'>
                            <Search className=' bg-green-700 p-1 cursor-pointer rounded text-white' size={30} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 mt-4 md:grid-cols-3'>
                    {
                        allJobs?.map(job => <Card key={job.id} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllJobs;