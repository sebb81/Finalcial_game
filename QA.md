# Vérification de la première version

Exécutée le 3 octobre 2026. Source testée : `c6538e7b818b02d85d07c7bb42c3f5cfcb3d7d24`.

[Exécution GitHub Actions](https://github.com/sebb81/Finalcial_game/actions/runs/37136509729)

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

## Publication

Les tests et la compilation sont validés. Le job global de publication reste en échec parce que l’intégration GitHub n’a pas le droit de **créer initialement** le site Pages. Erreur constatée à l’étape `actions/configure-pages@v5` : `Resource not accessible by integration`.

Action unique dans le navigateur mobile : ouvrir [les paramètres Pages](https://github.com/sebb81/Finalcial_game/settings/pages), puis choisir **Build and deployment → Source → GitHub Actions**. Une fois activé, relancer les jobs échoués du workflow ; l’assistant peut le faire via la connexion GitHub.

L’adresse attendue est `https://sebb81.github.io/Finalcial_game/`, mais elle n’est pas annoncée comme publiée avant confirmation du déploiement.

## Limites

- Aucun appareil Android physique n’était attaché. Chromium émule l’écran et les entrées mobiles ; une session sur téléphone réel reste nécessaire pour évaluer le confort.
- Durée de 10–15 minutes visée avec lecture et exploration, sans validation auprès de joueurs.
- Un seul mois, aucun intérêt de réserve ni frais de découvert simulé ; revenus et prix fictifs.
- Sauvegarde limitée au navigateur et à l’appareil ; pas de synchronisation.
- Les transferts de réserve sont possibles ; la cagnotte de projet reste disponible au bilan, mais sa reprise en cours de mois n’est pas encore proposée.
