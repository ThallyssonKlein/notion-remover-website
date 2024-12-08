import React, { useState } from 'react'
import Image from 'next/image';
import styles from './index.module.css';

export default function Home() {
  const [email, setEmail] = useState("");

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

            {/* Título e descrição */}
            <div className={styles.textSection}>
              <h1><b>Connect, filter and schedule actions in your Notion <span className="blue">database</span> easily and <span className="blue">efficiently</span>.</b></h1>
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

      {/* Nova seção para o formulário de email */}
      <div className={styles.emailSection}>
        <label htmlFor="email">Request access:</label>
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
                  onClick={handleSendEmail}>Submit</button>
        </div>
      </div>
    </div>
  );
}