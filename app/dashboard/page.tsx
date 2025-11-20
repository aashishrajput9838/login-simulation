"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import { ProtectedRoute } from "@/components/protected-route"

export default function DashboardPage() {
  const [user, setUser] = useState<{name: string, email: string} | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Get user data from localStorage
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      try {
        const userData = JSON.parse(currentUser)
        setUser(userData)
      } catch (e) {
        router.push('/')
      }
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    router.push('/')
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Welcome back, {user?.name}!
                </p>
              </div>
              <button 
                onClick={handleLogout}
                className="btn-destructive"
              >
                Logout
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="card hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Profile</h2>
                <p className="text-gray-600 dark:text-gray-400">Manage your account settings</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Name:</span> {user?.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Email:</span> {user?.email}
                  </p>
                </div>
              </div>
              
              <div className="card hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Security</h2>
                <p className="text-gray-600 dark:text-gray-400">Update your password and security settings</p>
                <div className="mt-4">
                  <button className="btn-secondary text-sm">
                    Change Password
                  </button>
                </div>
              </div>
              
              <div className="card hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Activity</h2>
                <p className="text-gray-600 dark:text-gray-400">View your recent activity and login history</p>
                <div className="mt-4">
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>Last login: Today</li>
                    <li>Account created: Today</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Data</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All your account data is securely stored in your browser's local storage. 
                No data is sent to any external servers.
              </p>
              <button 
                onClick={() => {
                  const users = localStorage.getItem('users')
                  console.log('All users:', users)
                }}
                className="btn-secondary"
              >
                View stored data (Console)
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}