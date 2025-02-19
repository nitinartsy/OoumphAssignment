import React from 'react'

const SaveIcon = ({ onClick }) => {
    return (
        <>
            <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21L12 13.44L4 21V3H20V21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </>
    )
}

export default SaveIcon