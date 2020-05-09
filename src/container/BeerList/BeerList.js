import React, { Component } from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Container, IconButton, TableFooter, TablePagination } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader'
import MainTemplate  from '../../template/MainTemplate'
import beerApi from '../../api/beer'
import SearchIcon from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip'


class BeerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listBeerGrid : [],
      perPage: 5,
      page: 1
    }
  }

  componentDidMount() {
    this.getBeerList(this.state.page, this.state.perPage)
  }

  getBeerList = (page, perPage) => {
    beerApi.listPerPage(page, perPage)
      .then(beerList => this.setState({ listBeerGrid: beerList }))
      .catch(error => console.error(error))
  }

  handleClick(personId, history)
  {
    history.push(`beers/${personId}`)
  }

  handleChangePage = (newPage) => {
    if(newPage < 1){
      this.state.page = 1
    }else{
      this.state.page = newPage
    }
    this.componentDidMount()
  }
  
  handleChangeRowsPerPage = (event) => {
    this.state.perPage = +event.target.value
    console.log(this.state.perPage);
    this.componentDidMount()
  };

  render() {

    const { history } = this.props
    const lista = this.state.listBeerGrid 
    console.log(lista.length);
    

    return(
      <Container maxWidth="lg">
      <MainTemplate>
        <AppHeader title="Lista de Cervejas" />
        <Paper>
          <Table >
            <TableHead>
                <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="center">Tagline</TableCell>
                    <TableCell align="right">Options</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {lista.map(beer => (
                    <TableRow key={beer.id}>
                      <TableCell align="left"> {beer.name} </TableCell>
                      <TableCell align="center"> {beer.tagline} </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Detalhes do produto.">
                          <IconButton color="primary" aria-label="upload picture" component="span" det
                            onClick={() => this.handleClick(beer.id, history)}>
                            <SearchIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                
              </TableRow>
            </TableFooter>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={lista.length}
            rowsPerPage={this.state.perPage}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </MainTemplate>
      </Container>
    )
  }
}

export default BeerList