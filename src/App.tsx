import React from 'react';
import './App.css';
import Container from './Components/Container';
import { MyList } from './Components/List';
import { Search } from './Components/Search';

function App() {
  const [value, setValue] = React.useState<string | null>('');
  return (
    <Container>
      <Search 
        value={value}
        setValue={setValue}
      />
      <MyList 
        value={value}
      />
    </Container>
  );
}

export default App;
