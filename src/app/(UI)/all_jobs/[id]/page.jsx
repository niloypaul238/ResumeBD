import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const JobDetails = async ({ params }) => {
    const { id } = await params;
    const fetchData = await fetch('http://localhost:5001/jobs')
    const data = await fetchData.json()
    const filterData = data.filter(item => item.id == id)
    const { applicants, applicationEnd, applied, categoryId, companyId, companyLogo, companyName, description, experience, featured, gender, jobCategory
        , location,
        posted,
        qualification,
        salary,
        skills,
        title,
        mobileNumber,
        type } = filterData[0]
    return (
        <div>
            <div className='w-8/12 mx-auto'>
                <div className='bg-gray-300/40 flex justify-between items-center rounded p-5'>
                    <div className='flex gap-5'>
                        <Image src={companyLogo} quality={490} className='rounded-2xl h-20 w-20 object-center' alt='' height={40} width={40} />
                        <div>
                            <h1 className='text-2xl'>{title}</h1>
                            <h1 className='text-green-600'>{companyName}</h1>
                            <p className='flex items-center gap-4 text-gray-500 text-sm'><span className='flex items-center'><MapPin size={15} />{location}</span> <span className='flex items-center text-gray-500 text-sm'><Phone size={15} />{mobileNumber}</span></p>
                        </div>
                    </div>
                    <div className='text-end'>
                        <p className='text-lg'>{salary}<span className=''>/monthly</span></p>
                        <button className='bg-green-600 hover:bg-green-700 mt-2 hover: text-white px-4 py-2 rounded-md font-medium transition'>Apply Now</button>
                    </div>
                </div>




                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Description</h2>

                                <p className="text-gray-600 leading-6 text-sm mb-4">
                                    It is a long established fact that a reader will be distracted the
                                    readable content of page when looking atits layout. The point of
                                    using is that has more-or-less normal a distribution of letters,
                                    as opposed to using content publishing packages web page editors.
                                </p>

                                <p className="text-gray-600 text-sm leading-6">
                                    It is a long established fact that a reader will be distracted the
                                    readable content of a page when looking at its layout. The point
                                    of using is that has more-or-less normal a distribution of
                                    letters.
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>

                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>✔ Developing custom themes (WordPress.org & ThemeForest Standards)</li>
                                    <li>✔ Creating reactive website designs</li>
                                    <li>✔ Working under strict deadlines</li>
                                    <li>✔ Develop page speed optimized themes</li>
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Requirements</h2>

                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>✔ Having approved theme/s on ThemeForest will be given high preference.</li>
                                    <li>✔ Strong knowledge of WordPress Theme Standards</li>
                                    <li>✔ Ability to convert HTML templates into full WordPress themes</li>
                                    <li>✔ Good knowledge in OOP PHP and frontend like HTML, CSS, JS</li>
                                </ul>
                            </div>
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Educational Requirements</h2>

                                <p className="text-gray-600 leading-6 mb-4">
                                    It doesn’t matter where you went to college or what your CGPA was as long as you are smart, passionate, ready to work hard, and have fun.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>

                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>✔ 8:00 AM - 5:00 PM</li>
                                    <li>✔ Weekly: 5 days.</li>
                                    <li>✔ Ability to convert HTML templates into full WordPress themes</li>
                                    <li>✔ Weekend: Saturday, Sunday.</li>
                                </ul>
                            </div>

                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="bg-gray-100 p-6 rounded-lg h-fit">

                            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                                Summery
                            </h3>

                            <div className="space-y-2 text-sm">

                                <div className="flex justify-between">
                                    <span>Job Type</span>
                                    <span className="text-green-600 font-medium">{type}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Category</span>
                                    <span>{jobCategory}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Posted</span>
                                    <span>{posted}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Salary</span>
                                    <span>{salary} / Monthly</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Experience</span>
                                    <span>{experience}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Gender</span>
                                    <span>{gender}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Qualification</span>
                                    <span>{qualification}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>applicants</span>
                                    <span>{applicants} Person</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Applied</span>
                                    <span>{applied}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Application End</span>
                                    <span className="text-red-500">{applicationEnd}</span>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default JobDetails;