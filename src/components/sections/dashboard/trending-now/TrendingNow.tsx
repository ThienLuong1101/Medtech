import React, { useState } from 'react';

const RectanglesGrid: React.FC = () => {
  const [clickedRectangles, setClickedRectangles] = useState<boolean[]>(new Array(40).fill(false));

  const toggleColor = (index: number): void => {
    setClickedRectangles((prev) => {
      const newClickedRectangles = [...prev];
      newClickedRectangles[index] = !newClickedRectangles[index];
      return newClickedRectangles;
    });
  };

  // Inline styles
  const styles = {
    body: {
      padding: '20px', // or any other styles you want to apply to the container
      backgroundColor: '#f5f5f5', // example background color
    },
    h1: {
      marginBottom: '20px',
      textAlign: 'center' as 'center',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 100px)',
      gridTemplateRows: 'repeat(8, 50px)',
      gap: '20px 100px',
    },
    rectangle: (isClicked: boolean): React.CSSProperties => ({
      width: '100px',
      height: '50px',
      background: isClicked ? 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)' : '#545a6c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '4px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    }),
  };
  

  return (
    <div style={styles.container}>

      <div style={styles.container}>
        {clickedRectangles.map((isClicked, index) => (
          <div
            key={index}
            style={styles.rectangle(isClicked)}
            onClick={() => toggleColor(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default RectanglesGrid;
