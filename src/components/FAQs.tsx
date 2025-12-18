import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    question: "How can one partner with MobileUurka?",
    answer: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."
    ]
  },
  {
    id: "item-2",
    question: "How does MobileUurka’s solution work?",
    answer: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."
    ]
  },
  {
    id: "item-3",
    question: "Who can use MobileUurka’s platform?",
    answer: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
    ]
  },
   {
    id: "item-4",
    question: "Is MobileUurka only available in certain countries?",
    answer: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
    ]
  },
   {
    id: "item-5",
    question: "Is the data secure and private?",
    answer: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
    ]
  }
]

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {faqData.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-b-[#727272]/16">
          <AccordionTrigger className="py-7 font-medium ">{faq.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {faq.answer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const FAQs = () => {
  return (
    <div className='w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[50%_50%] mb-[10vh] lg:mb-[20vh]'>
      <div className="flex flex-col ">
        <div className='text-[#8B8B8B]'>FAQs</div>
        <div className='w-full lg:w-[60%] text-[38px] p-0 m-0 leading-12 font-medium'>
          Frequently Asked Questions
        </div>                 
      </div>
      <div className='w-full mb-4 lg:mb-0 lg:w-[95%]'>
        <AccordionDemo />
      </div>
    </div>
  )
}

export default FAQs