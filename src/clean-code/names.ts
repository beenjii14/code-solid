(() => {

  // Files to evaluate
  const filesToEvaluate = [
    { id: 1, delete: false },
    { id: 2, delete: false },
    { id: 3, delete: true },
    { id: 4, delete: false },
    { id: 5, delete: false },
    { id: 7, delete: true },
  ];

  // Files to delete
  const filesToDelete = filesToEvaluate.map(file => file.delete ? file : null).filter(file => file !== null);
  console.log('benji -> filesToDelete: ', filesToDelete);


  // Bad
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Good
  class User { };
  interface User { };

  // Today
  const ddmmyyyy = new Date(); // Bad
  const today = new Date(); // Good

  // Elapsed time in days
  const d: number = 23; // Bad
  const elapsedDays: number = 23; // Good

  // Number of files in directory
  const dir = 33; // Bad
  const numberFiles: number = 33; // Good

  // First name
  const name = 'Benjamin'; // bad
  const firstName: string = 'Benjamin'; // good

  // Last name
  const apellido = 'Cruz'; // bad
  const lastName: string = 'Cruz'; // good

  // Days since modification
  const dsm = 12; // bad
  const daysSinceModification: number = 12; // good

  // Max classes per student
  const max = 6; // bad
  const maxClassesPerStudent: number = 6; // good


})();
