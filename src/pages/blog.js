import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FourthPage = () => (
  <Layout>
    <SEO title="Blog" />
        <div>
        <h1>Welcome to my Blog</h1>


        </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
