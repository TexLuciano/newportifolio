
export const calculateTop = (screen: number, val1:number, val2:number, val3:number, val4:number) => {
  if (screen >= 1600) {
    return screen / 3 + val1;
  } else if (screen >= 1500) {
    return screen / 3 + val2;
  } else if (screen >= 1400) {
    return screen / 3 + val3;
  } else {
    return screen / 3 + val4;
  }
}

export const calculateDirection = (screen:number, val1:number, val2:number, val3:number, val4:number, val5:number)=>{
  if (screen >= 1500) {
    return screen /  val1;
  } else if (screen >= 1400) {
    return screen /  val2;
  } else if (screen >= 1200) {
    return screen / val3;
  }else if (screen >= 1100) {
    return screen / val4;
  }else {
    return screen / val5;
  }
}

export const calculateTopLamp = (screen: number, val1:number, val2:number, val3:number, val4:number , val5:number) => {
  if (screen >= 1700) {
    return screen / 7 + val1;
  } else if (screen >= 1500) {
    return screen / 7 + val2;
  } else if (screen >= 1400) {
    return screen / 7 + val3;
  } else if (screen >= 1200) {
    return screen / 7 + val4;
  }
  else {
    return screen / 7 + val5;
  }
} 
  
export const display=( tam:number, screen:number)=>{
  if(tam > 30 || screen < 1050 || screen >= 2000){
      return 'none'
  }else{
    return 'block'
  }
}


// const [paralax, setParalax] = useState(0);
// function parallax(e: MouseEventInit) {
//   if (e instanceof PointerEvent) {
//     setParalax(e.clientX + e.clientY - 100);
//   }
// }
// window.addEventListener('mousemove', parallax);