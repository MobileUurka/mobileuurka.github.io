import React from 'react'
import logo from '../assets/images/logo.png'
import '../hamburger.css'

interface NavbarProps {
    navClicked: boolean;
    setNavClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

const openEmailDraft = () => {
    const subject = encodeURIComponent('Request Demo - MobileUurka Healthcare Solutions');
    const body = encodeURIComponent(`Hello MobileUurka Team,

I am interested in requesting a demo of your healthcare solutions platform.

I would like to learn more about:
- Real-time analysis capabilities
- Risk prediction features
- Evidence-based insights for OBGYNs
- Implementation process

Please let me know your availability for a demonstration and any additional information you might need from me.

Looking forward to hearing from you.

Best regards,
[Your Name]
[Your Organization]
[Your Contact Information]`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
};

const Navbar = ({ navClicked, setNavClicked }: NavbarProps) => {
    return (
        <>
            <nav className='hidden lg:flex flex-row items-center justify-between w-full py-5 px-[5%] border-b border-b-black/10'>
                <div className="h-[7.5vh] flex items-center">
                    <img src={logo} alt="logo" className='h-[60%] w-auto my-auto' />
                </div>
                <div className='flex flex-row items-center gap-10'>
                    <ul className='flex flex-row items-center gap-5.5'>
                        <li className='cursor-pointer hover:text-primary transition-colors' onClick={() => scrollToSection('metrics')}>Metrics</li>
                        <li className='cursor-pointer hover:text-primary transition-colors' onClick={() => scrollToSection('about')}>About</li>
                        <li className='cursor-pointer hover:text-primary transition-colors' onClick={() => scrollToSection('powered')}>Features</li>
                        <li className='cursor-pointer hover:text-primary transition-colors' onClick={() => scrollToSection('sabi')}>Sabi</li>
                        <li className='cursor-pointer hover:text-primary transition-colors' onClick={() => scrollToSection('footer')}>Contact</li>
                    </ul>
                    <button className='bg-primary py-3 px-8 rounded-lg text-white text-sm hover:bg-primary/90 transition-colors' onClick={openEmailDraft}>Request Demo</button>
                </div>
            </nav>
            <nav className='lg:hidden flex flex-row items-center justify-between  w-full py-5 px-[5%] border-b border-b-black/20'>
                <div className="h-[7.5vh] flex items-center">
                    <img src={logo} alt="logo" className='h-[50%] w-auto' />
                </div>
                <button
                    className={`hamburger hamburger--spin ${navClicked ? "is-active" : ""}`}
                    type="button"
                    onClick={() => setNavClicked(prev => !prev)}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
        </>
    )
}

export default Navbar