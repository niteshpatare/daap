import { reat } from "react";
import { BookmarkIcon, ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";


/* This example requires Tailwind CSS v2.0+ 
var serialized = JSON.stringify(new Date());
var deserialized = new Date(JSON.parse(serialized));

var iso = (new Date()).toISOString();
'2021-10-01T16:07:28.779Z'

var dateObj = new Date(iso);


*/

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    vaccinated: '2021-10-01T16:07:28.779Z',
    accessory: 'abc, xya, pqr',    
    toys: 'abc, xya, pqr',
    email: '1jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    vaccinated: '2021-10-01T16:07:28.779Z',
    accessory: 'abc, xya, pqr',
    toys: 'abc, xya, pqr',
    email: '2jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    vaccinated: '2021-10-01T16:07:28.779Z',
    accessory: 'abc, xya, pqr',    
    toys: 'abc, xya, pqr',
    email: '3jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    vaccinated: '2021-10-01T16:07:28.779Z',
    accessory: 'abc, xya, pqr',
    toys: 'abc, xya, pqr',
    email: '4jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function Playarea() {
  return (
    <div className="flex flex-col">
        <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                    ZIP / Postal PIN Code
                    </label>
                    <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="mt-1 text-indigo-600 hover:text-indigo-900 h-14 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg py-4 px-4 border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vaccinated On
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Accessories / Toys
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Enquire
                  </th>

                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">                  
                    <span className="inline-block">
                        <ViewGridIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 cursor-pointer" aria-hidden="true" />
                    </span>
                    <span className="inline-block">
                        <ViewListIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 cursor-pointer" aria-hidden="true" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map( (person) => (
                    
                    <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                            </div>
                            <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm font-medium text-gray-500">{person.email}</div>
                            </div>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.vaccinated}</div> 
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div>{person.accessory}</div>
                            <div>{person.toys}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Enquire 
                        </a>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                <BookmarkIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </td>
                    </tr>

                    )
                )}
              </tbody>
            </table>
          </div>
    </div>
  )
}

      