import React, { useEffect, useState } from "react";
import Book from "./pages/Book";
import MetaTags from "./components/MetaTags";
import './styles/ebook.css';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPopup(true); 
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário instalou o PWA");
        } else {
          console.log("Usuário cancelou a instalação");
        }
        setDeferredPrompt(null);
        setShowPopup(false);
      });
    }
  };

  return (
    <div className="ebook">
      <MetaTags />
      <Book />

      

      {showPopup && (
      

        <div className="popup">
          <img 
            src="https://placehold.co/25" 
            alt="Imagem Placeholder" 
            loading="lazy" 
            className="img-icon"
          />

          <div className="popup-infos">
            <img 
            src="https://placehold.co/50x75" 
            alt="Imagem Placeholder" 
            loading="lazy" 
            className='popup-cover'
            />

            <p className='titulo'>Alice</p>
            <p className="subtitulo">Lewis Carroll</p>
          </div>

          <div className="pop-buttons">
            <button onClick={() => setShowPopup(false)}>Ler online</button>
            <button onClick={installPWA}>Fazer download</button>
          </div>
        </div>
        
      )}


    </div>
  );
}


export default App;