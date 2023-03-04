import React, { useEffect, useState } from 'react';

export const calculateTop = (
  screen: number,
  val1: number,
  val2: number,
  val3: number,
  val4: number,
) => {
  if (screen >= 1600) {
    return screen / 3 + val1;
  } else if (screen >= 1500) {
    return screen / 3 + val2;
  } else if (screen >= 1400) {
    return screen / 3 + val3;
  } else {
    return screen / 3 + val4;
  }
};

export const calculateDirection = (
  screen: number,
  val1: number,
  val2: number,
  val3: number,
  val4: number,
  val5: number,
) => {
  if (screen >= 1500) {
    return screen / val1;
  } else if (screen >= 1400) {
    return screen / val2;
  } else if (screen >= 1200) {
    return screen / val3;
  } else if (screen >= 1100) {
    return screen / val4;
  } else {
    return screen / val5;
  }
};

export const calculateTopLamp = (
  screen: number,
  val1: number,
  val2: number,
  val3: number,
  val4: number,
  val5: number,
) => {
  if (screen >= 1700) {
    return screen / 7 + val1;
  } else if (screen >= 1500) {
    return screen / 7 + val2;
  } else if (screen >= 1400) {
    return screen / 7 + val3;
  } else if (screen >= 1200) {
    return screen / 7 + val4;
  } else {
    return screen / 7 + val5;
  }
};

export const display = (tam: number, screen: number) => {
  if (tam > 30 || screen < 1050 || screen >= 2000) {
    return 'none';
  } else {
    return 'block';
  }
};



const [mousePosition, setMousePosition] = useState<number | null >(
  null,
);

useEffect(() => {
  function handleMouseMove(event: MouseEvent | MouseEventInit): void {
    
    if ('pageX' in event && 'pageY' in event) {
      const { pageX: x, pageY: y } = event ;
      if (x && y ) {    
        setMousePosition(x + y);
      }
    }
  }

  window.addEventListener('mousemove', handleMouseMove);

  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
