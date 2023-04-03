import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useQuery } from '@tanstack/react-query';

interface Props {
  value: string | null;
}

export const MyList: React.FC <Props> = ({value}) => {
  const { isLoading, error, data }: any = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://rickandmortyapi.com/api/character').then(
        (res) => res.json(),
      ),
  });

  const filteredData = React.useMemo(() => {
    if (data) {
      if (value) {
        return data.results.filter((item: any) => item.name === value);
      } else {
        return data.results;
      }
    }
  }, [data, value]);


  if (isLoading) return (
    <p>
      'Loading...'
    </p>
  );

  if (error) return (
    <p>
      'An error has occurred: ' + error.message;
    </p>
  )

  console.log(data)

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {filteredData.map((item: any) => (
        <ListItem alignItems="flex-start" key={item.id}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={item.status}
        />
      </ListItem>
      ))}
    </List>
  )
}

