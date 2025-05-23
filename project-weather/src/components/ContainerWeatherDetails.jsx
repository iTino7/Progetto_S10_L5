import React from 'react'
import { useParams } from 'react-router-dom'

function ContainerWeatherDetails() {
    const params = useParams()
  return (
    <div>ContainerWeatherDetails con id {params.weatherId}</div>
  )
}

export default ContainerWeatherDetails