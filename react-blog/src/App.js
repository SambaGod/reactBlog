import { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Router>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/about' component={AboutPage} />
              <Route path='/articles-list' component={ArticlesListPage} />
              <Route path='/articles/:name' component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </Container>
      </Fragment>
    );
  }
}

export default App;
