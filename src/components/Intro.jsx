import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';
import Header from '../components/Header';

const Intro = ({ 
  onNext, 
  onPrev,
  goToSummary
  }) => {

    const chapterTitle = "Introducion";

    useEffect(() => {
      const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} of the Alice book`;
      return () => {
        document.title = book_infos.title; 
      };
    }, [chapterTitle]);
      

  return (
    <div className="page intro">
      <div className="chapter_head">
        <h2 className="chapter_title">Introducion</h2>
        <p className='chapter_subtitle'>Subtitle</p>
      </div>
      <div className="chapter_content">
        <p className='chapter_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tenetur nihil maxime aspernatur facilis pariatur, ipsum at dolorem iste accusamus veritatis corporis, dicta recusandae ad! Quaerat similique fugit animi laudantium?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sequi et commodi nemo, aliquam dolores, sint ea explicabo quasi ad omnis consequatur enim magnam non deserunt nulla praesentium obcaecati quis.</p>
        <p className='chapter_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nostrum sunt saepe laudantium inventore placeat itaque illum eveniet vel consectetur ad, est nesciunt deleniti dolores odit, blanditiis odio aperiam sapiente.</p>
        <p className='chapter_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti pariatur necessitatibus quam sapiente repellendus, rerum impedit tenetur quaerat! Esse aut aperiam delectus repellat, architecto quia. Ratione cum velit hic cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum, provident itaque tempora nam commodi. Incidunt, earum voluptatem delectus optio animi quae beatae velit natus amet. Reprehenderit, facilis eveniet. Explicabo!</p>
      </div>
      
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={"Alice"}/>
    </div>
  );
};

export default Intro;