import React, { useState } from "react";

const InputBar = ({ onScan }) => {
  const [target, setTarget] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter URL or File Path"
        className="border p-2 w-full rounded"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button
        onClick={() => onScan(target)}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Scan
      </button>
    </div>
  );
};

export default InputBar;
