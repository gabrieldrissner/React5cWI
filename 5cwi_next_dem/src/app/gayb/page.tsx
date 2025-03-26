"use client";

import React, { useState } from "react";

export default function Trucks() {
    const [isActive, setIsActive] = useState(false);
    const [farbe, setFarbe] = useState("#8B4513");

    const wechselFarbe = () => {
        setIsActive(true);
        setFarbe(prev => (prev === "#8B4513" ? "#654321" : "#8B4513"));
        setTimeout(() => setIsActive(false), 1000);
    };

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            <div className={`screen-flash ${isActive ? 'active' : ''}`}></div>
            <button 
                onClick={wechselFarbe} 
                className={`poop-button ${isActive ? 'active' : ''}`}
                style={{ 
                    backgroundColor: farbe,
                    color: "white",
                    padding: "25px 50px",
                    fontSize: "28px",
                    border: "4px solid transparent",
                    cursor: "pointer",
                    borderRadius: "15px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    transform: "scale(1)",
                    fontWeight: "bold",
                    position: "relative",
                    backgroundClip: "padding-box",
                    zIndex: 1
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                Sam stinkt
            </button>
            <style>{`
                .screen-flash {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: radial-gradient(circle at center, 
                        #8B4513,
                        #654321
                    );
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                    z-index: 0;
                }

                .screen-flash.active {
                    opacity: 1;
                    animation: flashAnimation 1s ease-out;
                }

                .poop-button.active {
                    animation: poopTransform 1s ease-in-out;
                    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40% !important;
                    background: linear-gradient(to bottom, #654321, #3b2506) !important;
                }

                @keyframes poopTransform {
                    0% {
                        border-radius: 15px;
                        transform: scale(1);
                        background: #8B4513;
                    }
                    50% {
                        border-radius: 40% 40% 60% 60% / 40% 40% 60% 60%;
                        transform: scale(1.1) translateY(-10px);
                        background: linear-gradient(to bottom, #654321, #3b2506);
                    }
                    100% {
                        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                        transform: scale(1);
                        background: linear-gradient(to bottom, #654321, #3b2506);
                    }
                }

                @keyframes flashAnimation {
                    0% {
                        opacity: 0;
                        transform: scale(0);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1);
                    }
                }

                button::before {
                    content: "";
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    right: -4px;
                    bottom: -4px;
                    background: linear-gradient(45deg, #00ff00, #98ff98, #32cd32, #00ff00);
                    border-radius: inherit;
                    z-index: -1;
                    animation: borderRotate 3s linear infinite;
                }

                @keyframes borderRotate {
                    0% { background: linear-gradient(45deg, #00ff00, #98ff98, #32cd32, #00ff00); }
                    50% { background: linear-gradient(225deg, #00ff00, #98ff98, #32cd32, #00ff00); }
                    100% { background: linear-gradient(405deg, #00ff00, #98ff98, #32cd32, #00ff00); }
                }
            `}</style>
        </div>
    );
}