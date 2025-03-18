import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({onNext, onPrev, goToSummary}) => {

  const chapterTitle = "Painting the Roses Red";
  
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
        <h2 className="chapter_title">Painting the Roses Red</h2>
        
      </div>
      
      <div className='credits_container'>

       
   

        
        <div className='tr'>
          <p className='th ft'>Illustration, covers and web designer</p>
          <p className='th'>Nayane de Souza</p>
        </div>
        
        <div className='tr'>
          <p className='th ft'>Revision</p>
          <p className='th'>Nomes</p>
        </div>

        <div className='tr'>
          <p className='th ft'>Text</p>
          <p className='th'>Projeto Gutemberg</p>
        </div>

        



        <div className='tr'>
          <p className='th ft'>Acknowledgements</p>
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