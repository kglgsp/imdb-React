import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Input, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


const SearchBar = ({SearchHandler}) => {
  return (
    <Row>
      <Col span={15} offset={5}>
        <Search
          placeholder="Search movie: "
          enterButton="Search"
          size="large"
          onSearch={value => SearchHandler(value)}
        />
      </Col>
  </Row>
  )
}


function App() {
    const setQuery = useState('')

  return (
    <div className="App">
      <Layout>
        <Content>
         <br></br>
         <SearchBar SearchHandler={setQuery}/>
        </Content>
        <Footer> kglgsp | github © 2020 </Footer>
      </Layout>
    </div>
  );
  
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
