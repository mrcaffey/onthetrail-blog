import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
        <div>
        <form action="/action_page.php">
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    
    
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
    
    
        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit" />
        </form>
        </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>

)

export default ThirdPage
