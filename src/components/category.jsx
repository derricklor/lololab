import { useState } from 'react'

function Category() {

    const [selectedCategory, setSelectedCategory] = useState('all')

    const style = "bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 hover:border-blue-500 hover:cursor-pointer"
    const selectedStyle = "bg-blue-500 border border-blue-400 text-white rounded-lg px-4 py-2 hover:cursor-pointer"
    return (
        <>
            
            <ul className="flex gap-2 justify-center">
                <li className={`${selectedCategory === 'all' ? selectedStyle : style}`} onClick={() => setSelectedCategory('all')}>🎯 All Games</li>
                <li className={`${selectedCategory === 'popular' ? selectedStyle : style}`} onClick={() => setSelectedCategory('popular')}>🔥 Popular</li>
                <li className={`${selectedCategory === 'trending' ? selectedStyle : style}`} onClick={() => setSelectedCategory('trending')}>📈 Trending</li>
                <li className={`${selectedCategory === 'new' ? selectedStyle : style}`} onClick={() => setSelectedCategory('new')}>🆕 New Releases</li>
            </ul>
        </>
    )
}

export default Category