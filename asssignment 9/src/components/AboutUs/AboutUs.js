import React from 'react';
import CardResponsive from '../Layout/Card';

const AboutUs = () => {

  const aboutUsData = [{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBpZrelQNO8md8_Zf1GhHqI3im6Ht_G9s_g&usqp=CAU",
    name: "Mike Foo",
    team_name: "CEO"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVI185WaK2ZQWjZhlBaMw5RMJcjYlwYDwhoVrVgM80osQaDr5aD9fTBjwJ_Z4SgGpglQ&usqp=CAU",
    name: "Smith Jone",
    team_name: "Director"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRC7ZRhHH-xlpIJzGjcaDePXbQmgS7vhvYbw&usqp=CAU",
    name: "Boo",
    team_name: "CTO"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxz5-IZmJlJVhpd7beFYL1Zdnw2lyjyDa-Z-qGNBryHjCVSvsHWpdxVX5PS9Ie8bm8Y-g&usqp=CAU",
    name: "Josie",
    team_name: "VP"
  }];

  return (
    <div className="component">
      <h3>About Us</h3>
      <p>
      Let us introduce you to our team!
      </p>
      <div className="aboutUS-container">
        <p>Our Team</p>
        <CardResponsive data={aboutUsData} />
      </div>
    </div>
  )
}

export default AboutUs;