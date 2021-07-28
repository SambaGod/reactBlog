import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import articleContent from './article-content';

function ArticlesList() {
  return (
    <Fragment>
      <h1>Articles</h1>
      {articleContent.map((article, key) => (
        <ListGroup>
          <ListGroupItem>
            <Link
              className='nav-link text-secondary'
              key={key}
              to={`articles/${article.name}`}
            >
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
          </ListGroupItem>
        </ListGroup>
      ))}
    </Fragment>
  );
}

export default ArticlesList;
