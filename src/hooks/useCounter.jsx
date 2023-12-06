import { useState } from 'react';

const useCounter = (number) => {]
    const [state, setState] = useState(number);

    return { number }
}

export default useCounter;