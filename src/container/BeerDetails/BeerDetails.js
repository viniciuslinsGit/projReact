import React, { Component } from 'react'
import { Paper, Avatar, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import AppHeader from '../../component/AppHeader/AppHeader'
import MainTemplate  from '../../template/MainTemplate'
import beerApi from '../../api/beer'
import style from './BeerDetails.style'

class BeerDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beer : {
        food_pairing: []
      }
    }
  }

  componentDidMount() {
    this.getBeer()
  }

  getBeer = () => {
    const { match } = this.props
    beerApi.get(match.params.id)
      .then(beer => this.setState({ beer: beer }))
      .catch(error => console.error(error))
  }

  render() {
    const { classes } = this.props
    const { beer } = this.state

    return(
      <MainTemplate>
        <AppHeader title="Beer details" />
        <Paper className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <p><b>Name:</b> {beer.name}</p>
              <p><b>Tagline:</b> {beer.tagline} </p>
              <p><b>Description:</b> {beer.description} </p>
              <p><b>Brewers tips:</b> {beer.brewers_tips} </p>
              <b>Foor pairing:</b> <br />
              <ul>
                {beer.food_pairing.map(food => 
                  <li key={food}>
                    {food}
                  </li>
                )}
              </ul>
            </Grid>
            <Grid item xs={12}>
              <img width="100" alt={beer.name} src={beer.image_url} ></img>
            </Grid>
          </Grid>
        </Paper>
      </MainTemplate>
    )
  }
}

export default withStyles(style)(BeerDetails)