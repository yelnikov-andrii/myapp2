import React from 'react';
import './App.css';
import Container from './Components/UI/Container';
import { MyList } from './Components/Part1/List';
import { Search } from './Components/Part1/Search';
import { Section } from './Components/Part2/Section';

function App() {
  const [value, setValue] = React.useState<string | null>('');
  return (
    <Container>
      <Section />
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
