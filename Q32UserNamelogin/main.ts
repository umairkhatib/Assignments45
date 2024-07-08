// List of current users
let currentUsers: string[] = ['umair', 'ali', 'farhan', 'kamran', 'noman'];

// List of new users to check
let newUsers: string[] = ['UMAIR', 'fatima', 'omer', 'kamran', 'sarah'];

for (let new_users of newUsers) {
    const lowercase_new_user = new_users.toLowerCase();

    if(currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_user))
    console.log(`Sorry, the username '${new_users}' is already taken. Please choose a new username.`); 
else{
    console.log(`Congratulations, the username '${new_users}' is available!`);
}   
}
