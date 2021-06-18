import { useEffect, useRef } from 'react';

let x = 150;
let angle = 60;

export const CanvasPendulum = ({ isRightDirection, setIsRightDirection }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    console.log('canvas render');
    const render = () => {
      const canvas = canvasRef.current;

      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.height, canvas.width);

      let circleFixTop = new Path2D();
      let circleMove = new Path2D();
      let rectFixTop = new Path2D();

      circleFixTop.arc(canvas.width / 2, canvas.height / 5, 5, 0, 2 * Math.PI);

      angle += Math.PI * 0.02;

      if (x < 500 && isRightDirection) {
        circleMove.arc(
          (x += 2) + 400 * Math.cos(angle),
          canvas.height / 1.6 + 20 * Math.sin(angle),
          20,
          0,
          2 * Math.PI,
        );
      } else {
        setIsRightDirection(false);
        circleMove.arc((x -= 400), canvas.height / 1.6, 20, 0, 2 * Math.PI);
      }

      if (x > 150 && !isRightDirection) {
        circleMove.arc((x -= 200), canvas.height / 1.6, 20, 0, 2 * Math.PI);
      }

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
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={600} className="canvas" />
    </div>
  );
};
