"use client"

import { useState, useEffect } from "react"
import { Globe, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<{name: string, email: string} | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      try {
        const userData = JSON.parse(currentUser)
        setUser(userData)
      } catch (e) {
        // Handle error
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    router.push('/')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full gradient-bg"></div>
              <div className="ml-2 flex items-baseline">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Login</span>
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Sim</span>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="ml-6 flex space-x-4">
              <a 
                href="/" 
                className={`${pathname === '/' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </a>
              {user ? (
                <a 
                  href="/dashboard" 
                  className={`${pathname === '/dashboard' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Dashboard
                </a>
              ) : (
                <a 
                  href="/signup" 
                  className={`${pathname === '/signup' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Sign Up
                </a>
              )}
              <a 
                href="#" 
                className="text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Support
              </a>
            </nav>
          </div>
          
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
              <Globe className="h-6 w-6" />
            </button>
            
            {user ? (
              <div className="ml-3 flex items-center">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{user.name}</span>
                </div>
                <Button 
                  onClick={handleLogout}
                  className="ml-3 btn-destructive text-sm px-3 py-1"
                >
                  Logout
                </Button>
              </div>
            ) : pathname === '/signup' ? (
              <Button className="ml-4 btn-secondary">
                <a href="/">Sign In</a>
              </Button>
            ) : (
              <Button className="ml-4 btn-primary">
                <a href="/signup">Sign Up</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}