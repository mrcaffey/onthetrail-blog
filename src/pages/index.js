import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <Image />
    <p>Hi! My name is Micah Caffey. I'm an outdoorsman, conservationist, and passionate programmer.
    I moved from Mississippi to Utah in 2018 to fulfill my need to be near the mountains and take the 
    plunge into the world of software development.</p>
    <h1>My Stack</h1>
    <p>I currently work with the following technologies:</p>
    <ul>
    <li>Javascript</li>
    <li>ReactJS</li>
    <li>React Native</li>
    <li>NodeJS</li>
    <li>PHP</li>
    <li>Ruby</li>
    <li>Rails framework</li>
    <li>C#</li>
    <li>SQL</li>
    </ul>
    <h1>2019</h1>
    <h2>January 19</h2>
    <p>My first blog post! I am working on completing a web app for a construction site. Stay tuned!</p>
    <h2>January 21</h2>
    <p>Caffey, Inc. web application deployed via Netlify</p>
    <h2>January 22</h2>
    <p>Review and deep dive into virtualDOM & React Redux</p>
    <h2>January 23</h2>
    <p>Work on contact form submission -- NodeJS and PHP review</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
