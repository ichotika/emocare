import * as React from "react";
const SvgComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={24} width={24}>
        <path
            fill={props.color}
            d="M16.666 13.782 16 13.186V8a4 4 0 1 0-8 0v5.186l-.666.596A6.987 6.987 0 0 0 5.29 17h13.42a6.987 6.987 0 0 0-2.044-3.218ZM15 19a3 3 0 0 1-6 0H3a8.978 8.978 0 0 1 3-6.708V8a6 6 0 0 1 12 0v4.292A8.978 8.978 0 0 1 21 19h-6Zm-3 1a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1Z"
        />
    </svg>
);
export default SvgComponent;
