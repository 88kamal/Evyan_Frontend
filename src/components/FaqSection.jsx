import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Typography } from '@material-tailwind/react';

const faqs = [
  {
    question: 'What is the range of Evyan electric rickshaws?',
    answer:
      'Evyan e-rickshaws offer a range of up to 120 km on a single full charge, depending on the model and road conditions.',
  },
  {
    question: 'Do you provide after-sales service?',
    answer:
      'Yes, we offer comprehensive after-sales support including service, maintenance, and spare parts across multiple cities.',
  },
  {
    question: 'Are financing and EMI options available?',
    answer:
      'Absolutely! We partner with various banks and NBFCs to provide flexible EMI options to our customers.',
  },
  {
    question: 'How long does it take to charge an Evyan e-rickshaw?',
    answer:
      'It typically takes 6-8 hours for a full charge using a standard charging point.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-cyan-100 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
          Frequently Asked Questions
        </Typography>
        <Typography variant="paragraph" className="text-gray-600 text-lg">
          Everything you need to know about Evyan vehicles, services, and support.
        </Typography>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border border-blue-200 bg-white shadow-md transition-all duration-300 overflow-hidden ${
              openIndex === index ? 'ring-2 ring-blue-400' : ''
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className={`text-lg font-semibold transition-colors ${
                  openIndex === index ? 'text-blue-600' : 'text-blue-gray-800'
                }`}
              >
                {faq.question}
              </Typography>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-1">
                <Typography variant="paragraph" className="text-gray-700">
                  {faq.answer}
                </Typography>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
