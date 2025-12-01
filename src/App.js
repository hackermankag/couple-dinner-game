import React, { useState } from "react";

// 20 Questions
const questions = [
  "What was your first impression of me?",
  "What is your favorite memory we share?",
  "What is one thing you appreciate about our relationship?",
  "Where would you like us to travel together?",
  "What's a silly habit I have that makes you smile?",
  "What makes you feel loved?",
  "What is something new you'd like to try together?",
  "How do you like to show affection?",
  "What are three things that attracted you to me?",
  "What is a dream you have for us?",
  "If you could relive one day with me, what would it be?",
  "What song makes you think of us?",
  "What's your favorite date we've had?",
  "What would you most like to do on a future date night?",
  "What's the best meal we've cooked together?",
  "How do you handle disagreement in our relationship?",
  "What is a shared goal you'd like us to work toward?",
  "What's a funny memory from our time together?",
  "What do you admire most about me?",
  "What's a tradition you want us to create?",
  "In what ways would you desire us to grow together spiritually in the next year?",
"What are some things God has taught you about love from our marriage?",
"What are your dreams for our family and our future as a couple? What do we need to do to achieve them?",
"What times have you felt truly loved by me? What do I need to do more of?",
"How can I honour you better in our marriage?",
"How do you feel about our sexual intimacy? What can we do to enjoy each other more?",
"What can we do to build our emotional connection over the next year?",
"What are you most thankful to God for this year?",
"How can we start, revive or improve our date nights?",
"Tell me anything you have desired to tell me and haven't had the opportunity.",
];

export default function App() {
  const [page, setPage] = useState("landing");
  const [current, setCurrent] = useState(0);

  return (
    <div style={styles.background}>
      {page === "landing" ? (
        <div style={styles.landing}>
          <h1 style={styles.title}>Welcome to Couple's Dinner Game Night!</h1>
          <p style={styles.subtitle}>Let's have fun and connect with these 20 questions.</p>
          <button style={styles.button} onClick={() => setPage("game")}>Start the Game</button>
        </div>
             ) : page === "endgame" ? (
        <div style={styles.landing}>
          <h1 style={styles.title}>Thank You for Playing!</h1>
          <p style={styles.subtitle}>We hope you enjoyed these meaningful conversations together.</p>
          <button style={styles.button} onClick={() => window.location.reload()}>Exit</button>
        </div>
      ) : (
        <div style={styles.game}>
          <div style={styles.card}>
            <h2 style={styles.question}>Question {current + 1}</h2>
            <p style={styles.text}>{questions[current]}</p>
          </div>
          <div style={styles.nav}>
            <button 
              style={styles.button} 
              onClick={() => setCurrent(current > 0 ? current - 1 : 0)} 
              disabled={current === 0}
            >
              Previous
            </button>
            <button
              style={styles.button}
              onClick={() => current === questions.length - 1 ? setPage("endgame") : setCurrent(current + 1)}              disabled={current === questions.length - 1}
              {current === questions.length - 1 ? "Finish" : "Next"}            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #FFDEE9 0%, #B5FFFC 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  landing: {
    textAlign: "center",
    padding: "2rem",
    background: "white",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(60,60,100,0.15)",
    maxWidth: "340px",
  },
  title: {
    marginBottom: "0.5rem",
    color: "#3d3d5c",
  },
  subtitle: {
    marginBottom: "1.5rem",
    color: "#767687",
  },
  game: {
    textAlign: "center",
    width: "100vw",
    maxWidth: "340px",
  },
  card: {
    background: "#fff",
    padding: "1.5rem 1em",
    borderRadius: "14px",
    boxShadow: "0 4px 16px rgba(60,60,100,0.10)",
    marginBottom: "2rem",
  },
  question: {
    color: "#45A3E6",
    margin: "0.5rem 0",
  },
  text: {
    fontSize: "1.1em",
    color: "#35355c",
    minHeight: "60px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    background: "linear-gradient(120deg, #45A3E6 0%, #A2E9FF 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "0.8em 1.4em",
    fontSize: "1em",
    cursor: "pointer",
    margin: "0 0.5em",
    boxShadow: "0 2px 8px rgba(60,60,100,0.12)",
    fontWeight: "bold",
  }
};
