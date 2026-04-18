import React from "react";
import { SyncLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      <SyncLoader />
    </div>

  );
};

export default loading;
