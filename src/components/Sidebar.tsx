import React from 'react'

interface SideBarProps {
    navClicked: boolean;
    setNavClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const scrollToSection = (sectionId: string, setNavClicked: React.Dispatch<React.SetStateAction<boolean>>) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        setNavClicked(false); // Close mobile menu after clicking
    }
};

const openEmailDraft = (setNavClicked: React.Dispatch<React.SetStateAction<boolean>>) => {
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
    setNavClicked(false); // Close mobile menu
};

const SideBar = ({ navClicked, setNavClicked }: SideBarProps) => {
    return (

        <div
            className={`fixed top-[7.5vh+40px] left-0 h-full w-full bg-[#f5f5f5] z-80 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${navClicked ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="p-6">
                <nav>
                    <ul className="space-y-2">
                        <li className="cursor-pointer hover:text-primary flex flex-row items-center gap-4 hover:bg-primary/10 py-3 px-3 rounded-md transition-colors" onClick={() => scrollToSection('metrics', setNavClicked)}>
                            <span>Metrics</span>
                        </li>
                        <li className="cursor-pointer hover:text-primary flex flex-row items-center gap-4 hover:bg-primary/10 py-3 px-3 rounded-md transition-colors" onClick={() => scrollToSection('about', setNavClicked)}>
                            <span>About</span>
                        </li>
                        <li className="cursor-pointer hover:text-primary flex flex-row items-center gap-4 hover:bg-primary/10 py-3 px-3 rounded-md transition-colors" onClick={() => scrollToSection('powered', setNavClicked)}>
                            <span>Features</span>
                        </li>
                        <li className="cursor-pointer hover:text-primary flex flex-row items-center gap-4 hover:bg-primary/10 py-3 px-3 rounded-md transition-colors" onClick={() => scrollToSection('sabi', setNavClicked)}>
                            <span>Sabi</span>
                        </li>
                        <li className="cursor-pointer hover:text-primary flex flex-row items-center gap-4 hover:bg-primary/10 py-3 px-3 rounded-md transition-colors" onClick={() => scrollToSection('footer', setNavClicked)}>
                            <span>Contact</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='mx-6 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2' onClick={() => openEmailDraft(setNavClicked)}>
                Request Demo
            </div>
        </div>
    )
}

export default SideBar