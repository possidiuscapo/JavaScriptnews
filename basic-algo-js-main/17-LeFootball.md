Notre équipe de football a terminé le championnat.

Les résultats des matchs de notre équipe sont enregistrés dans une collection de chaînes. Chaque match est représenté par une chaîne au format "x:y", où xest le score de notre équipe et yle score de nos adversaires.
~~~js
function points(games) {
  return 0
}
~~~
Par exemple:
~~~js
["3:1", "2:2", "0:1", ...]
~~~

Les points sont attribués pour chaque match comme suit :
~~~
si x > y : 3 points (victoire)
si x < y : 0 point (perte)
si x = y : 1 point (égalité)
~~~
Nous devons écrire une fonction qui prend cette collection et renvoie le nombre de points que notre équipe ( x) a obtenu dans le championnat selon les règles données ci-dessus.

Remarques:

notre équipe joue toujours 10 matchs dans le championnat
~~~
0 <= x <= 4
0 <= y <= 4
~~~
