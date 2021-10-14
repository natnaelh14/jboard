import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SearchBox.css';

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/dashboard/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='formContainer'>
        <div style={{ display: 'flex' }}>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Company...'
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
