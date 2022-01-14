import { useRouter } from 'next/router';

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === 'en' ? 'en' : 'fr';

  return trans;
}

export default useTrans;