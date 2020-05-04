import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Row, Col, Card, Button } from 'antd';
const { Footer, Content } = Layout;
const { Search } = Input;

const API_KEY = "d7674cb";


const SearchBar = ({searchQuery}) => {
  return (
    <Row>
      <Col span={15} offset={5}>
        <Search
          placeholder="Search movie title: "
          enterButton="Search"
          size="large"
          onSearch={value => searchQuery(value)}
        />
      </Col>
  </Row>
  )
}


const MovieCard = ({Title, Year, Poster}) => {
    return (
      <Col style={{margin: '30px 0'}} className="gutter-row" span={5}>
      <div className="gutter-box">
          <Card
              style={{ width: 250 }}>
              <div className="movie-image">
                  <img
                      alt={Title}
                      src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                  />
              </div>
              <div className="movie-card">
                <h3>{Title} ({Year})</h3>
              </div>
          </Card>
      </div>
  </Col>

  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      _isMounted: false,
      items: []
    }

    this.searchQuery = this.searchQuery.bind(this)
  }

  searchQuery(value) {

    fetch(`http://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`)
    .then(res => res.json())  
    .then(
      (result) => {
        console.log(result)
        if (this.state._isMounted) {
          this.setState({
            isLoaded: true,
            items: result.Search
          });
        }
      },
      
      (error) => {
        this.setState({
          isLoaded:true,
          error
        });
      }
    )
  }

  componentDidMount() {
    this.setState((state) => {
      return {
        _isMounted: true,
      };
    });
    //this.searchQuery('');
  }


  componentWillUnmount() {
    this.setState((state) => {
      return {
        _isMounted: false};
    });
  }

  removeCard(imdbID) {
    this.setState((state) => {
      return {
        items: this.state.items.filter((items) => items.imdbID != imdbID)
      }
    })
  }

  render() {

    return (
      <div className="App">
        <Layout>

          <Content>
          <br></br>
          <SearchBar searchQuery={this.searchQuery}/>
           
          <Row gutter={[16, 16]} justify="center">

            {this.state.items && this.state.items.map((value, index) => (
              <div>
              <MovieCard 
              Title = {value.Title}
              Year = {value.Year}
              Poster = {value.Poster}
              />

              <Button onClick={() => this.removeCard(value.imdbID)} type="dashed">
                Delete
              </Button>
              </div>
            ))}
          </Row>
          
          </Content>
          <Footer> kglgsp | github © 2020 </Footer>
        </Layout>
      </div>
    );
  }
  
}

export default App;
