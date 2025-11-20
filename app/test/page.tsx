export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">CSS Test Page</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          If you can see this styled correctly, CSS is working!
        </p>
        <button className="btn-primary">
          Primary Button
        </button>
        <button className="btn-secondary ml-4">
          Secondary Button
        </button>
      </div>
    </div>
  )
}