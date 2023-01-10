import React from 'react'

const Delete = ({deleteCallBack}) => {
  return (
    <div>
      <button onClick={deleteCallBack}>Delete all</button>
    </div>
  )
}

export default Delete
