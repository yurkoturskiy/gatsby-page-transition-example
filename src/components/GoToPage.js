import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import TransitionEffect from './TransitionEffect'
import AniLink from "gatsby-plugin-transition-link/AniLink";

function GoToPage(props) {
  const [clickPos, setClickPos] = useState()
  const [isActive, setIsActive] = useState()

  const handleClick = e => {
    console.log('click event', e)
    setClickPos({ x: e.clientX, y: e.clientY })
    setIsActive(true)
  }

  useEffect(() => {
    if (clickPos && !isActive) {
      setIsActive(true)
      setTimeout(() => {
        setIsActive(false)
        setClickPos(undefined)
      }, 2200)
    }
  }, [clickPos, isActive])

  return (
    <TransitionLink
      to="/page-2/"
      onClick={e => handleClick(e)}
      exit={{
        trigger: ({ exit, node, e }) => {
          console.log('exit', exit)
          console.log("exit node", node)
        },
        delay: 0.5,
      }}
      entry={{
        trigger: () => {
          console.log('entry')
        },
      }}
    >
      Go to page 2
      {isActive && clickPos && (
        <TransitionEffect centerX={clickPos.x} centerY={clickPos.y} />
      )}
    </TransitionLink>
  )
}

export default GoToPage
