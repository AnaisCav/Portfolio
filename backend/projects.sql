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
        video TEXT,
        lienSite TEXT
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8mb4;

INSERT INTO 
    project (
        name, 
        image, 
        rapideDescription, 
        longueDescription, 
        langages,
        lienGithub, 
        video,
        lienSite
    ) 
    VALUES (
        'Wild-Quizz',
        '/assets/project1-mockup.png',
        'Wild-Quizz est le premier projet que j''ai réalisé en groupe. C''est un site de quizz avec plusieurs catégories de questions.',
        'Ce projet a été réalisé en deux semaines et a débuté lors de notre deuxième semaine de formation. Nous étions quatre à travailler sur ce projet. Lorsque l''utilisateur est sur la page d''accueil, il a quatre possibilités : démarrer un quiz random, accéder aux catégories de quiz, voir ses précédents résultats ou aller sur la page de contact. Nous avons créé 4 catégories de quizz : Sport, Cinéma, Culture générale et Darwin Awards. Chaque catégorie a 10 questions et l''utilisateur a 30 secondes pour trouver la réponse. L''utilisateur peut refaire autant de fois qu''il le souhaite les quiz, tous ses résultats seront gardés dans le local storage de son navigateur et il pourra les consulter sur la page "Résultats".',
        'HTML, CSS, JavaScript',
        'https://github.com/AnaisCav/anaiscav.github.io',
        '',
        'https://anaiscav.github.io/'
    ), (
        'MCU-Timeline',
        '/assets/project2-mockup.png',
        'Le site MCU-Timeline est aussi un projet de groupe qui affiche tous les films de l''univers du MCU ainsi que beaucoup de fonctionnalités différentes. Nous avons utilisé deux APIs pour faire fonctionner ce site.',
        'Ce projet a été réalisé en quatre semaines et nous étions trois à travailler dessus. Sur ce site, il est possible à l''utilisateur de créer son profil afin de pouvoir noter les films qu''il a vus, mettre ceux qu''il n''a pas vus dans sa "Watchlist". Lorsque l''utilisateur est sur sa page profil, il peut consulter son Top 5, le nombre de minutes de visionnage et le nombre de films qui lui reste à voir. L''utilisateur a la possibilité de classer les films par ordre chronologique de l''histoire, ou par ordre de sortie des films. Chaque film a sa page contenant les détails le concernant (résumé, bande d''annonce, date de sortie, etc.). Les pages détaillées des films qui ne sont pas encore sortis contiennent un compte à rebours permettant à l''utilisateur de savoir combien de temps il lui reste avant de pouvoir regarder le film. La dernière feature du site MCU-Timeline est la page "Rumble". Cette page permet à l''utilisateur de faire un combat entre deux personnages Marvel et de voir qui remporte ce combat.',  
        'React, Tailwind, Javascript',
        'https://github.com/AnaisCav/MCU-Timeline',
        '/assets/videos/MCUTimeline.mp4',
        ''
    ), (
        'Tuum Vehiculum',
        '/assets/hackathon1-mockup.png',
        'Premier hackathon de notre formation. Nous avions moins de deux jours pour créer un site fullstack',
        'Le thème du hackathon était "Créer un site qui aurait pu être utile jadis". Le site devait être fullstack. Nous avons donc eu l''idée de créer un site de location de véhicule à l''époque du moyen âge. Le site permet donc à l''utilisateur de choisir son adresse de départ et d''arrivée. Lorsque ces adresses sont renseignées, l''utilisateur arrive sur la page des véhicules. Il peut filtrer ses véhicules en fonction de son statut social, du type de moteur (humain ou animal), etc. Dès que l''utilisateur a fait son choix, il pourra accéder à la page de finalisation de sa commande. Il aura la possibilité de choisir des services de dernière minute, comme par exemple une cruche de vin ou un cocher, mais évidemment cela augmentera le prix de la course. Enfin, dès que l''utilisateur aura terminé ces choix d''options, il n''a plus qu''à cliquer sur le bouton pour finaliser sa commande et un compte à rebours apparaîtra pour indiquer à l''utilisateur le temps qu''il lui reste avant que son véhicule arrive.',
        'React, Tailwind, NodeJs, Javascript',
        'https://github.com/AnaisCav/TuumVehiculum',
        '/videos/TuumVehiculum.mp4',
        'https://tuum-vehiculum.achap.fr/'
    ), (
        'Eating Nam Nam',
        '/assets/project3.png',
        'Eating Nam Nam est une plateforme culinaire avec la possibilité de créer un compte pour permettre à l''utilisateur de personnaliser ses préférences.',
        'Eating Nam Nam est un site que nous avons réalisé à 5. C''est un site qui va inciter l''utilisateur à se connecter car il n''aura pas accès à l''intégralité du site. Une fois connecté, il peut consulter la recette populaire, les dernières recettes créées ou rechercher une recette de cuisine grâce à des filtres. Chaque utilisateur pourra mettre un commentaire et noter des recettes. L''utilisateur va également pouvoir créer sa propre recette en renseignant les informations nécessaires. Il peut également accéder à son profil, modifier ses informations et son mot de passe. Sur sa page profil, il pourra aussi accéder aux recettes qu''il a créées ainsi qu''aux pages des autres utilisateurs du site. Enfin, nous avons également implémenté des utilisateurs qui sont admins et qui peuvent gérer les recettes, les ingrédients, les utilisateurs et les commentaires.',
        'React, Tailwind, NodeJs, Javascript, Express, MySQL',
        'https://github.com/AnaisCav/Eating-NamNam',
        '',
        'https://eating-nam-nam.c-sia.com/'
    ), (
        'Box of Magic',
        '/assets/project4-mockup.png',
        'Premier projet seule. Ce site a été réalisé lors de notre évaluation de fin de formation. J''ai eu 48h pour créer un site fullstack.',
        'Pour ce projet, j''ai eu envie de créer un faux site e-commerce sur le thème de l''univers de Harry Potter. L''utilisateur peut filtrer les articles, les trier par catégorie ou par maison. Il peut ensuite voir les commentaires sur chaque article, mettre un commentaire et le modifier ou le supprimer après sa publication. Et bien évidemment, l''utilisateur peut choisir la quantité d''article qu''il souhaite acheter et le mettre dans son panier. Une fois sur la page panier, il pourra valider sa commande.',
        'React, Tailwind, Javascript, Express, MySQL',
        'https://github.com/AnaisCav/BoxOfMagic',
        '/assets/videos/BoxOfMagic.mp4',
        ''
    ), (
        'MonitoHR',
        '/assets/monitohr-mockup.png',
        'MonitoHR est un site d''aide à la gestion des offres d''emploi. Il permet aux RH de faire du monitoring sur leurs offres d''emplois, de comprendre où ils se placent par rapport aux concurrents, et bien d''autres fonctionnalités.',
        'MonitoHR est la start-up dans laquelle j''ai effectué mon alternance pour le titre de Concepteur et Développeur d''Application mobiles. Sur cette application, l''utilisateur va comparer ses offres d''emplois par rapport à ses concurrents. Il pourra voir le nombre de candidats, le nombre de vues, le nombre de candidats qui ont postulé, etc. Il pourra également voir les offres d''emplois qui ont été postées par ses concurrents. Enfin, il pourra également voir les statistiques de ses offres d''emplois, les statistiques de ses concurrents et les statistiques du marché.',
        'React, SCSS, Javascript, Express, MongoDB, NodeJs, Cypress',
        '',
        '',
        'https://www.monitohr.com/'
    );
