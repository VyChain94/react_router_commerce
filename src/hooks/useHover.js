import {useState,useEffect,useRef} from 'react'

export default function useHover() {
  const [isHovered, setHovered] = useState(false)
  let ref = useRef(null)
  

  function enter() {
    setHovered(true)
  }

  function leave() {
    setHovered(false)
  }

useEffect(() => {
  ref.current.addEventListener('onmouseenter', enter)
  ref.current.addEventListener('onmouseleave', leave)

  return () => {
    ref.current.removeEventListener('onmouseenter', enter)
    ref.current.removeEventListener('onmouseleave', leave)
  }
}, [])

    return [isHovered, ref]
}
