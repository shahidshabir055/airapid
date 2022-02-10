export class Employee {

  name: any;
  about: any;
  position: any;
  joiningDate: any;

  constructor(name: string = '', about: string = '', job: string = '', joiningDate: string = '') {
    this.name = name;
    this.about = about;
    this.position = job;
    this.joiningDate = joiningDate;
  }
}
