import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import ModalContainer from '../Modal/ModalContainer';
import './SearchBox.css'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Search');
  };

  return (
    <Form
      onSubmit={submitHandler}
      className = 'formContainer'
    >
        <Col>
          <div style={{display: 'flex'}}>
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
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <ModalContainer triggerText='+ ADD JOB' />
          </div>
        </Col>
    </Form>
  );
};

export default SearchBox;
