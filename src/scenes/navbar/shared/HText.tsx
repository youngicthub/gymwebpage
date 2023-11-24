import React from 'react'

type Props = {
    children:React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className="font-montserrat text-3xl basis-3/5 font-bold"
    > 
     {children}
     
    </h1>
  )
}

export default HText