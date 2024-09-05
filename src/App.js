import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen justify-evenly bg-red-100 lg:justify-around items-center  bg-gradient-to-r from-[#373E44] to-[#191B1F] shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)] overflow-hidden lg:p-10">
      <LeftPanel/>
      <RightPanel/>
    </div>
  );
}

export default App;
