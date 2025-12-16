import { useLocation } from "preact-iso";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.path === path;

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="logo-charlotte.jpg"
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
                class={`nav-link${isActive("/") ? " text-danger" : ""}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link${isActive("/products") ? " text-danger" : ""}`}
                href="/products"
              >
                Produits
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link${
                  isActive("/social_network") ? " text-danger" : ""
                }`}
                href="/social_network"
              >
                Réseaux Sociaux
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
