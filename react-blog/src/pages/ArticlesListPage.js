import React, { Fragment } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

function ArticlesListPage() {
  return (
    <Fragment>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </Fragment>
  );
}

export default ArticlesListPage;
