import { useState } from 'react'

export function useField(type, initial, placeholder) {
    const [value, setFieldVal] = useState(initial)
    return [
        {
            type,
            value,
            onChange: e => setFieldVal(e.target.value),
            placeholder,
        },
        () => setFieldVal(initial),
    ]
}
