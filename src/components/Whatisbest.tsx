import React from "react";

const Whatisbest = () => {

  let bestThing: string = "";

  const changeBestThing = (e: React.MouseEvent<HTMLButtonElement>) => {
    bestThing = e.currentTarget.value;
    console.log(bestThing);
  };

  return (
    <div className="w-full mb-5">
      <p>어떤 점이 가장 만족스러우셨나요?</p>
      <p>{bestThing}</p>
      <div className="flex py-5">
        <button
          onClick={changeBestThing}
          value={"Price"}
          className="bg-blue-500 hover:bg-blue-700 w-1/3 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded"
        >
          가격
        </button>
        <button
          onClick={changeBestThing}
          value={"Production"}
          className="bg-red-500 hover:bg-red-700 w-1/3 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded"
        >
          품질
        </button>
        <button
          onClick={changeBestThing}
          value={"Service"}
          className="bg-green-500 hover:bg-green-700 w-1/3 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded"
        >
          서비스
        </button>
      </div>
    </div>
  );
};

export default Whatisbest;
