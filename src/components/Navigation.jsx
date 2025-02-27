import React, { useState } from "react";
import menuBurger from '../assets/menu-burger.png';
import setaEsquerda from '../assets/seta-esquerda.png';
import setaDireita from '../assets/seta-direita.png';

const Navigation = ({ onNext, goToSummary, goToCover, onPrev }) => {
  

  return (

    
    <div className="navigation">
      
      
        {goToSummary && (<button onClick={goToSummary}>
          <img
            src={menuBurger}
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>)}

     

      {onPrev && (
        <button onClick={onPrev}>
          <img
            src={setaEsquerda}
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}

      {onNext && (
        <button onClick={onNext}>
          <img
            src={setaDireita}
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default Navigation;
