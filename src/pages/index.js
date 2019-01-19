import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <p>Hi! My name is Micah Caffey. I'm a passionate outdoorsman, conservationist, and passionate programmer.</p>
    <p>Here you can see what I'm learning, projects I'm working on, and my journey into software development.</p>
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
)

export default IndexPage
