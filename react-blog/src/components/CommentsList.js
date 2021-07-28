import React, { Fragment } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function CommentsList({ comments }) {
  return (
    <Fragment>
      <h2>Comments</h2>
      <Card className='mb-5'>
        <CardBody>
          {comments.map(comment => {
            return (
              <Fragment>
                <CardTitle>{comment.username}</CardTitle>
                <CardSubtitle>{comment.text}</CardSubtitle>
              </Fragment>
            );
          })}
        </CardBody>
      </Card>
    </Fragment>
  );
}
