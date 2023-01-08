import { forwardRef, useEffect, useRef } from 'react';

export const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <>
            <input type="text" ref={resolvedRef} {...rest} />
        </>
    );
});
