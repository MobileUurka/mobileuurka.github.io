import { useState } from "react"

const CTA = () => {
    const [email, setEmail] = useState('')

    const handleSend = () => {
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        const subject = encodeURIComponent('Contact Request - MobileUurka Healthcare Solutions');
        const body = encodeURIComponent(`Hello MobileUurka Team,

I am interested in learning more about your healthcare solutions.

My email address: ${email}

Please contact me to discuss:
- Your healthcare AI platform
- Implementation process
- Pricing and plans
- Demo availability

I look forward to hearing from you.

Best regards,
[Your Name]
[Your Organization]`);
        
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
        setEmail(''); // Clear the input after sending
    }
    return (
        <div className="w-full bg-[#F3F3F3]/50 flex flex-col items-center justify-center mb-[10vh]">
            <div className="lg:w-[30%] w-[80%] flex-col items-center gap-6 py-25">
                <div className=" text-[38px] p-0 m-0 leading-12 font-medium">Get in Touch with MobileUurka</div>
                <p className="my-4 text-[#676767]">Send Us your Email and we will get back to you</p>
                <div className='flex items-center gap-3'>
                    <input
                        type='email'
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='flex-1 px-2 lg:px-4 py-2.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400'
                    />
                    <button
                        onClick={handleSend}
                        className='bg-primary text-white px-4 lg:px-8 py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium'
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTA