import React from 'react'

function CityList({cityData}) {
  return (
    <div className='mx-auto'>
        {cityData.data.map((item,itx) =>{
            <div>{item.name}</div>
        })}
    </div>
  )
}

export default CityList