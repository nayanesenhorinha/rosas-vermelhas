import React, { useState, useEffect, useCallback } from 'react';
import chapters_looking_glass from '../control/chapters_looking_glass';
import chapters_in_wonderland from '../control/chapters_in_wonderland';

import menuBurger from '../assets/menu-burger.png';
import alinhadoEsq from '../assets/alinhado-esquerda.png';
import alinhadoDir from '../assets/alinhado-direita.png';
import justificado from '../assets/justificado.png';
import aumentarFonte from '../assets/aumentar-fonte.png';
import diminuirFonte from '../assets/diminuir-fonte.png';
import claro from '../assets/claro.png';
import noturno from '../assets/noturno.png';

const Header = ({ chapterIndex, bookId, title }) => {

// Estados
const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
const [selectedFontSize, setSelectedFontSize] = useState('padrão'); 
const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
const [selectedAlignment, setSelectedAlignment] = useState(localStorage.getItem('alignment') || 'justificado');
const [showTitle, setShowTitle] = useState(false); 

const [isHeaderVisible, setIsHeaderVisible] = useState(false); // Estado para visibilidade do header


// Variáveis

const adicionarTitulo = () => chapters[chapterIndex]?.title || title;
const fontSizes = ['compacto', 'padrão', 'grande', 'baixa-visao'];

// Identificar qual conjunto de capítulos usar
const getChapters = useCallback(() => {
  if (bookId === 1) {
    return chapters_in_wonderland;
  } else if (bookId === 2) {
    return chapters_looking_glass;
  } 
  return []; 
}, [bookId]);

const chapters = getChapters();

// Função para detectar rolagem e ajustar a visibilidade do cabeçalho e o estado do título
const handleScroll = useCallback(() => {
  const headerElement = document.querySelector('.header');
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const lastScrollTop = parseInt(localStorage.getItem('lastScrollTop'), 10) || 0;
    
  // Verifica se o usuário está rolando para cima
  const isScrollingUp = currentScrollTop < lastScrollTop;

  if (headerElement) {
    if (isScrollingUp) {
      headerElement.classList.add('visible');
      setIsHeaderVisible(true); // Atualiza estado
    } else {
      headerElement.classList.remove('visible');
      setFontSizeBoxVisible(false);
      setIsHeaderVisible(false); // Atualiza estado
    }
  }

  // Atualiza estado para mostrar o título ao atingir 6% da página
  const scrollPercentage =
    (currentScrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setShowTitle(scrollPercentage >= 6);

  // Salva a posição atual de rolagem no localStorage
  localStorage.setItem('lastScrollTop', currentScrollTop <= 0 ? 0 : currentScrollTop);
}, []);

// Função para lidar com toques (dispositivos móveis) e alternar a visibilidade do cabeçalho
const handleTouch = useCallback(() => {
  const headerElement = document.querySelector('.header');
  const lastTouchTime = parseInt(localStorage.getItem('lastTouchTime'), 10) || 0;
  const currentTime = new Date().getTime();

  if (headerElement) {
    if (currentTime - lastTouchTime < 300) {
      headerElement.classList.toggle('visible');
      setIsHeaderVisible((prev) => !prev);  
      setFontSizeBoxVisible(false);
    }
    localStorage.setItem('lastTouchTime', currentTime);
  }
}, []);




// Pequenas funções
// Alterna entre modo escuro e claro
const toggleDarkMode = () => {
  const newDarkModeState = !isDarkMode;
  setIsDarkMode(newDarkModeState);
  localStorage.setItem('darkMode', newDarkModeState);
};

// Alterna a visibilidade do menu de ajuste de fonte
const toggleFontSizeBox = () => {
  setFontSizeBoxVisible((prev) => !prev);
};


// Ajustar tamanho da fonte
const adjustFontSize = (direction) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let newSize;

  const currentSizeIndex = fontSizes.indexOf(selectedFontSize);

  if (direction === 'increase') {
    newSize = fontSizes[Math.min(currentSizeIndex + 1, fontSizes.length - 1)];
  } else if (direction === 'decrease') {
    newSize = fontSizes[Math.max(currentSizeIndex - 1, 0)];
  }

  document.body.classList.remove('font-compact', 'font-large', 'font-super-grande', 'font-baixa-visao', 'add-opacity');

  if (newSize === 'compacto') {
    document.body.classList.add('font-compact');
  } else if (newSize === 'padrão') {
    // Não adiciona classe para "padrão", já é o estado inicial
  } else if (newSize === 'grande') {
    document.body.classList.add('font-large');
  } else if (newSize === 'baixa-visao') {
    document.body.classList.add('font-super-grande');

  }

  localStorage.setItem('font-size', newSize);
  setSelectedFontSize(newSize);

  window.scrollTo(0, scrollTop);
};

// Ajusta o alinhamento do texto no corpo do documento
const adjustTextAlignment = (newAlignment) => {
  document.body.classList.remove('align-left', 'align-justify','align-right','align-center');

  if (newAlignment === 'esquerda') {
    document.body.classList.add('align-left');
  } else if (newAlignment === 'justificado') {
    document.body.classList.add('align-justify');
  } else if (newAlignment === 'direito') {
    document.body.classList.add('align-right');
  } else if (newAlignment === 'centralizado') {
    document.body.classList.add('align-center');
  }

  localStorage.setItem('alignment', newAlignment);
  setSelectedAlignment(newAlignment);
};

useEffect(() => {
  const savedFontSize = localStorage.getItem('font-size');
  if (savedFontSize) {
    setSelectedFontSize(savedFontSize);
  } else {
    localStorage.setItem('font-size', 'padrão');
  }
}, []); 

// Aplica configurações armazenadas no localStorage ao carregar o componente
useEffect(() => {
  // Recupera o tamanho da fonte do localStorage
  const savedFontSize = localStorage.getItem('font-size') || 'padrão';
  setSelectedFontSize(savedFontSize); // Define o tamanho da fonte

  document.body.classList.remove('font-compact', 'font-large', 'font-super-grande', 'font-baixa-visao', 'add-opacity');

  if (savedFontSize === 'compacto') {
    document.body.classList.add('font-compact');
  } else if (savedFontSize === 'padrão') {
    // Não faz nada, pois 'padrão' é o estado inicial
  } else if (savedFontSize === 'grande') {
    document.body.classList.add('font-large');
  } else if (savedFontSize === 'baixa-visao') {
    document.body.classList.add('font-super-grande');
  }

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  if (selectedAlignment === 'esquerda') {
    document.body.classList.add('align-left');
  } else if (selectedAlignment === 'justificado') {
    document.body.classList.add('align-justify');
  }
}, [isDarkMode, selectedFontSize, selectedAlignment]); 

// Adiciona event listeners para rolagem e toque
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchstart', handleTouch);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('touchstart', handleTouch);
  };
  
}, [handleScroll, handleTouch]);

