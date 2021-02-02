import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { content, url } = data.blog
  console.log(data)
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <a
            href={url}
            target="_blank"
            title="Read in Medium"
            rel="noopener noreferrer"
            className="btn center-btn"
          >
            read more
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      url
    }
  }
`

export default ComponentName
