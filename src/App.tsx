
import './App.css';

import Yesorno from './components/Yesorno';
import Whatisbest from './components/Whatisbest';

function App() {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  }


  return (
    <div className="text-center font-Jua text-xl max-w-sm h-screen mx-auto pt-[50px] pb-[50px] bg-green-400">
      <div className='mb-[50px]'>
        <h1>간단한 설문조사</h1>
        <p>아래 설문조사에 참여해주세요.</p>
      </div>
      <Yesorno />
      <Whatisbest />
      <button>나가기</button>
    </div>
  );
}

export default App;
