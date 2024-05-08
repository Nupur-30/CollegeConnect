import React from 'react'
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-purple-100  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-purple-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Find the best study material <span className='text-purple-700'>without any hassle!</span></h1>
                    <p>MUJ Academic Connect is the ultimate one-stop academic resource finder; a platform designed and developed keeping in mind the academic needs of the students of Manipal University Jaipur.</p>
    
                </div>
            </div>
        </div>
    )
}
