import { useState } from 'react'
import Left from './components/left'
import Right from './components/right'
import Category from './components/category'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="layout" className="bg-gray-900 min-h-screen">
                <div className="bg-gray-800 border-b border-gray-700 p-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a href="#" className="text-xl font-bold text-blue-400">LoloLab</a>
                        {/* Search bar - centered */}
                        <input type="text" placeholder="🎮 Find games, friends, or communities..." className="bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
                        {/* User buttons - right justified */}
                        <section className="flex gap-2">
                            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 transition-colors">👤 My Profile</button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 transition-colors">⚙️ Settings</button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 transition-colors">🔔 Notifications</button>
                        </section>
                    </div>
                </div>
                <div className="p-4 mt-36">
                    <Category/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                    <div className="lg:col-span-2">
                        <Left />
                    </div>
                    <div className="">
                        <Right />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
