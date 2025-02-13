import React from 'react'

const Share = ({onClick}) => {
    return (
        <>
            <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 3L9.218 10.083" stroke="white" stroke-width="2" stroke-linejoin="round" />
                <path d="M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
        </>
    )
}

export default Share




