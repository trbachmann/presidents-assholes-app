import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { 
    number, 
    president, 
    birth_year, 
    death_year, 
    took_office, 
    left_office, 
    party 
  } = props.president;

  return(
    <div className='Card'>
      <p>Number: {number}</p>
      <p>President: {president}</p>
      <p>Born: {birth_year}</p>
      <p>Died: {death_year || 'N/A'}</p>
      <p>Took Office: {took_office}</p>
      <p>Left Office: {left_office}</p>
      <p>Party: {party}</p>
    </div>
  );
}