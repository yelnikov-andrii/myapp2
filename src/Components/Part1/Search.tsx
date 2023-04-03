import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  data: any;
  isLoading: boolean;
  error: string;
}

export const Search: React.FC <Props> = ({ value, setValue, data, isLoading, error }) => {
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (data) {
      const normalizedData = data.results.map((item: any) => item.name);
      setOptions(normalizedData);
    }
  }, [data]);

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
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      sx={{ 
        width: '100%', 
        marginBottom: '50px',
        border: '1px solid white',
        background: 'white',
       }}
      renderInput={(params) => <TextField { ...params } label="Characters" />}
    />
  );
};

