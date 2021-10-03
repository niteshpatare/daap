/* This example requires Tailwind CSS v2.0+ */
import { Component, Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronDoubleUpIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import Login from './Login';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
      
    <div className="lg:flex lg:items-center lg:justify-between px-1">
      <div className="flex-1 min-w-0">
      <img src="/aus.png" alt="Vercel Logo" className="h-12 ml-2" /> 
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Revenue Link Hits 45
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Last Vaccinated on January 9, 2020
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <ChevronDoubleUpIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Purchases so far 120k
            <Login></Login>
          </div>
        </div>
      </div>
      
    </div>
  )
}
