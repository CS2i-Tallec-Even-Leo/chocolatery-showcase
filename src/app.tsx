import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";

import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import NotFound from "./components/not-found.tsx";
import Home from "./home.tsx";
import Products from "./components/products.tsx";
import Social from "./components/social-network.tsx";
import Evenement from "./components/evenement.tsx";
import MentionsLegales from "./components/mention-legale.tsx";

export function App() {
  return (
    <>
      <LocationProvider>
        <ErrorBoundary>
          <Navbar />
          <Router>
            <Route path="/chocolatery-showcase" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/chocolatery-showcase/products" component={Products} />
            <Route path="/products" component={Products} />
            <Route
              path="/chocolatery-showcase/social-network"
              component={Social}
            />
            <Route
              path="/chocolatery-showcase/evenement"
              component={Evenement}
            />
            <Route
              path="/chocolatery-showcase/mentions-legales"
              component={MentionsLegales}
            />
            <Route path="/social-network" component={Social} />
            <Route component={NotFound} default />
          </Router>
          <Footer />
        </ErrorBoundary>
      </LocationProvider>
    </>
  );
}
