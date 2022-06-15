import { useEffect, useLayoutEffect } from 'react';

const useSlider = (ref) => {
    let isKeyDown = false;
    let startX;
    let scrollLeft;


    const mouseDownHandler = (e) => {
        isKeyDown = true;
        startX = e.pageX - ref.current.offsetLeft;
        scrollLeft = ref.current.scrollLeft;
    }

    const mouseUpHandler = (e) => {
        isKeyDown = false;
    }

    const mouseMoveHandler = (e) => {
        if (!isKeyDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX);
        ref.current.scrollLeft = scrollLeft - walk;
    }

    const wheelHandler = (e) => {
        e.preventDefault();
        scrollLeft = ref.current.scrollLeft;
        const walk = ref.current.scrollLeft - e.wheelDelta / 3;
        ref.current.scrollLeft = walk;
    }

    const mouseLeaveHandler = (e) => {
        isKeyDown = false;
    }

    useEffect(() => {
        ref.current.addEventListener("mousedown", mouseDownHandler);
        ref.current.addEventListener('wheel', wheelHandler);
        ref.current.addEventListener('mousemove', mouseMoveHandler);
        ref.current.addEventListener('mouseup', mouseUpHandler);
        ref.current.addEventListener('mouseleave', mouseLeaveHandler);
    });

    useLayoutEffect(() => {
        return () => {
            ref.current.removeEventListener("mousedown", mouseDownHandler);
            ref.current.removeEventListener('wheel', wheelHandler);
            ref.current.removeEventListener('mousemove', mouseMoveHandler);
            ref.current.removeEventListener('mouseup', mouseUpHandler);
            ref.current.removeEventListener('mouseleave', mouseLeaveHandler);
        }
    }, [])
}

export default useSlider;