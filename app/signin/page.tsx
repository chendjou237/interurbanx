'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import isAuthenticated from '../utils/isAuthenticated'
import Link from 'next/link'

import SigninForm from './SigninForm';
import { redirect } from 'next/navigation';
import { PocketBaseContext, usePocketbaseContext } from '../libs/context';
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';


export default function SignInPage() {
const client = new PocketBase("http://127.0.0.1:8090")
  const auth = isAuthenticated(client)
  if(auth){
      
      redirect('/shipments')
  }
  
  return (
    <div>
      <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account yet?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="../examples/html/signup.html"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                    {/* ... (SVG paths) ... */}
                  </svg>
                  Sign in with Google
                </button>

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </div>

                {/* Form */}
                <SigninForm />
                {/* End Form */}
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}
