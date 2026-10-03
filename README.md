# Jusqu’au 30

**Ta vie. Tes choix. Ton argent.** Un jeu mobile d’éducation financière, conçu pour Chrome Android, en TypeScript, Phaser 3 et Vite.

## Jouer

Touchez le sol ou utilisez le joystick pour marcher. Approchez-vous d’un lieu et touchez le bouton d’interaction. Le rendez-vous en haut de l’écran peut guider votre personnage à pied. Chez vous, entrez puis interagissez pour découvrir le message du jour.

Un mois compte 16 étapes réparties sur 30 jours : salaire, budget, loyer, courses, sortie, téléphone, comparaison de financements, achat impulsif, SMS frauduleux, courses ajustées, facture d’eau, réserve, projet, revenu complémentaire, ajustement et bilan. La partie vise environ 10–15 minutes, selon le temps d’exploration et de lecture.

Les trois mini-jeux utilisent des gestes : curseurs d’enveloppes, sélection de passages suspects et glissement du SMS, classement de contrats puis exploration des échéances. Les mini-jeux peuvent être fermés et repris avant validation.

Trois projets, trois tenues et trois teintes de personnage. Appartement, épicerie, café, atelier, maison des projets et parc. Tous les graphismes sont des créations vectorielles locales ; aucune image externe ni publicité.

Le compte, l’équilibre et le projet sont visibles en permanence. Le budget affiche les charges restantes, la réserve, la cagnotte, les mensualités futures et l’historique exact. Une pause gratuite est disponible à chaque étape. La réserve peut être reprise depuis le budget.

## Comptabilité

Tous les montants sont des entiers en centimes. Le solde initial de 125 € reçoit un salaire net de 1 650 €. Les charges fixes totalisent 800 € : loyer 620 €, énergie et internet 85 €, transports 45 €, téléphone et assurance 50 €. Elles sont automatiquement prélevées lorsque le calendrier franchit leur date, une seule fois.

Après charges fixes, 975 € sont à répartir. Courses et loisirs sont des enveloppes prévisionnelles. Réserve et projet sont des transferts, pas des dépenses : `avoirs = compte + réserve + cagnotte`. Le bilan distingue les engagements futurs. Les contrats fictifs du téléphone coûtent 240 €, 3 × 84 € = 252 €, ou 6 × 45 € = 270 €, tous frais inclus. L’échéancier d’eau est sans frais : 3 × 25 €.

Les imprévus ne sont pas présentés comme des fautes. Plusieurs stratégies sont possibles. Le compte peut devenir négatif lors de dépenses nécessaires ; aucun frais de découvert n’est simulé. Pas de simulation des intérêts de l’épargne, des impôts ou des droits sociaux. L’équilibre est un indicateur de jeu, pas une mesure médicale.

## Sauvegarde et installation

Sauvegarde automatique `localStorage`, sur l’appareil et le navigateur utilisés. Effacer les données du site supprime la partie. La version ne demande ni compte utilisateur ni données bancaires. Une PWA et un service worker permettent de reprendre hors connexion après un premier chargement complet. L’installation dépend des fonctions proposées par Chrome ; le jeu reste utilisable dans le navigateur.

## Tests et publication

GitHub Actions installe les versions directes fixées, exécute les tests comptables, vérifie TypeScript, compile la production puis joue un mois dans Chromium avec un écran mobile 390 × 844. Des vérifications couvrent aussi un écran 360 × 640, le paysage, la reprise et le hors connexion. Captures et rapports sont conservés dans l’artefact `mobile-qa`, y compris le lockfile produit pendant la première installation.

Validation exécutée le 3 octobre 2026 : 15 tests comptables (dont 500 parcours variés), compilation TypeScript/Vite et 3 tests Chromium mobile réussis. Rapport : [QA.md](QA.md).

Le workflow `.github/workflows/pages.yml` publie `dist/` après succès des contrôles. L’activation initiale automatique a été refusée par GitHub au jeton du workflow (`Resource not accessible by integration`). Dans GitHub, **Settings → Pages → Build and deployment → Source → GitHub Actions** doit être activé. Le lien public n’est confirmé qu’après succès du job `deploy`.

Commandes (exécutées par l’environnement de développement ou GitHub Actions ; aucun terminal requis pour le joueur) :

```sh
npm install
npm test
npm run build
npx playwright install --with-deps chromium
npm run test:e2e
```

La durée visée et le ressenti des commandes doivent encore être évalués avec des joueurs réels sur téléphone. Les tests automatisés ne remplacent pas une session sur un appareil Android physique.

## Édition HTML autonome, sans abonnement

Le workflow `html.yml` construit **un seul fichier**, `standalone/JUSQU-AU-30.html`, avec le moteur Phaser, le code, le style et l’icône intégrés. Il ne demande aucun serveur, aucune dépendance externe ni service worker. Les tests ouvrent ce fichier avec une URL `file://`, jouent un mois complet et vérifient la reprise hors connexion sans requête HTTP.

Sur Android : téléchargez le fichier HTML, puis ouvrez-le avec Chrome depuis Téléchargements. Selon l’application de fichiers et la version d’Android, « Ouvrir avec Chrome » peut ne pas être proposé ; un navigateur ou une visionneuse HTML acceptant JavaScript sera alors nécessaire. La version web reste la plus simple à ouvrir.

Le journal propose l’export et l’import de la partie au format JSON. Utilisez-les si le navigateur ne conserve pas la sauvegarde locale du fichier.

GitHub Pages est gratuit pour un dépôt public, et ce dépôt est public. Un abonnement est nécessaire pour certaines fonctionnalités privées, pas pour publier ici un jeu public.
