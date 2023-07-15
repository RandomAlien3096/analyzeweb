import React, { useRef } from 'react';

const ImageSlider = () => {
  const trackRef = useRef(null);
  const mouseDownAtRef = useRef(0);
  const prevPercentageRef = useRef(0);

  const handleOnDown = (e) => {
    mouseDownAtRef.current = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAtRef.current = 0;
    prevPercentageRef.current = parseFloat(trackRef.current.dataset.percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAtRef.current === 0) return;

    const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(prevPercentageRef.current) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

    const images = trackRef.current.getElementsByClassName('image');
    for (const image of images) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  // Attach event listeners
  React.useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      // Clean up event listeners on unmount
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return (
    <div id="image-track" ref={trackRef}>
      {/* Your images go here */}
    </div>
  );
};

export default ImageSlider;
