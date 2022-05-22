(() => {

  /**
   * The function getMovieById takes a string as an argument and returns nothing
   * @param {string} movieId - string
   */
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  /**
   * This function takes a string as an argument and returns nothing.
   * @param {string} id - string
   */
  function getActorInformationById(actorId: string) {
    console.log({ actorId });
  }

  // funcion para obtener el bio del actor por el id
  function getBiographyActorById(actorId: string) {
    console.log({ actorId });
  }

  /**
   * The function createMovie takes in four parameters: title, description, rating, and cast. 
   * 
   * The first three parameters are strings, and the last parameter is an array of strings. 
   * 
   * The function returns nothing
   * @param {string} title - string
   * @param {string} description - string - The description of the movie.
   * @param {number} rating - number
   * @param {string[]} cast - string[]
   */
  interface DataMovie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: DataMovie) {
    console.log({ title, description, rating, cast });
  }

  /**
   * CreateActor takes a string and a date and returns a boolean.
   * @param {string} fullName - string
   * @param {Date} birthdate - Date
   * @returns A promise
   */
  function createActor(fullName: string, birthdate: Date): boolean {
    if (fullName === 'Benjamin') return false;

    console.log('create actor');
    return true;

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  }
})();
