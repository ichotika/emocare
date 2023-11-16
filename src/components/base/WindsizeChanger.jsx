import { useEffect, useState } from 'react';

const useWindowDimensions = () => {

    const [windowDimensions, setWindowDimensions] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;

// import { useEffect, useState } from 'react';

// const WindowDimentions = {
//     width: undefined;
//     height: undefined;
// };

// const useWindowDimensions = () => {
//     const [windowDimensions, setWindowDimensions] = useState({
//         width: undefined,
//         height: undefined,
//     });
//     useEffect(() => {
//         function handleResize(): void {
//             setWindowDimensions({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         }
//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return (): void => window.removeEventListener('resize', handleResize);
//     }, []); // Empty array ensures that effect is only run on mount

//     return windowDimensions;
// };

// export default useWindowDimensions;