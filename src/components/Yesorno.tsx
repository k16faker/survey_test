import React from "react";

const Yesorno = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className="my-7">
      <p className="mb-5">서비스는 만족스러우셨나요?</p>
      <div className="flex">
        <button
          onClick={handleClick}
          value={"Yes!"}
          className="bg-blue-500 hover:bg-blue-700 w-1/2 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded"
        >
          예
        </button>
        <button
          onClick={handleClick}
          value={"No!"}
          className="bg-red-500 hover:bg-red-700 w-1/2 mr-1 text-white font-bold py-2 px-4 rounded"
        >
          아니오
        </button>
      </div>
    </div>
  );
};

export default Yesorno;
