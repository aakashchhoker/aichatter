import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import { Toaster } from "./components/ui/toaster";
import { ShowAllComponents } from "./components/ShowAllComponents";
import allRoutes from "../routes";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ShowAllComponents />} />
            {allRoutes.map(({ path, element, ...rest }) => (
              <Route key={path} path={path} element={element} {...rest} />
            ))}
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
