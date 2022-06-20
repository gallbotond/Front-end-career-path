import { useState } from 'react'

export default function useToggler(defaultState = false) {

  const [on, setOn] = useState(defaultState)

  const toggle = () => setOn(prevOn => !prevOn)

  return [on, toggle]
}
