import { useEffect, useState } from "react"
import useWindowSize from "./useWindowSize"
import useNavigator from "./useNavigator"

const getType = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return 'MOBILE'
  }
  console.warn('Non mobile device type not set up src/hooks/useDevice.js')
  return 'NOT MOBILE, TO-DO - src/hooks/useDevice.js'
}

const getBreakpoint = (windowSize) => {
  console.warn('breakpoint not set up')
  return 'unset'
}

const useDevice = () => {
  const windowSize = useWindowSize()
  const navigator = useNavigator()
  const [device, setDevice] = useState({ type: 'MOBILE', breakpoint: 'unset' })
  useEffect(() => {
    const type = getType(navigator.userAgent)
    const breakpoint = getBreakpoint(windowSize)
    if (device.type !== type || device.breakpoint !== breakpoint) {
      setDevice(
        {
          type: getType(navigator.userAgent),
          breakpoint: getBreakpoint(windowSize)
        }
      )
    }

  }, [windowSize])
  return device
}
export default useDevice

