import { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Router>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={AboutPage} />
            <Route path='/articles-list' component={ArticlesList} />
            <Route path='/articles/:name' component={ArticlePage} />
          </Router>
        </Container>
      </Fragment>
    );
  }
}

export default App;
