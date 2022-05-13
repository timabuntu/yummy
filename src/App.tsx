import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from './services/api';

interface Week {
  id: number;
  day: string;
  open: boolean;
}

export function App() {
  const [week, setWeek] = useState<Week[]>([]);

  useEffect(() => {
    async function loadWeek() {
      const response = await api.get<Week[]>('week');
      const data = response.data;
      setWeek(data);
    }
    loadWeek();
  }, []);
  return (
    <div className='App'>
      <h1>yummy</h1>
    </div>
  );
}

export default App;
