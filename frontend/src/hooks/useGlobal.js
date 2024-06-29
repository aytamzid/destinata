'use client';
import { GlobalContext } from '@/providers/GlobalProvider';
import { useContext } from 'react';

const useGlobal = () => {
    const globalInfo = useContext(GlobalContext);
    return globalInfo;
};

export default useGlobal;