import * as _ from 'lodash';

type UserType = {
    firstName?: string;
    lastName?: string;
    age?: number;
    occupation?: string;
    maritalStatus?: boolean;
    gender?: "male" | "female";
    height?: number;
    weight?: number;
    id: string;
    phoneNumber?: string;
};

const usersList: UserType[] = [];

// Create
const createUser = (user: UserType) : void => {
    usersList.push(user);
};

// Update
const updateUser = (user: UserType) : void => {
    const userIndex: number = usersList.findIndex((item) => item.id === user.id);
    if (userIndex !== -1) {
        usersList[userIndex] = {...usersList[userIndex], ...user};
    }
}

// Delete
const deleteUser = (user: UserType) : void => {
    const userIndex: number = usersList.findIndex((item) => item.id === user.id);
    if (userIndex !== -1) {
        usersList.splice(userIndex, 1);
    };
}

// Sort By Last Name
const sortedUsersList = _.sortBy(usersList, ["lastName"])

createUser({
    firstName: "Jason",
    lastName: "Bourne",
    age: 34,
    occupation: "Military Officer",
    maritalStatus: false,
    gender: "male",
    height: 180,
    weight: 85,
    id: "iuinlej122432wer",
    phoneNumber: "03164979325"
});
createUser({
    firstName: "John",
    lastName: "Wick",
    age: 45,
    occupation: "Hitman",
    maritalStatus: true,
    gender: "male",
    height: 185,
    weight: 85,
    id: "ertfgo756456dskha",
    phoneNumber: "02553456754"
});
createUser({
    firstName: "Arthur",
    lastName: "Bishop",
    age: 38,
    occupation: "Hitman",
    maritalStatus: false,
    gender: "male",
    height: 185,
    weight: 85,
    id: "edfgkl15678512haefhk",
    phoneNumber: "05568756754"
});
createUser({
    firstName: "John",
    lastName: "McClane",
    age: 45,
    occupation: "Detective",
    maritalStatus: true,
    gender: "male",
    height: 192,
    weight: 93,
    id: "ioudlk4359032090cmxkl",
    phoneNumber: "06541286472"
});

updateUser({id: "ertfgo756456dskha", weight: 90});
deleteUser({id: "ioudlk4359032090cmxkl"});

console.log(usersList)
console.log(sortedUsersList)