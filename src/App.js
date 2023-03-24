import React from 'react';
import { Button } from '@mui/material';
import { RemoteStructServiceProvider } from 'ketcher-core'

function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
}


const structServiceProvider = new RemoteStructServiceProvider(
  process.env.REACT_APP_API_PATH,
  {
    'custom header': 'value' // optionally you can add custom headers object 
  }
)

const MyComponent = () => {
  return (
    /*<Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={structServiceProvider}
    />*/
    <div className="App">
      <h1>New Test</h1>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  )
}

export default MyComponent;