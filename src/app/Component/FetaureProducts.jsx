import Image from 'next/image';
import React from 'react';

const FetaureProducts = async () => {
    const fetchData = await fetch('http://localhost:5001/jobs')
    const data = await fetchData.json()
    const filterData = data.filter(item => item.featured == true)

    return (
        <div className='w-10/12 mx-auto mt-15'>
            <p className='text-3xl text-center'>Feature Products</p>
            <div className='grid grid-cols-1 gap-5 mt-4 md:grid-cols-3'>
                {
                    filterData.map(job => {
                        return (
                            <div key={job.id} className="max-w-sm bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">

                                {/* Company Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center shadow">
                                        <Image
                                            src={job.companyLogo}
                                            alt="company logo"
                                            width={40}
                                            height={40}
                                            className=''
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800">{job.companyName}</h4>
                                        <p className="text-sm text-gray-500">{job.location}</p>
                                    </div>
                                </div>

                                {/* Job Title */}
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {job.title}
                                </h2>

                                {/* Job Type */}
                                <p className="text-green-600 font-medium mb-3">
                                    {job.type}
                                </p>

                                {/* Skills */}
                                <p className="text-gray-500 text-sm mb-6">
                                    {job.skills.join(", ")}
                                </p>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-bold text-gray-800">
                                        {job.salary} <span className="text-sm text-gray-500">/monthly</span>
                                    </p>

                                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition">
                                        Apply Now
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FetaureProducts;