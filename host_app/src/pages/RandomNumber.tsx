import { useEffect } from 'react';

const RandomNumber = () => {
  useEffect(() => {
    // Dynamically load the web component script
    const script = document.createElement('script');
    script.src = "http://localhost:5500/RandomNumberPage.umd.js";
    script.type = "module"; // Ensure it's loaded as an ES module
    script.onload = () => {
      console.log('Web component loaded!');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up script when component unmounts
    };
  }, []);

  return (
    <div>
      <random-number-page />
    </div>
  );
}

export default RandomNumber;

