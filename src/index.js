import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';


// this is customdemo component made by anish
import './index.css';

// here we create the objects i.e 'firstbook'and 'secondbook'
const firstbook={
  image:'https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  author:" Joseph Murphy ", title:"The Power of Your Subconscious Mind"
}

const secondbook={
  image:'https://m.media-amazon.com/images/I/61yB0UFlM3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  author:" Sudha Murty", title:"Grandma's Bag of Stories"
}

//here in book element we create the img,tit,aut  attributes and assign the values from object
function BookList()
{
  return (
  <section className='section' >
    <Book img={firstbook.image} tit={firstbook.title} aut={firstbook.author} >

      <p>this is the content between the opening and closing tag of Book element</p>

      </Book>

    <Book img={secondbook.image} tit={secondbook.title} aut={secondbook.author} />
    <Book img={firstbook.image} tit={firstbook.title} aut={firstbook.author} />
    <Book img={secondbook.image} tit={secondbook.title} aut={secondbook.author} />
    <Book img={firstbook.image} tit={firstbook.title} aut={firstbook.author} />
    <Book img={secondbook.image} tit={secondbook.title} aut={secondbook.author} />
    

    </section>
  
  );
}
 //here we pass the attributes as  i.e img,tit,aut
const Book=(props)=>{
  return (
  <article className='book'>

  <img src={props.img}/>
  <h1>{props.tit}</h1> 
  <h4>Author  :-{props.aut}</h4>
  {props.children} 
  
 </article>
  );
}





ReactDOM.render(<BookList/>, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
