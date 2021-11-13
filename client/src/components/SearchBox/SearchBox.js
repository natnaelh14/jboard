import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './SearchBox.css';

const SearchBox = () => {
  const history = useHistory();
  const [keywords, setKeyword] = useState('');

  useEffect(() => {
    if (keywords) {
      history.replace(`/dashboard/${keywords}`);
    } else {
      history.replace(`/dashboard`);
    }
  }, [keywords]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form className='formContainer' onSubmit={submitHandler}>
      <div style={{ display: 'flex' }}>
        <Form.Control
          type='search'
          name='search'
          value={keywords ? keywords : ''}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Company...'
          autoFocus
          autocomplete='off'
        />
        <Button
          type='submit'
          variant='outline-success'
          className='btn btn-lg btn-outline-warning text-dark center'

        >
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
