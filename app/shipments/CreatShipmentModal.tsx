'use client'
import React, { useContext } from 'react';
import { PocketBaseContext } from '../libs/context';
import { IShipments, ShipmentStatus } from '../utils/types';


const CreateShipmentModal = () => {
  const {client}  = useContext(PocketBaseContext);
  const handleShipmentCreation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const departure = formData.get('departure') as string;
    const destination = formData.get('destination') as string;
    const date = formData.get('date') as string;
    const space = formData.get('space') as string;
    const amount = formData.get('amount') as string;
    const data: IShipments = {
      id: null,
      agent: client?.authStore.model!.id as string,
      client: null,
      itemInfo: null,
      origin: departure,
      destination: destination,
      status: ShipmentStatus.pending,
      deliveryDate: date,
      amount: Number(amount),
      created: null,
      weight: Number(space),
      expand: null,
    }
    try {
      const response = await handleShipmentCreation(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-modal-signup"
        >
          Make an Order
        </button>
      </div>

      <div
        id="hs-modal-signup"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Make a new order</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Enter in the information of the shipment you wish to book <span> </span>
                  <a
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="../examples/html/modal-signin.html"
                  >
                     more information here
                  </a>
                </p>
              </div>

              <div className="mt-5">
               

                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label htmlFor="departure" className="block text-sm mb-2 dark:text-white">
                        departure address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="departure"
                          name="departure"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="departure-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 

1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="hidden text-xs text-red-600 mt-2" id="departure-error">
                        Please include a valid departure address so we can get back to you
                      </p>
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm mb-2 dark:text-white">
                        destination address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="destination-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 

1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="hidden text-xs text-red-600 mt-2" id="destination-error">
                        Please include a valid destination address so we can get back to you
                      </p>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm mb-2 dark:text-white">
                        date 
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="date-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 

1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="hidden text-xs text-red-600 mt-2" id="date-error">
                        Please include a valid date  so we can get back to you
                      </p>
                    </div>
                    <div>
                      <label htmlFor="space" className="block text-sm mb-2 dark:text-white">
                      Available  space 
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="space"
                          name="space"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="space-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 

1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="hidden text-xs text-red-600 mt-2" id="space-error">
                        Please include a valid space address so we can get back to you
                      </p>
                    </div>

                    <div>
                      <label htmlFor="amount" className="block text-sm mb-2 dark:text-white">
                        amount
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="amount-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="hidden text-xs text-red-600 mt-2" id="amount-error">
                        enter a valide amount
                      </p>
                    </div>


                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Create Shipment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShipmentModal;


