# Vérification de la première version

Exécutée le 3 octobre 2026. Source testée : `fc0b1f0a3fa8ee6ecbafe3d8b3c5c10ecb2378eb`.

[Exécution GitHub Actions](https://github.com/sebb81/Finalcial_game/actions/runs/37138280279)

## Résultats

- Installation reproductible `npm ci` depuis le lockfile : succès.
- 15 tests du moteur financier : succès. Ils vérifient salaire, exactitude au centime du journal, absence de doubles prélèvements, transferts entre compte/réserve/projet, coûts totaux et dettes futures, fraude, régularisation d’eau, conséquences des courses, plusieurs stratégies, limites des pauses, finançabilité des choix et sauvegardes corrompues.
- 500 parcours variés déterministes : tous terminés au jour 30 avec un choix disponible à chaque étape et un solde égal au journal.
- `tsc --noEmit` et `vite build` : succès.
- Chromium, écran tactile émulé 390 × 844 : mois complet, déplacement au joystick, trajets dans la ville, entrée dans l’appartement, gestes des trois mini-jeux, rechargement en cours de partie et bilan final : succès (44,1 s pour le test automatisé, sans lecture ni exploration).
- Petit écran 360 × 640, passage en paysage et retour à l’accueil avec sauvegarde : succès.
- Service worker de production, rechargement puis reprise avec le réseau coupé : succès.
- 3 tests du navigateur réussis en 47,8 s au total. Aucune erreur JavaScript durant le parcours complet.
- Captures de la ville, du financement et du bilan inspectées.

Le parcours conservateur du moteur termine avec 105 € disponibles, 250 € de réserve et 300 € de cagnotte. Le parcours tactile modifie la répartition et termine avec 155 € disponibles, 200 € de réserve et 300 € de cagnotte. Dans les deux cas, les avoirs totaux sont de 655 €, sans engagement futur pour ces choix.

## Édition HTML autonome

[Exécution des tests du fichier HTML](https://github.com/sebb81/Finalcial_game/actions/runs/37138280206) : 3 tests réussis en 46,9 s. Le fichier local est ouvert avec une URL `file://` dans Chromium, et le mois entier avec les trois gestes des mini-jeux est joué en 43,5 s. Export et import d’une sauvegarde JSON sont vérifiés, ainsi que la reprise avec le réseau coupé. Aucune requête HTTP n’est émise par l’édition locale. Le fichier comprend environ 1,55 Mo et intègre Phaser, le code, le style et l’icône.

## Publication

**Publication GitHub Pages confirmée le 3 octobre 2026, à 16:51 UTC.** Le job `deploy` rapporte `success` et confirme l’adresse `https://sebb81.github.io/Finalcial_game/`. Le dépôt est public et n’exige pas d’abonnement pour GitHub Pages.

- [Jouer dans Chrome](https://sebb81.github.io/Finalcial_game/)
- [Édition HTML autonome](https://sebb81.github.io/Finalcial_game/JUSQU-AU-30.html)
- [Fichier conservé dans le dépôt](standalone/JUSQU-AU-30.html)

Le lien de téléchargement de l’accueil permet d’enregistrer le fichier HTML. Sur Android, son ouverture dépend des applications de fichiers et des navigateurs installés. Le lien web permet de jouer directement sans cette manipulation.

## Limites

- Aucun appareil Android physique n’était attaché. Chromium émule l’écran et les entrées mobiles ; une session sur téléphone réel reste nécessaire pour évaluer le confort.
- Durée de 10–15 minutes visée avec lecture et exploration, sans validation auprès de joueurs.
- Un seul mois, aucun intérêt de réserve ni frais de découvert simulé ; revenus et prix fictifs.
- Sauvegarde limitée au navigateur et à l’appareil ; pas de synchronisation.
- Les transferts de réserve sont possibles ; la cagnotte de projet reste disponible au bilan, mais sa reprise en cours de mois n’est pas encore proposée.
