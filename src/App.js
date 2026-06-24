import Navbar from "../src/Components/Navbar"
import Story from "../src/Components/Story"
import SideBox from "./Components/SideBox"
import Post from "./Components/Posts"

const POSTS_DATA = [
    {
        id: 1,
        author: "Alice Johnson",
        content: "Just had an amazing hike through the mountains! The view from the top was breathtaking. 🏔️",
        likes: 142,
        comments: 18,
        timestamp: "2 hours ago",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        author: "Bob Martinez",
        content: "Finally finished my home renovation project. Took three months but it was totally worth it! 🏠",
        likes: 89,
        comments: 34,
        timestamp: "4 hours ago",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        author: "Carol Williams",
        content: "Made homemade pasta from scratch today. Nonna would be proud! 🍝",
        likes: 211,
        comments: 47,
        timestamp: "6 hours ago",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        author: "David Chen",
        content: "Just released my first open source library! Check it out on GitHub. Months of work finally paying off 🚀",
        likes: 378,
        comments: 92,
        timestamp: "8 hours ago",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        author: "Eva Rossi",
        content: "Morning run by the beach — best way to start the day. Feeling energized! 🌅",
        likes: 156,
        comments: 23,
        timestamp: "10 hours ago",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 6,
        author: "Frank Okafor",
        content: "Attended an incredible jazz concert last night. Live music just hits different. 🎷",
        likes: 94,
        comments: 15,
        timestamp: "12 hours ago",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: 7,
        author: "Grace Kim",
        content: "My succulent collection has officially gotten out of hand... and I regret nothing. 🌵",
        likes: 305,
        comments: 61,
        timestamp: "14 hours ago",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: 8,
        author: "Henry Thompson",
        content: "Road trip across the coast with the crew. Three states in two days — absolute madness! 🚗",
        likes: 427,
        comments: 83,
        timestamp: "16 hours ago",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
]

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main_container">
                <div className="page_content">
                    <div className="main_content">
                        <Story />
                        {POSTS_DATA.map((post) => (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                likes={post.likes}
                                comments={post.comments}
                                timestamp={post.timestamp}
                                avatar={post.avatar}
                            />
                        ))}
                    </div>
                    <SideBox />
                </div>
            </div>
        </>
    )
}

export default App;