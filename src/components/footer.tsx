export default function Footer() {
  return (
    <footer class="bg-dark text-light mt-5">
      <div class="container py-5">
        <div class="row text-center text-md-start align-items-center">
          <div class="col-md-4 mb-3 mb-md-0">
            <h5 class="mb-2">Fun'ky Choc</h5>
            <small>
              © 2026 Fun'ky Choc
              <br />
              Tous droits réservés
            </small>
          </div>

          <div class="col-md-4 mb-3 mb-md-0 text-center">
            <a
              href="/chocolatery-showcase/mentions-legales"
              class="text-light text-decoration-none d-block mb-1"
            >
              Mentions légales
            </a>
            <a
              href="/chocolatery-showcase/confidentialite"
              class="text-light text-decoration-none d-block"
            >
              Confidentialité
            </a>
          </div>

          <div class="col-md-4 text-center text-md-end">
            <a
              href="https://www.instagram.com/fun.ky.choc/"
              class="text-light fs-5 me-3"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/p/Funky-Choc-100090860298379/"
              class="text-light fs-5"
            >
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
