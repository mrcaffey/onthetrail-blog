import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <p>Hi! My name is Micah Caffey. I'm an outdoorsman, conservationist, and passionate programmer.
    I moved from Mississippi to Utah in 2018 to fulfill my need to be near the mountains and take the 
    plunge into the world of software development. This is my story.</p>
    <p>Here you can see what I'm learning, projects I'm working on, and my journey into working in tech.</p>
    <h1>2019</h1>
    <h2>January 19</h2>
    <p>My first blog post! Today I'm working on a Udemy React 16.6 Tutorial
    and trying to get a contact form working on a construction site for a company
    in Mississippi. For this, I'm thinking I will need to implement PHP or Node for the backend.
    Stay tuned!</p>
    <h2>January 21</h2>
    <p>Deployment day for the Caffey, Inc. Web Application. I've gotten the form to submit
    successfully using x,y,z technology and deployed via Netlify.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Page 2</Link>
    <Link to="/page-3/">Page 3</Link>
  </Layout>
)

export default IndexPage
