import React from "react";
import StudentsVid from "./StudentsVid";
import Teacher from "../assets/NoPath - Copy.jpeg";
import {
  ArrowsExpandIcon,
  MicrophoneIcon,
  HandIcon,
} from "@heroicons/react/solid";
import { VolumeOffIcon, VideoCameraIcon } from "@heroicons/react/outline";
function VideoFeeds() {
  return (
    <div className="flex flex-col md:ml-9 ml-2 w-full overflow-y-auto h-full">
      <div className="flex flex-col h-full justify-between md:flex-row">
        <div className="relative rounded-md shadow-md md:max-h-[540px] max-h- min-h-[100px] bg-[#223156]   max-w-screen-sm  mb-4">
          {" "}
          <img
            src={Teacher}
            className="rounded-lg sm:h-full ] w-full object-"
          />
          <div className="top-[80%]  w-full absolute  p-2">
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <ArrowsExpandIcon className=" md:h-[54px] h-[24px]  text-white" />
                <VolumeOffIcon className="md:h-[54px] h-[24px] text-white" />
              </div>
              <h1 className="text-white ml-auto font-bold mr-4">Prof. Name</h1>
            </div>
          </div>
        </div>
        <div className="lg:px-16 lg:py-6  p-2 ">
          <StudentsVid className="shadow-lg drop-shadow-lg" large />
          <div className="flex  md:ml-20 p-5 text-white">
            <div className="p-2">
              <MicrophoneIcon className="lg:w-12 w-4" />
            </div>
            <div className="p-2">
              {" "}
              <VideoCameraIcon className="lg:w-12 w-4" />
            </div>
            <div className="p-2">
              <HandIcon className="lg:w-12 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex lg:mt-0 mt-24 hidden overflow-x-scroll">
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
        <div className=" m-2">
          <StudentsVid />
        </div>
      </div>
    </div>
  );
}

export default VideoFeeds;
