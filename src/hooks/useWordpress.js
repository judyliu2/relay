import { useContext } from "react"
import { PageContext } from "../context/PageContext"

const useWordpress = () => {
  const { data: { wordpress } } = useContext(PageContext)

  return wordpress
}
export default useWordpress

