import { NavLink } from "react-router-dom";
import './App.css';
import PaletteUIColor from "./components/paletteIcons/paletteUIColor"



function App() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#3c40c6', 
      backgroundImage: "url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)"
    }}>
    
      <div style={{
        fontSize: "36px",
        color: "#fff",
        left: "2px",
        bottom: "5px",
        letterSpacing: "2.5px",
        fontWeight: "900",
        marginBottom: "20px",
        textAlign: "left",  
        width: "63%"       
      }}>
        Flat UI Colors 2
      </div>
    
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(3, 1fr)', 
        gap: "20px",
        justifyContent: 'center',  
        alignItems: 'center',        
      }}>
        <NavLink to="/materialUIColor"><PaletteUIColor paletteName="Material UI Colors"/></NavLink>
        <NavLink to="/flatUIcolor"><PaletteUIColor paletteName="Flat UI Colors v1"/></NavLink>
        <NavLink to="/dutchUIcolor"><PaletteUIColor paletteName="Flat UI Colors Dutch"/></NavLink>
        <NavLink to="/americanUIcolor"><PaletteUIColor paletteName="Flat UI Colors American"/></NavLink>
        <NavLink to="/aussieUIcolor"><PaletteUIColor paletteName="Flat UI Colors Aussie"/></NavLink>
        <NavLink to="/britishUIcolor"><PaletteUIColor paletteName="Flat UI Colors British"/></NavLink>
        <NavLink to="/spanishUIcolor"><PaletteUIColor paletteName="Flat UI Colors Spanish"/></NavLink>
        <NavLink to="/indianUIcolor"><PaletteUIColor paletteName="Flat UI Colors Indian"/></NavLink>     
        <NavLink to="/frenchUIcolor"><PaletteUIColor paletteName="Flat UI Colors French"/></NavLink>   
        
      </div>
      
    </div>
  );
  
  
}

export default App;

