import { useState } from "react"
import progressContext from "./progressContext"

const ProgressState = (props) => {

    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)

    return (
        <progressContext.Provider value={{ progress, setProgress, loading, setLoading }}>
            {props.children}
        </progressContext.Provider>
    )
}

export default ProgressState