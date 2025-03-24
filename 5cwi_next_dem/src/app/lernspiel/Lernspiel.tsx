'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";

type Word = {
  word: string;
  article: string;
};

// Level 1 Wörter
const nounsLevel1 = [
  { word: "Tisch", article: "der" },
  { word: "Lampe", article: "die" },
  { word: "Auto", article: "das" },
  { word: "Hund", article: "der" },
  { word: "Katze", article: "die" },
  { word: "Haus", article: "das" },
  { word: "Stuhl", article: "der" },
  { word: "Blume", article: "die" },
  { word: "Baum", article: "der" },
  { word: "Buch", article: "das" },
  { word: "Fenster", article: "das" },
  { word: "Vogel", article: "der" },
];

// Level 2 Wörter und Sätze
const nounsLevel2 = [
  { word: "Ich sehe ___ Hund im Park.", article: "den" },
  { word: "Er trägt ___ Mantel im Winter.", article: "den" },
  { word: "Ich gebe ___ Buch der Lehrerin.", article: "dem" },
  { word: "___ Auto ist neu und schnell.", article: "das" },
  { word: "Sie sieht ___ Baum im Garten.", article: "den" },
  { word: "Wir fahren ___ Fahrrad zum See.", article: "das" },
  { word: "Ich schenke ___ Blume meiner Mutter.", article: "die" },
  { word: "Er hilft ___ Mann mit dem Gepäck.", article: "dem" },
  { word: "___ Vogel fliegt über den Baum.", article: "der" },
  { word: "Ich sehe ___ Fenster im Haus.", article: "das" },
];

// Level 3 Sätze (sehr schwierig)
const sentencesLevel3 = [
  { word: "Ich sehe ___ Hund im Park.", article: "den" },
  { word: "Er trägt ___ Mantel im Winter.", article: "den" },
  { word: "Ich gebe ___ Buch der Lehrerin.", article: "dem" },
  { word: "___ Auto ist neu und schnell.", article: "das" },
  { word: "Sie sieht ___ Baum im Garten.", article: "den" },
  { word: "Wir fahren ___ Fahrrad zum See.", article: "das" },
  { word: "Ich schenke ___ Blume meiner Mutter.", article: "die" },
  { word: "Er hilft ___ Mann mit dem Gepäck.", article: "dem" },
  { word: "___ Vogel fliegt über den Baum.", article: "der" },
  { word: "Ich sehe ___ Fenster im Haus.", article: "das" },
];

const Lernspiel: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState<Word>(nounsLevel1[Math.floor(Math.random() * nounsLevel1.length)]);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [levelUpMessage, setLevelUpMessage] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Timer in Sekunden

  const [usedWords, setUsedWords] = useState<Word[]>([]);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setMessage("⏰ Zeit abgelaufen!");
      setProgress(0);
      setTimeLeft(10);
    }
  }, [timeLeft, isGameOver]);

  const checkAnswer = (article: "der" | "die" | "das" | "den" | "dem") => {
    if (article === current.article) {
      setScore(score + 1);
      setMessage("✅ Richtig!");
      setProgress(progress + 1);
    } else {
      setMessage("❌ Falsch!");
      setProgress(0);
    }

    if (progress >= 5) {
      if (level === 3 && score >= 30) {
        setMessage("🎉 Du hast gewonnen! Herzlichen Glückwunsch!");
        setIsGameOver(true);
        return;
      }
      setLevel(level + 1);
      setLevelUpMessage(`🎉 Nächstes Level erreicht! Level ${level + 1}`);
      setProgress(0);
    }

    setTimeout(() => {
      let nextWord: Word;
      let allWords: Word[] = [];

      if (level === 1) {
        allWords = nounsLevel1;
      } else if (level === 2) {
        allWords = nounsLevel2;
      } else if (level === 3) {
        allWords = sentencesLevel3;
      }

      const remainingWords = allWords.filter((word) => !usedWords.includes(word));
      if (remainingWords.length > 0) {
        nextWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
        setUsedWords([...usedWords, nextWord]);
      } else {
        setUsedWords([]);
        nextWord = allWords[Math.floor(Math.random() * allWords.length)];
      }

      setCurrent(nextWord);
      setTimeLeft(10); // Timer zurücksetzen
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Lernspiel: Artikel</h1>
      {isGameOver ? (
        <motion.div
          className="game-over"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>🎉 Spiel beendet!</h2>
          <p>Dein Punktestand: {score}</p>
          <button onClick={() => window.location.reload()} className="btn">
            Nochmal spielen
          </button>
        </motion.div>
      ) : (
        <>
          <p>Wähle den richtigen Artikel:</p>
          <motion.p
            className="word"
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {level === 1 || level === 2 ? current.word : current.word.replace("___", "...")}
          </motion.p>
          <div className="buttons">
            {["der", "die", "das", "den", "dem"].map((article) => (
              <motion.button
                key={article}
                onClick={() => checkAnswer(article as "der" | "die" | "das" | "den" | "dem")}
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {article}
              </motion.button>
            ))}
          </div>

          <div className="progress-container">
            <motion.div
              className="progress-bar"
              animate={{ width: `${(progress / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <p className="message">{message}</p>
          <p>Punkte: {score}</p>
          <p>⏳ Zeit: {timeLeft} Sekunden</p>
          <p>📊 Level: {level}</p>

          {levelUpMessage && (
            <motion.p className="level-up-message" animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {levelUpMessage}
            </motion.p>
          )}
        </>
      )}
    </div>
  );
};

export default Lernspiel;