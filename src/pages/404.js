import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>oops, it seems the page you're looking for does not exist</h1>
          <Link to="/" className="btn">
            back to homepage
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
