import React from 'react'

const radio = ({pergunta, options, id,value, onChange, active}) => {

  if(active === false) return null;
  return (
    <fieldset style={{padding:'2rem', marginBottom:'1rem', border:'2px solid rgb(17 153 255)', backdropFilter:'blur(10px)', background:'rgba(0,0,0,0.1)'}}>
      <legend style={{fontWeight:'bold', color:'#ef657f'}}>{pergunta}</legend>
      {options.map((option) => (
      <label key={option}  style={{cursor:'pointer',marginBottom:'1rem', fontFamily:'monospace'}}>
        <input 
        type="radio"
        id={id}
        checked={value === option} 
        value={option} 
        onChange={onChange}/>
        {option}
      </label>
    ))}
    </fieldset>
  )
}

export default radio