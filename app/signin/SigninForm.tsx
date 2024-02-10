'use client'
import isAuthenticated from '../utils/isAuthenticated'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {  useForm } from "react-hook-form";
import { signin, signOut } from '../libs/auth';
import { useContext } from 'react';
import { PocketBaseContext } from '../libs/context';
import { cookies } from 'next/headers';
export default function SigninForm() {
    const router = useRouter()
    const  {client} = useContext(PocketBaseContext)
    const {
        register, handleSubmit, formState: {errors}
      } = useForm()
      const onSubmit =async (data:any) => {
        const { email, password } = data;
        const token =await signin(email, password, client!);
        cookies().set("pb_auth", token!)
        if(token)
          router.push('/profile')
        else 
          alert ('try again ')
      }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                        Email address
                      </label>
                      <input type="email" id="email" {...register("email")} name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />

                      {/* ... (input and error messages) ... */}
                    </div>
                    {/* End Form Group */}

                    {/* Form Group */}
                    <div>
                      <div className="flex justify-between items-center">
                        <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                          Password
                        </label>

                        <Link
                          className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="../examples/html/recover-account.html"
                        >
                          Forgot password?
                        </Link>
                      </div>
                        <input  type="password" id="password" {...register("password")} name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" />
                      {/* ... (password input and error messages) ... */}
                    </div>
                    {/* End Form Group */}

                    {/* Checkbox */}
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ms-3">
                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                          Remember me
                        </label>
                      </div>
                    </div>
                    {/* End Checkbox */}

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
    </div>
  )
}
