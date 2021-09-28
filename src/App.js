import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

// const c = [];
// const number = c.length === 0 ? 5 : 10;

function App() {
  const [news, setNews] = useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=5fa9d47f1c2e4c5eaa25c50e8578b764')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
        {news.length === 0 ? <Spinner animation="border" />
         :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
        </Row>}
    </div>
  );
}

/* <Button variant="primary">Click me</Button>
      <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner> */

export default App;
