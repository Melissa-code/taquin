# Taquin game

Le jeu du taquin, également appelé puzzle de 15 ou jeu de glissière, est un jeu de plateau où le joueur doit réorganiser les pièces numérotées dans l'ordre chronologique en les faisant glisser sur une grille. 

Ce jeu est codé en JavaScript. 



## 1. Créer la randomNumbers() 

- Pour avoir les chiffres de 1 à 15 aléatoirement sans doublon dans un tableau numbers[]



## 2. Créer la matrice de jeu 

- tableau à 2 dimensions (données organisées en lignes et colonnes)

`tab = [
    [1, 2, 3],
    [4, 5, 6]
]`

- elle doit contenir 4 lignes et 4 colonnes (variables golbales rows & cols)
- à la dernière ligne, dernière colonne mettre 0 
- sinon remplir la matrice des nombres aléatoires 



## 3. Créer la fonction displayGridHTML() 

- Afficher la grille de jeu dans la div HTML (id="grid-container")
- Parcourir la matrice et pour chaque ligne créer une div 
- Pour chaque colonne (cellule) créer une div 
- afficher les numéros dans les cellules 
