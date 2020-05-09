import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import style from './MainTemplate.style'

const MainTemplate = ({ classes, children, ...rest }) => {
  return (
    <main className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} className={classes.content}>
          {children}
        </Grid>
      </Grid>
    </main>
  )
}

export default withStyles(style)(MainTemplate)