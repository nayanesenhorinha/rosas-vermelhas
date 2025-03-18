import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({onNext, onPrev, goToSummary}) => {

  const chapterTitle = "Pintando as Rosas de Vermelho";
  
    useEffect(() => {
      const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} of the Alice book`;
      return () => {
        document.title = book_infos.title; 
      };
    }, [chapterTitle]);

  return (
    <div className="page credits">


<div className="intro_head">
        
        <p className='chapter_subtitle'>Credits</p>  
        <h2 className="chapter_title">Pintandoa as rosas de vermelho</h2>
        
      </div>
      
      <div className='credits_container'>

       
   

        
        <div className='tr'>
          <p className='th ft'>Ilustração, capas e webdesigner</p>
          <p className='th'>Nayane de Souza</p>
        </div>
        
        <div className='tr'>
          <p className='th ft'>Revisão</p>
          <p className='th'>Nomes</p>
        </div>

        <div className='tr'>
          <p className='th ft'>Texto</p>
          <p className='th'>Projeto Gutemberg</p>
        </div>

        



        <div className='tr'>
          <p className='th ft'>Agradecimentos</p>
          <p className='th'>Nomes</p>
        </div>

     
        <p className='tfooter'>Alice<br/>Editora Sei lá ainda<br/>2025</p>
    </div>

      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={chapterTitle}/>
    </div>
  );
};

export default Credits;