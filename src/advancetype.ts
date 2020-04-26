
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

// type ElevatedEmployee = Admin & Employee;

interface ElevatedEmployee extends Employee, Admin {};

type UnknowEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknowEmployee) {
  console.log('Name :', emp.name );
  if('privileges' in emp) {
    console.log('Priviledges: ', emp.privileges);
  }

  if('startDate' in emp) {
    console.log('Start Date: ', emp.startDate);
  }
}

printEmployeeInformation({name: 'Manu', startDate:new Date()})



const e1:ElevatedEmployee = {
  name: 'Umesh',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number; // function over ride
function add(a: string, b: string): string;
function add (a: Combinable, b: Combinable) {
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Umesh ', ' Sharma');

result.split(' ');

const fetchedUserData = {
  id: 'U1',
  name: 'Umesh',
  // job: {title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title ) // optional chaining

// const userInput = null;

const userInput = '';

const storedData =  userInput ?? 'default'; // nullish coalescing 

console.log(storedData)

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving...')
  }

  loadCargo(amount: number) {
    console.log('Loaded card ', amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);


interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runingSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':   
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runingSpeed;
  }
  console.log('Moving at speed :', speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10});


const userInputElement = document.getElementById('user-input');
if(userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there';
}

interface ErrorContainer {
  // id: string;
  [prop: string]: string;  // index properties
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  userName: 'Must start with capital character'
}



