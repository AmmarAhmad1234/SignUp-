let SignUpBtn = document.getElementById('SignUpBtn');
// console.log(SignUpBtn)

const UserArray = [];

SignUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();


let userName = document.getElementById('userName').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let city = document.getElementById('city').value;
let country = document.getElementById('country').value;
let dob = document.getElementById('dob').value;
let gender = document.getElementById('gender').value;
let zip = document.getElementById('zip').value;



const UserObj ={

userName,
email,
password,
city,
country,
dob,
gender,
zip
}


// console.log(UserObj)
UserArray.push(UserObj)
console.log(UserArray)

let UserStrigfy = JSON.stringify(UserArray)


console.log(UserStrigfy);

localStorage.setItem('UserData',UserStrigfy);

let SignUpForm = document.getElementById('SignUpForm').reset();

let  Success = document.getElementById('Success')

Success.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Succesfull Registered</strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


})





