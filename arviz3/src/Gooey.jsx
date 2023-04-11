import GooeyEffect from "./GooeyEffect"
import { forwardRef } from "react"

export default forwardRef(function Gooey(props, ref) {
    const effect = new GooeyEffect(props)

    return <primitive ref={ ref } object={ effect } />
})