import React from 'react'

const MessageIcon = ({onClick}) => {
    return (
        <>
            <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.656 17.008C21.8711 14.9061 22.2795 12.4337 21.8048 10.0527C21.3301 7.67172 20.0048 5.54497 18.0765 4.06978C16.1482 2.59459 13.7488 1.87186 11.3266 2.03661C8.90429 2.20135 6.62485 3.24231 4.91406 4.96501C3.20327 6.68772 2.17816 8.97433 2.03022 11.3977C1.88229 13.821 2.62165 16.2153 4.11019 18.1334C5.59873 20.0514 7.73462 21.3619 10.1189 21.82C12.5031 22.2782 14.9726 21.8527 17.066 20.623L22 22L20.656 17.008Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
            </svg>
        </>
    )
}

export default MessageIcon