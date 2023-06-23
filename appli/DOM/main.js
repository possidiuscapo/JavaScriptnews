/**
 * Découvrons sans plus tarder comment coder un compte à rebours en JavaScript et HTML en 11 étapes simples.

Étape 1 : Créer un boilerplate HTML
Pour commencer, on va créer un fichier html appelé index.html. Dedans, on va ajouter la base de ce qu’un fichier html doit contenir, ce qu’on appelle un “boilerplate”.

Un boilerplate HTML est un morceau de code HTML de base commun à tous les fichiers HTML. Ce template standard permet de commencer un fichier HTML avec les bonnes pratiques et sans devoir réécrire les mêmes lignes obligatoires à chaque nouveau fichier.

Notre boilerplate HTML sera donc :

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Le titre de votre page</title>
  </head>

  <body></body>
</html>
Étape 2 : Ajouter un élement HTML
Ajoutons maintenant un élement pour notre timer dans le body :

<div id="timer">10:00</div>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon premier timer JavaScript</title>
  </head>

  <body>
    <div id="timer">100</div>
  </body>
</html>
Étape 3 : Introduire du JavaScript dans une page HTML
La prochaine étape est d’ajouter du JavaScript pour modifier le timer. Pour ça, on va ajouter une balise script dans laquelle on va écrire notre code js.

<script>
  // Votre code JavaScript
</script>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon premier timer JavaScript</title>
  </head>

  <body>
    <div id="timer">100</div>
    <script>
      // Votre code JavaScript
    </script>
  </body>
</html>
Étape 4 : Utiliser JavaScript avec HTML
Utiliser JavaScript permet de créer, modifier, supprimer et animer des élements HTML. En plus, JavaScript est un langage de programmation complet qui vous permettra d’ajouter de l’intelligence à vos pages à l’aide de variables, structures de contrôles et de bibliothèques externes.

Pour contrôler notre élément html timer avec du JavaScript, on doit le sélectionner. En JavaScript vanilla on peut utiliser la méthode getElementById pour interagir avec notre élément qui a l’id timer :

const timerElement = document.getElementById("timer")
Mettons maintenant à jour le texte à l’intérieur de la div #timer avec :

timerElement.innerText = "99"
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon premier timer JavaScript</title>
  </head>

  <body>
    <div id="timer">100</div>
    <script>
      const timerElement = document.getElementById("timer")
      timerElement.innerText = "99"
    </script>
  </body>
</html>
Si tout s’est bien passé, vous devriez voir 100 passer à 99 instantanément au chargement de la page.

Étape 5 : Afficher la valeur d’une variable javascript
Pour rendre notre code un peu plus intelligent, utilisons une variable temps qui représentera le temps restant dans notre timer.

const temps = 100
<div id="timer"></div>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon premier timer JavaScript</title>
  </head>

  <body>
    <div id="timer"></div>
    <script>
      let temps = 100
      const timerElement = document.getElementById("timer")
      timerElement.innerText = temps
    </script>
  </body>
</html>
Étape 6 : Exécuter du JavaScript toutes les x secondes
On doit maintenant faire en sorte que notre timer se mette à jour toutes les secondes. Pour ça, on va utiliser la méthode JavaScript setInterval.

Pour executer du code en JavaScript à fréquence régulière, on utilise la méthode setInterval. La méthode setInterval est fournie par les interfaces Window ou Worker et répète une fonction donnée dans un délai donné.

Par exemple, pour executer la fonction console.log toutes les secondes, on va écrire :

setInterval(console.log, 1000)
Dans notre cas, on veut décrémenter notre variable temps d’une seconde à chaque seconde.

on va donc avoir :

function diminuerTemps() {
  timerElement.innerText = temps
  temps--
}

setInterval(diminuerTemps, 1000)
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Mon premier timer JavaScript</title>
  </head>

  <body>
    <div id="timer"></div>
    <script>
      let temps = 100
      const timerElement = document.getElementById("timer")

      function diminuerTemps() {
        timerElement.innerText = temps
        temps--
      }

      setInterval(diminuerTemps, 1000)
    </script>
  </body>
</html>
Étape 7 : Afficher les minutes et secondes en JavaScript
Pour afficher les minutes et secondes restantes, on va ajouter dans notre fonction diminuerTemps plusieurs lignes :

let minutes = parseInt(temps / 60, 10)
let secondes = parseInt(temps % 60, 10)
Et on remplace la ligne qui ajoute le temps dans notre balise div :

function diminuerTemps() {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  timerElement.innerText = minutes + ":" + secondes
  temps--
}
Étape 8 : Afficher 2 chiffres en JavaScript
Quand la valeur des secondes est inférieur à 10, notre timer n’affiche qu’un seul chiffre (exemple 9:9). On voudrait qu’il en affiche toujours 2 (09:09) donc ajoutons ça pour les secondes et les minutes

minutes = minutes < 10 ? "0" + minutes : minutes
secondes = secondes < 10 ? "0" + secondes : secondes
function diminuerTemps() {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = minutes + ":" + secondes
  temps--
}
Étape 9 : Arrêter un compteur JavaScript à 0
Pour le moment, notre compteur passe en négatif après 0. Ça serait plus normal qu’il s’arrête, on peut donc ajouter une condition pour que la variable temps ne passe jamais en dessous de 0, en utilisant, par exemple :

temps = temps <= 0 ? 0 : temps - 1
Ajoutons cette condition ternaire à notre code :

function diminuerTemps() {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = minutes + ":" + secondes
  temps = temps <= 0 ? 0 : temps - 1
}
Étape 10 : Refactoring - écrire du code JavaScript plus moderne
Notre code est fonctionnel mais on peut l’améliorer en le rendant plus moderne.

Pour commencer, transformons notre function en arrow function avec :

const maFonction = () => {
  // ma fonction
}
Ensuite, utilisons les Template literals pour notre chaîne de caractères.

timerElement.innerText = `${minutes}:${secondes}`
Passons également la fonction en paramètre de setInterval directement et tout ça mis ensemble devient :

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
Étape 11 : Améliorez votre compte à rebours JavaScript
Le code en complet de notre compteur javascript, en 3 fichiers :

Fichier index.html :

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Compte à rebours</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="timer"></div>
    <script src="timer.js"></script>
  </body>
</html>
Fichier styles.css :

#timer {
  font-weight: bold;
}
Fichier timer.js :

const departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
 */


/**
 * let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let p1 = document.getElementById('p1');
let timeoutId;
let intervalId;

let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;
p1.textContent = heu + ' : ' + min + ' :' + sec + ' . ' + dec;

b1.addEventListener('click', message);
b2.addEventListener('click', stopDelai);
b3.addEventListener('click', timer);
b4.addEventListener('click', stopTimer);

function message(){
    timeoutId = setTimeout(alert, 2000, 'Message d\'alerte après 2 secondes'); 
}
function stopDelai(){
    clearTimeout(timeoutId);
}

function timer(){
    intervalId = setInterval(function(){
        p1.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;
        dec += 1;
        if(dec >= 10){dec = 0; sec += 1;}
        if(sec >= 60){sec = 0; min += 1;}
        if(min >= 60){min = 0; heu += 1;}
    }, 100)
}
function stopTimer(){
    clearInterval(intervalId);
}
 */