import React, { Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
  countOfPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const MyPagination: React.FC <Props> = ({ countOfPages, page, setPage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} style={{
      background: '#fff',
      borderRadius: '8px',
      padding: '10px'
    }}>
      <Typography>Page: {page}</Typography>
      <Pagination 
        count={countOfPages} 
        page={page} 
        onChange={handleChange} 
      />
    </Stack>
  );
}