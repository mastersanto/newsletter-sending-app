import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { AppDispatch } from '../../store';
import { fetchNewsletters } from '../../store/newsletters/newslettersAction';

function NewslettersList() {
  const dispatch = useDispatch<AppDispatch>();
  const newsletters = useSelector((state: any) => state.newsletters.newslettersList);

  useEffect(() => {
    dispatch(fetchNewsletters());
  }, [dispatch]);

  console.log({ newsletters });

  return (
    <Container className="newletters-list">
      {newsletters && (
        <ul>
          {newsletters.map((newsletter: any) => (
            <li
              key={`newsletter-${newsletter._id}`}
              className='newletters-list__item'
            >{newsletter.title} - {newsletter._id}</li>
          ))}
        </ul>
      )}

    </Container>
  );
}

export default NewslettersList;
