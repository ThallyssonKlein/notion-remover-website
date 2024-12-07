import React from 'react'
import Image from 'next/image';
import styles from './index.module.css'; // altere para CSS Modules

export default function Home() {
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
        <label htmlFor="email">Enter your email:</label>
        <div className={styles.emailForm}>
          <input type="email" id="email" name="email" className={styles.emailInput} />
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
}