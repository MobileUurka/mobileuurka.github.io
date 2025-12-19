
const Metrics = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col h-auto py-5 mb-[10vh] lg:mb-[20vh]'>
      <div className='text-[#8B8B8B]'>Impact Metrics</div>
      <div className='w-[90%] lg:w-[30%] text-[38px] p-0 m-0 leading-12 font-medium'>Driving Impact Through Data and AI</div>
      <div className='mt-15 lg:mt-25 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='mx-auto flex flex-col gap-2 w-[90%] lg:border-r lg:border-r-[#6C6C6C]/17 md:bg-transparent md:border-none md:rounded-none md:p-0 bg-white border border-gray-200/30 rounded-xl p-6'>
          <span className='text-[32px] font-medium text-primary'>20+</span>
          <p className='w-[90%] text-[#676767]'>OBGYNs and clinicians using MobileUurka to make data-informed decisions.</p>
        </div>
        <div className='mx-auto flex flex-col gap-2 w-[90%] lg:border-r lg:border-r-[#6C6C6C]/17 md:bg-transparent md:border-none md:rounded-none md:p-0 bg-white border border-gray-200/30 rounded-xl p-6'>
          <span className='text-[32px] font-medium text-primary'>120+</span>
          <p className='w-[90%] text-[#676767]'>Real-time patients monitored and AI analysis done improving maternal care outcomes.</p>
        </div>
        <div className='mx-auto flex flex-col gap-2 w-[90%] md:bg-transparent md:border-none md:rounded-none md:p-0 bg-white border border-gray-200/30 rounded-xl p-6'>
          <span className='text-[32px] font-medium text-primary'>98%</span>
          <p className='w-[90%] text-[#676767]'>AI accuracy assessment validated algorithms continuously improving through clinician feedback.</p>
        </div>
      </div>
    </div>
  )
}

export default Metrics