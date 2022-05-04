import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function StudentsVid({ large }) {
  return (
    <div
      className={
        large
          ? "rounded-md bg-[#223156] p-4 flex items-center justify-center"
          : "rounded-md bg-[#223156] p-10"
      }
    >
      <UserIcon
        className={
          large
            ? " xl:h-[287px] xl:w-[337px] lg:h-[187px] lg:w-[237px] h-[107px] w-[127px] text-white"
            : " lg:h-[100px] lg:w-[102px] md:w-[60px] md:h-[62px] w-8 h-8 text-white"
        }
      />
    </div>
  );
}

export default StudentsVid;
