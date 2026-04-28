'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';

type Persona = 'anshuman' | 'abhimanyu' | 'kshitij';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const PERSONA_NAMES = {
  anshuman: 'Anshuman Singh',
  abhimanyu: 'Abhimanyu Saxena',
  kshitij: 'Kshitij Mishra',
};

const SUGGESTIONS: Record<Persona, string[]> = {
  anshuman: [
    "How do I get better at system design?",
    "Should I learn Python or Java for backend development?",
    "I'm struggling to learn dynamic programming."
  ],
  abhimanyu: [
    "How much time should I spend on LeetCode before applying to jobs?",
    "I have an idea for an app. Should I learn React Native or Flutter?",
    "I am failing technical interviews at the system design round."
  ],
  kshitij: [
    "For finding duplicates in an array, I can just use two nested loops, right?",
    "How do I reverse a linked list?",
    "I'm getting a Time Limit Exceeded (TLE) on my Fibonacci code."
  ]
};

export default function Home() {
  const [activePersona, setActivePersona] = useState<Persona>('anshuman');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handlePersonaChange = (persona: Persona) => {
    if (isLoading) return;
    setActivePersona(persona);
    setMessages([]);
    setError(null);
    setInput('');
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, parts: [{ text }] };
    const currentHistory = [...messages];
    
    setMessages([...currentHistory, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          persona: activePersona,
          message: text,
          history: currentHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      setMessages(prev => [
        ...prev,
        { role: 'model', parts: [{ text: data.reply }] }
      ]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Very basic markdown parser for paragraphs and bold text
  const formatText = (text: string) => {
    return text.split('\n').map((paragraph, i) => {
      // Replace **text** with <strong>text</strong>
      const boldedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <p key={i} dangerouslySetInnerHTML={{ __html: boldedText }} />
      );
    });
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Scaler Mentor AI</h1>
        <div className={styles.personaSwitcher}>
          {(Object.keys(PERSONA_NAMES) as Persona[]).map((persona) => (
            <button
              key={persona}
              className={`${styles.personaBtn} ${activePersona === persona ? styles.activePersona : ''}`}
              onClick={() => handlePersonaChange(persona)}
              disabled={isLoading}
            >
              {PERSONA_NAMES[persona]}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.chatArea}>
        {messages.length === 0 ? (
          <div className={styles.welcomeContainer}>
            <div className={styles.welcomeIcon}>✨</div>
            <h2 className={styles.welcomeTitle}>Chat with {PERSONA_NAMES[activePersona]}</h2>
            <p className={styles.welcomeDesc}>
              Ask questions about software engineering, career prep, or coding problems.
            </p>
            <div className={styles.suggestions}>
              {SUGGESTIONS[activePersona].map((suggestion, idx) => (
                <button 
                  key={idx} 
                  className={styles.suggestionChip}
                  onClick={() => handleSend(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${styles.message} ${msg.role === 'user' ? styles.userMsg : styles.botMsg}`}
              >
                {msg.role === 'user' ? msg.parts[0].text : formatText(msg.parts[0].text)}
              </div>
            ))}
            
            {error && (
              <div className={styles.errorMsg}>
                {error}
              </div>
            )}

            {isLoading && (
              <div className={styles.typingIndicator}>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
              </div>
            )}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      <div className={styles.inputArea}>
        <form 
          className={styles.inputForm}
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
        >
          <input
            type="text"
            className={styles.inputField}
            placeholder={`Ask ${PERSONA_NAMES[activePersona]}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={styles.sendBtn}
            disabled={!input.trim() || isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
