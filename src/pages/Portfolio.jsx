/* eslint-disable react/jsx-key */
import Project from "../components/UI/Project";

const projects = [

  // {
  //   name: "Projects"
  // },
  {
    name: "Animals-R-Us Social Media App",
    urlName: "Animals-R-Us",
    imageURL: "https://solis07.github.io/Animals-R-US/", 
    image: "../assets/catndog.jpg"
  },
  {
    name: "UT-Bros Apparel",
    urlName: "UT-Bros Apparel",
    imageURL: "https://ut-bros-apparel-0bcd7da3cb4b.herokuapp.com/login",
    image: "../assets/ut-bros.jpg"
  },
  {
    name: "HTML Refactoring",
    urlName: "Horiseon",
    imageURL: "https://bwilliams-88.github.io/Code-Refactor-Practice/", 
    image: "../assets/work-pic.jpg"
  },
  {
    name: "Random Password Generator",
    urlName: "Password Generator",
    imageURL: "https://bwilliams-88.github.io/password-generator/", 
    image: "../assets/placeholder-2.jpg"
  },
  {
    name: "Work Day Scheduler",
    urlName: "Scheduler",
    imageURL: "https://bwilliams-88.github.io/scheduler/", 
    image: "../assets/placeholder-4.jpg"
  },
  {
    name: "Note Taker",
    urlName: "Notes",
    imageURL: "https://bwilliams-note-taker-4830fd8bcbd3.herokuapp.com/", 
    image: "../assets/placeholder-1.jpg"
  }  
]

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
          {projects.map((project) => (
          <Project project={project} />
          ))}
      </div>
    );
  }