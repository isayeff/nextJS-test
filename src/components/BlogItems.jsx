'use client'
import Link from 'next/link'
import React from 'react'

const BlogItems = ({ data }) => {
    return (
        <>
            <Link href={`products/${data.id}`}>
                <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img src={data.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">{data.name}</span>
                        <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
                    </div>
                    <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>
            </Link>
        </>
    )
}

export default BlogItems