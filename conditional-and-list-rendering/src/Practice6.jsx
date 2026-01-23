function Practice6() {

  const books = [
    { id: 1, title: 'React Basics',
      published: true, publisher: 'Manning' },
    { id: 2, title: 'Advanced Hooks',
      published: false, publisher: 'OReilly' },
    { id: 3, title: 'JSX in Depth',
      published: true, publisher: 'Packt' }
  ];
  const publisheds = books.filter(book => book.published)

 return (
    <>
      {publisheds.length && <h2>Published Books</h2>} 
      {/*publisheds.length가 0보다 클 때 (참): 뒤에 있는 <h2>Published Books</h2>를 화면에 그린다. */}
      {publisheds.length ? 
        publisheds.map(book => 
           <article key={book.id}>
             <strong>{book.title}</strong>
             <em> - {book.publisher}</em>
           </article>
         )
       : <p>No published books found.</p>
      }
    </>
  )
}

export default Practice6;