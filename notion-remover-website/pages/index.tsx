import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from './index.module.css';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-M5KD1YEQKX';

export default function Home() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
    ReactGA.set({ debug_mode: true });
    ReactGA.send({ hitType: 'event', category: 'Page Load', action: 'Load Home Page', label: 'Home Page loaded', value: 0 });
  }, []);

  async function addDocument(data) {
    const response = await fetch('/api/addDocument', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    return result;
  };

  async function handleSendEmail() {
    try {
      if (!email) {
        ReactGA.send({
          hitType: 'event',
          category: 'Email Submission',
          action: 'Submit Email',
          label: 'User did not submit email',
          value: 0
        });
      } else {
        ReactGA.send({
          hitType: 'event',
          category: 'Email Submission',
          action: 'Submit Email',
          label: 'User submitted email',
          value: 1
        });
      }

      await addDocument({ email });
      alert("Email added successfully!");
    } catch (err) {
      alert("Error adding email.");
      console.error("Error adding document: ", err);
    }
  }

  return (
    <div className={styles.container}>
      {/* Seção principal */}
      <div className={styles.header}>
        {/* Logo do Notion, Título e Imagem da captura de tela */}
        <div className={styles.logoTitleAndScreenshot}>
          <div className={styles.logoAndTitle}>
            {/* Logo do Notion */}
            <div className={styles.logo}>
              <Image
                src="/notion-logo.png" // Adicione a logo do Notion no diretório public/
                alt="Notion Logo"
                width={50}
                height={50}
              />
            </div>

            <div className={styles.textSection}>
              <h1><b>Connect, filter and schedule delete of items in your Notion <span className={styles.blue}>database</span> easily and <span className={styles.blue}>efficiently</span>.</b></h1>
            </div>

            <div className={styles.emailSection}>
          <label htmlFor="email" className={styles.emailLabel}>Request access:</label>
          <div className={styles.emailForm}>
                <input type="email" 
                      id="email"
                      name="email"
                      className={styles.emailInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                <button type="submit"
                        className={styles.submitButton}
                        onClick={handleSendEmail}>Request Beta Access</button>
              </div>
            </div>
          </div>

          {/* Imagem da captura de tela */}
          <div className={styles.screenshot}>
            <Image
              src="/screenshot.jpg" // Adicione a screenshot no diretório public/
              alt="Screenshot"
              width={355}
              height={483}
            />
          </div>
        </div>
      </div>
    </div>
  );
}