import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "./Components/Dashboard";
import RepoDetail from "./Components/RepoDetail";
import ErrorPage from "./Components/ErrorPage";
function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/repos/:name" element={<RepoDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
