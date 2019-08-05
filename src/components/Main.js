import React from 'react'

const Main = ({ style, ...rest }) => (
 
    <div
      {...rest}
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '48px 16px',
        ...style,
      }}
    />
)
export default Main
