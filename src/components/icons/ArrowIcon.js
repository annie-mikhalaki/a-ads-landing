import React from 'react'

const ArrowIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.86697 32.9733C13.7736 23.9319 12.0754 8.98007 1.36815 2.16629L2.4419 0.478966C14.2235 7.97638 16.092 24.4283 6.29176 34.3768L4.31136 36.3872L10.897 36.3378C11.4492 36.3336 11.9003 36.7779 11.9044 37.3302C11.9086 37.8825 11.4642 38.3335 10.912 38.3377L1.91223 38.4053C1.35996 38.4094 0.908896 37.9651 0.904748 37.4128L0.837158 28.4131C0.833008 27.8608 1.27735 27.4097 1.82962 27.4056C2.38189 27.4015 2.83295 27.8458 2.8371 28.3981L2.88656 34.9837L4.86697 32.9733Z" fill="#03A9F4"/>
        </svg>
    )
}

export default ArrowIcon