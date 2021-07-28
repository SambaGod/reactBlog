import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function AddCommentForm({ articleName, setArticleInfo }) {
  const [username, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username: username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUserName('');
    setCommentText('');
  };

  return (
    <Fragment>
      <h2>Add a comment</h2>
      <Form>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            value={username}
            onChange={event => setUserName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='comment'>Comment</Label>
          <Input
            type='textareas'
            id='comment'
            name='comment'
            rows='4'
            cols='50'
            value={commentText}
            onChange={event => setCommentText(event.target.value)}
          />
        </FormGroup>
        <Button color='dark' onClick={() => addComment()}>
          Add Comment
        </Button>
      </Form>
    </Fragment>
  );
}
