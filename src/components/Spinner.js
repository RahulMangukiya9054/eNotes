import React from 'react'
import "../styles/Spinner.css"

const Spinner = (props) => {

    const loading = props.loading

    return (
        <div>
            {
                loading && <>
                    <div className="spinner-modal">
                        <div class="spinner-border text-primary mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Spinner