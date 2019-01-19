import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to My Portfolio!</h1>
      <h2>Enterprise International Web Application</h2>
      <p>Technologies Used:
            ReactJS, Ruby, Rails Framework
      </p>
      <p>Description:</p>
      <p>I was part of a team in the University of Utah's Web Development program
        designing a travel app aiding Asian clientele to travel arrangements to see American tourist destinations.
        My role in this project was controller testing, admin dashboard/user login creation using ReactJS, pulling in data to retrieve users, 
        and assisting in setting up Models, Views and Controllers for the Rails portion of the app.
      </p>
      <Link to="https://dps-enterprise-international.herokuapp.com/">Enterprise International</Link>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
  
)

export default SecondPage
