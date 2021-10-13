import React from 'react'

const Image = ({ id, label }) => {
  return (
      <React.Fragment>
        <br/>         
        <img src = {label} height = "50%" width= "50%" />
        <br/> 
      </React.Fragment>
  )
}

{/* <Image {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain' }
    /> */}

export default Image