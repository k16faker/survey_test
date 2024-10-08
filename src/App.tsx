import "./App.css";

import Yesorno from "./components/Yesorno";
import Whatisbest from "./components/Whatisbest";

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };

  const yesno:boolean = true;
  const whatIsBestThing:string = "";

  const getYesno = (props:boolean) => {
    return props;
  };

  return (
    <div className="text-center font-Dongle text-3xl max-w-sm h-screen mx-auto pt-[50px] pb-[50px] bg-green-400">
      <div className="mb-[50px]">
        <h1>간단한 설문조사</h1>
        <p>아래 설문조사에 참여해주세요.</p>
      </div>
      <Yesorno />
      <Whatisbest />
      <button
        value={"Submit"}
        onClick={handleClick}
        className="w-[100px] bg-red-400 hover:bg-red-700 hover:scale-110 transition-all text-white rounded-3xl"
      >
        제출
      </button>
    </div>
  );
}

export default App;
