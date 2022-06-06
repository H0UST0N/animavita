import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const AnimaVita: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home')
  }, [])

  return <></>
};

export default AnimaVita;
