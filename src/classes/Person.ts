(() => {

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }


  interface UserProps {
    email: string;
    role: string;
  }

  class User {

    public email: string;
    public role: string;

    constructor({
      email,
      role,
    }: UserProps) {
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface SettingsUser {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsUser) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthday: Date;
    email: string;
    gender: Gender;
    workingDirectory: string;
    lastOpenFolder: string;
    name: string;
    role: string;
  }

  class UserSettings {
    public user: User;
    public person: Person;
    public settings: Settings;

    constructor({ name, gender, birthday, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      this.user = new User({ email, role });
      this.person = new Person({ name, gender, birthday });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }


  const userSettings = new UserSettings({
    birthday: new Date('1993-10-27'),
    email: 'benji@email.com',
    gender: 'M',
    workingDirectory: '/home',
    lastOpenFolder: '/root',
    name: 'Benjamin',
    role: 'Admin'
  });

  userSettings.user.checkCredentials()
  console.log({ userSettings });

})();