useEffect(() => {
  if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(() => {
          console.log("Service Worker registrado com sucesso!");
      });
  }
}, []);

// Atualiza o tema com base na visibilidade do cabeçalho e no modo escuro
const updateThemeColor = (isDarkMode, isHeaderVisible) => {
  const metaThemeColor = document.querySelector("meta[name='theme-color']");

  let newThemeColor;

  if (isDarkMode) {
    newThemeColor = "#131313"; // Preto no modo noturno
  } else if (isHeaderVisible) {
    newThemeColor = "#131313"; // Rosa quando o Header está visível
  } else {
    newThemeColor = "#fefefe"; // Branco como padrão
  }

  if (metaThemeColor) metaThemeColor.setAttribute("content", newThemeColor);

};

// Atualiza o tema quando `isDarkMode` ou `isHeaderVisible` mudam
useEffect(() => {
  updateThemeColor(isDarkMode, isHeaderVisible);
}, [isDarkMode, isHeaderVisible]);

return (
<div className="header">
  <div className="marg">
    
  <button>
    <img
      src="https://placehold.co/20"
      alt="Logo editora"
      loading="lazy"
    />
  </button>

  <p className="header_titulo">{showTitle ? adicionarTitulo() : title}</p>

  <button onClick={toggleFontSizeBox}>
    <img
      src={menuBurger}
      alt="Configurações"
      loading="lazy"
    />
  </button>
  </div>


  <div className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`}>
    
    <div className="marg-menu">

      <div className='darkmode-option'>
        <button onClick={toggleDarkMode}>
          <img
            src={isDarkMode ? noturno : claro }
            alt={isDarkMode ? 'Ativar Modo Norturno' : 'Ativar modo Claro'}
            loading="lazy"
          />
        </button>
      </div>

      <div className='align-options-buttons'>
        <button
          className={`ajust-option ${selectedAlignment === 'justificado' ? 'active' : ''}`}
          onClick={() => adjustTextAlignment('justificado')}>
          <img
            src={justificado}
            alt="Download"
            loading="lazy"
          />
        </button>

        <button
          className={`ajust-option ${selectedAlignment === 'esquerda' ? 'active' : ''}`}
          onClick={() => adjustTextAlignment('esquerda')}>
          <img
            src={alinhadoEsq}
            alt="Download"
            loading="lazy"
          />
        </button>

        <button
          className={`ajust-option ${selectedAlignment === 'direito' ? 'active' : ''}`}
          onClick={() => adjustTextAlignment('direito')}>
          <img
            src={alinhadoDir}
            alt="Download"
            loading="lazy"
          />
        </button>
      </div>

      <div className='font-options-button'>
        <button
          onClick={() => adjustFontSize('decrease')}
          className={`ajust-option ${selectedFontSize === 'compacto' ? 'opaco' : ''}`}
          disabled={selectedFontSize === 'compacto'}>
            <img src={aumentarFonte} />
        </button>
      </div>
  
      <div className='font-options-button'>
        <button
          onClick={() => adjustFontSize('increase')}
          className={`ajust-option ${selectedFontSize === 'baixa-visao' ? 'opaco' : ''}`}
          disabled={selectedFontSize === 'baixa-visao'}
        >
        <img src={diminuirFonte} />
      </button>
      </div>

    </div>

  </div>
  
</div>

);};

export default Header;
