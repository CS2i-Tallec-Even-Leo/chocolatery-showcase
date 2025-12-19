import Navbar from "./components/navbar.tsx";

import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import NotFound from "./components/not-found.tsx";
import Home from "./home.tsx";
import Products from "./components/products.tsx";
import Social from "./components/social-network.tsx";

export function App() {
  return (
    <>
      <LocationProvider>
        <ErrorBoundary>
          <Navbar />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/social-network" component={Social} />
            <Route component={NotFound} default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </>
  );
}
