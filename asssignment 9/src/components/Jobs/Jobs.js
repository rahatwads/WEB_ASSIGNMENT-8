import React from 'react';
import CardResponsive from '../Layout/Card';

const Jobs = () => {

  const jobsData = [{
    img: "https://static.vecteezy.com/system/resources/thumbnails/007/559/606/small/a-children-learning-coding-or-computer-programming-flat-illustration-coding-for-kids-basic-computer-programing-can-be-used-for-web-landing-page-social-media-promotion-etc-vector.jpg",
    name: "Software Developer",
    team_name: "Apps & Tools"
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/003/596/434/small_2x/customer-support-concept-in-modern-flat-design-operator-works-at-computer-responds-to-incoming-emails-advises-clients-consultant-works-in-call-center-online-communication-illustration-vector.jpg",
    name: "Technical Support",
    team_name: "ClientOps"
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/004/691/415/non_2x/a-call-center-specialist-and-technical-support-manager-sits-at-laptop-with-headphones-and-works-with-email-flat-cartoon-illustration-the-girl-works-at-the-computer-without-leaving-the-house-vector.jpg",
    name: "Customer Support",
    team_name: "ClientOps"
  },
  {
    img: "https://cdni.iconscout.com/illustration/premium/thumb/cyber-security-developer-5599096-4684114.png",
    name: "Security Engineer",
    team_name: "Infrastructure Team"
  },
  
  {
    img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=2000",
    name: "Software Developer - II",
    team_name: "Infrastructure Team"
  },
  {
    img: "https://cdn.dribbble.com/users/1772963/screenshots/5621781/media/46002d6e8080b790a393fe60bd8a33e3.png?compress=1&resize=400x300&vertical=top",
    name: "Software Tester",
    team_name: "DevOps"
  },
  {
    img: "https://img.freepik.com/free-vector/big-data-architecture-abstract-concept-illustration_335657-5120.jpg",
    name: "Data Architect",
    team_name: "Tech"
  },
  {
    img: "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg",
    name: "Customer Support",
    team_name: "TechOps"
  }];

  return (
    <div className="component">
      <h3>Jobs</h3>
      <p>Below are some of the jobs available! Apply Now!</p>
      <CardResponsive data={jobsData}/>
    </div>
  )
}

export default Jobs;