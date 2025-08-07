// import { Route, Routes } from 'react-router-dom';
// importing the component from the library
import { Hero } from '@acme-react/ui';

export function App() {
  return (
    <>
      <h1>Home</h1>
      <Hero
        title="Welcome to our Demo"
        subtitle="Build something amazing today"
        cta="Get Started"
      />
    </>
  );
}

export default App;