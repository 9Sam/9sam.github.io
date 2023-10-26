import {ReactNode} from 'react';

interface Props {
   children: ReactNode;
   tooltip?: string;
}

function Tooltip({children, tooltip}: Props): JSX.Element {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition 
      bg-dark text-white p-1 rounded absolute top-full mt-2'>{tooltip}</span>
    </div>
  )
}

export default Tooltip