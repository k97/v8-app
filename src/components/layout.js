/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.scss"

import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import { Button } from 'rebass'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
        <Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`
            }}
          ><Button variant='outline'>Read more</Button>
            <main>{children}</main>
            {/* <footer>
              © {new Date().getFullYear()}, 
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
          </div>
        </Fragment>
      </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
