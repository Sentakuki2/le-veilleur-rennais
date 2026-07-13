const articles = [


    {
        id: "fresque-vilaine",
        titre: "Une étrange fresque apparaît durant la nuit près de la Vilaine",
        date: " 21 février 2026",
        dateISO: "2026-02-21",
        auteur: "Clara Aubin",
        image: "images/articles/fresque-rennes.png",
        imageAlt: "photo de la fresque représentant un rennes ",
        imageLegende: "Photo de l'etrange fresque apparu en une nuit. Photo : Ermine35.",
        resume: "Les passants ont découvert ce matin une immense fresque représentant un renne noir sur les quais de la Vilaine.",
        contenu: `
        <p>Les promeneurs ont découvert ce matin une imposante fresque peinte durant la nuit sur un mur désaffecté des quais de la Vilaine.</p>

        <p>L'œuvre représente un grand renne noir entouré de motifs rappelant des branches ou des racines. Aucun collectif d'artistes n'a revendiqué sa réalisation.</p>

        <p>Les services municipaux indiquent qu'ils décideront prochainement si la fresque sera conservée ou effacée.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "ArtEtRue",
            date: "21 février 2026 à 13:28",
            texte: "Franchement magnifique🤩🤩🤩, ça change des tags habituels."
        },
        {
            pseudo: "RennesCentre",
            date: "21 février 2025 à 16:06",
            texte: "Peu importe si c'est joli, ça reste une dégradation 😡."
        },
        {
            pseudo: "BreizhMysteres",
            date: "22 février 2026 à 03:14",
            texte: "Il est revenu sur le mur avant de revenir en ville."
        }
        ]
    }, 
    {
        id: "librairie-solidaire",
        titre: "Une librairie rennaise offre des centaines de livres aux enfants hospitalisés",
        date: "19 février 2026",
        dateISO: "2026-02-19",
        auteur: "Clara Aubin",
        image: "images/articles/livres-dons.png",
        imageAlt: "distribution de livres a des enfants hospitalisé ",
        imageLegende: "Photo de la distribution des livres récoltés au CHU de Rennes service pédiatrie. Photo : Clara Aubin.",
        resume: "Pendant tout le mois de février, une librairie du centre-ville collecte des ouvrages destinés aux jeunes patients du CHU de Rennes.",
        contenu: `
        <p>Depuis le début du mois, la librairie <em>Le Failler</em> organise une collecte de livres jeunesse au profit du service pédiatrique du CHU de Rennes.</p>

        <p>Les habitants peuvent déposer un ouvrage neuf ou en très bon état. Chaque livre sera remis aux enfants hospitalisés avant les vacances d'hiver.</p>

        <p>Une initiative simple qui rencontre un véritable succès. En seulement deux semaines, plus de trois cents livres ont déjà été récoltés grâce à la générosité des Rennais.</p>

        <p>Les organisateurs espèrent désormais dépasser les cinq cents ouvrages avant la fin de l'opération.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "Camille35",
            date: "19 février 2026 à 12:03",
            texte: "J'y suis passée ce matin avec mes enfants ❤️"
        },
        {
            pseudo: "PapaRennais",
            date: "19 février 2026 à 14:27",
            texte: "Très belle initiative, je vais déposer quelques livres demain 😊"
        },
        {
            pseudo: "Claire",
            date: "19 février 2026 à 18:51",
            texte: "Ça fait plaisir de lire une bonne nouvelle de temps en temps 🥰"
        },
        {
            pseudo: "Nico35",
            date: "20 février 2026 à 09:10",
            texte: "Bravo à toute l'équipe ! 👏❤️"
        }
        ]
    },
    {
        id: "saint-valentin-fleurs",
        titre: "À Rennes, les fleuristes ne désemplissent pas pour la Saint-Valentin",
        date: "14 février 2026",
        dateISO: "2026-02-14",
        auteur: "Clara Aubin",
        image: "images/articles/fleuriste.png",
        imageAlt: "Vitrine d'un fleuriste rennais décorée pour la Saint-Valentin",
        imageLegende: "Une vitrine du centre-ville à l'approche de la Saint-Valentin. Photo : Clara Aubin.",
        resume: "Comme chaque année, les fleuristes rennais voient défiler des centaines de clients venus chercher le bouquet parfait.",
        contenu: `
        <p>Dès les premières heures de la matinée, plusieurs fleuristes du centre-ville ont vu se former de longues files d'attente.</p>

        <p>Roses rouges, tulipes ou compositions originales : chacun cherche le bouquet qui fera plaisir à l'élu(e) de son cœur.</p>

        <p>Les commerçants interrogés parlent d'une ambiance chaleureuse malgré une météo particulièrement fraîche cette année.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "Paul02",
            date: "14 février 2026 à 11:28",
            texte: "Bon courage à tous les fleuristes aujourd'hui ! 🌹❤️"
        },
        {
            pseudo: "Thomas35",
            date: "14 février 2026 à 15:40",
            texte: "J'espère qu'il restera encore quelques roses ce soir 😅"
        },
        {
            pseudo: "Claire",
            date: "14 février 2026 à 19:02",
            texte: "Bonne Saint-Valentin à tous ❤️🥰"
        },
        {
            pseudo: "BreizhMysteres",
            date: "14 février 2026 à 21:57",
            texte: "N'oubliez jamais de dire aux gens que vous les aimez. On pense toujours avoir le temps. ❤️"
        }
        ]
    },
    {
        id: "homme-retrouve-captif",
        titre: "Un homme retrouvé en état critique après plusieurs jours de captivité",
        date: "10 février 2026",
        dateISO: "2026-02-10",
        auteur: "Clara Aubin",

        resume: "Découvert dans un bâtiment abandonné de Rennes, un homme très affaibli a été hospitalisé après plusieurs jours passés en captivité dans des circonstances encore inexpliquées.",

        contenu: `
            <p>Les secours sont intervenus dans la nuit du 6 au 7 février après la découverte d'un homme en état de grande faiblesse près de la plateforme logistique de Vern .</p>

            <p>Selon plusieurs sources concordantes, la victime présentait un important état de dénutrition ainsi qu'une perte de sang particulièrement préoccupante. Hospitalisé au CHU, son pronostic vital n'est plus engagé.</p>

            <p>Les enquêteurs privilégient pour l'instant la piste d'une séquestration. Aucun élément ne laisse penser qu'une demande de rançon ait été formulée, ce qui rend l'affaire particulièrement inhabituelle.</p>

            <p>D'après une source proche du dossier, l'homme aurait évoqué plusieurs personnes présentes durant sa captivité. Son témoignage reste toutefois très confus. Les médecins estiment que son état physique et psychologique ne lui permet pas encore de livrer un récit fiable des événements.</p>

            <p>La police poursuit ses investigations afin de déterminer les circonstances exactes de cette affaire.</p>

            <p>[....]</p>
        `,

        commentaires: [
            {
                pseudo: "Nicolas35",
                date: "10 février 2026 à 09:22",
                texte: "Comment peut-on retenir quelqu'un plusieurs jours sans que personne ne remarque rien ? 😮"
            },
            {
                pseudo: "Claire",
                date: "10 février 2026 à 14:47",
                texte: "Le pauvre... J'espère qu'ils retrouveront ceux qui lui ont fait ça. ✊⚖️"
            },
            
            {
                pseudo: "RennesCentre",
                date: "10 février 2026 à 19:24",
                texte: "😱😱😱 ! Ça fait froid dans le dos... Heureusement qu'il a été retrouvé à temps."
            },
            {
                pseudo: "Mélanie",
                date: "11 février 2026 à 00:31",
                texte: "J'espère surtout qu'il pourra retrouver une vie normale après ce qu'il a vécu."
            },
            {
                pseudo: "Paul02",
                date: "11 février 2026 à 08:07",
                texte: "On ne se rend pas compte de ce qui peut arriver juste à côté de chez nous...😔"
            }
        ]
    },
    {
        id: "disparition-homme-centre",
        titre: "Une disparition jugée inquiétante dans le centre historique",
        date: "8 février 2026",
        dateISO: "2026-02-08",
        auteur: "Clara Aubin",
        resume: "Un homme d'une quarantaine d'années n'a plus donné signe de vie depuis plusieurs jours. Son entourage affirme qu'il s'agit d'une disparition totalement inexpliquée.",
        contenu: `
        <p>Signalé disparu depuis le 6 février, un homme d'une quarantaine d'années reste introuvable malgré les premières recherches menées par ses proches.</p>

        <p>Selon plusieurs témoignages recueillis par <em>Le Veilleur Rennais</em>, il vivait depuis plusieurs années dans le centre historique de Rennes où il était connu de nombreux commerçants. Décrit comme discret mais cultivé, il semblait mener une vie sans histoire.</p>

        <p>Le plus troublant reste l'absence totale d'indices. Son logement ne présente aucun signe d'effraction, ses effets personnels sont toujours présents et aucune activité bancaire ou téléphonique n'a été relevée depuis sa disparition.</p>

        <p>Plusieurs proches évoquent une disparition « impossible à expliquer » et affirment qu'il n'avait jamais manifesté l'intention de quitter Rennes.</p>

        <p>La police poursuit ses investigations et invite toute personne susceptible de détenir des informations à se manifester.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "BoulangerDuCentre",
            date: "8 février 2026 à 09:47",
            texte: "Je le voyais plusieurs fois par semaine. C'est étrange de ne plus le croiser."
        },
        {
            pseudo: "BreizhMysteres",
            date: "8 février 2026 à 23:58",
            texte: "Il y a des gens qui semblent toujours seuls. On se rend compte qu'ils existaient seulement une fois qu'ils ont disparu. 😔"
        },
        {
            pseudo: "Etudiante2Rennes2",
            date: "9 février 2026 à 12:18",
            texte: "J'espère qu'il sera retrouvé rapidement. Cette histoire fait froid dans le dos."
        },

        ]
    },
    {
        id: "coupures-beaulieu",
        titre: "Des coupures de courant inexpliquées à Beaulieu",
        date: "1 février 2026",
        dateISO: "2026-02-01",
        auteur: "Clara Aubin",
        resume: "Plusieurs bâtiments du campus de Beaulieu ont été touchés par de courtes coupures nocturnes, toujours à des horaires proches.",
        contenu: `
            <p>Depuis plusieurs semaines, des étudiants et membres du personnel signalent de brèves coupures de courant sur le campus de Beaulieu.</p>
            <p>Ces incidents se produiraient principalement entre deux et quatre heures du matin. L'université évoque des opérations de maintenance.</p>
            <p>Certains bâtiments semblent pourtant davantage concernés que d'autres.</p>
            <p>[....]</p>`,
        commentaires: [
            { pseudo: "L2Info", date: "1 février 2026 à 14:17", texte: "Ça arrive surtout près des vieux bâtiments, pas dans les résidences récentes." },
            { pseudo: "Ancien2Rennes2", date: "2 février 2026 à 09:51", texte: "Il y avait déjà des histoires de sous-sols condamnés quand j'étais étudiant.🙄" }
        ]
    },
    {
        id: "lumieres-gayeulles",
        titre: "Les riverains s'interrogent sur les lumières du parc des Gayeulles",
        date: "18 janvier 2026",
        dateISO: "2026-01-18",
        image: "images/articles/parc_gayeulle.png",
        imageAlt: "parc des gayeulle de Nuit",
        imageLegende: "Photo du parc des Gayeulle prise de nuit a l'apparation d'une 'lumiere' . Photo : Lecteur Anonyme.",
        auteur: "Clara Aubin",
        resume: "Depuis plusieurs semaines, des habitants affirment apercevoir d'étranges lumières se déplacer entre les arbres après minuit.",
        contenu: `
        <p>Depuis plusieurs semaines, plusieurs habitants du quartier des Gayeulles affirment apercevoir d'étranges lumières se déplacer entre les arbres une fois la nuit tombée.</p>

        <p>Les témoignages sont nombreux mais très variables : certains évoquent des lampes torches, d'autres de simples reflets ou encore des drones utilisés illégalement au-dessus du parc.</p>

        <p>La Ville indique n'avoir reçu aucun signalement officiel et rappelle que le parc reste accessible en soirée, tout en invitant les promeneurs à la prudence.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "Julien35",
            date: "18 janvier 2026 à 08:51",
            texte: "Je promène mon chien presque tous les soirs. J'en ai déjà vu deux fois, ça dure quelques secondes."
        },
        {
            pseudo: "Paul02",
            date: "18 janvier 2026 à 10:14",
            texte: "Franchement je pense que ce sont juste des jeunes avec des lampes."
        },
        {
            pseudo: "AncienForestier",
            date: "18 janvier 2026 à 21:42",
            texte: "Les lumières étaient déjà signalées il y a vingt ans...🙄"
        }
        ]
    },
    {
        id: "repas-solidaire-noel",
        titre: "Plus de 250 repas distribués pour Noël aux personnes isolées",
        date: "25 décembre 2025",
        dateISO: "2025-12-25",
        auteur: "Clara Aubin",
        resume: "Associations et bénévoles se sont mobilisés toute la journée pour offrir un repas de fête aux personnes seules ou en difficulté.",
        image: "images/articles/noel.png",
        imageAlt: "distribution de repas bénévole dans Rennes",
        imageLegende: "Photo de la distribution des repas dans le centre rennais. Photo : Clara Aubin.",
        contenu: `
        <p>Comme chaque année, plusieurs associations rennaises se sont mobilisées pour préparer et distribuer des repas de Noël aux personnes les plus isolées.</p>

        <p>Grâce aux bénévoles, plus de deux cent cinquante repas ont été servis dans une ambiance conviviale.</p>

        <p>Une belle démonstration de solidarité qui rappelle que les fêtes sont aussi l'occasion de penser aux autres.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "Marie",
            date: "25 décembre 2025 à 18:11",
            texte: "Merci à tous les bénévoles ❤️"
        },
        {
            pseudo: "David",
            date: "25 décembre 2025 à 20:44",
            texte: "On oublie parfois tout le travail qu'il y a derrière ce genre d'événement 👏"
        },
        {
            pseudo: "Bretonne35",
            date: "25 décembre 2025 à 21:16",
            texte: "Joyeux Noël à tous ! 🎄🎁"
        }
        ]
    },
    {
        id: "an-ti-koz",
        titre: "L'An Ti Koz et ses histoires que personne ne raconte",
        date: "16 décembre 2025",
        dateISO: "2025-12-16",
        auteur: "Clara Aubin",
        image: "images/articles/an_ti_koz.jpg",
        imageAlt: "Maison 'AN-TI-KOZ du centre de Rennes",
        imageLegende: "Photo de la celebre maison du 16ieme siecle de Rennes. Photo : Wikipédia.",
        resume: "Derrière sa façade bien connue, l'une des plus anciennes maisons de Rennes conserve plusieurs récits difficiles à vérifier.",
        contenu: `
        <p>L'An Ti Koz est connue des Rennais pour son architecture et son ancienneté. Pourtant, les histoires qui lui sont associées dépassent les quelques lignes habituellement consacrées au bâtiment.</p>
        <p>Plusieurs anciens employés évoquent un objet conservé autrefois dans une pièce fermée au public. Aucun inventaire accessible ne semble toutefois en faire mention.</p>
        <p>[....]</p>`,
        commentaires: [
        { pseudo: "BreizhMysteres", date: "16 décembre 2025 à 22:30", texte: "Les guides racontent toujours la même histoire. Les anciens en racontaient une autre." },
        { pseudo: "Ermine35", date: "16 décembre 2025 à 23:05", texte: "Ma grand-mère parlait d'un miroir qu'on ne devait jamais déplacer." },
        { pseudo: "JeanneR", date: "17 décembre 2025 à 10:30", texte: "Les vieilles maisons ont toutes leurs légendes.👀" }
        ]
    },
    {
        id: "client-immuable",
        titre: "Les habitués d'un bar du centre évoquent un « client qui ne vieillit jamais »",
        date: "28 novembre 2025",
        dateISO: "2025-11-28",
        auteur: "Clara Aubin",
        resume: "Plusieurs clients assurent reconnaître le même homme sur des photographies prises à plus de quinze ans d'intervalle.",
        contenu: `
        <p>Depuis plusieurs années, plusieurs habitués d'un établissement du centre-ville affirment croiser régulièrement un homme dont l'apparence n'aurait pas changé depuis plus d'une décennie.</p>

        <p>Certaines anciennes photographies conservées par le propriétaire semblent effectivement montrer un client lui ressemblant fortement. Ce dernier évoque cependant une simple ressemblance familiale.</p>

        <p>Aucun élément ne permet aujourd'hui de confirmer ces affirmations, qui alimentent pourtant de nombreuses discussions parmi les habitués.</p>

        <p>[....]</p>`,
        commentaires: [
        {
            pseudo: "Leo35",
            date: "28 novembre 2025 à 18:53",
            texte: "C'est sûrement son fils, les gens adorent inventer des histoires."
        },
        {
            pseudo: "RennesCentre",
            date: "28 novembre 2025 à 21:16",
            texte: "J'ai vu les photos... ça ce voit que c'est de l'IA 😂🤣."
        },
        {
            pseudo: "BretonRimeAvecCon",
            date: "29 novembre 2025 à 08:41",
            texte: "Entre les vieux appareils photo et les souvenirs qui déforment tout..."
        }
        ]
    },
];