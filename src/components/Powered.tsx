import { FaChartLine, FaRegLightbulb } from 'react-icons/fa'
import { MdWaves } from 'react-icons/md'

const Powered = () => {
    return (
        <div className='w-[90%] mx-auto mb-[10vh] lg:mb-[20vh]'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6'>
                <div className='w-[90%] mx-auto lg:mx-0 lg:w-[50%]'>
                    <div className='text-[#8B8B8B]'>Features</div>
                    <div className='w-full lg:w-[70%] text-[38px] p-0 m-0 leading-12 font-medium'>Driving Impact Through Data and AI</div>
                </div>
                <p className='w-[90%] mx-auto lg:mx-0 lg:w-[30%] text-[#676767]'>We equips OBGYNs and healthcare providers with intelligent tools that simplify analysis, support early detection, and enhance maternal care outcomes.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-20'>
                <div className='mx-auto border border-[#737373]/10 rounded-[10px]  w-[90%] aspect-[1/1.1] flex flex-col justify-center p-6'>
                    <div className='mb-10 text-primary text-[37px]'><FaChartLine /></div>
                    <div className='font-bold mb-1'>Clear, actionable insights.</div>
                    <p className='text-[#676767] w-[95%]'>Our AI engine interprets patient data in real time, offering practitioners evidence-based recommendations and identifying subtle trends invisible to manual review.</p>
                </div>

                <div className='mx-auto border border-[#737373]/10 rounded-[10px]  w-[90%] aspect-[1/1.1] flex flex-col justify-center p-6'>
                    <div className='mb-10 text-primary text-[37px]'><MdWaves /></div>
                    <div className='font-bold mb-1'>Our AI-driven technology </div>
                    <p className='text-[#676767] w-[95%]'>Machine learning models trained on maternal health data predict high-risk scenarios — enabling timely interventions and improved patient safety.</p>
                </div>

                <div className='mx-auto bg-primary rounded-[10px] rounded-tr-[120px] w-[90%] aspect-[1/1.1] flex flex-col justify-center p-6'>
                    <div className='mb-10 text-white text-[37px]'><FaRegLightbulb /></div>
                    <div className='font-bold text-white mb-1'>Stay informed</div>
                    <p className='text-white w-[95%]'>Automated summaries, visual dashboards, and intelligent alerts ensure you never miss a critical update, even across large patient datasets.</p>
                </div>

            </div>
        </div>

    )
}

export default Powered