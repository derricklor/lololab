import { useState, useEffect, useRef } from 'react'

// Textbank for generating random posts
const textbank = [
    'Just beat the boss level! 🎉',
    'Live stream starting in 10 mins! 🎮',
    'Found a new bug in the game! 🐛',
    'Anyone else experiencing lag today? 🖥️',
    'New game+ content dropped! Check it out! ⚔️',
    'Just hit level 50! Going for max level now! 🏆',
    'The new update broke my save file 😭',
    'Team up for a raid tonight! 🛡️',
    'Speedrun PR attempt tomorrow! ⏱️',
    'This level is incredibly difficult 😤',
    'Caught a rare item in the loot box! 🎁',
    'Looking for party members for tonight! 👥',
    'My character finally looks complete! 💅',
    'Game of the year is a lie... 🤡',
    'Just discovered a secret area! 🗺️',
    'The boss HP is way too high 😱',
    'New controller just arrived! 🎮',
    'Grinding for materials all day ⛏️',
    'Found a glitch! Here\'s a screenshot! 📸',
    'This DLC is not worth it 💸'
]

const usernames = [
    '@GamerName', '@Streamer', '@SpeedRunner', '@BugHunter', '@RaidLeader',
    '@NoobMaster', '@ProPlayer', '@CasualGamer', '@HardcoreMode', '@Newbie'
]

const times = [
    '2h ago', '5h ago', '1h ago', '30m ago', '1d ago', '3h ago', '6h ago', '12h ago'
]

function Left() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: '@GamerName',
            time: '2h ago',
            text: 'Just beat the boss level! 🎉',
            media: null,
            likes: 0,
            comments: 0
        },
        {
            id: 2,
            username: '@Streamer',
            time: '5h ago',
            text: 'Live stream starting in 10 mins! 🎮',
            media: null,
            likes: 0,
            comments: 0
        }
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [likedPosts, setLikedPosts] = useState(new Set())

    // Generate random post from textbank
    function fetchPosts() {
        setIsLoading(true)
        
        // Wait random time between 1000-2000ms
        const delay = Math.floor(Math.random() * 1000) + 1000
        return new Promise(resolve => {
            setTimeout(() => {
                // Add multiple posts at once
                const newPosts = Array.from({ length: 3 }, () => ({
                    id: crypto.randomUUID(),
                    username: usernames[Math.floor(Math.random() * usernames.length)],
                    time: times[Math.floor(Math.random() * times.length)],
                    text: textbank[Math.floor(Math.random() * textbank.length)],
                    media: null,
                    likes: Math.floor(Math.random() * 100),
                    comments: Math.floor(Math.random() * 100)
                }))
                
                setPosts(prevPosts => [...prevPosts, ...newPosts])
                setIsLoading(false)
                resolve()
            }, delay)
        })
    }

    // Handle toggle like functionality
    function handleToggleLike(postId) {
        setLikedPosts(prevLiked => {
            const newLiked = new Set(prevLiked)
            if (newLiked.has(postId)) {
                newLiked.delete(postId)
            } else {
                newLiked.add(postId)
            }
            return newLiked
        })

        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1
                }
            }
            return post
        }))
    }

    // Setup intersection observer to auto-load posts when new post is visible
    const observer = useRef(null)
    useEffect(() => {
        const lastPostElement = document.getElementById('load-more-trigger')
        if (!lastPostElement) return

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                fetchPosts()
            }
        }, {
            threshold: 0.1
        })

        observer.current.observe(lastPostElement)

        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [isLoading])

    return (
        <div className="h-full overflow-y-auto">
            <div className="space-y-9">
                {posts.map((post) => (
                    <div key={post.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">👤</div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-400 font-semibold">{post.username}</span>
                                    <span className="text-gray-400 text-sm">{post.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-300 mt-3">{post.text}</div>
                        <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 mb-3">📷 Game Media</div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                                <button onClick={() => handleToggleLike(post.id)} className={`flex items-center gap-1 transition-colors ${likedPosts.has(post.id) ? 'text-blue-400 scale-110' : 'text-gray-400 hover:text-blue-400'}`}>
                                    👍 {post.likes}
                                </button>
                                <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">💬 {post.comments}</button>
                                <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">🔗 Share</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-center pt-12 pb-72 ">
                    {isLoading ? (
                        <div className="text-gray-400 animate-pulse">Loading more posts...</div>
                    ) : (
                        <div className="text-gray-400">Scroll to load more posts</div>
                    )}
                </div>
                <div id="load-more-trigger" className="h-6"></div>
            </div>
        </div>
    )
}

export default Left
