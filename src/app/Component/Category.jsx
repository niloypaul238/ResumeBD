"use client"
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [allData, setAllData] = useState([])
    const [cate, setCate] = useState([])


    useEffect(() => {
        const solvedData = async () => {
            const fetchData = await fetch('http://localhost:5001/jobs')
            const data = await fetchData.json()
            setAllData(data);
        }
        solvedData()

    }, [])


    // allData?.map(item => {
    //     if (!cate.includes(item.jobCategory)) {
    //         setCate([...cate, item.Category])
    //     }
    // })




    // // console.log(allData);
    // console.log(cate,);
    return (
        <div>

        </div>
    );
};

export default Category;