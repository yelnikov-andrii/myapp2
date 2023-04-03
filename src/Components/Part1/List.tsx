import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

interface Props {
  arr: any;
  isLoading: boolean;
  error: string;
}

export const MyList: React.FC <Props> = ({arr, isLoading, error}) => {

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

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', margin: '0 0 20px 0' }}>
      {arr.map((item: any) => (
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

