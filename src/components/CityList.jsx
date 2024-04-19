import React from 'react'

function CityList({cityData}) {
  console.log("Data:",cityData)
  return (
    <div className='mx-auto'>
        {cityData.map((item,itx) =>{
            <div>{item.name}</div>
        })}
    </div>
  )
}

export default CityList