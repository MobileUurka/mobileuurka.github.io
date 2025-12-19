import { FaStar } from "react-icons/fa"
import text from '../assets/images/sabi.png'

const openSabiEmail = () => {
    const subject = encodeURIComponent('Get Started with Sabi - AI Assistant for Healthcare');
    const body = encodeURIComponent(`Hello MobileUurka Team,

I am interested in getting started with Sabi, your AI assistant for healthcare.

I would like to learn more about:
- How Sabi can help with patient insights
- Access to peer-reviewed research
- Real-time clinical information
- Security and privacy features
- Integration with existing systems

Please provide me with information on how to get started with Sabi.

Best regards,
[Your Name]
[Your Healthcare Organization]
[Your Contact Information]`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
};

const Sabi = () => {
    return (
        <div className='w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[50%_50%] mb-[10vh] lg:mb-[20vh]'>
            <div className="flex flex-col justify-center">
                <div className='text-[#8B8B8B]'>Meet Sabi</div>
                <div className='w-[90%] lg:w-[70%] text-[38px] p-0 m-0 leading-12 font-medium'>Sabi — Your AI Assistant for Smarter Care</div>
                <p className="mt-4 text-[#676767] w-[80%]">From patient insights to peer-reviewed research, Sabi gives clinicians instant access to the information they need — securely, intelligently, and in real time.</p>
                <div className='mt-6 flex flex-row items-center gap-6'>
                    <button className='bg-primary py-3 px-8 text-white rounded-full hover:bg-primary/90 transition-colors' onClick={openSabiEmail}>Get Started</button>
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
            <div className='relative overflow-hidden mt-10 lg:mt-0 lg:ml-[10%] w-full mb-4 lg:mb-0 lg:w-[85%] bg-[#F3F3F3]/50 rounded-4xl aspect-[1/0.9]'>
                <img
                    src={text}
                    alt=""
                    className="absolute w-[80%] lg:w-auto top-15 left-1/2 -translate-x-1/2"
                />
            </div>
        </div>
    )
}

export default Sabi