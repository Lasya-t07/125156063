const axios = require('axios');

// Replace these variables with your actual details
const companyName = 'goMart';
const ownerName = 'Lasya T';
const rollNo = '125156063';
const ownerEmail = '125156063@sastra.ac.in';
const accessCode = 'LGcHvG';
const registrationUrl = 'http://20.244.56.144/test/register';
const clientID= 'b8c90552-91fc-41ce-be63-1ed36d2f3098';
const clientSecret= 'kIpHZiRPYljPuOvW';

const authData = {
    clientID: clientID,
    clientSecret: clientSecret,
    companyName: companyName,
    ownerName: ownerName,
    rollNo: rollNo,
    ownerEmail: ownerEmail,

};

const authurl='http://20.244.56.144/test/auth';
axios.post(authurl, authData)
    .then(response => {
        console.log('Authentication successful!');
        console.log('Response:', response.data);
    })
    .catch(error => {
        if (error.response) {
            console.log(`Authentication failed with status code: ${error.response.status}`);
            console.log('Response:', error.response.data);
        } else {
            console.log('Error:', error.message);
        }
    });
