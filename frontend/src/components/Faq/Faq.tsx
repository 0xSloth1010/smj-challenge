import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'react-feather'
import { faqData } from './faqData'

export const Faq = () => {
  return (
    <div className="mx-auto w-full rounded-xl p-4 space-y-2 border border-solid border-gray-light border-opacity-50">
      <span className="text-white">FAQs</span>
      {faqData.map((faq) => (
        <Disclosure key={faq.question}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange px-4 py-2 text-left text-sm font-medium text-white">
                <span>{faq.question}</span>
                <ChevronDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500 text-white text-opacity-60">
                {faq.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
