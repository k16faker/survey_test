
import './App.css';

function App() {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  }


  return (
    <div className="text-center font-mono max-w-sm h-screen mx-auto pt-[50px] pb-[50px] bg-green-400">
      <div className='mb-[50px]'>
        <h1>간단한 설문조사</h1>
        <p>아래 설문조사에 참여해주세요.</p>
      </div>
      <p className='mb-5'>서비스는 만족스러우셨나요?</p>
      <div className='flex'>
        <button onClick={handleClick} value={"Yes!"} className='bg-blue-500 hover:bg-blue-700 w-1/2 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded'>예</button>
        <button onClick={handleClick} value={"No!"} className='bg-red-500 hover:bg-red-700 w-1/2 mr-1 text-white font-bold py-2 px-4 rounded'>아니오</button>
      </div>
    </div>
  );
}

export default App;
