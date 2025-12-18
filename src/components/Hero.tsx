import { FaStar } from 'react-icons/fa'
import phone from '../assets/images/iphone mockup.png'
import desktop from '../assets/images/desktop.png'

const openGetStartedEmail = () => {
    const subject = encodeURIComponent('Get Started - MobileUurka Healthcare Solutions');
    const body = encodeURIComponent(`Hello MobileUurka Team,

I am interested in getting started with your healthcare AI solutions.

I would like to learn more about:
- How to begin using your platform
- Onboarding process for healthcare providers
- Training and support available
- Pricing and subscription options

Please provide me with information on how to get started with MobileUurka.

Best regards,
[Your Name]
[Your Healthcare Organization]
[Your Contact Information]`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
};

const Hero = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[50%_50%] min-h-[90vh] '>
            <div className='flex flex-col justify-center items-start gap-2 px-[5%] lg:px-[10%]'>
                <div className='text-[#8B8B8B]'>TRY NOW</div>
                <h1 className='w-full lg:w-[90%] text-[48px] p-0 m-0 leading-14 font-normal'>Transforming <span className="font-secondary text-primary ">Maternal</span> Care through Artificial Intelligence</h1>
                <p className='mt-4 text-[#676767] w-[80%]'>Empowering OBGYNs and healthcare providers with disease predictive analytics and evidence-based insights</p>
                <div className='mt-6 flex flex-row items-center gap-6'>
                    <button className='bg-primary py-3 px-8 text-white rounded-full hover:bg-primary/90 transition-colors' onClick={openGetStartedEmail}>Get Started</button>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-row items-center text-[#FFB340]' >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='font-bold'>5.0</div>
                        </div>
                        <p className='text-sm'>From <span className='font-bold'>Reviews</span></p>
                    </div>
                </div>
            </div>
            <div className='relative h-[60vh] my-auto'> <div className='absolute top-1/2 -translate-y-1/3 z-50'>
                <img src={phone} alt="" className='h-[60vh] w-auto' />
            </div>
                <div className='absolute top-1/2 -translate-y-1/2 -right-30 z-20'>
                    <img src={desktop} alt="" className='h-[65vh] w-auto' />
                </div>
            </div>
        </div>
    )
}
6
export default Hero