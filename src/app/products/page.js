import BlogItems from '@/components/BlogItems';
import React from 'react'

const page = async () => {

    const res = await fetch('https://65034c35a0f2c1f3faebc287.mockapi.io/blog')
    const data = await res.json()

    return (
        <>
            <div className='flex flex-wrap p-[20px] gap-[20px] items-center justify-center'>
                {
                    data && data.map(item => <BlogItems data={item} />)
                }
            </div>
        </>
    )
}

export default page