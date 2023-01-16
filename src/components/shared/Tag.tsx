import React from 'react'

interface PropsI {
   children: any;
}

function Tag({children}:PropsI) {
  return (
    <div className='rounded shadow p-1 bg-secondary text-xs opacity-80 text-white dark:text-dark dark:opacity-100'>#{children}</div>
  )
}

export default Tag;