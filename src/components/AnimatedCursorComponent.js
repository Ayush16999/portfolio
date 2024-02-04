import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const AnimatedCursorComponent = () => {
  return <AnimatedCursor
  innerSize={0}
  outerSize={40}
  color='255, 255, 255'
  outerAlpha={0.5}
  innerScale={1}
  trailingSpeed={4}
  outerScale={10}
/>;
};

export default AnimatedCursorComponent;
