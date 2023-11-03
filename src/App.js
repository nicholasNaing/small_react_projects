
import React,{useState} from 'react';
import Root from './components/Root';

export const pageContext = React.createContext()
export const styleContext = React.createContext()

function App() {
  const [theme,setTheme] = useState(false)
  const [style,setStyle] = useState({});
  const [page,setPage] = useState("todo")
  return (
    <div className="App" style={{background: `linear-gradient(30deg,${style.linearColor1},${style.linearColor2})`}}>
      <pageContext.Provider value={[page,setPage]}>
          <styleContext.Provider value={[style,setStyle,theme,setTheme]}>
            <Root/>
          </styleContext.Provider>
      </pageContext.Provider>
    </div>
  );
}

export default App;
