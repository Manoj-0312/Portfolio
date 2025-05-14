// utils/floatVariant.js
export const createFloatVariant = () => {
    const randomY = Math.random()*3; // 5–15px
    const randomX = Math.random()*3; // 5–15px
    const randomRotation = Math.random()*2   ; // 2–8deg
    const randomDuration = Math.random() * 4 + 4; // 4–8s for smoother slow float
  
    return {
      animate: {
        y: [0, -randomY, 0, randomY, 0],
        x: [0, -randomX, randomX, 0],
        rotate: [0, randomRotation, -randomRotation, 0],
        transition: {
          duration: randomDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };
  };
  