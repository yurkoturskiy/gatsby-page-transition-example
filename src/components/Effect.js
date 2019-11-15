import React from 'react'
import { morphing } from 'primitivo-svg'

const pathsObj = morphing()

function Effect(props) {
  return <svg><path><animate attributeName="d" dur="1000ms" repeatCount="indefinite" values={pathsObj.dValues} /></path></svg>
}

export default Effect
