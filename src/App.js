import "./App.css";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./Context/authContext";
function App() {

  return (
    <>
      <AuthProvider>
        <Layout/>
      </AuthProvider>
    </>
  )
}

export default App;
