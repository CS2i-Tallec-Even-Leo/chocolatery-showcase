export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Éditeur du site</h2>
        <p>
          Le présent site internet <strong>[Nom du site]</strong> est édité par
          :
        </p>
        <p className="mt-2">
          <strong>FUN'KY CHOC</strong>
          <br />
          Forme juridique : SARL
          <br />
          Capital social : 1000 €
          <br />
          Siège social : 57 RUE JULES GUESDE 56600 LANESTER
          <br />
          Email :
          <br />
          SIRET : 949 543 854
          <br />
          RCS : [Ville + numéro]
          <br />
          TVA intracommunautaire : FR79 949 543 854
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Hébergement</h2>
        <p>
          Le site est hébergé par :
          <br />
          <strong>[Nom de l’hébergeur]</strong>
          <br />
          Adresse : [adresse complète]
          <br />
          Téléphone : [numéro]
          <br />
          Site web : [URL]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. Propriété intellectuelle
        </h2>
        <p>
          L’ensemble du contenu du site (textes, images, photographies,
          graphismes, logo, vidéos, etc.) est protégé par le droit d’auteur et
          le droit de la propriété intellectuelle.
        </p>
        <p className="mt-2">
          Toute reproduction, représentation, modification, publication ou
          adaptation, totale ou partielle, est interdite sans l’autorisation
          écrite préalable de l’éditeur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Responsabilité</h2>
        <p>
          L’éditeur du site s’efforce d’assurer l’exactitude des informations
          diffusées. Toutefois, il ne saurait être tenu responsable des
          omissions, inexactitudes ou carences dans la mise à jour.
        </p>
        <p className="mt-2">
          L’utilisation des informations présentes sur le site se fait sous la
          seule responsabilité de l’utilisateur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">5. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>
    </main>
  );
}
