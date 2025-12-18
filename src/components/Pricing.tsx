import React from 'react'

const openPricingEmail = () => {
    const subject = encodeURIComponent('Pricing Information Request - MobileUurka Healthcare Solutions');
    const body = encodeURIComponent(`Hello MobileUurka Team,

I am interested in learning more about your pricing options for healthcare solutions.

Please provide me with information about:
- Available pricing plans and tiers
- Features included in each plan
- Volume discounts for healthcare organizations
- Implementation and setup costs
- Training and support pricing
- Custom enterprise solutions

I would appreciate a detailed pricing breakdown tailored to healthcare providers.

Best regards,
[Your Name]
[Your Healthcare Organization]
[Organization Size/Type]
[Your Contact Information]`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
};

const Pricing = () => {
    
    return (
        <div className="w-full bg-[#F3F3F3]/50 flex flex-col items-center justify-center mb-[10vh] py-16">
            <div className="lg:w-[35%] w-[80%] flex flex-col gap-6">
                <div className="text-[38px] p-0 m-0 leading-tight font-medium">
                    Flexible Plans for Every Business
                </div>
                <p className="text-[#676767]">
                    Discover pricing options tailored to your needs and budget
                </p>
                <button
                    onClick={openPricingEmail}
                    className='bg-primary cursor-pointer text-white px-10 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium w-[180px]'
                >
                    View Pricing
                </button>
            </div>
        </div>
    )
}

export default Pricing