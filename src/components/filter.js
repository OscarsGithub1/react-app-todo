import React from 'react'

const Filter = ({filterInput, setInputFilter, tasks}) => {
  const inputHandler = (e) => {
 setInputFilter(e.target.value)
 console.log(e.target.value);
  }
  //  let newList = tasks.filter((v) => v !=0);

//newList = tasks.filter((v) => !v.text.indexOf(filterInput))
  
    return (
    <>
    
     <input value={filterInput} type="text" onChange={inputHandler}/>
     


    </>
  )
}

export default Filter
