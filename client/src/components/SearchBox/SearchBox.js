import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import './SearchBox.css';

const SearchBox = () => {
  const history = useHistory();
  const [keywords, setKeyword] = useState('');
  const { keywords: searchWord } = useParams();

  useEffect(() =>{
    if (keywords) {
      history.push(`/dashboard/search/${keywords}`);
    } 
    else if (!keywords) {
      history.push(`/dashboard`);
    }
    
  }, [keywords])

  return (
    <Form className='formContainer'>
        <div style={{ display: 'flex' }}>
          <Form.Control
            type='search'
            name='q'
            value={keywords ? keywords : ""}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Company...'
            autoFocus
            // autoFocus = {(keywords || searchWord) ? true : false}
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
