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
      <div className="intro_head">
        
        <p className='chapter_subtitle'>Introducion</p>  
        <h2 className="chapter_title">Title criative</h2>
        <img 
            src="https://placehold.co/25" 
            alt="Imagem Placeholder" 
            loading="lazy" 
          />
      </div>
      <div className="chapter_content">
        <p className='chapter_text'>Dear reader, or rather, dear dreamer, hold onto this book as if it were a key—a key that unlocks doors to places where time forgets to exist, where cats grin from ear to ear, and where queens decide the fate of their victims before even knowing if they are guilty. You are about to embark on a journey that defies logic, reason, and, who knows, perhaps even gravity. Yes, you are about to enter the world of Alice, a curious girl who, like you, once decided that the ordinary world was too small for her questions.</p>
        <p className='chapter_text'>This book is a double invitation: first, to Wonderland, where rabbits carry pocket watches and caterpillars smoke hookahs with an air of philosophical superiority. Then, to the Looking-Glass World, where everything seems familiar but is upside down, as if someone had switched the rules of the game while you weren’t looking. Lewis Carroll, the master of words that play hide-and-seek with reality, gifted us these two tales that are, at once, a puzzle, a dream, and a tea party that never ends.</p>
        <p className='chapter_text'>But who is Lewis Carroll, you might ask? Ah, that is a question even the Cheshire Cat might hesitate to answer fully. Carroll, whose real name was Charles Lutwidge Dodgson, was a mathematician, photographer, and storyteller who seemed to have one foot in the real world and the other in a parallel universe where words dance and numbers sing. He created Alice as a gift for a real girl, Alice Liddell, but his imagination was so vast that the story escaped the pages and became a timeless phenomenon, read by children, adults, and even philosophers who wonder if the Mad Hatter wasn’t, in fact, right about time.</p>
        <p className='chapter_text'>Now, let’s talk about Alice. Ah, Alice! She is not your typical heroine, with swords or shining capes. She is an explorer of inner worlds, a girl who questions everything and everyone, from hurried rabbits to authoritarian queens. She falls, quite literally, into holes that lead to strange places, but she never loses her curiosity or courage. Alice is that part of us that still wonders why things are the way they are and if they could be different. She is the child we all once were, before we learned to accept the world as it is, without asking questions.</p>
        <p className='chapter_text'>And what will you find within these pages? Well, prepare to meet characters who are as memorable as they are enigmatic. There is the White Rabbit, always late, as if carrying the weight of time on his shoulders. There is the Blue Caterpillar, who speaks in riddles and seems to know more than it lets on. There is the Mad Hatter and the March Hare, trapped in an eternal tea party, where time has stopped but the madness continues. And, of course, there is the Queen of Hearts, whose favorite phrase—“Off with their heads!”—is as absurd as it is hilarious.</p>
        <p className='chapter_text'>In the Looking-Glass World, the adventures continue, but with a different twist. Here, Alice discovers that mirrors are not just reflections but portals to a place where words run wild, poems are inverted, and chess is more than a game—it’s a metaphor for life. You will meet Tweedledum and Tweedledee, two brothers who love a good quarrel, and Humpty Dumpty, who insists that words mean exactly what he wants them to mean.</p>
        <p className='chapter_text'>But, dear reader, do not be mistaken: these stories are not just entertaining. They are like mirrors that reflect our own doubts, fears, and dreams. Carroll challenges us to question what is real, what is possible, and what is merely a trick of the mind. He reminds us that the world is far stranger and more wonderful than it seems at first glance—and that, sometimes, you must lose yourself to find yourself.</p>
        <p className='chapter_text'>So, take a deep breath, open this key-book, and let yourself fall down the rabbit hole. Don’t worry if you feel a little lost at first; as Alice discovered, it’s only the beginning of a grand adventure. And remember: in Wonderland and the Looking-Glass World, anything is possible—even believing in six impossible things before breakfast.</p>
        <p className='chapter_text'>Bon voyage, and may your questions be as curious as Alice’s.</p>
      
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