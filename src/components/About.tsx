import mac from '../assets/images/macbook.png'

const About = () => {
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[50%_50%] mb-[10vh] lg:mb-[20vh]'>
            <div className='w-full overflow-hidden relative mb-4 lg:mb-0 lg:w-[90%] bg-[#F3F3F3]/50 rounded-4xl aspect-square'>
                <img
                    src={mac}
                    alt=""
                    className='absolute top-10 -right-50 lg:top-25 lg:-right-80 h-[80%] w-auto max-w-none'
                />
            </div>
            <div className='w-full lg:w-[90%] ml-[5%] flex flex-col justify-center'>
                <div className='text-[#8B8B8B]'>Mobileuurka</div>
                <h2 className='text-[38px] font-medium'>Who we are ?</h2>
                <p className='text-[#676767] my-3 w-[85%]'>MobileUurka is a health technology company focused on advancing maternal care through artificial intelligence.
                    Our platform supports OBGYNs and healthcare professionals by these empowering evidence-based clinical decisions and better outcomes for mothers an babies</p>
                <div className='w-[90%] lg:w-[85%] flex flex-row items-center gap-3 bg-[#F3F3F3]/50 py-4 px-4 mt-6 rounded-lg'>
                    <div className='w-1.5 h-1.5 rounded-[50%] bg-primary'></div>
                    <div className='text-[#676767]'>Analyzing patient data</div>
                </div>
                <div className='w-[90%] lg:w-[85%] flex flex-row items-center gap-3 bg-[#F3F3F3]/50 py-4 px-4 mt-2 rounded-lg'>
                    <div className='w-1.5 h-1.5 rounded-[50%] bg-primary'></div>
                    <div className='text-[#676767]'>Identifying potential risks</div>
                </div>
                <div className='w-[90%] lg:w-[85%] flex flex-row items-center gap-3 bg-[#F3F3F3]/50 py-4 px-4 mt-2 rounded-lg'>
                    <div className='w-1.5 h-1.5 rounded-[50%] bg-primary'></div>
                    <div className='text-[#676767]'>Offering actionable insights</div>
                </div>
                <div className='w-[90%] lg:w-[85%] flex flex-row items-center gap-3 bg-[#F3F3F3]/50 py-4 px-4 mt-2 rounded-lg'>
                    <div className='w-1.5 h-1.5 rounded-[50%] bg-primary'></div>
                    <div className='text-[#676767]'>Analyzing patient data</div>
                </div>
            </div>
        </div>
    )
}

export default About