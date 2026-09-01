function Category() {

    const style = "bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 hover:border-blue-500 hover:cursor-pointer"
    return (
        <>
            <ul className="flex gap-2 justify-center">
                <li className={`${style}`}>🎯 All Games</li>
                <li className={`${style}`}>🔥 Popular</li>
                <li className={`${style}`}>📈 Trending</li>
                <li className={`${style}`}>🆕 New Releases</li>
                <li className={`${style}`}>👥 Playing with Friends</li>
            </ul>
        </>
    )
}

export default Category