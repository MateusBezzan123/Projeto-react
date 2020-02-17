import React, { useState } from 'react';

export default function New() {
  const [company, setCompany] = useState('');
  
  function handleSubmit(){

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">Empresa *</label>
      <input 
      id="company"
      placeholder="A sua melhor empresa"
      value={company}
      onChange={event=> setCompany(event.target.value)}
      >
      </input>
    </form>
  )
}