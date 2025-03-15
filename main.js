const rows = 4;
const cols = 4; 
let matrix = loadGame() || createMatrix();

document.addEventListener('keydown',function(event){
    processKey(event); 
})

/**
 * Crée un tableau de nombres aléatoires de 1 à 15 
 * return array numbers
 **/
function randomNumbers() {
    let numbers = []; 

    for (let i = 1; i <= 15; i++) {
        numbers.push(i);
    }

    // Mix the numbers in the array (Fisher-Yates algorithm): don't mix the first element with itself and no duplicate
    for (let i = numbers.length - 1; i > 0; i--) {
        // to have an aleatoire number between 0 and i (0 to 1 -> so if i = 3 -> i+1=4 between 0 to 4)
        const j = Math.floor(Math.random() * (i + 1));
        // Inverse values [numbers[i], numbers[j]]: [numbers[i], numbers[j]] = [numbers[j], numbers[i]];   
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }
   
    return numbers; 
}

/**
 * Crée la matrice (de 0 à 15 soit 16 cases) 
 * return array matrix
 **/
function createMatrix() {
    let matrix = [];
    let randomNums = randomNumbers();
    let k = 0; // Index for randomNums (array)

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            // last case (0)
            if (i === rows - 1 && j === cols - 1) {
                row.push(0); 
            } else {
                row.push(randomNums[k]); 
                k++; 
            }
        }
        matrix.push(row);
    }

    return matrix;
}

/**
 * Affiche la grille en HTML avec les numéros 
 **/
function displayGridHTML(grid) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.getElementById("cellule" + (i*4 +j))
            if (grid[i][j] == 0) {
                cell.innerText = " ";
            } else {
                cell.innerText = grid[i][j];
            }
        }
    }
}

/**
 * Trouve la case vide (index 0 dans la matrice)
 * retourne le numéro de la case (de 0 à 15)
 */
function findSpaceEmpty() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
               
                return (i*4 +j);
            }
        }
    }
}

/**
 * Deplace les numeros avec les fleches 
 */
function processKey(event) {
    spaceEmpty = findSpaceEmpty(); // 15
    let i = Math.trunc(spaceEmpty/4); // 15/4 = 3 (arrondi)
    let j = spaceEmpty % 4; // 15%4 = 3 (3*4=12 reste 3)

    switch (event.key) {
        case 'ArrowUp':
            if (i < 3 ) {
                matrix[i][j] = matrix[i + 1][j];
                matrix[i + 1][j] = 0;
            }
        break;
        case 'ArrowDown':
            if (i > 0) {
                matrix[i][j] = matrix[i - 1][j];
                matrix[i - 1][j] = 0;
            }
        break;
        case 'ArrowLeft':
            if (j < 3) {
                matrix[i][j] = matrix[i][j + 1];
                matrix[i][j + 1] = 0;
            }
        break;
        case 'ArrowRight':
            if (j > 0) {
                matrix[i][j] = matrix[i][j - 1]; // 0 devient la case à gauche
                matrix[i][j - 1] = 0; // case numérotée bouge à droite // fleche
            }
        break;
        default:
            console.log("Aucune flèche")
    }
    saveGame(matrix);
    displayGridHTML(matrix)

    if (checkGrid(matrix)) {
        console.log('gagné'); 
        alert("Gagné ! (-_-) ")
    }
}

/**
 * Vérifie que la dernière case est vide (0)
 * et que les nombres sont bien dans l'ordre (1 2 3 -> 15) 
 **/
function checkGrid(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Check last case
            if (i === 3 && j === 3) {
                if (matrix[i][j] !== 0) {
                
                    return false;
                }
            // Check all the cases except the last one
            } else {
                if (matrix[i][j] !== (j+1 + i*4) ) {
             
                return false;
                } 
            }
        }
    }

    return true;
}

/**
 * Sauvegarde le jeu dans le local storage 
 * même après rafraîchissement de la page 
 **/
function saveGame(matrix) {
    localStorage.setItem('taquinMatrix', JSON.stringify(matrix));
}

 /**
 * Récupère le jeu depuis le local storage 
 * même après rafraîchissment de la page et l'affiche 
 **/
function loadGame() {
    const savedMatrix = localStorage.getItem('taquinMatrix');
    // JSON.parse(savedMatrix)tconvertir cette chaîne JSON en un objet JavaScript (la matrice)
   
    return savedMatrix ? JSON.parse(savedMatrix) : null;
}

/**
 * Réinitialise le jeu :
 * Vide le local storage, cree la matrice et l'affiche 
 **/
function resetGame() {
    localStorage.removeItem('taquinMatrix');
    matrix = createMatrix();
    displayGridHTML(matrix);
}

displayGridHTML(matrix)
