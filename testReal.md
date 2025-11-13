http://localhost:3000/diferente
http://localhost:3000/diferente/authors
http://localhost:3000/diferente/authors/authorId
http://localhost:3000/diferente/books
http://localhost:3000/diferente/books/bookId
http://localhost:3000/diferente/genres
http://localhost:3000/diferente/genres/genreId
http://localhost:3000/diferente/bookinstances
http://localhost:3000/diferente/bookinstances/instanceId
http://localhost:3000/diferente/all


69157149044c8517f6c26f17
69157184044c8517f6c26f19
691571bc044c8517f6c26f1b
69157219044c8517f6c26f20


Authors (POST /diferente/authors)

{
"first_name": "Gabriel",
"family_name": "García Márquez",
"date_of_birth": "1927-03-06",
"date_of_death": "2014-04-17"
}

{
"first_name": "Isabel",
"family_name": "Allende",
"date_of_birth": "1942-08-02"
}




Genres (POST /diferente/genres)

{
"name": "Ficción"
}

{
"name": "Ciencia ficción"
}
    



Books (POST /diferente/books)

{
"title": "Cien años de soledad",
"author": "{authorId}",
"summary": "Saga familiar en Macondo.",
"isbn": "978-3-16-148410-0",
"genre": ["{genreId}"]
}

{
"title": "La casa de los espíritus",
"author": "{authorId}",
"summary": "Novela que mezcla historia y lo fantástico.",
"isbn": "978-0-14-303998-3",
"genre": ["{genreId}", "{genreId2}"]
}




BookInstances (POST /diferente/bookinstances)

{
"book": "{bookId}",
"imprint": "Editorial X, 1st edition",
"status": "Available",
"due_back": "2026-01-01"
}

{
"book": "{bookId}",
"imprint": "Editorial Y, 2nd edition",
"status": "Loaned",
"due_back": "2025-12-01"
}