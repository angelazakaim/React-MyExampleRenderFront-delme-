import { useState, useEffect } from 'react';

// Define the shape of the data coming from your server
interface ServerResponse {
  message: string;
  timestamp: string;
}

const App: React.FC = () => {
  //It tells TypeScript: "Hey, I expect a string called message and a string called timestamp."
  //  Without it, TypeScript doesn't know what is inside data, 
  // we can use useState<any> to tell it "don't worry about the type."
  const [data, setData] = useState<ServerResponse | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Get the base URL from environment variables
        // If VITE_API_URL is not defined, it defaults to an empty string (using local proxy)
        const baseUrl = import.meta.env.VITE_API_URL || "";
        
        // 2. Combine the base URL with your route
        const response = await fetch(`${baseUrl}/`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json: ServerResponse = await response.json();
        setData(json);
      } catch (err) {
        console.error("Connection error:", err);
        setError("Could not connect to the server.");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>React + TypeScript</h1>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', display: 'inline-block' }}>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : data ? (
          <>
            <p><strong>Message:</strong> {data.message}</p>
            <small>Server Time: {new Date(data.timestamp).toLocaleString()}</small>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;