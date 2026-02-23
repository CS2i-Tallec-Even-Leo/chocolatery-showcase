import { useLocation } from "preact-iso";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.path === path;

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="./">
          <img
            src="/images/logo-charlotte.jpg"
            alt="Fun'ky Choc logo"
            width="75"
            height="75"
            class="d-inline-block align-text-middle"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class={`nav-link${
                  isActive("/chocolatery-showcase") ? " text-danger" : ""
                }`}
                href="/chocolatery-showcase"
              >
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link${
                  isActive("/chocolatery-showcase/products")
                    ? " text-danger"
                    : ""
                }`}
                href="/chocolatery-showcase/products"
              >
                Produits
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link${
                  isActive("/chocolatery-showcase/social-network")
                    ? " text-danger"
                    : ""
                }`}
                href="/chocolatery-showcase/social-network"
              >
                Réseaux Sociaux
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link${
                  isActive("/chocolatery-showcase/evenement")
                    ? " text-danger"
                    : ""
                }`}
                href="/chocolatery-showcase/evenement"
              >
                Evenement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
