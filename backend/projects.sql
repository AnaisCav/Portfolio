DROP TABLE IF EXISTS project;

CREATE TABLE
    project (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(35) NOT NULL,
        image TEXT NOT NULL,
        rapideDescription TEXT NOT NULL,
        longueDescription TEXT NOT NULL,
        langages TEXT NOT NULL,
        lienGithub TEXT,
        video TEXT
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8mb4;


INSERT INTO 
    project (
        name, 
        image, 
        rapideDescription, 
        longueDescription, 
        langages,
        lienGithub, 
        video
        ) 
    VALUES (
        'Wild-Quizz',
        '../src/assets/project1-mockup.png',
        'Wild-Quizz est le premier projet que j''ai réalisé en groupe. C''est un site de quizz avec plusieurs catégories de questions.',
        'Ce projet a été réalisé en deux semaines et a débuté lors de notre deuxième semaine de formation. Nous étions quatre à travailler sur ce projet. Lorsque l''utilisateur est sur la page d''accueil, il a quatre possibilité : démarrer un quiz random, accéder aux catégories de quiz, voir ses précédents résultats ou aller sur la page de contact. Nous avons créer 4 catégories de quizz : Sport, Cinéma, Culture générale et Darwin Awards. Chaque catégorie a 10 questions et l''utilisateur a 30 secondes pour trouver la réponse. L''utilisateur peut refaire autant de fois qu''il le souhaite les quiz, tous ses résultats seront gardés dans le local storage de son navigateur et il pourra les consulter sur la page "Résultats".',
        'HTML, CSS, JavaScript',
        'https://github.com/AnaisCav/anaiscav.github.io',
        ''
    ), (
        'MCU-Timeline',
        '../src/assets/project2-mockup.png',
        'Le site MCU-Timeline est aussi un projet de groupe qui affiche tous les films de l''univers du MCU ainsi que beaucoup de fonctionnalités différentes. Nous avons utilisé deux APIs pour faire fonctionner ce site.',
        'Ce projet a été réalisé en quatre semaines et nous étions trois à travailler dessus. Sur ce site, il est possible à l''utilisateur de créer son profil afin de pouvoir noter les films qu''il a vu, mettre ceux qu''il n''a pas vu dans sa "Watchlist". Lorsque l''utilisateur est sur sa page profil, il peut consulter son Top 5, le nombre de minutes de visionnage et le nombre de films qui lui reste à voir. L''utilisateur a la possibilité de classer les films par ordre chronologique de l''histoire, ou par ordre de sortie des films. Chaque films a sa page contenant les détails le concernant (résumé, bande d''annonce, date de sortie, etc.). Les pages détaillées des films qui ne sont pas encore sorti contiennent un compte à rebours permettant à l''utilisateur de savoir combien de temps il lui reste avant de pouvoir regarder le film. La dernière feature du site MCU-Timeline est la page "Rumble". Cette page permet à l''utilisateur de faire un combat entre deux personnages Marvel et de voir qui remporte ce combat.',  
        'React, Tailwind, Javascript',
        'https://github.com/AnaisCav/MCU-Timeline',
        '../src/assets/videos/MCUTimeline.mp4'
    ), (
        'Tuum Vehiculum',
        '../src/assets/hackathon1-mockup.png',
        'Premier hackathon de notre formation. Nous avions moins de deux jours pour créer un site fullstack',
        'Le thème du hackathon était "Créer un site qui aurait pu être utile jadis". Le site devait être fullstack. Nous avons donc eu l''idée de créer un site de location de véhicule à l''époque du moyen age. Le site permet donc à l''utilisateur de choisi son adresse de départ et d''arrivée. Lorsque ces adresses sont renseignées, l''utilisateur arrive sur la page des véhicules. Il peut filtrer ses véhicules en fonction de son status social, du type de moteur (humain ou animal), etc. Dès que l''utilisateur a fait son choix, il pourra accéder à la page de finalisation de sa commande. Il aura la possibilité de choisir des services de dernières minutes, comme par exemple une cruche de vin ou un cochet, mais évidement cela augmentera le prix de la course. Enfin, dès que l''utilisateur aura terminé ces choix d''options, il n''a plus qu''à cliquer sur le bouton pour finaliser sa commande et un compte à rebours apparaitra pour indiquer à l''utilisateur le temps qu''il lui reste avant que son véhicule arrivera.',
        'React, Tailwind, Javascript',
        'https://github.com/AnaisCav/TuumVehiculum',
        '../src/assets/videos/TuumVehiculum.mp4'
    ), (
        'Eating Nam Nam',
        '../src/assets/project3-mockup.png',
        'Eating Nam Nam est une plateforme culinaire avec la possibilité de créer un compte pour permettre à l''utilisateur de personaliser ses préférences.',
        'Projet actuellement en cours de production',
        'React, Tailwind, Javascript, Express, MySQL',
        '',
        ''
    );