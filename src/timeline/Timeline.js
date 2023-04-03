import React, { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [post, setPost] = useState([
    {
      user: "Lamborghini",
      postImage:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/hero/2022/11_30_sterrato/gate_hura_hero_03_m.jpg",
      likes: 112,
      timestamp: "2d",
    },
    {
      user: "JohnWick",
      postImage:
        "https://cdn.vox-cdn.com/thumbor/Dc8bBshDmxtKUCeTFovjt_pz_bM=/0x0:1777x999/1200x800/filters:focal(708x235:992x519)/cdn.vox-cdn.com/uploads/chorus_image/image/63756879/parabellumcover.0.jpg",
      likes: 54,
      timestamp: "6hr",
    },
    {
      user: "CRonaldo",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      likes: 952,
      timestamp: "12d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {post.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline_right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
