import React from "react";
import Palette from "../../pallete.json";

export default function MaterialUIColor(props) {

  const {paletteName="string"} = props

  const selectedPalette = Palette.find((palette) => palette.paletteName === paletteName);
  const colors = selectedPalette.colors;

  return (
    <div style={{ 
      width: '420px', 
      height: '250px', 
      backgroundColor: '#fff', 
      marginTop:"2px", 
      padding: '10px', 
      borderRadius: '4px',}}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gridTemplateRows: 'repeat(4, 1fr)', 
          width: '100%', 
          height: '200px' }}>
          {colors.map((color, index) => (
            <div key={index} style={{ backgroundColor: color.color }} />
          ))}
        </div>
        <div style={{
          fontSize: "18px",
          color: "black",
          fontWeight: "600",
          width: "100%",
          float: "left",
          textAlign: "left",
          margin: "5px"
        }}>
          {selectedPalette.paletteName}
          <span role="img" aria-label="palette" style={{ textAlign: "right", display: "block", marginTop:"-25px" }}>{selectedPalette.emoji}</span>
        </div>
      </div>
  );
}
//color-black text-[15px] font-bold h-[40px] line-height-[40px] float-left w-full text-left  tracking-[0.55px]
