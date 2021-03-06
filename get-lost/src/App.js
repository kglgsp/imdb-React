import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import * as actions from './Redux/actions.js';
import { API_KEY } from './credentials';
import { Input, Row, Col, Card, Button } from 'antd';
const { Search } = Input;


function mapStateToProps(state){
  return {
    value: state.value,
    _isMounted: state._isMounted,
    items: state.items
  };
}

function mapDispatchToProps(dispatch){
  return {
    removeCard: (items, imdbID) => dispatch(actions.removeCard(items, imdbID)),
    searchQuery: (value, API_KEY) => dispatch(actions.searchQuery(value, API_KEY))
  }
}

const SearchBar = ({searchQuery, API_KEY}) => {
  return (
    <Row>
      <Col span={15} offset={5}>
        <Search
          placeholder="Search movie"
          enterButton="Search"
          size="large"
          onSearch={value => {searchQuery(value, API_KEY)}}
        />
      </Col>
  </Row>
  )
}


const MovieCard = ({Title, Year, Poster, imdbID, removeCard, items }) => {
    return (
      <Col style={{margin: '30px 0'}} className="gutter-row" span={5}>
          <Card
              hoverable
              style={{width: 250 }}>
              <div className="movie-image">
                  <img
                      alt={Title}
                      src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                  />
              </div>
              <div className="movie-card">
                <div className="title">{Title} ({Year})</div>
              </div>
              <Button onClick={() => {removeCard(items, imdbID)}} type="dashed" >
                Delete
              </Button>
          </Card>
      </Col>

  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="App">
          <br></br>
          <SearchBar searchQuery={this.props.searchQuery} API_KEY = {API_KEY}/>
          <Row gutter={[16, 16]} justify="center">

            {this.props.items && this.props.items.map((value, index) => (
              <div key = {index}>
              <MovieCard 
              Title = {value.Title}
              Year = {value.Year}
              Poster = {value.Poster}
              imdbID = {value.imdbID}
              removeCard = {this.props.removeCard}
              items = {this.props.items}
              />

              </div>
            ))}
          </Row>

      </div>
    );
  }
  
}

export default connect (
  mapStateToProps, mapDispatchToProps
)(App)
