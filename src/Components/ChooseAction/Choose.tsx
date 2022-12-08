import React from "react";

function Choose() {
  return (
    <div className="flex flex-row items-center justify-center mt-10 ">
      <button className="border mr-4 w-40 h-32">Create talents sets</button>
      <button className="border w-40 h-32">View/Edit an existing set</button>
    </div>
  );
}

export { Choose };
