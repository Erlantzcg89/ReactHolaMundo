import { useState, useEffect} from 'react';
import * as API from './services/launches';

export function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>SpaceX Launches</h1>
        <ul>
          {launches.map(launch => (
            <li key={launch.flight_number}>
              <strong>{launch.mission_name}</strong> ({launch.launch_year}) - {launch.launch_success ? 'Success' : 'Failure'}
            </li>
          ))}
        </ul>
    </>
  );
}

export default App
