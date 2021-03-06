import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Welcome to My Portfolio!</h1>
      <h2><b>Enterprise International Web Application</b></h2>
      <p>Technologies Used:
            ReactJS, Ruby, Rails Framework
      </p>
      <p>Description:</p>
      <p>I was part of a team in the University of Utah's Web Development program
        designing a travel app aiding Asian clientele to travel arrangements to see American tourist destinations.
        My role in this project was controller testing, admin dashboard/user login creation using ReactJS, pulling in data to retrieve users, 
        and assisting in setting up Models, Views and Controllers for the Rails portion of the app.
      </p>
      <a href="https://dps-enterprise-international.herokuapp.com/">Enterprise International</a>

      <h2><b>Caffey, Inc. Design-Build Medical Renovation Web Application</b></h2>
      <p>Technologies Used:
        ReactJS, NodeJS, PHP, HTML/CSS
      </p>
      <p>This project involved building a website for a construction company. Major
      steps in this project included linking site pages, adding an image carousel, and 
      implementing a contact form.</p>
      <a href="https://www.caffey-inc.com/">Caffey, Inc.</a>

      <h2><b>Mugshot: Facebook Clone</b></h2>
      <p>Technologies Used:
        Ruby/Rails, ReactJS, HTML/CSS</p>
      <p>Mugshot is an app built to upload & share your favorite jail photos as well as post, comment and like on other's posts.</p>




    <Link to="/">Go back to the homepage</Link>
  </Layout>


)

export default SecondPage
