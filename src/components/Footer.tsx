import logo from '../assets/images/logo.png'
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa'

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

const openCustomerHelpEmail = () => {
  const subject = encodeURIComponent('Customer Help Request - MobileUurka Healthcare Solutions');
  const body = encodeURIComponent(`Hello MobileUurka Support Team,

I need assistance with your healthcare solutions platform.

Please help me with:
- [Describe your issue or question]
- [Any specific feature you need help with]
- [Technical difficulties you're experiencing]

Additional details:
- [Your current setup/usage]
- [Any error messages]

Thank you for your support.

Best regards,
[Your Name]
[Your Organization]
[Your Contact Information]`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
  window.open(gmailUrl, '_blank');
};

const openTermsOfUse = () => {
  window.open('/src/assets/docs/Terms of Use.pdf', '_blank');
};

const openSupportEmail = () => {
  const subject = encodeURIComponent('General Inquiry - MobileUurka Healthcare Solutions');
  const body = encodeURIComponent(`Hello MobileUurka Team,

I would like to get in touch regarding your healthcare solutions.

Please contact me to discuss:
- [Your inquiry or interest]
- [Specific questions about your platform]
- [Partnership or collaboration opportunities]

Best regards,
[Your Name]
[Your Organization]
[Your Contact Information]`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mobileuurka.com&su=${subject}&body=${body}`;
  window.open(gmailUrl, '_blank');
};

const callPhone = () => {
  window.location.href = 'tel:+2540702227101';
};

const openLinkedIn = () => {
  window.open('https://linkedin.com/company/mobileuurka', '_blank');
};

const openInstagram = () => {
  // Placeholder for when Instagram is ready
  alert('Instagram coming soon! Follow us for updates.');
};

const Footer = () => {
  const companyLinks = [
    { name: 'Metrics', action: () => scrollToSection('metrics') },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Features', action: () => scrollToSection('powered') },
    { name: 'Sabi', action: () => scrollToSection('sabi') }
  ]

  const helpLinks = [
    { name: 'Customer Help', action: openCustomerHelpEmail },
    { name: 'Changelog', action: () => window.open('https://github.com/MobileUurka/changelog', '_blank') },
    { name: 'FAQs', action: () => scrollToSection('faqs') }
  ]

  const legalLinks = [
    { name: 'Terms of Use', action: openTermsOfUse }
  ]

  const socialIcons = [
    {
      name: 'Email',
      icon: <FaEnvelope className="w-4 h-4" />,
      action: openSupportEmail,
      title: 'support@mobileuurka.com'
    },
    {
      name: 'Phone',
      icon: <FaPhone className="w-4 h-4" />,
      action: callPhone,
      title: '+254 702 227 101'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-4 h-4" />,
      action: openLinkedIn,
      title: 'LinkedIn Profile'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-4 h-4" />,
      action: openInstagram,
      title: 'Instagram (Coming Soon)'
    }
  ]

  return (
    <footer className='w-full  border-t border-gray-200'>
      <div className='w-[80%] lg:w-[90%] mx-auto py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_20%_20%_20%] gap-8 mb-12'>
          {/* Brand Section */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={logo} alt='Mobileuurka Logo' className='w-auto h-8' />
            </div>
            <p className='text-gray-600 text-sm leading-relaxed max-w-sm'>
              Our AI-driven technology anticipates and mitigates pregnancy-related diseases, providing tailored
            </p>
            <button className='w-fit text-sm bg-primary py-3 px-8 text-white rounded-full'>Download Now</button>

          </div>

          {/* Company Links */}
          <div className='hidden lg:flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-2'>Navigation</h3>
            {companyLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className='text-gray-600 text-sm hover:text-primary transition-colors text-left'
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Help Links */}
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-2'>Help</h3>
            {helpLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className='text-gray-600 text-sm hover:text-primary transition-colors text-left'
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Legal Links */}
          <div className='hidden lg:flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-2'>Legal</h3>
            {legalLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className='text-gray-600 text-sm hover:text-primary transition-colors text-left'
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className='flex gap-3 mb-8'>
          {socialIcons.map((social) => (
            <button
              key={social.name}
              onClick={social.action}
              className='w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors group'
              aria-label={social.name}
              title={social.title}
            >
              <span className='text-gray-600 group-hover:text-white transition-colors'>
                {social.icon}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className='pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-600 text-sm'>© Mobileuurka 2025</p>
          <div className='flex gap-6'>
            <button onClick={openTermsOfUse} className='text-gray-800 text-sm hover:text-primary transition-colors'>
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer