### Ndeye khady seck , Master 2 systemes et reseau telecoms
> > >   > ![image](/images/fin.PNG)
# ionic-CodeQr-strapi 
 Bonjour,


# A. Introduction
     Dans le cadre de ce projet, nous allons créer un lecteur de QR Code. Il s’agira de réaliser une application mobile avec IONIC communiquant avec un fournisseur de service
    REST (backend) réalisé avec Strapi.
    L’application à réaliser devra permettre à n’importe quel utilisateur disposant d’un compte (identifiant et mot de passe) créé depuis Strapi de :
    1. Se connecter au lecteur de QR code avec son compte : Une fois connecté, l’utilisateur est redirigé vers la page d’accueil de l’application.
    2. Cliquer sur le menu (avec un icone QR code) pour ouvrir le lecteur de QR code. Le lecteur s’ouvre en lançant l’appareil photo. Une fois le code scanné, l’utilisateur      devra être redirigé vers une page affichant les informations lues par le lecteur.
    3. Se déconnecter de l’application 

# B. Prerequis
    
    1. telecharger le dossiers en zip
    2. extraire le fichiers 
            1. codeQr :        dossiers ionic
            2. codeQr_strapi : dossiers strapi

    3. Pour commencer avec Ionic Framework, la seule exigence est un environnement Node & npm
   > [node.exe](https://nodejs.org/en/).
        
        Pour vérifier l'installation, ouvrez une nouvelle fenêtre de terminal et exécutez:
        * node --version
        * npm --version

    4. Installez l'Ionic CLI avec npm:
        se placer dans le dossiers resto puis tapez les 2 commandes:
        * npm uninstall -g ionic
        * npm install -g @ionic/cli
  
    5. installer yarn pour le lancement de strapi;
  > [yarn.exe](https://classic.yarnpkg.com/latest.msi)
  
    6. Se placer dans le dossiers resto  puis tapez la commande et laisser telecharger:
        * npm install  **peut prendre plusieurs minutes**
        * ionic serve ou 
        * ionic serve --lab
        
    7. Se placer dans le dossiers resto_strapi puis tapez la commande et laisser telecharger:
        * npm install  **peut prendre plusieurs minutes**
        * yarn develop
        
        vous serez directement rediriger vers http://localhost:1337/admin/auth/register et creer 
        un adminstrateur pour les taches suivantes.

        Apres le lancemet du frontend ionic et la creation d'un administrateur pour la gesion de strapi
        nous passons dans la 2im partie qui est l'utilisation.
        
# C. Utilisation 
    
     nous allons creer un role administrateur et un utilisateur avec les privileges d'un admins
      
> **aller dans utilisateurs et creer un user et ajouter lui le role administrateur pour tester
     toute les fonctionnalité .**
      
  ## b. Utiliser un navigateur web
     Dans cette partie on a juste nous allons utiliser un navigateur pour lancer l'application
     aller dans le dossiers resto -> src -> environement -> environement.ts
     changer 192.168.1.108 par votre adresse ip sur le quel tourne votre serveur api(strapi) et sauvegarder
> ![image](/images/fin.PNG ) 

     1. lancer ionic serve dans le dossiers resto
     2. lancer yarn develop dans le dossiers resto_strapi

 
 # D. Déploiement
     1.prerequis : android studio 
  > [android_studio.exe](https://redirector.gvt1.com/edgedl/android/studio/install/3.6.2.0/android-studio-ide-192.6308749-windows.exe)
     
     2. se rendre dans le dossiers resto et tapez les commandes (s'assurer d'avoir une version suoerieur a 10.11)
     * ionic integrations enable capacitor
     * ionic build
     * ionic capacitor add android
     * npx cap copy
     
     dans le cas au il y'a des packages manquants installer les avec : npm install @nom_package
     
     apres une MAJ de notre code on a juste a retaper
     *ionic build
     *npc cap copy
     
     3. ouvrir android studio et importer le dossiers resto 
        faites une snchronisation avec gradles
        Run l'appli si vous avez un AVD
        sinon Build l'appli 
        

      
