import React from 'react';
import './App.css';
import Container from './Components/UI/Container';
import { MyList } from './Components/Part1/List';
import { Search } from './Components/Part1/Search';
import { Section } from './Components/Part2/Section';
import { MyPagination } from './Components/Part1/MyPagination';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { isLoading, error, data }: any = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://rickandmortyapi.com/api/character').then(
        (res) => res.json(),
      ),
  });

  const [value, setValue] = React.useState<string | null>('');
  const [countPerPage, setCountPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const filteredData = React.useMemo(() => {
    if (data) {
      if (value) {
        return data.results.filter((item: any) => item.name === value);
      } else {
        return data.results;
      }
    }
  }, [data, value]);


  const countOfPages = React.useMemo(() => {
    if (data) {
      return Math.ceil(filteredData.length / countPerPage);
    } else {
      return 0;
    }
  }, [countPerPage, filteredData]);

  const firstElement = page * countPerPage - countPerPage;
  const lastElement = page * countPerPage;

  const displayingData = filteredData.slice(firstElement, lastElement);

  return (
    <Container>
      <Section />
      <Search 
        value={value}
        setValue={setValue}
        data={data}
        error={error}
        isLoading={isLoading}
      />
      <MyList 
        arr={displayingData}
        isLoading={isLoading}
        error={error}
      />
      <MyPagination 
        countOfPages={countOfPages}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}

export default App;
