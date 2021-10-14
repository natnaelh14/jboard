import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import ModalContainer from '../Modal/ModalContainer';
import { useHistory } from 'react-router-dom';
import './SearchBox.css';

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Search');
    if (keyword.trim()) {
      history.push(`/dashboard/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} className='formContainer'>
      <Col>
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
      </Col>
      <Col>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ModalContainer triggerText='+ ADD JOB' />
        </div>
      </Col>
    </Form>
  );
};

export default SearchBox;
