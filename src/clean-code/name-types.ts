(() => {

  // array to temperatures in celsius
  const arrayOfNums = [33.6, 12.34]; // bad
  const temperaturesCelcius = [33.6, 12.34]; // good

  // Address ip
  const ip = '123.123.123.123'; // bad
  const ipAddress = '123.123.123.123'; // Good

  // List of users
  const people = [{ id: 1, email: 'benji@email.com' }, { id: 2, email: 'benji2@email.com' }, { id: 3, email: 'benji3@email.com' }]; // Bad
  const usersData = [{ id: 1, email: 'benji@email.com' }, { id: 2, email: 'benji2@email.com' }, { id: 3, email: 'benji3@email.com' }]; // Good

  // User emails
  const userEmails = usersData.map(user => user.email);

  // Boolean variables in game
  const caJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  // start date
  const start = new Date().getTime(); //Bad
  const startDate = new Date().getTime(); // Good
  // end date
  const end = new Date().getTime() - start; // Bad
  const endDate = new Date().getTime() - startDate; // Good


  // get books
  function book() { // Bad
    throw new Error('Function not implemented.');
  }

  function getBooks() { // Good
    throw new Error('Function not implemented.');
  }

  // get books by url
  function BooksUrl(u: string) { // Bad
    throw new Error('Function not implemented.');
  }

  function getBooksByUrl(url: string) { // Good
    throw new Error('Function not implemented.');
  }

  // get square area
  function areaCuadrado(s: number) { // Bad
    throw new Error('Function not implemented.');
  }

  function getSquareArea(side: number) { // Good
    throw new Error('Function not implemented.');
  }

  // print job
  function printJobIfJobIsActive() { // Bad
    throw new Error('Function not implemented.');
  }

  function printJob() {
    throw new Error('Function not implemented.');
  }

})();
