import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import Header from '../components/Header'
import ArchiveLinks from '../components/ArchiveLinks'

export default function Index({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100%',
          height: '400px',
          background: 'rgba(256,256,256,.6)',
        }}
      />
     
      <Main>
      <Header style={{marginBottom: "56px"}} isBlue compact linkable />
        <div style={{ background: 'white', padding: '24px' }}>
          {posts
            .filter(
              ({
                node: {
                  frontmatter: { title, tags },
                },
              }) =>
                title.length > 0 && location.hash
                  ? tags === location.hash
                  : true
            )
            .map(({ node: post }) => {
              console.log(post)
              return (
                <div style={{ padding: '26px' }} key={post.id}>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={post.frontmatter.path}
                  >
                    <h2
                      style={{ color: "#da3200", marginTop: 0, marginBottom: "18px", fontSize: '32px', fontWeight: '450' }}
                    >
                      {post.frontmatter.title}
                    </h2>
                    <p style={{ margin: 0, fontSize: '16px' }}>
                      {post.frontmatter.date}
                    </p>
                  </Link>
                  {post.frontmatter.summary ? (
                    <p style={{ marginBottom: 0, marginTop: '8px', fontSize: "18px", maxWidth: "600px" }}>
                      {post.frontmatter.summary}
                    </p>
                  ) : null}
                </div>
              )
            })}
        </div>
      </Main>
    </div>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            summary
            tags
          }
        }
      }
    }
  }
`
