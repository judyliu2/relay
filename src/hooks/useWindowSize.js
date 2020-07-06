import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [size, setSize] = useState({ x: null, y: null })
  useEffect(() => {
    window.onresize = () => {
      setSize({
        x: window.innerWidth,
        y: window.innerHeight
      })
    }
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    })
  }, [])
  return size
}
export default useWindowSize