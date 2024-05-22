# Jeu du Taquin

Le jeu du taquin, également appelé puzzle de 15 ou jeu de glissière, est un jeu de plateau où le joueur doit réorganiser les pièces numérotées dans l'ordre chronologique en les faisant glisser sur une grille. 

Ce jeu est codé en JavaScript. 



## 1. Créer la function randomNumbers() 

- Pour avoir les chiffres de 1 à 15 aléatoirement sans doublon dans un tableau numbers[]



## 2. Créer la matrice de jeu avec la fonction createMatrix()

- tableau à 2 dimensions (données organisées en lignes et colonnes)

`tab = [
    [1, 2, 3],
    [4, 5, 6]
]`

- elle doit contenir 4 lignes et 4 colonnes (variables globales rows & cols)
- à la dernière ligne, dernière colonne mettre 0 
- sinon remplir la matrice des nombres aléatoires 



## 3. Créer la fonction displayGridHTML() qui affiche la grille de jeu avec les numéros 

- Affiche la grille de jeu dans la table HTML 
- Parcours la matrice 
- Récupère chaque cellule/case du jeu et y met le numéro de la matrice 



## 4. Créer la function findSpaceEmpty() pour troouver l'espace vide 

- Parcours la grille de jeu
- Si la case a la valeur 0 de la matrice 
- Retourne le numéro de la case (ex: 15) i=3 et j=3



## 5. Créer un évènement JS sur les flèches du clavier 'keydown' 

```
document.addEventListener('keydown', function(event){
    processKey(event); 
})
```



## 6. Créer la function processKey() pour déplacer les fleches 

- Trouve la case vide 
- Affecte les valeurs de i et j à la matrice 
- Switch sur les fleches 
- Déplace la case dans la direction de fleche et déplace la case 0 en sens inverse 