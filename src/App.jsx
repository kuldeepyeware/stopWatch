import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toogleStopWatch = () => {
    setIsRunning((prev) => !prev);
  };

  const resetStopWatch = () => {
    setIsRunning(false);
    setCurrentTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(
        () => setCurrentTime((prevTime) => prevTime + 1),
        1000
      );
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);
  return (
    <>
      <main className='bg-black text-white h-screen flex justify-center  items-center flex-col'>
        <h1 className='text-5xl'>⏱️ StopWatch</h1>
        <section className='rounded-xl  w-[350px] m-10 border-[1px] border-[#555555] p-5 flex flex-col items-center justify-center'>
          <h1 className='text-5xl mt-5'>{formatTime(currentTime)}</h1>
          <div className='mt-10 flex gap-10 text-xl mb-5'>
            <button
              className='border border-[#555555] p-2 rounded'
              onClick={toogleStopWatch}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button
              className='border border-[#555555] p-2 rounded'
              onClick={resetStopWatch}>
              Reset
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
