const { useState, useEffect } = require("react")

const useNavigator = () => {
  const [navigator, setNavigator] = useState({ useAgent: null })
  useEffect(() => {
    setNavigator(window.navigator)
  }, [])
  return navigator
}
export default useNavigator