import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import AuthContextProvider from "./Contexts/DataContext";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

function App() {
  const engine = new Styletron();

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <AuthContextProvider>
          <Router>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Login />} />
              </Routes>
              <Routes>
                <Route exact path="/home" element={<Homepage />} />
              </Routes>
            </Layout>
          </Router>
        </AuthContextProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
