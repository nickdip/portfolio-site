import  { useState, useEffect, useRef } from 'react';


const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  const index = useRef(0);

  const displayTextRef = useRef("");

  useEffect(() => {

    const typingInterval = setInterval(() => {
      if (index.current < text.length) {
        displayTextRef.current += text.charAt(index.current);
        setDisplayText(() => displayTextRef.current);
        index.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;