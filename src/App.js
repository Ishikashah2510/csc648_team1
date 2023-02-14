import logo from './logo.svg';
import './App.css';
import Icon from './Images/slack.png'

function About() {
  const image1 = './Images/vinay.jpg'
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Hello Everyone! We are <strong> CSC648/848-Spring23-01-Team 01.</strong></p>
      <p id='info'>Members in our team are:</p>
      <ul >
        <li>Vinay (Front-End Lead)</li>
        <li>Alekhya (Front-End Lead)</li>
        <li>Jacob (Github and Scrum Master)</li>
        <li>Ishika (Back-End Lead)</li>
        <li>Nick (Product Owner)</li>
      </ul>
      <p>
        We scheduled our meetings on <strong>Monday</strong> and <strong>Wednesday</strong> of every week.
      </p>
      <p id = 'skills'>
        Our communication channel is <strong>Slack</strong> 
        <img src= {Icon} id = 'icon'/>
      </p>

      <div class="member">
        <img src={require('./Images/vinay.jpg')} />
        <h2>Nandhikanti Vinay (Front-End Lead)</h2>
        <p>My name is <strong>Vinay Nandikanti.</strong> I'm an International Masters CS student from India for the Spring 2023 semester. I completed my Bachelors in Computer Science and Engineering. </p>
        <img src={require('./Images/etv.jpg')} />
      </div>
      
    </div>
    
   
  );
}

export default About;




