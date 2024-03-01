import { useSearchParams } from 'react-router-dom';

export const useGetPage = (): [number, (page: number) => void] => {
  const [search, setSearch] = useSearchParams();

  return [
    parseInt(search.get('page') || '1'),
    (page: number) => setSearch(`page=${page}`),
  ];
};
