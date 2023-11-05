import { useEffect, useRef } from 'react'
import './App.css'
import { SNAKE_POS } from './Constant';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'lightblue';
    context.strokestyle = 'darkblue';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
  }, [])

  const drawSnake = () => {
    SNAKE_POS.map(({x , y}) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.fillStyle = 'lightblue';
      context.strokestyle = 'darkblue';
      context.fillRect(x, y, 10, 10);
      context.strokeRect(x, y, 10, 10);
    })
  }

  useEffect(() => {
    drawSnake();
  },[])

  return (
    <div className='game-canvas' >
      <canvas ref={canvasRef} width='400' height='400' ></canvas>
      <div className='flex justify-between' >
        <div>&#x2190;</div>
        <div>&#x2191;</div>
        <div>&#x2192;</div>
        <div>&#x2193;</div>
      </div>
    </div>
  )
}

export default App
