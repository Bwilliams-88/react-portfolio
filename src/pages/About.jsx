import img from '../../public/assets/about-me.jpg'
import '../components/styles/AboutStyle.css';

export default function About() {
    return (
      <div>
        <h1>Brandon Williams</h1>
        <p>
          <img width="125px" height="125px" src={img} className='img'></img>
          <br></br>
          <br></br>
          My name is Brandon Williams, I was born and raised in Lawton, OK; at the age of 21 I joined the United States Air Force as an Aerospace Maintainer, or Aircraft Mechanic.
          I have always loved computers and video games, in high school I attended a webpage design course and loved it! While I was active duty I tried my hand at game design and
          loved it until I got into the harder and more technical parts of the course. Last year I tried my hand at Graphic Design and Animation through LAFS (Los Angeles Film School)
          and was enjoying that until I realized I am not as good of a free hand artist as I hoped and now through The University of Texas at Austin I am learning how to become a Web Developer 
          and loving every minute of it.
        </p>
      </div>
    );
  }
  