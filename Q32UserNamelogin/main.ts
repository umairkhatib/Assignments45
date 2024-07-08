// List of current users
let currentUsers: string[] = ['umair', 'ali', 'farhan', 'kamran', 'noman'];

// List of new users to check
let newUsers: string[] = ['UMAIR', 'fatima', 'omer', 'kamran', 'sarah'];

//Function to check username availibility
function checkUsernameAvailibilty(currentUsers:string[], newUsersname:string): string {
    //converting newUsers and currentUsers to lowercase for case insensitive comparison
    let lowerCaseCurrentusers = currentUsers.map(user => user.toLowerCase())
    let lowerCaseNewusers = newUsersname.toLowerCase();
    if (lowerCaseCurrentusers.includes(lowerCaseNewusers)) {
        return `Sorry , the username '${newUsersname}' is already taken.Please choose a new username.`;
    } else{
        return `Congratulations, the username '${newUsersname}' is available`;
    }
        
    }
    // loop through newusers to check for unique usernames
    newUsers.forEach(newUser => {
        let availibilityMessage = checkUsernameAvailibilty(currentUsers,newUser);
        console.log(availibilityMessage);
    });


