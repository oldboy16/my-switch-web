import './App.css';
import img from './assets/image/profile-img.png'
import media from './assets/image/socialmedia - icons.png'
import text from './assets/image/text.png'
import img1 from './assets/image/img1.png'
import img2 from './assets/image/img2.png'
import img3 from './assets/image/img3.png'
import img4 from './assets/image/img4.png'
import img5 from './assets/image/img5.png'
import img6 from './assets/image/img6.png'
import { useState } from 'react';



// const arr = ['olma','anor','olma','behi','gilos']
function App(){
  // const [count, setCount] = useState(0)
  
  // return (
  //   <div className="App">
  //     <h1>{count}</h1>
  //    <button onClick={()=> setCount(count+1)}>+</button>
  //    <button onClick={()=>count >0 ? setCount(count-1) : setCount(0)}>-</button>
  //   </div>
  // );


  //useState bu quvurga o'xshaydi ma'lumot kiradi va chiqib ketadi
  // const [mode,setMode] = useState(true)
  // return(
  //   <div className="App">
  //     <h1 className={mode? 'light':'dark'}>Title</h1>
  //     <button onClick={()=> setMode(!mode)}>{mode? 'dark':'light'}</button>
  //   </div>
  // )
  
  const [mode,setMode] = useState(true)
  return(
    <div className="App">
      <div className="div">
        <div className={mode? 'light':'dark'}>
        <header>
        <div className="container head">
          <img onClick={()=>setMode(!mode)} className='img' src="data:image/png;base64,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" alt="" />
        </div>
        <div className="container wrap">
          <div className="hero__wrap">
          <img src={img} alt="" />
          </div>
          <div className="hero">
            <h1 className='hero__title'>Victor Alvarado</h1>
            <p className='hero__text'>Software Engineer</p>
            <img src={media} alt="" />
          </div>
        </div>
      </header>
      <section>
        <div className="container hero__wrapp">
          <ul className="list">
            <li className="list__items">
              <div>
                <p>7 Years of experience</p>
                </div>
            </li>
            <li className="list__items">
              <div>
                <p>50+ completed projects</p>
                </div>
            </li>
            <li className="list__items">
              <div><p>20+ satisfied customers</p></div>
            </li>
          </ul>
          <div className="hero__wrapper">
            <a className='a' href="#"><img src={text} alt="" /></a>
            <a className={mode?'light__btn':'dark__btn'} href="#">Contact me</a>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="portfolio">
            <p className='text1'>Portfolio</p>
            <p className='text2'>Skils</p>
          </div>
          <ul className="hero__list">
            <li className="hero__items">
              <img src={img1} alt="" />
            </li>
            <li className="hero__items">
              <img src={img2} alt="" />
            </li>
            <li className="hero__items">
              <img src={img3} alt="" />
            </li>
            <li className="hero__items">
              <img src={img4} alt="" />
            </li>
            <li className="hero__items">
              <img src={img5} alt="" />
            </li>
            <li className="hero__items">
              <img src={img6} alt="" />
            </li>
          </ul>
        </div>
        <div className="footer">
          <p className='footer___text'>© Victor Alvarado. 2022 All rigths reserved</p>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}


export default App;
