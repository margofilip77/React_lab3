import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Palette from "../../pallete.json";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import sound from "../../sound.mp3"

const phrases = ["GOT IT!", "COPIED!", "PASTE ME!", "RIGHT ONE!", "IT'LL ROCK!"];

export default function MaterialPage(props) {
    const { paletteName = "string" } = props;
    const selectedPalette = Palette.find((palette) => palette.paletteName === paletteName);
    const colors = selectedPalette.colors;

    const [copiedBlocks, setCopiedBlocks] = useState(new Set());
    const [hoveredBlock, setHoveredBlock] = useState(null);
    const [clickedBlock, setClickedBlock] = useState(null);
    const [modalPhrase, setModalPhrase] = useState(null);
    const [modalColor, setModalColor] = useState(null);

    const handleCopy = (color) => {
        setCopiedBlocks(new Set([...copiedBlocks, color]));
        setModalPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
        setModalColor(color);
        setTimeout(() => {
            setCopiedBlocks(new Set([...copiedBlocks].filter(block => block !== color)));
            setModalPhrase(null);
            setModalColor(null);
        }, 1500);
        playSound();
    };

    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };

    return (
        <div style={{ position: 'relative' }}>
            <header style={{
                fontSize: "36px",
                color: "black",
                left: "2px",
                bottom: "5px",
                letterSpacing: "2.5px",
                fontWeight: "900",
                cursor: "pointer"
            }}>
                <NavLink to="/">← Back</NavLink>
            </header>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
                width: '100%',
                height: '1250px'
            }}>
                {colors.map((color, index) => (
                    <CopyToClipboard key={index} text={color.color} onCopy={() => handleCopy(color)}>
                        <div
                            style={{
                                backgroundColor: color.color,
                                position: 'relative',
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setHoveredBlock(color.color)}
                            onMouseLeave={() => setHoveredBlock(null)}
                            onClick={() => setClickedBlock(color.color)}
                        >
                            {hoveredBlock === color.color && !copiedBlocks.has(color.color) && (
                                <div style={{
                                    border: "2px solid white",
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    color: '#fff',
                                    padding: '4px',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 80,
                                    left: 150,
                                    right: 150,
                                    bottom: 80,
                                }}>
                                    COPY
                                </div>
                            )}
                            {clickedBlock === color.color}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                padding: '4px',
                                color: (color.color === "#fff") ? '#c9c1c6' : '#fff',
                                fontSize: '30px',
                                textTransform: "uppercase",
                                fontWeight: "bold"
                            }}>{color.name}</div>
                        </div>
                    </CopyToClipboard>
                ))}
            </div>
            <footer style={{
                fontSize: "36px",
                color: "black",
                left: "2px",
                bottom: "5px",
                letterSpacing: "2.5px",
                fontWeight: "900",
                textAlign: "right"
            }}>{selectedPalette.paletteName}</footer>
            {modalPhrase && modalColor && (
                <div className="modal" style={{ backgroundColor: modalColor.color, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="modal-content" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        color: "black",
                        position: "relative",
                        animation: "fadeOut 2s forwards"
                    }}>
                        <div style={{ fontSize: "150px" }}>{modalPhrase}</div>
                        <div style={{ fontSize: "30px", marginTop: "20px" }}>#{modalColor.color}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
