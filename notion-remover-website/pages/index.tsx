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
              <h1>Connect, filter and schedule actions in your Notion database easily and efficiently.</h1>
            </div>
          </div>

          {/* Imagem da captura de tela */}
          <div className={styles.screenshot}>
            <Image
              src="/screenshot.jpg" // Adicione a screenshot no diretório public/
              alt="Screenshot"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}