import React from "react";
import Discussion from "../components/Discussion";
import VideoFeeds from "../components/VideoFeeds";

function Home() {
  return (
    <div className="flex sm:mr-0 mr-5 ml-5 sm:ml-10">
      <Discussion className="" />
      <VideoFeeds className="ml-3" />
    </div>
  );
}

export default Home;
