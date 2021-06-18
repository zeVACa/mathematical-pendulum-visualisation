import { useEffect, useRef, useState } from 'react';

let x = 0;

export const CanvasPendulum = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  // const [x, setX] = useState(0);

  useEffect(() => {
    const render = () => {
      console.log('render');
      const canvas = canvasRef.current;

      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;

      ctx.clearRect(0, 0, canvas.height, canvas.width);

      // ctx.closePath();
      let circleFixTop = new Path2D();
      let circleMove = new Path2D();
      let rectFixTop = new Path2D();

      circleFixTop.arc(x++ / 2, canvas.height / 5, 5, 0, 2 * Math.PI);
      circleFixTop.arc(canvas.width / 2, canvas.height / 5, 5, 0, 2 * Math.PI);
      circleMove.arc(canvas.width / 2, canvas.height / 1.6, 20, 0, 2 * Math.PI);
      rectFixTop.rect(
        canvas.width / 2 - canvas.width * 0.3,
        canvas.height / 6,
        canvas.width * 0.6,
        20,
      );

      ctx.fill(circleFixTop);
      ctx.stroke(circleMove);
      ctx.stroke(rectFixTop);

      ctxRef.current = ctx;
      requestAnimationFrame(render);
    };

    render();
  }, [0]);

  const onPendulumStart = ({ nativeEvent }) => {
    // setX(true);
    const { offsetX, offsetY } = nativeEvent;

    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
  };

  const onPendulumEnd = () => {
    ctxRef.current.closePath();

    // setX(false);
  };

  // const draw = ({ nativeEvent }) => {
  //   if (!isDrawing) return;

  //   const { offsetX, offsetY } = nativeEvent;

  //   ctxRef.current.lineTo(offsetX, offsetY);
  //   ctxRef.current.stroke();
  // };

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={600} style={{ border: '1px solid red' }} />
    </div>
  );
};
