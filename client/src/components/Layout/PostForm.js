import React from "react";
import Avatar from "../../img/avatar.png";

export default function PostForm() {
  return (
    <div className="bg-reddit_gray px-6 py-4 text-white-400">
      <div className="border border-reddit_border p-2 rounded-md flex bg-white">
        <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
          <img src={Avatar} alt="" style={{ filter: "invert(100%)" }} />
        </div>
        <form
          action=""
          className="flex-grow bg-reddit_gray-brighter border border-gray ml-4 mr-2 rounded-md"
        >
          <input
            type="text"
            className=" bg-reddit_gray-brighter p-2 px-3 text-sm block w-full rounded-md"
            placeholder="Create Post"
          />
        </form>
      </div>
    </div>
  );
}
