var authors = {
  allAuthors: {
    fiction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov', 
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ]
  }
}



authors[Symbol.iterator] = () => {
  const genres = Object.values(authors.allAuthors);
  var authorIndex = 0;
  var genreIndex = 0;
  return {
    next() {
      var authors = genres[genreIndex];
      if(authorIndex === authors.length){
        genreIndex++;
        authorIndex = 0;
      }
      if(genreIndex === genres.length){
        return {
          value: undefined,
          done: true
        }
      }
      return {
        value: genres[genreIndex][authorIndex++],
        done: false
      }
    }
  }
}


for (const author of authors) {
  console.log(author);
}
