import React from "react"
import { ThemeProvider } from "@material-ui/core/styles/"
import theme from "./src/theme"
// import layout from "./src/components/layout"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
