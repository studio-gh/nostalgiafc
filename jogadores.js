const PLAYERS_DB = [
    // ==========================================
    // JUVENTUS 1993
    // ==========================================
    { name: "A. Peruzzi", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "93", rating: 83, cost: 80 },
    { name: "J. Kohler", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "93", rating: 83, cost: 85 },
    { name: "M. Carrera", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "93", rating: 78, cost: 65 },
    { name: "M. Torricelli", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "93", rating: 80, cost: 70 },
    { name: "L. De Agostini", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "93", rating: 79, cost: 65 },
    { name: "A. Conte", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "93", rating: 80, cost: 70 },
    { name: "A. Moeller", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "93", rating: 84, cost: 90 },
    { name: "G. Marocchi", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "93", rating: 78, cost: 65 },
    { name: "R. Baggio", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "93", rating: 94, cost: 98 },
    { name: "G. Vialli", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "93", rating: 86, cost: 85 },
    { name: "F. Ravanelli", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "93", rating: 83, cost: 80 },
    // Reservas
    { name: "M. Rampulla", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "93", rating: 74, cost: 40 },
    { name: "S. Porrini", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "93", rating: 77, cost: 50 },
    { name: "Dino Baggio", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "93", rating: 82, cost: 75 },
    { name: "P. Di Canio", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "93", rating: 81, cost: 70 },
    // ==========================================
    // JUVENTUS 1996 (Campeã da Champions)
    // ==========================================
    { name: "A. Peruzzi (96)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "96", rating: 86, cost: 80 },
    { name: "Ciro Ferrara (96)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "96", rating: 85, cost: 75 },
    { name: "P. Montero (96)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "96", rating: 83, cost: 70 },
    { name: "Moreno Torricelli (96)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "96", rating: 81, cost: 65 },
    { name: "Gianluca Pessotto (96)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "96", rating: 80, cost: 60 },
    { name: "Didier Deschamps", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "96", rating: 87, cost: 85 },
    { name: "Antonio Conte (96)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "96", rating: 82, cost: 70 },
    { name: "Paulo Sousa", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "96", rating: 84, cost: 75 },
    { name: "A. Del Piero (96)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "96", rating: 89, cost: 90 },
    { name: "Gianluca Vialli (96)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "96", rating: 86, cost: 85 },
    { name: "Fabrizio Ravanelli (96)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "96", rating: 84, cost: 80 },
    // Reservas
    { name: "M. Rampulla (96)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "96", rating: 74, cost: 40 },
    { name: "Massimo Carrera (96)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "96", rating: 78, cost: 50 },
    { name: "Giancarlo Marocchi (96)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "96", rating: 77, cost: 50 },
    { name: "Michele Padovano", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "96", rating: 80, cost: 65 },

    // ==========================================
    // JUVENTUS 1998 (Finalista da Champions)
    // ==========================================
    { name: "A. Peruzzi (98)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    { name: "Ciro Ferrara (98)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "98", rating: 84, cost: 75 },
    { name: "Mark Iuliano (98)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "98", rating: 80, cost: 65 },
    { name: "Paolo Montero (98)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "98", rating: 83, cost: 70 },
    { name: "Dimas Teixeira", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Edgar Davids (98)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "98", rating: 87, cost: 85 },
    { name: "Didier Deschamps (98)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    { name: "Zinedine Zidane (98)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "98", rating: 93, cost: 97 },
    { name: "Angelo Di Livio", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Alessandro Del Piero (98)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "98", rating: 91, cost: 95 },
    { name: "Filippo Inzaghi (98)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    // Reservas
    { name: "M. Rampulla (98)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "98", rating: 74, cost: 40 },
    { name: "Alessandro Birindelli", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Alessio Tacchinardi (98)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "98", rating: 79, cost: 60 },
    { name: "Daniel Fonseca", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "98", rating: 81, cost: 70 },

    // ==========================================
    // MILAN 1990 (Bicampeão Europeu)
    // ==========================================
    { name: "Giovanni Galli", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "90", rating: 83, cost: 75 },
    { name: "Franco Baresi (90)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "90", rating: 92, cost: 95 },
    { name: "Alessandro Costacurta (90)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "90", rating: 86, cost: 85 },
    { name: "Paolo Maldini (90)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "90", rating: 91, cost: 95 },
    { name: "Mauro Tassotti (90)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "90", rating: 82, cost: 70 },
    { name: "Frank Rijkaard", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "90", rating: 91, cost: 95 },
    { name: "Carlo Ancelotti", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "90", rating: 83, cost: 75 },
    { name: "Roberto Donadoni (90)", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "90", rating: 85, cost: 80 },
    { name: "Angelo Colombo", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "90", rating: 78, cost: 55 },
    { name: "Ruud Gullit", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "90", rating: 91, cost: 95 },
    { name: "Marco van Basten", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "90", rating: 94, cost: 99 },
    // Reservas
    { name: "Andrea Pazzagli", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "90", rating: 74, cost: 40 },
    { name: "Filippo Galli", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    { name: "Alberigo Evani", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "90", rating: 80, cost: 65 },
    { name: "Daniele Massaro (90)", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "90", rating: 81, cost: 70 },

    // ==========================================
    // MILAN 1999 (Campeão Italiano)
    // ==========================================
    { name: "Christian Abbiati (99)", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "99", rating: 81, cost: 65 },
    { name: "Alessandro Costacurta (99)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "99", rating: 83, cost: 75 },
    { name: "Paolo Maldini (99)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "99", rating: 89, cost: 90 },
    { name: "Luigi Sala", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "99", rating: 78, cost: 55 },
    { name: "Thomas Helveg", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "99", rating: 79, cost: 60 },
    { name: "Demetrio Albertini (99)", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "99", rating: 84, cost: 80 },
    { name: "Massimo Ambrosini (99)", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "99", rating: 81, cost: 65 },
    { name: "Zvonimir Boban (99)", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "99", rating: 85, cost: 80 },
    { name: "Andrés Guglielminpietro", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "99", rating: 78, cost: 55 },
    { name: "Oliver Bierhoff", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "99", rating: 86, cost: 85 },
    { name: "George Weah", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "99", rating: 88, cost: 90 },
    // Reservas
    { name: "Sebastiano Rossi (99)", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "99", rating: 78, cost: 50 },
    { name: "Roberto Fabian Ayala", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "99", rating: 81, cost: 65 },
    { name: "Leonardo", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "99", rating: 83, cost: 75 },
    { name: "Maurizio Ganz", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "99", rating: 79, cost: 60 },

    // ==========================================
    // INTER DE MILÃO 1991 (Campeã da Copa da UEFA)
    // ==========================================
    { name: "Walter Zenga", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 88, cost: 85 },
    { name: "Giuseppe Bergomi (91)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 86, cost: 80 },
    { name: "Riccardo Ferri", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 82, cost: 70 },
    { name: "Sergio Battistini", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 80, cost: 65 },
    { name: "Andreas Brehme", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 88, cost: 85 },
    { name: "Lothar Matthäus", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 92, cost: 95 },
    { name: "Nicola Berti", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 84, cost: 75 },
    { name: "Alessandro Bianchi", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 79, cost: 60 },
    { name: "Antonio Paganin", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 77, cost: 50 },
    { name: "Jürgen Klinsmann", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 88, cost: 90 },
    { name: "Aldo Serena", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 82, cost: 75 },
    // Reservas
    { name: "Beniamino Abate", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 72, cost: 35 },
    { name: "Corrado Verdelli", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 75, cost: 45 },
    { name: "Fausto Pizzi", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 76, cost: 50 },
    { name: "Maurizio Iorio", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "91", rating: 75, cost: 45 },
    // ==========================================
    // INTER DE MILÃO 1994 (Campeã da Copa da UEFA)
    // ==========================================
    { name: "Walter Zenga (94)", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 85, cost: 75 },
    { name: "Giuseppe Bergomi (94)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 84, cost: 75 },
    { name: "Riccardo Ferri (94)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 80, cost: 60 },
    { name: "Antonio Paganin (94)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 78, cost: 55 },
    { name: "Gianluca Festa", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 77, cost: 50 },
    { name: "Wim Jonk", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 83, cost: 75 },
    { name: "Nicola Berti (94)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 82, cost: 70 },
    { name: "Alessandro Bianchi (94)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 78, cost: 55 },
    { name: "Angelo Orlando", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 77, cost: 50 },
    { name: "Rubén Sosa", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 86, cost: 85 },
    { name: "Dennis Bergkamp", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 89, cost: 90 },
    // Reservas
    { name: "Beniamino Abate (94)", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 72, cost: 35 },
    { name: "Massimo Paganin", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 76, cost: 45 },
    { name: "Francesco Dell'Anno", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 76, cost: 45 },
    { name: "Darko Pančev", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "94", rating: 78, cost: 60 },

    // ==========================================
    // PARMA 1995 (O Esquadrão de Zola e Asprilla)
    // ==========================================
    { name: "Luca Bucci", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "95", rating: 82, cost: 70 },
    { name: "Lorenzo Minotti", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 82, cost: 70 },
    { name: "Luigi Apolloni", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 81, cost: 65 },
    { name: "Fernando Couto (95)", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 84, cost: 75 },
    { name: "Alberto Di Chiara", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 79, cost: 60 },
    { name: "Roberto Sensini (95)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 83, cost: 75 },
    { name: "Dino Baggio (95)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 85, cost: 80 },
    { name: "Massimo Crippa", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 80, cost: 65 },
    { name: "Tomas Brolin", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 84, cost: 80 },
    { name: "Gianfranco Zola", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 89, cost: 90 },
    { name: "Faustino Asprilla (95)", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 86, cost: 85 },
    // Reservas
    { name: "Giovanni Galli (95)", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "95", rating: 75, cost: 45 },
    { name: "Marcello Castellini", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 76, cost: 45 },
    { name: "Stefano Fiore (95)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 78, cost: 55 },
    { name: "Marco Branca", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 80, cost: 65 },

    // ==========================================
    // FIORENTINA 1990 (A Era Baggio Jovem)
    // ==========================================
    { name: "Marco Landucci", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 80, cost: 65 },
    { name: "Sergio Battistini (90)", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 81, cost: 65 },
    { name: "Giuseppe Volpecina", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 78, cost: 55 },
    { name: "Stefano Pioli", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 78, cost: 55 },
    { name: "Alberto Di Chiara (90)", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 80, cost: 60 },
    { name: "Dunga", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 87, cost: 85 }, // Capitão do tetra jovem
    { name: "Lubos Kubik", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 80, cost: 65 },
    { name: "Renato Buso", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    { name: "Giacomo Banchelli", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 75, cost: 45 },
    { name: "Roberto Baggio (90)", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 91, cost: 95 },
    { name: "Oscar Dertycia", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    // Reservas
    { name: "Giuseppe Pellicanò", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 73, cost: 35 },
    { name: "Celeste Pin", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 76, cost: 45 },
    { name: "Giuseppe Iachini", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 77, cost: 50 },
    { name: "Marco Nappi", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "90", rating: 78, cost: 55 },

    // ==========================================
    // FIORENTINA 1998 (Batistuta e Edmundo)
    // ==========================================
    { name: "Francesco Toldo (98)", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    { name: "Tomáš Řepka", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Pasquale Padalino", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 80, cost: 60 },
    { name: "Aldo Firicano", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Jörg Heinrich", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 82, cost: 70 },
    { name: "Sandro Cois", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 80, cost: 65 },
    { name: "Guillermo Amor (98)", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Rui Costa (98)", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 89, cost: 90 },
    { name: "Edmundo", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 87, cost: 85 }, // O Animal aprontando em Florença
    { name: "Gabriel Batistuta (98)", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 92, cost: 96 },
    { name: "Luis Oliveira", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    // Reservas
    { name: "Gianmatteo Mareggini", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 74, cost: 40 },
    { name: "Moreno Torricelli (98)", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 80, cost: 65 },
    { name: "Mauro Bressan", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Anselmo Robbiati (98)", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    // ==========================================
    // ROMA 1991 (Finalista da Copa da UEFA)
    // ==========================================
    { name: "Giovanni Cervone", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "91", rating: 81, cost: 65 },
    { name: "Aldair (91)", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "91", rating: 86, cost: 80 },
    { name: "Sebastiano Nela", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "91", rating: 80, cost: 65 },
    { name: "Thomas Berthold", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "91", rating: 82, cost: 70 },
    { name: "Amedeo Carboni (91)", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "91", rating: 79, cost: 60 },
    { name: "Giuseppe Giannini", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "91", rating: 85, cost: 80 }, // Il Principe
    { name: "Manuel Gerolin", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "91", rating: 78, cost: 55 },
    { name: "Fabrizio Di Mauro", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "91", rating: 79, cost: 60 },
    { name: "Stefano Desideri", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "91", rating: 78, cost: 55 },
    { name: "Rudi Völler", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "91", rating: 88, cost: 90 },
    { name: "Ruggiero Rizzitelli", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "91", rating: 81, cost: 65 },
    // Reservas
    { name: "Giuseppe Zinetti", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "91", rating: 72, cost: 35 },
    { name: "Antonio Comi", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "91", rating: 75, cost: 45 },
    { name: "Fausto Salsano", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "91", rating: 76, cost: 45 },
    { name: "Roberto Muzzi", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "91", rating: 77, cost: 50 },

    // ==========================================
    // ROMA 1996 (A Ascensão de Francesco Totti)
    // ==========================================
    { name: "Giovanni Cervone (96)", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "96", rating: 80, cost: 60 },
    { name: "Aldair (96)", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "96", rating: 85, cost: 80 },
    { name: "Enrico Annoni", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "96", rating: 77, cost: 50 },
    { name: "Fabio Petruzzi", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "96", rating: 78, cost: 55 },
    { name: "Amedeo Carboni (96)", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "96", rating: 79, cost: 60 },
    { name: "Giuseppe Giannini (96)", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "96", rating: 81, cost: 70 },
    { name: "Massimiliano Cappioli", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "96", rating: 78, cost: 55 },
    { name: "Luigi Di Biagio", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "96", rating: 82, cost: 70 },
    { name: "Francesco Totti (96)", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "96", rating: 84, cost: 80 }, // Garoto de Ouro
    { name: "Abel Balbo", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "96", rating: 86, cost: 85 },
    { name: "Daniel Fonseca (96)", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "96", rating: 83, cost: 75 },
    // Reservas
    { name: "Giorgio Sterchele", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "96", rating: 73, cost: 35 },
    { name: "Marco Lanna", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "96", rating: 76, cost: 45 },
    { name: "Francesco Statuto", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "96", rating: 76, cost: 45 },
    { name: "Marco Delvecchio (96)", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "96", rating: 79, cost: 60 },

    // ==========================================
    // LAZIO 1993 (Signori e Gascoigne)
    // ==========================================
    { name: "Luca Marchegiani (93)", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "93", rating: 82, cost: 70 },
    { name: "Roberto Cravero", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "93", rating: 80, cost: 60 },
    { name: "Luigi Corino", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "93", rating: 76, cost: 45 },
    { name: "Cristiano Bergodi", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "93", rating: 77, cost: 50 },
    { name: "Angelo Gregucci", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "93", rating: 76, cost: 45 },
    { name: "Paul Gascoigne", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "93", rating: 87, cost: 85 }, // Gazza genial
    { name: "Aron Winter (93)", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "93", rating: 81, cost: 65 },
    { name: "Diego Fuser (93)", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "93", rating: 81, cost: 65 },
    { name: "Thomas Doll", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "93", rating: 80, cost: 60 },
    { name: "Giuseppe Signori", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "93", rating: 89, cost: 90 }, // Capocannoniere
    { name: "Karl-Heinz Riedle", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "93", rating: 84, cost: 75 },
    // Reservas
    { name: "Fernando Orsi", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "93", rating: 73, cost: 35 },
    { name: "Roberto Bacci", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "93", rating: 75, cost: 40 },
    { name: "Fabrizio Di Mauro (93)", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "93", rating: 77, cost: 50 },
    { name: "Maurizio Neri", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "93", rating: 75, cost: 40 },
    

    // ==========================================
    // LAZIO 1998 (Campeã da Coppa Italia)
    // ==========================================
    { name: "Luca Marchegiani (98)", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "98", rating: 83, cost: 75 },
    { name: "Alessandro Nesta (98)", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "98", rating: 88, cost: 85 },
    { name: "Paolo Negro (98)", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "98", rating: 80, cost: 60 },
    { name: "Giuseppe Pancaro (98)", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "98", rating: 79, cost: 55 },
    { name: "José Chamot", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Giorgio Venturin", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Diego Fuser (98)", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "98", rating: 82, cost: 70 },
    { name: "Pavel Nedvěd (98)", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "98", rating: 86, cost: 85 },
    { name: "Roberto Mancini (98)", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "98", rating: 84, cost: 75 },
    { name: "Pierluigi Casiraghi", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "98", rating: 82, cost: 70 },
    { name: "Alen Bokšić", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    // Reservas
    { name: "Marco Ballotta (98)", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "98", rating: 74, cost: 40 },
    { name: "Guerino Gottardi", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "98", rating: 75, cost: 40 },
    { name: "Matias Almeyda", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Giuseppe Signori (98)", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "98", rating: 83, cost: 75 },

    // ==========================================
    // NAPOLI 1990 (Campeão do Scudetto Clássico)
    // ==========================================
    { name: "Giuliano Giuliani", posicao: "GOL", time: "Napoli", liga: "Série A", temporada: "90", rating: 82, cost: 70 },
    { name: "Ciro Ferrara (90)", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "90", rating: 86, cost: 80 },
    { name: "Giancarlo Corradini", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    { name: "Alessandro Renica", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "90", rating: 79, cost: 55 },
    { name: "Giovanni Francini", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    { name: "Fernando De Napoli", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "90", rating: 82, cost: 70 },
    { name: "Alemão", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "90", rating: 85, cost: 80 }, // Motor do meio-campo
    { name: "Luca Fusi", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "90", rating: 78, cost: 55 },
    { name: "Diego Maradona (90)", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "90", rating: 96, cost: 99 }, // D10S impecável
    { name: "Careca", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "90", rating: 91, cost: 95 }, // Dupla Ma-Gi-Ca
    { name: "Andrea Carnevale", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "90", rating: 81, cost: 65 },
    // Reservas
    { name: "Raffaele Di Fusco", posicao: "GOL", time: "Napoli", liga: "Série A", temporada: "90", rating: 71, cost: 30 },
    { name: "Tebaldo Bigliardi", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "90", rating: 75, cost: 40 },
    { name: "Massimo Crippa (90)", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "90", rating: 79, cost: 60 },
    { name: "Gianfranco Zola (90)", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "90", rating: 80, cost: 65 }, // Jovem reserva de Diego

    // ==========================================
    // NAPOLI 1993 (A Transição Pós-Maradona)
    // ==========================================
    { name: "Giovanni Galli (93)", posicao: "GOL", time: "Napoli", liga: "Série A", temporada: "93", rating: 80, cost: 60 },
    { name: "Ciro Ferrara (93)", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "93", rating: 84, cost: 75 },
    { name: "Giancarlo Corradini (93)", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "93", rating: 77, cost: 50 },
    { name: "Giovanni Francini (93)", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "93", rating: 76, cost: 50 },
    { name: "Sebastiano Nela (93)", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "93", rating: 77, cost: 45 },
    { name: "Jonas Thern", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "93", rating: 81, cost: 65 },
    { name: "Massimo Crippa (93)", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "93", rating: 78, cost: 55 },
    { name: "Angelo Carbone", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "93", rating: 76, cost: 45 },
    { name: "Gianfranco Zola (93)", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "93", rating: 86, cost: 85 }, // O herdeiro da 10
    { name: "Daniel Fonseca (93)", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "93", rating: 84, cost: 75 },
    { name: "Careca (93)", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "93", rating: 85, cost: 80 },
    // Reservas
    { name: "Raffaele Di Fusco (93)", posicao: "GOL", time: "Napoli", liga: "Série A", temporada: "93", rating: 71, cost: 30 },
    { name: "Enzo Gambaro", posicao: "ZAG", time: "Napoli", liga: "Série A", temporada: "93", rating: 75, cost: 40 },
    { name: "Fausto Pari", posicao: "MEI", time: "Napoli", liga: "Série A", temporada: "93", rating: 76, cost: 45 },
    { name: "Fausto Rossini", posicao: "ATA", time: "Napoli", liga: "Série A", temporada: "93", rating: 74, cost: 40 },

    // ==========================================
    // MILAN 1994
    // ==========================================
    { name: "S. Rossi", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "94", rating: 84, cost: 80 },
    { name: "F. Baresi", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "94", rating: 92, cost: 95 },
    { name: "A. Costacurta", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "94", rating: 86, cost: 85 },
    { name: "P. Maldini", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "94", rating: 94, cost: 98 },
    { name: "M. Tassotti", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "94", rating: 81, cost: 70 },
    { name: "D. Albertini", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "94", rating: 85, cost: 85 },
    { name: "M. Desailly", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "94", rating: 88, cost: 90 },
    { name: "R. Donadoni", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "94", rating: 84, cost: 80 },
    { name: "Z. Boban", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "94", rating: 85, cost: 85 },
    { name: "D. Savicevic", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "94", rating: 88, cost: 90 },
    { name: "D. Massaro", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "94", rating: 82, cost: 75 },
    // Reservas
    { name: "M. Ielpo", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "94", rating: 73, cost: 35 },
    { name: "C. Panucci", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "94", rating: 81, cost: 65 },
    { name: "S. Eranio", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "94", rating: 79, cost: 55 },
    { name: "M. Simone", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "94", rating: 82, cost: 70 },

    // ==========================================
    // FIORENTINA 1996
    // ==========================================
    { name: "F. Toldo", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 83, cost: 75 },
    { name: "L. Amoruso", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 79, cost: 60 },
    { name: "D. Carnasciali", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 77, cost: 50 },
    { name: "A. Sottil", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 76, cost: 45 },
    { name: "P. Pioli", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 75, cost: 40 },
    { name: "S. Cois", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 78, cost: 55 },
    { name: "E. Bigica", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 76, cost: 45 },
    { name: "M. Piacentini", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 75, cost: 40 },
    { name: "Rui Costa", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 88, cost: 90 },
    { name: "G. Batistuta", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 91, cost: 95 },
    { name: "F. Baiano", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 80, cost: 65 },
    // Reservas
    { name: "G. Mareggini", posicao: "GOL", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 71, cost: 30 },
    { name: "P. Padalino", posicao: "ZAG", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 77, cost: 50 },
    { name: "Anselmo Robbiati", posicao: "MEI", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 77, cost: 55 },
    { name: "G. Oliveira", posicao: "ATA", time: "Fiorentina", liga: "Série A", temporada: "96", rating: 78, cost: 60 },

    // ==========================================
    // INTER DE MILÃO 1998
    // ==========================================
    { name: "G. Pagliuca", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 84, cost: 75 },
    { name: "G. Bergomi", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 82, cost: 65 },
    { name: "T. West", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 79, cost: 55 },
    { name: "F. Colonnese", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 78, cost: 50 },
    { name: "J. Zanetti", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 86, cost: 85 },
    { name: "D. Simeone", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 83, cost: 75 },
    { name: "A. Winter", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 80, cost: 60 },
    { name: "B. Cauet", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Youri Djorkaeff", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    { name: "Ronaldo", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 95, cost: 99 },
    { name: "I. Zamorano", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 84, cost: 75 },
    // Reservas
    { name: "S. Frey", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 76, cost: 45 },
    { name: "Luigi Sartor", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 75, cost: 45 },
    { name: "Ze Elias", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Alvaro Recoba", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "98", rating: 83, cost: 75 },
    
    // ==========================================
    // SAMPDORIA 1994 (Mancini e Gullit)
    // ==========================================
    { name: "Gianluca Pagliuca (94)", posicao: "GOL", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 85, cost: 80 },
    { name: "Pietro Vierchowod", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 85, cost: 80 },
    { name: "Stefano Sacchetti", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 78, cost: 55 },
    { name: "Moreno Mannini", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 80, cost: 65 },
    { name: "Michele Serena", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 79, cost: 60 },
    { name: "David Platt", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 84, cost: 75 },
    { name: "Vladimir Jugović", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 85, cost: 80 },
    { name: "Attilio Lombardo", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 84, cost: 75 },
    { name: "Ruud Gullit (94)", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 90, cost: 95 },
    { name: "Roberto Mancini (94)", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 88, cost: 90 },
    { name: "Alen Bokšić (94)", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 84, cost: 75 },
    // Reservas
    { name: "Giulio Nuciari", posicao: "GOL", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 72, cost: 35 },
    { name: "Fausto Pari (94)", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 76, cost: 45 },
    { name: "Giovanni Invernizzi", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 77, cost: 50 },
    { name: "Claudio Bellucci", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "94", rating: 76, cost: 45 },

    // ==========================================
    // SAMPDORIA 1997 (A Era Verón e Montella)
    // ==========================================
    { name: "Fabrizio Ferron", posicao: "GOL", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 80, cost: 65 },
    { name: "Siniša Mihajlović (97)", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 83, cost: 75 },
    { name: "Stefano Sacchetti (97)", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 77, cost: 50 },
    { name: "Moreno Mannini (97)", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 78, cost: 55 },
    { name: "Marcello Castellini (97)", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 76, cost: 45 },
    { name: "Juan Sebastián Verón (97)", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 86, cost: 85 },
    { name: "Christian Karembeu", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 82, cost: 70 },
    { name: "Pierre Laigle", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 79, cost: 60 },
    { name: "Fausto Salsano (97)", posicao: "MEI", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 75, cost: 45 },
    { name: "Vincenzo Montella (97)", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 85, cost: 80 },
    { name: "Roberto Mancini (97)", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 86, cost: 85 },
    // Reservas
    { name: "Matteo Sereni", posicao: "GOL", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 74, cost: 40 },
    { name: "Oumar Dieng", posicao: "ZAG", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 75, cost: 40 },
    { name: "Marco Carparelli", posicao: "ATA", time: "Sampdoria", liga: "Série A", temporada: "97", rating: 76, cost: 45 },

    // ==========================================
    // BRESCIA 2000 (Baggio e Pirlo Jovem)
    // ==========================================
    { name: "Pavel Srníček", posicao: "GOL", time: "Brescia", liga: "Série A", temporada: "00", rating: 79, cost: 55 },
    { name: "Daniele Bonera", posicao: "ZAG", time: "Brescia", liga: "Série A", temporada: "00", rating: 79, cost: 60 },
    { name: "Alessandro Pierini", posicao: "ZAG", time: "Brescia", liga: "Série A", temporada: "00", rating: 76, cost: 45 },
    { name: "Vittorio Mero", posicao: "ZAG", time: "Brescia", liga: "Série A", temporada: "00", rating: 75, cost: 40 },
    { name: "Aimo Diana", posicao: "ZAG", time: "Brescia", liga: "Série A", temporada: "00", rating: 78, cost: 55 },
    { name: "Andrea Pirlo (00)", posicao: "MEI", time: "Brescia", liga: "Série A", temporada: "00", rating: 82, cost: 75 },
    { name: "Roberto Baronio", posicao: "MEI", time: "Brescia", liga: "Série A", temporada: "00", rating: 78, cost: 55 },
    { name: "Matias Almeyda (00)", posicao: "MEI", time: "Brescia", liga: "Série A", temporada: "00", rating: 80, cost: 65 },
    { name: "Roberto Baggio (00)", posicao: "MEI", time: "Brescia", liga: "Série A", temporada: "00", rating: 89, cost: 95 },
    { name: "Dario Hübner", posicao: "ATA", time: "Brescia", liga: "Série A", temporada: "00", rating: 83, cost: 75 },
    { name: "Igli Tare", posicao: "ATA", time: "Brescia", liga: "Série A", temporada: "00", rating: 77, cost: 45 },
    // Reservas
    { name: "Giacomo Violini", posicao: "GOL", time: "Brescia", liga: "Série A", temporada: "00", rating: 70, cost: 30 },
    { name: "Marek Koźmiński", posicao: "ZAG", time: "Brescia", liga: "Série A", temporada: "00", rating: 75, cost: 45 },
    { name: "Massimiliano Esposito", posicao: "MEI", time: "Brescia", liga: "Série A", temporada: "00", rating: 76, cost: 45 },
    { name: "Florin Răducioiu", posicao: "ATA", time: "Brescia", liga: "Série A", temporada: "00", rating: 78, cost: 55 },

    // ==========================================
    // EMPOLI 1998 (Surge Di Natale)
    // ==========================================
    { name: "Marco Roccati", posicao: "GOL", time: "Empoli", liga: "Série A", temporada: "98", rating: 76, cost: 45 },
    { name: "Filippo Dal Moro", posicao: "ZAG", time: "Empoli", liga: "Série A", temporada: "98", rating: 75, cost: 40 },
    { name: "Stefano Bettarini", posicao: "ZAG", time: "Empoli", liga: "Série A", temporada: "98", rating: 76, cost: 45 },
    { name: "Andrea Cupi", posicao: "ZAG", time: "Empoli", liga: "Série A", temporada: "98", rating: 74, cost: 40 },
    { name: "Roberto Goretti", posicao: "MEI", time: "Empoli", liga: "Série A", temporada: "98", rating: 75, cost: 45 },
    { name: "Alessandro Pane", posicao: "MEI", time: "Empoli", liga: "Série A", temporada: "98", rating: 74, cost: 40 },
    { name: "Vincenzo Grella", posicao: "MEI", time: "Empoli", liga: "Série A", temporada: "98", rating: 76, cost: 50 },
    { name: "Ighli Vannucchi", posicao: "MEI", time: "Empoli", liga: "Série A", temporada: "98", rating: 79, cost: 60 },
    { name: "Antonio Di Natale", posicao: "ATA", time: "Empoli", liga: "Série A", temporada: "98", rating: 79, cost: 65 },
    { name: "Massimo Maccarone", posicao: "ATA", time: "Empoli", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Marcelo Zalayeta", posicao: "ATA", time: "Empoli", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    // Reservas
    { name: "Giulio Drago", posicao: "GOL", time: "Empoli", liga: "Série A", temporada: "98", rating: 71, cost: 30 },
    { name: "Max Tonetto", posicao: "ZAG", time: "Empoli", liga: "Série A", temporada: "98", rating: 75, cost: 45 },
    { name: "Carmine Esposito", posicao: "ATA", time: "Empoli", liga: "Série A", temporada: "98", rating: 76, cost: 45 },

    // ==========================================
    // BOLOGNA 1998 (Andersson e Signori)
    // ==========================================
    { name: "Francesco Antonioli (98)", posicao: "GOL", time: "Bologna", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Michele Paramatti", posicao: "ZAG", time: "Bologna", liga: "Série A", temporada: "98", rating: 79, cost: 55 },
    { name: "Massimo Paganin (98)", posicao: "ZAG", time: "Bologna", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Giulio Falcone", posicao: "ZAG", time: "Bologna", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Carlo Nervo", posicao: "ZAG", time: "Bologna", liga: "Série A", temporada: "98", rating: 78, cost: 55 },
    { name: "Giancarlo Marocchi (98)", posicao: "MEI", time: "Bologna", liga: "Série A", temporada: "98", rating: 79, cost: 60 },
    { name: "Klas Ingesson", posicao: "MEI", time: "Bologna", liga: "Série A", temporada: "98", rating: 81, cost: 65 },
    { name: "Igor Kolyvanov", posicao: "MEI", time: "Bologna", liga: "Série A", temporada: "98", rating: 80, cost: 65 },
    { name: "Teddy Lučić", posicao: "MEI", time: "Bologna", liga: "Série A", temporada: "98", rating: 76, cost: 45 },
    { name: "Kennet Andersson", posicao: "ATA", time: "Bologna", liga: "Série A", temporada: "98", rating: 84, cost: 75 },
    { name: "Giuseppe Signori (98-B)", posicao: "ATA", time: "Bologna", liga: "Série A", temporada: "98", rating: 85, cost: 80 },
    // Reservas
    { name: "Alex Brunner", posicao: "GOL", time: "Bologna", liga: "Série A", temporada: "98", rating: 72, cost: 35 },
    { name: "Amedeo Mangone", posicao: "ZAG", time: "Bologna", liga: "Série A", temporada: "98", rating: 76, cost: 45 },
    { name: "Davide Fontolan", posicao: "MEI", time: "Bologna", liga: "Série A", temporada: "98", rating: 77, cost: 50 },
    { name: "Christophe Sanchez", posicao: "ATA", time: "Bologna", liga: "Série A", temporada: "98", rating: 75, cost: 40 },

    // ==========================================
    // PARMA 1995 (Ajuste e Reservas)
    // ==========================================
    { name: "G. Buffon (95)", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "95", rating: 81, cost: 65 },
    { name: "Antonio Benarrivo", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 82, cost: 70 },
    { name: "Lorenzo Minotti (95)", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 81, cost: 65 },
    { name: "Luigi Apolloni (95)", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 80, cost: 60 },
    { name: "Fernando Couto (95-P)", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 84, cost: 75 },
    { name: "Roberto Sensini (95-P)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 83, cost: 75 },
    { name: "Dino Baggio (95-P)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 84, cost: 80 },
    { name: "Massimo Crippa (95)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 80, cost: 65 },
    { name: "Gianfranco Zola (95)", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 89, cost: 90 },
    { name: "Faustino Asprilla (95)", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 85, cost: 85 },
    { name: "Filippo Inzaghi (95)", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 80, cost: 70 },
    // Reservas
    { name: "Luca Bucci (95)", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "95", rating: 81, cost: 65 },
    { name: "Roberto Mussi (95)", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "95", rating: 79, cost: 55 },
    { name: "Gabriele Pin", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "95", rating: 77, cost: 50 },
    { name: "Alessandro Melli", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "95", rating: 78, cost: 55 },

    // ==========================================
    // PARMA 1999
    // ==========================================
    { name: "G. Buffon", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "99", rating: 88, cost: 90 },
    { name: "L. Thuram", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "99", rating: 89, cost: 90 },
    { name: "F. Cannavaro", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "99", rating: 89, cost: 90 },
    { name: "R. Sensini", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "99", rating: 81, cost: 70 },
    { name: "P. Vanoli", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "99", rating: 78, cost: 55 },
    { name: "D. Fuser", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "99", rating: 80, cost: 65 },
    { name: "A. Boghossian", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "99", rating: 80, cost: 65 },
    { name: "J. S. Veron", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "99", rating: 88, cost: 90 },
    { name: "M. Stanic", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "99", rating: 78, cost: 55 },
    { name: "E. Chiesa", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "99", rating: 84, cost: 80 },
    { name: "H. Crespo", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "99", rating: 88, cost: 90 },
    // Reservas
    { name: "D. Guardalben", posicao: "GOL", time: "Parma", liga: "Série A", temporada: "99", rating: 72, cost: 35 },
    { name: "L. Sartor", posicao: "ZAG", time: "Parma", liga: "Série A", temporada: "99", rating: 76, cost: 45 },
    { name: "S. Fiore", posicao: "MEI", time: "Parma", liga: "Série A", temporada: "99", rating: 81, cost: 70 },
    { name: "F. Asprilla", posicao: "ATA", time: "Parma", liga: "Série A", temporada: "99", rating: 80, cost: 65 },

    // ==========================================
    // GENOA 1991
    // ==========================================
    { name: "S. Braglia", posicao: "GOL", time: "Genoa", liga: "Série A", temporada: "91", rating: 78, cost: 60 },
    { name: "Branco", posicao: "ZAG", time: "Genoa", liga: "Série A", temporada: "91", rating: 82, cost: 80 },
    { name: "G. Signorini", posicao: "ZAG", time: "Genoa", liga: "Série A", temporada: "91", rating: 79, cost: 65 },
    { name: "V. Torrente", posicao: "ZAG", time: "Genoa", liga: "Série A", temporada: "91", rating: 78, cost: 60 },
    { name: "N. Caricola", posicao: "ZAG", time: "Genoa", liga: "Série A", temporada: "91", rating: 77, cost: 55 },
    { name: "G. Ruotolo", posicao: "MEI", time: "Genoa", liga: "Série A", temporada: "91", rating: 78, cost: 60 },
    { name: "S. Eranio", posicao: "MEI", time: "Genoa", liga: "Série A", temporada: "91", rating: 80, cost: 70 },
    { name: "M. Bortolazzi", posicao: "MEI", time: "Genoa", liga: "Série A", temporada: "91", rating: 77, cost: 55 },
    { name: "O. Skuhravy", posicao: "ATA", time: "Genoa", liga: "Série A", temporada: "91", rating: 83, cost: 75 },
    { name: "C. Aguilera", posicao: "ATA", time: "Genoa", liga: "Série A", temporada: "91", rating: 82, cost: 75 },
    { name: "M. Pacione", posicao: "ATA", time: "Genoa", liga: "Série A", temporada: "91", rating: 74, cost: 45 },
    // Reservas
    { name: "A. Pinato", posicao: "GOL", time: "Genoa", liga: "Série A", temporada: "91", rating: 70, cost: 30 },
    { name: "A. Carasso", posicao: "ZAG", time: "Genoa", liga: "Série A", temporada: "91", rating: 73, cost: 40 },
    { name: "A. Fiorin", posicao: "MEI", time: "Genoa", liga: "Série A", temporada: "91", rating: 74, cost: 40 },

    // ==========================================
    // LAZIO 2000
    // ==========================================
    { name: "Luca Marchegiani", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "00", rating: 83, cost: 75 },
    { name: "Alessandro Nesta", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "00", rating: 91, cost: 95 },
    { name: "Siniša Mihajlović", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "00", rating: 85, cost: 85 },
    { name: "Giuseppe Pancaro", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "00", rating: 79, cost: 60 },
    { name: "Paolo Negro", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "00", rating: 79, cost: 60 },
    { name: "Diego Simeone", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "00", rating: 84, cost: 75 },
    { name: "Juan Sebastián Verón", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "00", rating: 89, cost: 90 },
    { name: "Pavel Nedvěd", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "00", rating: 88, cost: 90 },
    { name: "Sérgio Conceição", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "00", rating: 82, cost: 70 },
    { name: "Roberto Mancini", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "00", rating: 83, cost: 75 },
    { name: "Hernán Crespo", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "00", rating: 89, cost: 90 },
    // Reservas
    { name: "Marco Ballotta", posicao: "GOL", time: "Lazio", liga: "Série A", temporada: "00", rating: 74, cost: 40 },
    { name: "Fernando Couto", posicao: "ZAG", time: "Lazio", liga: "Série A", temporada: "00", rating: 81, cost: 65 },
    { name: "Dejan Stanković", posicao: "MEI", time: "Lazio", liga: "Série A", temporada: "00", rating: 81, cost: 65 },
    { name: "Marcelo Salas", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "00", rating: 85, cost: 80 },
    { name: "Simone Inzaghi", posicao: "ATA", time: "Lazio", liga: "Série A", temporada: "00", rating: 79, cost: 60 },
    // ==========================================
    // ROMA 2001 (Scudetto Histórico)
    // ==========================================
    { name: "Francesco Antonioli", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "01", rating: 80, cost: 65 },
    { name: "Walter Samuel", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 86, cost: 80 },
    { name: "Aldair", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 85, cost: 80 },
    { name: "Jonathan Zebina", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 78, cost: 55 },
    { name: "Cafu", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 89, cost: 90 },
    { name: "Vincent Candela", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 82, cost: 70 },
    { name: "Damiano Tommasi", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "01", rating: 81, cost: 65 },
    { name: "Emerson", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "01", rating: 84, cost: 75 },
    { name: "Francesco Totti", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "01", rating: 92, cost: 95 },
    { name: "Gabriel Batistuta", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "01", rating: 90, cost: 95 },
    { name: "Marco Delvecchio", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "01", rating: 81, cost: 65 },
    // Reservas
    { name: "Cristiano Lupatelli", posicao: "GOL", time: "Roma", liga: "Série A", temporada: "01", rating: 73, cost: 35 },
    { name: "Alessandro Rinaldi", posicao: "ZAG", time: "Roma", liga: "Série A", temporada: "01", rating: 74, cost: 40 },
    { name: "Hidetoshi Nakata", posicao: "MEI", time: "Roma", liga: "Série A", temporada: "01", rating: 82, cost: 75 },
    { name: "Vincenzo Montella", posicao: "ATA", time: "Roma", liga: "Série A", temporada: "01", rating: 84, cost: 80 },

    // ==========================================
    // JUVENTUS 2003 (Campeã e Vice da Champions)
    // ==========================================
    { name: "G. Buffon (03)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "03", rating: 91, cost: 95 },
    { name: "Lilian Thuram", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 88, cost: 85 },
    { name: "Ciro Ferrara", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 82, cost: 65 },
    { name: "Paolo Montero", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 81, cost: 65 },
    { name: "Gianluca Zambrotta", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 86, cost: 80 },
    { name: "Alessio Tacchinardi", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "03", rating: 80, cost: 65 },
    { name: "Edgar Davids", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "03", rating: 88, cost: 90 },
    { name: "Mauro Camoranesi", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "03", rating: 83, cost: 75 },
    { name: "Pavel Nedvěd (03)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "03", rating: 92, cost: 95 },
    { name: "Alessandro Del Piero", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "03", rating: 90, cost: 95 },
    { name: "David Trézéguet", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "03", rating: 87, cost: 85 },
    // Reservas
    { name: "Antonio Chimenti", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "03", rating: 74, cost: 40 },
    { name: "Mark Iuliano", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 78, cost: 55 },
    { name: "Gianluca Pessotto", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "03", rating: 77, cost: 50 },
    { name: "Antonio Conte (03)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "03", rating: 79, cost: 60 },
    { name: "Marco Di Vaio", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "03", rating: 82, cost: 70 },

    // ==========================================
    // MILAN 2004 (Esquadrão de Kaká e Sheva)
    // ==========================================
    { name: "Dida", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "04", rating: 86, cost: 80 },
    { name: "Alessandro Nesta (04)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "04", rating: 90, cost: 95 },
    { name: "Paolo Maldini (04)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "04", rating: 92, cost: 98 },
    { name: "Cafu (04)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "04", rating: 87, cost: 85 },
    { name: "Alessandro Costacurta (04)", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "04", rating: 80, cost: 60 },
    { name: "Andrea Pirlo", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 89, cost: 90 },
    { name: "Gennaro Gattuso", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 84, cost: 75 },
    { name: "Clarence Seedorf (04)", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 86, cost: 85 },
    { name: "Kaká", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 91, cost: 95 },
    { name: "Andriy Shevchenko", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "04", rating: 92, cost: 95 },
    { name: "Jon Dahl Tomasson", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "04", rating: 81, cost: 65 },
    // Reservas
    { name: "Christian Abbiati", posicao: "GOL", time: "Milan", liga: "Série A", temporada: "04", rating: 78, cost: 50 },
    { name: "Kakha Kaladze", posicao: "ZAG", time: "Milan", liga: "Série A", temporada: "04", rating: 80, cost: 60 },
    { name: "Massimo Ambrosini", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 81, cost: 65 },
    { name: "Manuel Rui Costa", posicao: "MEI", time: "Milan", liga: "Série A", temporada: "04", rating: 83, cost: 75 },
    { name: "Filippo Inzaghi", posicao: "ATA", time: "Milan", liga: "Série A", temporada: "04", rating: 85, cost: 80 },

    // ==========================================
    // JUVENTUS 2005 (Título Revogado)
    // ==========================================
    { name: "G. Buffon (05)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "05", rating: 90, cost: 90 },
    { name: "Fabio Cannavaro (05)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 91, cost: 95 },
    { name: "Lilian Thuram (05)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 87, cost: 85 },
    { name: "Jonathan Zebina (05)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 79, cost: 55 },
    { name: "Gianluca Zambrotta (05)", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 85, cost: 80 },
    { name: "Emerson (05)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "05", rating: 85, cost: 80 },
    { name: "Patrick Vieira (05)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "05", rating: 86, cost: 85 },
    { name: "Mauro Camoranesi (05)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "05", rating: 83, cost: 75 },
    { name: "Pavel Nedvěd (05)", posicao: "MEI", time: "Juventus", liga: "Série A", temporada: "05", rating: 89, cost: 90 },
    { name: "Zlatan Ibrahimović (05)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "05", rating: 87, cost: 85 },
    { name: "David Trézéguet (05)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "05", rating: 86, cost: 85 },
    // Reservas
    { name: "Antonio Chimenti (05)", posicao: "GOL", time: "Juventus", liga: "Série A", temporada: "05", rating: 73, cost: 35 },
    { name: "Robert Kovač", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 79, cost: 55 },
    { name: "Giorgio Chiellini", posicao: "ZAG", time: "Juventus", liga: "Série A", temporada: "05", rating: 78, cost: 55 },
    { name: "Alessandro Del Piero (05)", posicao: "ATA", time: "Juventus", liga: "Série A", temporada: "05", rating: 88, cost: 90 },

    // ==========================================
    // INTERNAZIONALE 2006 (O Auge do Imperador)
    // ==========================================
    { name: "Francesco Toldo (06)", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 83, cost: 70 },
    { name: "Iván Córdoba", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 82, cost: 65 },
    { name: "Marco Materazzi", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 81, cost: 60 },
    { name: "Javier Zanetti (06)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 87, cost: 85 },
    { name: "Giuseppe Favalli", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 76, cost: 45 },
    { name: "Esteban Cambiasso", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 84, cost: 75 },
    { name: "Juan Sebastián Verón (06)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 85, cost: 80 },
    { name: "Dejan Stanković (06)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 82, cost: 70 },
    { name: "Luís Figo (06)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 84, cost: 75 },
    { name: "Adriano", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 91, cost: 95 },
    { name: "Obafemi Martins", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 82, cost: 70 },
    // Reservas
    { name: "Júlio César", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 82, cost: 65 },
    { name: "Walter Samuel (06)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 83, cost: 70 },
    { name: "David Pizarro", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 79, cost: 55 },
    { name: "Álvaro Recoba (06)", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 81, cost: 65 },
    { name: "Julio Cruz", posicao: "ATA", time: "Inter de Milão", liga: "Série A", temporada: "06", rating: 80, cost: 60 },

    // ==========================================
    // INTERNAZIONALE 2007 (Era Ibrahimović)
    // ==========================================
    { name: "Júlio César (07)", posicao: "GOL", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 85, cost: 75 },
    { name: "Marco Materazzi (07)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 83, cost: 70 },
    { name: "Iván Córdoba (07)", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 82, cost: 65 },
    { name: "Maicon", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 85, cost: 80 },
    { name: "Maxwell", posicao: "ZAG", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 80, cost: 60 },
    { name: "Patrick Vieira", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 86, cost: 85 },
    { name: "Esteban Cambiasso (07)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 85, cost: 80 },
    { name: "Dejan Stanković (07)", posicao: "MEI", time: "Inter de Milão", liga: "Série A", temporada: "07", rating: 83, cost: 75 },// ==========================================
    // BARCELONA 1994 (O Dream Team de Cruyff)
    // ==========================================
    { name: "A. Zubizarreta", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 83, cost: 80 },
    { name: "R. Koeman", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 90, cost: 95 },
    { name: "Miguel Ángel Nadal", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 81, cost: 75 },
    { name: "Sergi Barjuán", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 80, cost: 70 },
    { name: "Albert Ferrer", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 79, cost: 65 },
    { name: "Pep Guardiola", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 85, cost: 85 },
    { name: "José Mari Bakero", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 82, cost: 75 },
    { name: "Guillermo Amor", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 79, cost: 65 },
    { name: "Michael Laudrup", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 91, cost: 95 },
    { name: "H. Stoichkov", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 92, cost: 95 },
    { name: "Romário", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 95, cost: 99 },
    // Reservas
    { name: "Carles Busquets", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 74, cost: 45 },
    { name: "Abelardo", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 79, cost: 65 },
    { name: "Jon Andoni Goikoetxea", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 77, cost: 55 },
    { name: "Txiki Begiristain", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "94", rating: 81, cost: 75 },

    // ==========================================
    // BARCELONA 1997 (A Era do Fenômeno)
    // ==========================================
    { name: "Vítor Baía", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 82, cost: 70 },
    { name: "Gica Popescu", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 81, cost: 65 },
    { name: "Miguel Ángel Nadal (97)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 80, cost: 60 },
    { name: "Sergi Barjuán (97)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 80, cost: 65 },
    { name: "Albert Ferrer (97)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 79, cost: 60 },
    { name: "Pep Guardiola (97)", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 85, cost: 80 },
    { name: "Luis Enrique", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 84, cost: 75 },
    { name: "Iván de la Peña", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 82, cost: 70 },
    { name: "Luís Figo", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 89, cost: 90 },
    { name: "H. Stoichkov (97)", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 86, cost: 80 },
    { name: "Ronaldo", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 95, cost: 99 },
    // Reservas
    { name: "Carles Busquets (97)", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 74, cost: 40 },
    { name: "Abelardo (97)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 79, cost: 55 },
    { name: "Guillermo Amor (97)", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 78, cost: 50 },
    { name: "Giovanni", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "97", rating: 81, cost: 65 },

    // ==========================================
    // REAL MADRID 1995 (Zamorano e Laudrup)
    // ==========================================
    { name: "Francisco Buyo", posicao: "GOL", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 83, cost: 70 },
    { name: "Fernando Hierro (95)", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 88, cost: 85 },
    { name: "Manuel Sanchís", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 82, cost: 65 },
    { name: "Quique Sánchez Flores", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 79, cost: 55 },
    { name: "Mikel Lasa", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 78, cost: 55 },
    { name: "Fernando Redondo (95)", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 89, cost: 90 },
    { name: "Luis Enrique (95)", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 82, cost: 70 },
    { name: "José Emilio Amavisca", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 81, cost: 65 },
    { name: "Michael Laudrup (95)", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 91, cost: 95 },
    { name: "Raúl González (95)", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 82, cost: 65 },
    { name: "Iván Zamorano", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 89, cost: 90 },
    // Reservas
    { name: "Santiago Cañizares (95)", posicao: "GOL", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 79, cost: 55 },
    { name: "Rafael Alkorta", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 79, cost: 55 },
    { name: "Alfonso Pérez", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "95", rating: 80, cost: 60 },

    // ==========================================
    // SEVILLA 1993 (A Era Maradona)
    // ==========================================
    { name: "Juan Carlos Unzué", posicao: "GOL", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 79, cost: 55 },
    { name: "Diego Rodríguez", posicao: "ZAG", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 78, cost: 50 },
    { name: "Marcos Alonso", posicao: "ZAG", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 77, cost: 45 },
    { name: "Manolo Jiménez", posicao: "ZAG", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 78, cost: 50 },
    { name: "Martagón", posicao: "ZAG", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 76, cost: 45 },
    { name: "Rafa Paz", posicao: "MEI", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 79, cost: 55 },
    { name: "Francisco Carvajal", posicao: "MEI", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 76, cost: 45 },
    { name: "Diego Simeone (93)", posicao: "MEI", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 82, cost: 70 },
    { name: "Diego Maradona", posicao: "MEI", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 93, cost: 98 },
    { name: "Davor Šuker", posicao: "ATA", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 84, cost: 75 },
    { name: "Monchu", posicao: "ATA", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 77, cost: 45 },
    // Reservas
    { name: "Monchi", posicao: "GOL", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 72, cost: 35 },
    { name: "Pineda", posicao: "ATA", time: "Sevilla", liga: "La Liga", temporada: "93", rating: 75, cost: 40 },

    // ==========================================
    // REAL BETIS 1998 (Denílson e Finidi)
    // ==========================================
    { name: "Toni Prats", posicao: "GOL", time: "Betis", liga: "La Liga", temporada: "98", rating: 79, cost: 55 },
    { name: "Roberto Ríos", posicao: "ZAG", time: "Betis", liga: "La Liga", temporada: "98", rating: 78, cost: 50 },
    { name: "Jaime Quesada", posicao: "ZAG", time: "Betis", liga: "La Liga", temporada: "98", rating: 76, cost: 45 },
    { name: "Juan Merino", posicao: "ZAG", time: "Betis", liga: "La Liga", temporada: "98", rating: 77, cost: 45 },
    { name: "Luis Fernández", posicao: "ZAG", time: "Betis", liga: "La Liga", temporada: "98", rating: 76, cost: 45 },
    { name: "Alexis Trujillo", posicao: "MEI", time: "Betis", liga: "La Liga", temporada: "98", rating: 79, cost: 55 },
    { name: "Benjamin Zarandona", posicao: "MEI", time: "Betis", liga: "La Liga", temporada: "98", rating: 77, cost: 50 },
    { name: "Finidi George", posicao: "MEI", time: "Betis", liga: "La Liga", temporada: "98", rating: 84, cost: 75 },
    { name: "Denílson", posicao: "MEI", time: "Betis", liga: "La Liga", temporada: "98", rating: 85, cost: 85 },
    { name: "Alfonso Pérez (98)", posicao: "ATA", time: "Betis", liga: "La Liga", temporada: "98", rating: 83, cost: 75 },
    { name: "Oli", posicao: "ATA", time: "Betis", liga: "La Liga", temporada: "98", rating: 78, cost: 55 },
    // Reservas
    { name: "Valerio", posicao: "GOL", time: "Betis", liga: "La Liga", temporada: "98", rating: 73, cost: 35 },
    { name: "Tomas Olías", posicao: "ZAG", time: "Betis", liga: "La Liga", temporada: "98", rating: 75, cost: 40 },
    { name: "Capi", posicao: "MEI", time: "Betis", liga: "La Liga", temporada: "98", rating: 76, cost: 45 },
    { name: "Gaston Casas", posicao: "ATA", time: "Betis", liga: "La Liga", temporada: "98", rating: 76, cost: 45 },

    // ==========================================
    // CELTA DE VIGO 1999 (O EuroCelta)
    // ==========================================
    { name: "Richard Dutruel", posicao: "GOL", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 80, cost: 60 },
    { name: "Fernando Cáceres", posicao: "ZAG", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 81, cost: 65 },
    { name: "Goran Đorović", posicao: "ZAG", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 79, cost: 55 },
    { name: "Michel Salgado", posicao: "ZAG", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 82, cost: 70 },
    { name: "Rafael Berges", posicao: "ZAG", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 77, cost: 45 },
    { name: "Mazinho", posicao: "MEI", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 87, cost: 85 },
    { name: "Valery Karpin", posicao: "MEI", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 83, cost: 75 },
    { name: "Aleksandr Mostovoi", posicao: "MEI", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 86, cost: 80 },
    { name: "Claude Makélélé (99)", posicao: "MEI", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 82, cost: 70 },
    { name: "Haim Revivo", posicao: "ATA", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 81, cost: 65 },
    { name: "Ljuboslav Penev", posicao: "ATA", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 81, cost: 65 },
    // Reservas
    { name: "José Manuel Pinto", posicao: "GOL", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 75, cost: 40 },
    { name: "Tomás Hervás", posicao: "MEI", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 76, cost: 45 },
    { name: "Benni McCarthy", posicao: "ATA", time: "Celta de Vigo", liga: "La Liga", temporada: "99", rating: 79, cost: 60 },// ==========================================
    // BARCELONA 1999 (O Centenário de Rivaldo)
    // ==========================================
    { name: "Ruud Hesp", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 80, cost: 60 },
    { name: "Frank de Boer", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 83, cost: 75 },
    { name: "Michael Reiziger", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 78, cost: 55 },
    { name: "Sergi Barjuán (99)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 80, cost: 65 },
    { name: "Phillip Cocu", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 83, cost: 75 },
    { name: "Pep Guardiola (99)", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 84, cost: 80 },
    { name: "Luis Enrique (99)", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 83, cost: 75 },
    { name: "Luís Figo (99)", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 91, cost: 95 },
    { name: "Boudewijn Zenden", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 80, cost: 60 },
    { name: "Patrick Kluivert", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 86, cost: 85 },
    { name: "Rivaldo", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 94, cost: 98 },
    // Reservas
    { name: "Francesc Arnau", posicao: "GOL", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 75, cost: 45 },
    { name: "Abelardo (99)", posicao: "ZAG", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 79, cost: 55 },
    { name: "Xavi Hernández", posicao: "MEI", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 78, cost: 55 },
    { name: "Sonny Anderson", posicao: "ATA", time: "Barcelona", liga: "La Liga", temporada: "99", rating: 82, cost: 70 },

    // ==========================================
    // REAL MADRID 2003 (Os Galácticos)
    // ==========================================
    { name: "Iker Casillas", posicao: "GOL", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 87, cost: 85 },
    { name: "Fernando Hierro", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 85, cost: 75 },
    { name: "Iván Helguera", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 82, cost: 65 },
    { name: "Roberto Carlos", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 91, cost: 95 },
    { name: "Míchel Salgado", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 81, cost: 65 },
    { name: "Claude Makélélé", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 86, cost: 80 },
    { name: "Zinedine Zidane", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 94, cost: 98 },
    { name: "Luís Figo (03)", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 90, cost: 90 },
    { name: "David Beckham", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 85, cost: 85 },
    { name: "Raúl González", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 91, cost: 90 },
    { name: "Ronaldo (03)", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 93, cost: 95 },
    // Reservas
    { name: "César Sánchez", posicao: "GOL", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 77, cost: 45 },
    { name: "Francisco Pavón", posicao: "ZAG", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 75, cost: 40 },
    { name: "Guti", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 81, cost: 65 },
    { name: "Santiago Solari", posicao: "MEI", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 80, cost: 60 },
    { name: "Fernando Morientes", posicao: "ATA", time: "Real Madrid", liga: "La Liga", temporada: "03", rating: 82, cost: 70 },

    // ==========================================
    // DEPORTIVO LA CORUÑA 2000 (O Super Depor Campeão)
    // ==========================================
    { name: "Jacques Songo'o", posicao: "GOL", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 81, cost: 65 },
    { name: "Noureddine Naybet", posicao: "ZAG", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 83, cost: 70 },
    { name: "Donato", posicao: "ZAG", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 82, cost: 65 },
    { name: "Manuel Pablo", posicao: "ZAG", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 80, cost: 60 },
    { name: "Enrique Romero", posicao: "ZAG", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 79, cost: 55 },
    { name: "Mauro Silva", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 89, cost: 90 },
    { name: "Flávio Conceição", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 82, cost: 70 },
    { name: "Djalminha", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 88, cost: 90 },
    { name: "Fran González", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 83, cost: 75 },
    { name: "Víctor Sánchez", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 79, cost: 60 },
    { name: "Roy Makaay", posicao: "ATA", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 86, cost: 85 },
    // Reservas
    { name: "José Francisco Molina", posicao: "GOL", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 81, cost: 65 },
    { name: "Paco Jémez", posicao: "ZAG", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 77, cost: 45 },
    { name: "Slaviša Jokanović", posicao: "MEI", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 78, cost: 50 },
    { name: "Turu Flores", posicao: "ATA", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 80, cost: 60 },
    { name: "Pauleta", posicao: "ATA", time: "Deportivo", liga: "La Liga", temporada: "00", rating: 81, cost: 65 },

    // ==========================================
    // VALENCIA 2006 (A Era de Ouro de Mestalla)
    // ==========================================
    { name: "Santiago Cañizares (06)", posicao: "GOL", time: "Valencia", liga: "La Liga", temporada: "06", rating: 84, cost: 75 },
    { name: "Roberto Ayala", posicao: "ZAG", time: "Valencia", liga: "La Liga", temporada: "06", rating: 85, cost: 80 },
    { name: "Carlos Marchena", posicao: "ZAG", time: "Valencia", liga: "La Liga", temporada: "06", rating: 81, cost: 65 },
    { name: "Miguel Monteiro", posicao: "ZAG", time: "Valencia", liga: "La Liga", temporada: "06", rating: 80, cost: 60 },
    { name: "Asier del Horno", posicao: "ZAG", time: "Valencia", liga: "La Liga", temporada: "06", rating: 78, cost: 55 },
    { name: "Rubén Baraja", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 83, cost: 75 },
    { name: "David Albelda", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 82, cost: 70 },
    { name: "Pablo Aimar", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 89, cost: 90 },
    { name: "Joaquín", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 86, cost: 85 },
    { name: "David Silva", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 83, cost: 75 },
    { name: "David Villa", posicao: "ATA", time: "Valencia", liga: "La Liga", temporada: "06", rating: 91, cost: 95 },
    // Reservas
    { name: "Ludovic Butelle", posicao: "GOL", time: "Valencia", liga: "La Liga", temporada: "06", rating: 73, cost: 35 },
    { name: "Raúl Albiol", posicao: "ZAG", time: "Valencia", liga: "La Liga", temporada: "06", rating: 78, cost: 55 },
    { name: "Vicente Rodríguez", posicao: "MEI", time: "Valencia", liga: "La Liga", temporada: "06", rating: 82, cost: 70 },
    { name: "Mista", posicao: "ATA", time: "Valencia", liga: "La Liga", temporada: "06", rating: 79, cost: 60 }
];