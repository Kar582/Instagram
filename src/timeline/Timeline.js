import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'
function Timeline() {
    const [posts,setPosts]=useState([
        {
            user: "Krishna",
            postImage:
              "https://img.freepik.com/free-photo/portrat-caucasian-professional-male-athlete-runner-training-isolated-black_155003-42226.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=sph",
            likes: 54,
            timestamp: "2h",
          },
          {
            user: "Patel_Sandyala",
            postImage:
              "https://img.freepik.com/free-photo/friends-having-fun-together_23-2149290148.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=sph",
            likes: 432,
            timestamp: "17h",
          },
          {
            user: "darling_karthik",
            postImage:
              "https://img.freepik.com/free-photo/handsome-bearded-male-sunglasses-dressed-black-suit-sitting-luxury-car-against-skyscraper_613910-19325.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=ais",
            likes: 1420,
            timestamp: "2d",
          },
          {
            user: "Chaitanya_1020",
            postImage:
              "https://img.freepik.com/free-photo/corporate-workers-brainstorming-together_23-2148804563.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=sph",
            likes: 3021,
            timestamp: "3d",
          },
          {
            user: "Nithin_king",
            postImage:
              "https://img.freepik.com/free-photo/portrait-volunteers-who-organized-donations-charity_23-2149230571.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=sph",
            likes: 521,
            timestamp: "1h",
          },
          {
            user: "Prince__praveen",
            postImage:
              "https://img.freepik.com/free-photo/forest-road_1127-3245.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=sph",
            likes: 311,
            timestamp: "1d",
          },
          {
            user: "daida_",
            postImage:
              "https://www.freepik.com/premium-photo/side-view-adventurous-couple-bivouacking_49654710.htm",
            likes: 1181,
            timestamp: "1d",
          },
          {
            user: "Sanjay_reddy",
            postImage:
              "https://img.freepik.com/free-photo/fashionable-guy-sunglasses-dressed-black-leather-jacket-jeans-talks-by-smartphone-while-standing-near-luxury-car-old-europe-street_613910-18106.jpg?size=626&ext=jpg&ga=GA1.1.1712223154.1691219251&semt=ais",
            likes: 2001,
            timestamp: "10h",
          },
    ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
            {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
                ))}
            </div>
        </div>
        <div className='timeline__right'>
            <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline