import React from 'react'
import { Switch , Route } from 'react-router-dom'
import BeerList from './container/BeerList'
import BeerDetails from './container/BeerDetails'

const RenderBeers = () => (
  <Switch>
    <Route exact path='/' component={BeerList} />
    <Route exact path='/beers' component={BeerList} />
    <Route exact path='/beers/:id' component={BeerDetails} />
  </Switch>
)

export default RenderBeers