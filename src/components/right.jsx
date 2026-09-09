function Right() {
    return (
        <>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-3">
                <button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded transition-colors">➕ Create Post</button>
                <button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded transition-colors">📺 Watch Streams</button>
                <button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded transition-colors">🎮 Discover Games</button>
                <button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded transition-colors">🏆 Leaderboards</button>
            </div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-4 mt-4">
            {/* Promotional Banner */}
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 text-center">
                <h3 className="text-white text-xl font-bold mb-2">🎮 New Game Launch!</h3>
                <p className="text-gray-300">Check out the latest trending games</p>
            </div>
        </div>
        <div className="bg-gray-800 border-t border-gray-700 rounded-lg p-4 mb-4">
            {/* Community Links */}
            <div className="flex flex-col gap-3">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">🏠 Home</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">🎮 Games</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">👥 Community</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📊 Stats</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">⚙️ Settings</a>
            </div>
            <div className="text-center mt-4 text-gray-500 text-sm">
                © 2026 LoLo Gaming Platform. All rights reserved.
            </div>
        </div></>
    )
}

export default Right
