import { useEffect, useRef } from 'react'
import './App.css'
import { SNAKE_POS } from './Constant';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#1C2833';
    // context.strokestyle = 'darkblue';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // context.strokeRect(0, 0, canvas.width, canvas.height);
  }, [])

  const drawSnake = () => {
    SNAKE_POS.map(({x , y}) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.fillStyle = 'lightblue';
      // context.strokestyle = 'lightblue';
      context.fillRect(x, y, 10, 10);
      // context.strokeRect(x, y, 10, 10);
    })
  }

  useEffect(() => {
    drawSnake();
  },[])

  return (
    <div className='game-canvas' >
      <canvas ref={canvasRef} width='450' height='450' ></canvas>
      <div className='flex justify-between'>
        <div style={{ backgroundColor: '#283747' }} className='flex-grow text-center px-2 py-3 text-white cursor-pointer'  >&#x2190;</div>
        <div style={{ backgroundColor: '#283747' }} className='flex-grow text-center px-2 py-3 text-white cursor-pointer'  >&#x2191;</div>
        <div style={{ backgroundColor: '#283747' }} className='flex-grow text-center px-2 py-3 text-white cursor-pointer'  >&#x2192;</div>
        <div style={{ backgroundColor: '#283747' }} className='flex-grow text-center px-2 py-3 text-white cursor-pointer'  >&#x2193;</div>
      </div>
    </div>
  )
}

export default App
