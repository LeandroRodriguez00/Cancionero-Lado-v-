document.addEventListener('DOMContentLoaded', function() {
    const artists = {
        
        "Acdc": ["You Shook Me All Night Long"],
        "Aerosmith": ["Dont Want To Miss A Thing", "Pink"],
        "Air Supley": ["All Out Of Love"],
        "Airbag": ["La partida de la gitana", "Solo aquí"],
        "Alejandro Fernández": ["Matalas"],
        "Alejandro Lerner": ["Después de ti", "No hace falta"],
        "Alma Corazon Y Vida": ["Cantando", "Cafetín de Buenos Aires", "Como Dos Extraños", "La Última Curda", "Los Mareados", "Malena", "Nostalgia", "Pasional"],
        "Alberto Cortés": ["Castillos en el aire", "Cuando un amigo se va"],
        "Andres Calamaro": ["Comida china", "Crímenes perfectos", "Te quiero igual", "Tuyo siempre", "Aquí no podemos hacerlo", "Flaca (Karaoke)", "Flaca", "Loco", "Paloma", "El salmón", "La parte de adelante", "Mil horas"],
        "Angela Leiva": ["Llamadas Extrañas", "Amor prohibido", "Ella me mintió", "No te perdonaré", "Decidida", "Tu volverás", "Nada más"],
        "Árbol": ["El Fantasma"],
        "Attaque 77": ["Hacelo por mi", "Arranca corazones"],
        "Bad Bunny": ["Moscow Mule", "Dákiti", "Yonaguni", "Callaíta", "La noche de anoche", "Safaera", "Vete"],
        "Babasonicos": ["Irresponsables"],
        "Bahiano": ["Oyelo"],
        "Bebe": ["Malo"],
        "Becky G Natti Natasha": ["Sin Pijama"],
        "Becky G FT BAD BUNNY": ["Mayores"],
        "Bersuit Vergarabat": ["Murguita Del Sur", "El viejo de Arriba", "Yo tomo", "La argentinidad al palo", "La bolsa", "Mi caramelo", "Señor Cobranza", "Un pacto"],
        "Bhavi Ft Seven Kayne": ["Bésame"],
        "Blackeyedpeas": ["Don’t Lie", "Don’t Phunk With My Heart", "Hey Mama", "Mas-Que-Nadadonde cantar", "Shut-Up"],
        "Bob Marley": ["Could You Be Loved", "Get Up, Stand Up", "Is This Love", "Jamming", "No Woman No Cry", "One Love People Get Ready", "Redemption Song", "Three Little Birds", "Waiting In Vain"],
        "Bob sinclar": ["Love Generation"],
        "Bolero": ["Bésame mucho"],
        "Calle 13": ["Atrevete", "Muerte en Hawaii", "El aguante", "La vuelta al mundo", "Querido FBI", "Fiesta de locos", "Vamos a portarnos mal"],
        "Callejeros": ["Una nueva noche fría"],
        "Camila Cabello": ["HAVANA"],
        "Carlos Gardel": ["Uno", "Volver"],
        "Carlos Vives, Sebastián Yatra": ["Robarte un Beso"],
        "Café Tacuba": ["Amor Divino", "Eres", "Ingrata"],
        "Chano": ["Carnavalintro"],
        "Charly Garcia": ["Demoliendo hoteles", "Hablando a tu corazón", "No Voy En Tren", "Inconciente Colectivo", "Nos siguen pegando abajo", "Yendo de la cama al living", "Los dinosaurios", "Rasguña las piedras", "Seminare", "Fanky"],
        "Chayanne": ["Provócame", "Tiempo de vals", "Dejaría todo", "Torero", "Salomé", "Un siglo sin ti", "Humanos a marte"],
        "Chino & Nacho": ["Andas En Mi Cabeza"],
        "Clapton": ["Laylaunplug"],
        "CNCO": ["Reggaetón Lento"],
        "Coldplay": ["The-Scientist"],
        "Coti Paulina Julieta": ["Nada De Esto Fue Un Error"],
        "Coti": ["Antes que ver el sol"],
        "Cristian Castro": ["No Podrás", "Azul", "Lloviendo estrellas", "Por amarte así", "Volver a amar", "Nunca voy a olvidarte", "Lo mejor de mí"],
        "Daddy Yankee": ["China (con Karol G, Ozuna & J Balvin)", "Que Tire Pa’ ‘Lante", "Gasolina", "Lo que paso paso", "Con calma", "Dura", "Lo que pasó, pasó", "Rompe", "Limbo"],
        "Damas Gratis": ["Me Vas A Extrañar", "No Te Creas Tan Importante"],
        "Diego Torres": ["Hasta cuando", "Que no me pierda", "Yo se que no volveras", "Usted", "Alguien la vio partir", "Color Esperanza", "La última noche", "No sé por qué", "Quisiera", "Todo cambia", "Tratar de estar mejor", "Andando", "Penélope", "Abriendo caminos", "Guapa"],
        "Dímelo": ["Paulo Londra"],
        "Divididos": ["Que ves", "Cielito lindo", "Spaghetti del rock", "Par mil", "El 38", "Ala Delta", "Paisano de Hurlingham"],
        "Don Omar": ["Baila Morena", "Dile", "Pobre Diabla"],
        "DUKI Ysy A C R O": ["Hijo de la Noche"],
        "El Indio Solari": ["El Salmon", "Juguetes perdidos", "Ji ji ji", "La bestia pop", "Un ángel para tu soledad", "Pabellón Séptimo", "Mariposa Pontiac"],
        "El polaco": ["Deja de llorar"],
        "El Simbolo": ["De Reversa", "Levantando las manos", "Cachete, pechito y ombligo", "No te preocupes", "1, 2, 3", "La bomba", "Que sí, que no"],
        "Elton John, Dua Lipa": ["Cold Heart (Pnau Remix)"],
        "Elvis Prestley": ["House Rock", "Return to sender"],
        "Emilia": ["Cuatro Veinte"],
        "Enrique Iglesias": ["Bailando", "Duele el corazón", "El perdón", "Súbeme la radio", "Loco", "Cuando me enamoro", "Hero"],
        "Estopa": ["Tu Calorro", "Por la raja de tu falda"],
        "Fabi Cantilo": ["Mi Enfermedad"],
        "Fito Paez": ["Mariposa technicolor", "Y dale alegría a mi corazón", "11 y 6", "Cable A Tierra (Karaoke)", "El Amor Despues Del Amor (Karaoke)", "Polaroid De Locura Ordinaria (Karaoke)", "Trafico Por Katmandu (Karaoke)", "Tumbas De La Gloria (Karaoke)", "Un Vestido Y Un Amor Sinfonico (Karaoke)", "El amor después del amor", "A rodar mi vida", "Cable A Tierra", "Polaroid De Locura Ordinaria", "Trafico Por Katmandu", "Tumbas De La Gloria", "Un Vestido Y Un Amor Sinfonico", "Brillante sobre el mic", "Ciudad de pobres corazones"],
        "Frank Sinatra": ["My Way", "New York New York", "Strangers In The Night"],
        "Gente de Zona ft Marc Anthony": ["La Gozadera"],
        "Gilda": ["No Me Arreíento De Este Amor", "Fuiste", "me arripiento de este amor", "Se me ha perdido un corazón", "Corazón valiente", "No es mi despedida", "Ámame suavecito", "Noches vacías"],
        "Gorillaz": ["Clint Eastwood", "Dare"],
        "Guns Roses": ["Knock"],
        "High School Musical": ["Breaking Free"],
        "Hotel California": ["The Eagles"],
        "Intoxicados": ["Esta saliendo el sol", "Nunca quise", "Fuego", "De la guitarra", "Reggae para los amigos", "Una vela", "No tengo ganas"],
        "Ivan Noble": ["La razón", "Uno más uno"],
        "Jambao": ["El Oso"],
        "Jean Carlos": ["Cuatro, cinco, seis"],
        "Jesse & Joy": ["Chocolate", "Corre", "Espacio sideral", "Dueles", "Llorar"],
        "Joan Jett": ["I Love Rock N 'Roll"],
        "John Lennon": ["Imagine", "Woman"],
        "John Secada": ["Just Another Day", "Angel", "Do You Believe In Us", "If You Go", "Por amarte", "Losing You"],
        "John Travolta": ["Grease", "You're The One That I Want"],
        "Jon Secada": ["Angel", "Just Another Day"],
        "Jorge Blanco": ["Te amo", "Violetta", "Entre dos mundos", "Hoy somos más", "Voy por ti"],
        "Jorge Drexler": ["Al otro lado del río"],
        "Jorge Rojas": ["Volver a volver"],
        "Jose Luis Perales": ["Y cómo es el", "Canción", "Amor", "Un velero llamado libertad", "Me llamas"],
        "Jose Maria": ["Siciliano"],
        "Juanes": ["La Camisa Negra", "A Dios le pido", "Es por ti", "Mala gente", "Nada valgo sin tu amor"],
        "Justin Bieber": ["Sorry"],
        "Justin Quiles": ["Pam"],
        "Karol G": ["Ahora Me Llama", "Mi Cama"],
        "Keane": ["Somewhere Only We Know", "Bend & Break", "Everybody's Changing", "This Is The Last Time"],
        "Kendji Girac": ["Bella", "Andalouse", "Gitano del sol", "Conmigo", "Elle M' a Aimé", "La Noche"],
        "Kenny Loggins": ["Footloose", "Danger Zone"],
        "Kiss": ["I Was Made For Loving You"],
        "Kurt": ["Cobain", "Smells like teen Spirit"],
        "La Beriso": ["Como Olvidarme", "Vamos por la gloria", "Perdoname", "Canción de amor", "Madrugada", "Otra noche más", "Ella", "No me olvides"],
        "La Mosca": ["Para no verte más"],
        "La Renga": ["La razon que te demora", "Cuando vendran", "El final es en donde parti", "El final es en donde partí", "La razon que te demora"],
        "Las Pelotas": ["Personalmente"],
        "Laura Pausini": ["Se fue", "Amores Extraños"],
        "Led Zeppelin": ["Stairway To Heaven", "Whole Lotta Love"],
        "Leo Matioli": ["Vamos a buscarte", "Como te olvido", "Le pido a Dios", "Donde estás amor", "Tramposa y Mentirosa", "Perdoname", "Solo te pido", "No me vuelvo a enamorar", "Lloraras más de diez veces", "Me enamoré", "La mujer que me mató", "Mírame", "Por qué te portaste mal", "Yo sin tu amor", "Dejame", "Un amor", "Que lindo es verte sonreir", "Dos besos en el alma", "Ella", "Niña Bonita"],
        "Lil Pump": ["Eskeetit"],
        "Los 4": ["Tu de que vas"],
        "Los autenticos decadentes": ["Corazón", "Un osito de peluche de Taiwan", "La guitarra", "Los piratas", "El pájaro vio el cielo y se voló", "Los piratas", "Entregá el marrón", "Besándote", "La guitarra", "El gran señor", "Osito de peluche de Taiwan", "Amor", "Cualquiera puede cantar"],
        "Los Caballeros De La Que Ma": ["La Chica De Humo", "Por Que Te Vas"],
        "Los Cafres": ["Flor del loto", "Sin Semilla"],
        "Los Nocheros": ["Roja Boca"],
        "Los Piojos": ["Babilonia", "Ando ganas", "Arco", "Ay ay ay", "Azul", "Basta de penas", "Canción de cuna", "Cautivo", "Civismo y política", "Como Ali", "Como hemos hecho", "Como hueso", "Dale yo no sé", "Despedazado", "Difícil", "Difícil", "El farolito", "El ritual de la banana", "El viejo", "Enojado", "Esquina libertad", "Fiebre", "Frente", "Genios", "Gualicho", "Instituto", "Lado de campo", "Llorar y llorar", "Lobo hombre en Paris", "Mariposa", "Más loco que un marciano", "Media caña", "Milano", "Negra 2", "Nos vimos en Venecia", "Padre Soltero", "Palito de madera", "Pepe", "Pistolas", "Rebelde Rebelde", "Ritual", "Señor Kiosquero", "Siempre free", "Silencio", "Sudamerica", "Tantas puertas", "Tema del Pájaro", "Vine hasta aquí", "Voy a bailar a la nave del olvido", "Yira Yira", "Chac tu chac", "Ando ganas"],
        "Los Rancheros": ["Una Solo Noche De Amor", "La mujer que amo", "No puedo vivir sin ti", "Piedra libre", "Otra vez", "Mentira", "Dulce dueña", "El che y los rolling stones", "Llamé para decirte que te amo"],
        "Luciano Pereyra": ["Como Tú", "Es mi culpa", "Porque aún te amo"],
        "Luis Miguel": ["Culpable O No"],
        "Luis Fonsi": ["Despacito", "Echame la culpa", "Corazón en la maleta"],
        "Mago de Oz": ["Molinos De Viento", "La Danza Del Fuego"],
        "Maluma": ["Borro cassette", "El prestamo", "Felices los 4", "Hawái", "Sin contrato"],
        "Marc Anthony": ["Vivir mi vida"],
        "Marcela Morelo": ["Corazon salvaje"],
        "Maroon 5": ["Girls Like You"],
        "Martina La Peligrosa": ["Linda"],
        "Matisyahu": ["King Without A Crown"],
        "Memphis La Blusera": ["La bifurcada"],
        "Michael Bublé": ["Feeling Good", "Home", "Haven't Met You Yet", "It's a Beautiful Day", "Save The Last Dance For Me", "Sway", "Everything", "Lost", "Crazy Little Thing Called Love", "All Of Me", "Fever", "You Make Me Feel So Young", "You Don't Know Me", "When I Fall In Love", "I'm Your Man", "Quando, Quando, Quando", "Always On My Mind", "Can't Buy Me Love", "Mack The Knife", "For Once In My Life", "I've Got You Under My Skin", "A Song For You", "Feeling Good"],
        "Michael Jackson": ["Black Or White", "Billie Jean", "Heal The World", "Thriller", "Don’t Stop 'Til You Get Enough", "Beat It", "Bad", "Smooth Criminal", "The Way You Make Me Feel", "Man In The Mirror", "Dirty Diana", "Rock With You", "Remember The Time", "Will You Be There", "You Are Not Alone", "Human Nature", "Love Never Felt So Good"],
        "Miranda": ["Perfecta", "Perfecta", "Rompé", "Traicion", "Vivo"],
        "Moderatto": ["Sentimetal"],
        "Morrissey": ["Suedehead"],
        "Nacho": ["Báilame"],
        "Natalia Oreiro": ["Cambio Dolor", "Como Te Olvido"],
        "Nelson Velasquez": ["Besa Mi Piel"],
        "Nelly Furtado": ["I'm Like A Bird", "Say It Right", "Maneater"],
        "Nena Daconte": ["En que Estrella Estara"],
        "Nicki Minaj": ["Anaconda", "Starships", "Pound The Alarm", "Super Bass"],
        "Nicky Jam": ["Travesuras"],
        "Nirvana": ["About A Girl", "All Apologies", "Come As You Are", "Dumb", "Heart Shaped Box", "In Bloom", "Lithium", "Polly", "Smells Like Teen Spirit", "Something In The Way", "The Man Who Sold The World", "Where Did You Sleep Last Night"],
        "No Te Va Gustar": ["Cero A La Izquierda", "La trampa", "Voy A Volverte Loca", "No necesito nada", "Clara", "Fuera de control", "Tan lejos"],
        "Noelia": ["Tú"],
        "N'sync": ["Bye Bye Bye"],
        "Ozuna": ["Baila Baila Baila"],
        "Pandora": ["Como Te Va Mi Amor", "Sin El"],
        "Panic At The Disco": ["I Write Sins Not Tragedies"],
        "Patricio Rey": ["Nadie", "Tumbas De La Gloria", "Un Vestido Y Un Amor", "Sinfonico (Karaoke)", "El amor después del amor", "A rodar mi vida", "Cable A Tierra", "Polaroid De Locura Ordinaria", "Trafico Por Katmandu", "Tumbas De La Gloria", "Un Vestido Y Un Amor Sinfonico", "Brillante sobre el mic", "Ciudad de pobres corazones"],
        "Paulina Rubio": ["Mío", "Dame Otro Tequila", "Te Quise Tanto"],
        "Pedro Capó": ["Calma"],
        "Pharrell Williams": ["Happy"],
        "Pibes Chorros": ["La colorada", "Duraznito", "Grieta"],
        "Pink Floyd": ["Wish You Were Here", "Another Brick In The Wall", "Comfortably Numb", "Hey You", "High Hopes", "Money", "Time", "Us And Them"],
        "Pintura Roja": ["La ciega", "El teléfono"],
        "Prince Royce": ["Darte un Beso"],
        "Puerto seguro": ["Un minuto de amor"],
        "Queers": ["Like A Parasite"],
        "Rafaga": ["Luna", "Aguita", "Mentirosa", "Muero de frio", "La luna y tu", "Enganchados", "Cumbia de los trapesiantes", "Maldito corazon"],
        "Rata Blanca": ["El rey", "La leyenda del hada y el mago", "Mujer amante", "La leyenda del hada y el mago"],
        "Reik": ["Ya me entere"],
        "Ricky Martin": ["Livin' La Vida Loca", "La Bomba", "Pégate"],
        "Rihanna": ["We Found Love"],
        "Ritchie Valens": ["La bamba"],
        "Rod Stewart": ["Do Ya Think I'm Sexy"],
        "Rolling Stones": ["Brown Sugar", "Jumpin Jack Flash", "Paint It Black", "Satisfaction", "Start Me Up", "Sympathy For The Devil"],
        "Roxette": ["It Must Have Been Love", "Listen To Your Heart"],
        "Sabina": ["Calle Melancolía", "Crisis", "Princesa", "Nos sobran los motivos", "Peces de ciudad", "19 Días y 500 Noches", "Así estoy yo sin ti", "Besos en la frente", "Contigo", "Cuando era más joven", "Dieguitos y Mafaldas", "Donde habita el olvido", "Eclipse de mar", "Esta boca es mía", "Esta noche contigo", "Esta noche contigo", "Hice bien quererte", "Noches de boda", "Nos sobran los motivos", "Peces de ciudad", "Pongamos que hablo de Madrid", "Princesa", "Que se llama soledad", "Siete crisantemos", "Tiramisú de limón", "Una canción para la Magdalena", "Y nos dieron las diez", "Nos sobran los motivos", "Nos sobran los motivos"],
        "Sandro": ["Quiero llenarte toda"],
        "Santana": ["Corazon Espinado"],
        "Sasha Benny Erik": ["Cada Beso"],
        "Sergio Dalma": ["Yo no te pido la luna", "A buena hora", "Bailar pegados", "Cómo me gusta", "De amor ya no se muere", "Esa chica es mia", "Galilea", "Galería de héroes", "La mujer de mi vida", "Mi historia entre tus dedos", "Por el amor de una mujer", "Si tú eres mi hombre", "Tarde"],
        "Shaggy": ["Angel", "It Wasn't Me", "In The Summertime"],
        "Shakira": ["Chantaje", "La bicicleta", "Hips Don't Lie", "Me Enamoré", "Loca", "Rabiosa", "Waka Waka", "Underneath Your Clothes", "Can't Remember to Forget You", "Sale El Sol", "Antes de las seis", "Dónde estás corazón", "Estoy aquí", "Inevitable", "La tortura", "Lo hecho está hecho", "No", "Objection Tango", "Ojos así", "Que me quedes tú", "Te aviso te anuncio", "Tú"],
        "Shawn Mendes": ["Stitches", "In My Blood"],
        "Soda Stereo": ["De música ligera", "Cuando pase el temblor", "Persiana Americana", "Signos", "Trátame suavemente", "Un millón de años luz", "Ella usó mi cabeza como un revólver", "En la ciudad de la furia", "En el borde"],
        "Somerville": ["Summer Night City"],
        "Spice Girls": ["Wannabe", "Spice Up Your Life"],
        "Steve Aoki": ["Just Hold On"],
        "The Beatles": ["Help", "Hey Jude", "Let It Be", "A Hard Day's Night", "Come Together", "Eleanor Rigby", "Love Me Do", "Penny Lane", "Twist And Shout", "Yellow Submarine", "Yesterday", "All You Need Is Love", "Here Comes The Sun", "Lucy In The Sky With Diamonds", "Strawberry Fields Forever", "Ticket To Ride", "While My Guitar Gently Weeps", "Norwegian Wood", "In My Life", "I Want To Hold Your Hand", "Something", "Michelle", "Dear Prudence", "Ob-La-Di, Ob-La-Da", "Blackbird", "Across The Universe", "All My Loving", "And I Love Her", "Back In The U.S.S.R", "Can't Buy Me Love", "Day Tripper", "Eight Days A Week", "Get Back", "Girl", "Golden Slumbers", "Happiness Is A Warm Gun", "Hello Goodbye", "I Am The Walrus", "I Feel Fine", "I Saw Her Standing There", "If I Fell", "In My Life", "Let It Be", "Lucy In The Sky With Diamonds", "Michelle", "Norwegian Wood", "Nowhere Man", "Ob-La-Di Ob-La-Da", "Penny Lane", "Revolution", "Rocky Raccoon", "Something", "Strawberry Fields Forever", "Ticket To Ride", "Twist And Shout", "We Can Work It Out", "While My Guitar Gently Weeps", "With A Little Help From My Friends", "Yellow Submarine", "Yesterday", "Lucy In The Sky With Diamonds", "Across The Universe", "In My Life", "Revolution", "Day Tripper", "Norwegian Wood", "Michelle", "Twist And Shout", "A Hard Day's Night", "Get Back", "Revolution", "In My Life", "Twist And Shout", "A Hard Day's Night", "Get Back", "Revolution"],
        "The Cardigans": ["Lovefool", "My Favorite Game"],
        "The Chainsmokers": ["Closer", "Something Just Like This"],
        "The Cranberries": ["Zombie", "Dreams"],
        "The Killers": ["Mr. Brightside", "Human", "When You Were Young"],
        "The Pogues": ["Dirty Old Town"],
        "The Police": ["Every Breath You Take", "Message In A Bottle", "Roxanne"],
        "The Smiths": ["How Soon Is Now", "There Is A Light That Never Goes Out"],
        "The Strokes": ["Last Nite", "Reptilia", "You Only Live Once"],
        "The Weeknd": ["Blinding Lights"],
        "The Xx": ["Intro"],
        "Thug": ["Mi Personalidad"],
        "Tini Stoessel": ["Fresa", "Te quiero más"],
        "Tove Lo": ["Habits Stay High"],
        "Travis Scott": ["SICKO MODE"],
        "Tribalistas": ["Velha Infancia"],
        "Trueno": ["Atrevido", "Mala persona", "Red Bull Batalla de los Gallos", "Sangría", "No quiero verla nunca más", "Baisano", "En mi Mente", "Ella dice", "Revolucionario", "Soy un trueno", "Ceniza en cenicero"],
        "Two Feet": ["Go Fuck Yourself"],
        "U2": ["With Or Without You", "Beautiful Day", "I Still Haven't Found What I'm Looking For", "One", "Sunday Bloody Sunday", "Vertigo"],
        "Ufo": ["Sonic Metal"],
        "Ulises Bueno": ["Intento", "Cumbia De La Pregunta", "Necesito un amor", "Eso Eh", "Loco de atar", "Si Yo Fuese Un Chico"],
        "Ulises Gaviria": ["Amantes A Escondidas", "La mas Bonita de Todas", "La mujer de mi vida", "Me Desespero", "Me Haces Falta", "Me Haces Falta", "Ojitos De Gato"],
        "Urband": ["Consejo de amor", "Entre tu y yo", "Que va a ser de mi", "Se acabó"],
        "Vicentico": ["Creo que me enamoré", "Viento", "Los caminos de la vida", "Paisaje", "Siguiendo la luna", "Bajos Fondos", "Último acto", "La Señal", "Viento", "Siguiendo la luna"],
        "Wisin Y Yandel": ["Adrenalina", "Algo me gusta de ti", "Bésame", "Dime qué te pasó", "Estoy enamorado", "Me estas tentando", "Noche de sexo", "Pam pam", "Pegao", "Rakata", "Sexy Movimiento", "Te siento", "Yo te quiero", "Gracias a ti"],
        "Ximena Sarinana": ["Cambio de piel"],
        "Zion": ["The Way She Moves"]
    }


    let firstArtistSelected = false; // Variable para verificar si es la primera vez que se selecciona un artista

    function populateArtistList() {
        const artistList = document.getElementById('artist-list');
        for (let artist in artists) {
            const artistItem = document.createElement('a');
            artistItem.className = 'list-group-item list-group-item-action';
            artistItem.textContent = artist;
            artistItem.href = '#';
            artistItem.id = 'artist-' + artist; // Asignar un ID único basado en el nombre del artista
            artistItem.addEventListener('click', function(event) {
                event.preventDefault();
                showSongs(artist);
                localStorage.setItem('lastArtist', artistItem.id); // Guardar el ID del artista seleccionado
                // Mostrar SweetAlert solo la primera vez que se selecciona un artista
                if (!firstArtistSelected) {
                    firstArtistSelected = true;
                    Swal.fire({
                        title: '¡Recuerda!',
                        text: 'El cancionero es solo para orientarte, puedes pedir la canción que se te ocurra y nosotros la buscamos 😊',
                        icon: 'info',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        setTimeout(() => {
                            Swal.fire({
                                title: '¿Estás listx?',
                                text: 'Ahora anota la canción en la tarjetita y avísale a la Malibu! Te llamaremos para que des tu gran show 🔥',
                                icon: 'question',
                                confirmButtonText: 'Aceptar'
                            });
                        }, 20000); // Mostrar SweetAlert 40 segundos después del primero
                    });
                }
            });
            artistList.appendChild(artistItem);
        }
    }

    function showSongs(artist) {
        const songListElement = $('#song-list');
        const artistList = $('#artist-list');
        const selectedArtist = $('#selected-artist');
        const songsElement = $('#songs');
        const backButton = $('#back-button');

        artistList.slideUp();
        selectedArtist.text(artist);
        songsElement.empty();

        artists[artist].forEach(song => {
            const li = $('<li></li>').addClass('list-group-item').text(song);
            songsElement.append(li);
        });

        songListElement.slideDown();

        backButton.off('click').on('click', function() {
            songListElement.slideUp();
            artistList.slideDown();
            var lastArtistId = localStorage.getItem('lastArtist');
            if (lastArtistId) {
                var element = document.getElementById(lastArtistId);
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                highlightLastArtist(lastArtistId);
            }
        });
    }

    function highlightLastArtist(lastArtistId) {
        $('.list-group-item-action').removeClass('highlight');
        if (lastArtistId) {
            $('#' + lastArtistId).addClass('highlight');
        }
    }

    populateArtistList();

    // Asegurarse de que la página se posicione en la parte superior cuando se recargue
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
        setTimeout(function() {
            Swal.fire({
                title: '¡Listo!',
                text: 'Ahora puedes presionar el artista para ver las canciones.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }, 4000); // Mostrar SweetAlert 4 segundos después de cargar la página
    });

    // Cargar la página centrada en el último artista seleccionado si existe
    $(window).on('load', function() {
        var lastArtistId = localStorage.getItem('lastArtist');
        if (lastArtistId) {
            highlightLastArtist(lastArtistId);
        }
    });
});