"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  useEffect(() => {
    // Create a test account if none exists
    const users = JSON.parse(localStorage.getItem('users') || '{}')
    if (Object.keys(users).length === 0) {
      const testUsers = {
        "user@example.com": {
          name: "Test User",
          email: "user@example.com",
          password: "password"
        }
      }
      localStorage.setItem('users', JSON.stringify(testUsers))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Column - Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Login Simulation
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A demonstration of a login system using browser local storage. 
              All data is stored locally in your browser and is never sent to any server.
            </p>
            
            <div className="mt-8 card">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">How to Test</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">
                    Sign up with any email and password to create an account
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">
                    Use your credentials to log in
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">
                    View your dashboard after logging in
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">
                    Check browser console to see stored data
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 card">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Technical Details</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                This simulation uses browser local storage to persist user data. 
                No external databases or servers are involved.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Demo Credentials</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Email: <span className="font-mono text-blue-600 dark:text-blue-400">user@example.com</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Password: <span className="font-mono text-blue-600 dark:text-blue-400">password</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Login Form */}
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}