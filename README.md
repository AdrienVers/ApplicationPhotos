##Initulé du projet : Application pour photographe professionnel

###Demande du client : 

Le photographe a exprimé le besoin d'avoir une application qui lui permettra de partager facilement les photos prises lors d'une séance avec ses modèles. L'application devra également permettre aux modèles de sélectionner les photos qu'ils aimeraient faire retoucher et de les renvoyer au photographe via l'application. Une fois que les photos seront retouchées, le photographe pourra les renvoyer aux modèles via l'application.

###Les exigences et contraintes : 

Le nombre de photos prises lors d'un shooting peut atteindre les 200 photos par séance, une telle quantité nécessite une capacité de stockage considérable, surtout compte tenu de la taille importante des fichiers (pouvant peser jusqu'à 5 Go pour l'ensemble des photos). Il est donc essentiel de prévoir un espace de stockage adéquat pour le projet. Cependant, le client ne souhaite pas payer pour un service de stockage externe, ce qui est une autre contrainte à prendre en compte.

###Solution proposée par le développeur : 

En tenant compte des exigences et des contraintes énoncées, la solution la plus appropriée serait d'utiliser Google Drive pour le stockage des photos. En effet, contrairement aux solutions d'hébergement de fichiers classiques telles que Firebase, Cloudinary et Filestack qui ont une limite de stockage de 1 Go, Google Drive offre une capacité totale de 15 Go. Pour communiquer entre l'application et Google Drive, il faudra utiliser l'API de Google Drive.

![Application](https://user-images.githubusercontent.com/59047879/219948911-4a981323-6516-47c5-92d9-eac11af7c032.png)
