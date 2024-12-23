
import { TypeAnimation } from 'react-type-animation';
  
  const TypeAnim = () => {
    return (
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Welcome to the EcoLeaf Personal Assistant!',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'here to provide you useful tips for mindful purchase and sustainable living.',
          2000,
          'Powered by GEMINI AI',
          1500,
        
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '60px',color: "white",  display: 'inline-block', textShadow: "2px 2px 20px #000" }}
        repeat={Infinity}
      />
    )
  }
  
  export default TypeAnim;