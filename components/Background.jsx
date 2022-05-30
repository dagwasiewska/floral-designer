import React from 'react'


const zdj = new URL('../public/assets/IMG_4788.JPG',import.meta.url)

function Background() {

 

  return (
    <div className="w-full h-full">
     <img src={zdj} className="w-full h-1/3 mx-auto mt-0"></img>
    </div>
  )
}

export default Background