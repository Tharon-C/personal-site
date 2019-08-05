import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Main from '../components/Main'
import Header from '../components/Header'
import BackIcon from '../assets/baseline-arrow_back-24px.svg'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <div style={{zIndex: -1, position: "fixed", width: "100%", height: "400px", background: "rgba(256,256,256,.6)"}}/>
      <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
     
      <Main className="blog-post-container">
      <Header style={{marginBottom: "56px"}} compact linkable />
      <Link
          style={{
            marginBottom: '16px',
            display: 'flex',
            color: 'black',
            textDecoration: 'none',
          }}
          to="/post-list"
        >
          <img src={BackIcon} /> Back to Articles
        </Link>
      <div style={{ background: 'white', padding: '50px 24px' }}> 
        <div  style={{margin: 'auto', maxWidth: '600px'}}>
          <h1 style={{ fontSize: '32px', marginBottom: 0, fontWeight: 500 }}>
            {post.frontmatter.title}
          </h1>
          <p style={{ marginBottom: '48px', marginTop: '8px' }}>
            {post.frontmatter.date}
          </p>
        </div>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Main>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        summary
      }
    }
  }
`
