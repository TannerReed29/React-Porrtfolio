import React from "react";
import { useState } from "react";




function PWGen() {

var criteria = []; 

const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const characters = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


   function generatePassword() {
  // clear criteria 
  criteria = [];
  // Prompt user for password length | notify user if input is wrong
  const plength = parseInt(window.prompt('Input a desired password length between 8 - 128'));
  if (isNaN(plength))
    {
    alert("Input is not a number");
    return null
    }
  else
    {
      if (plength >= 8 && plength <= 128)
      {
          console.log(plength);
          }  else {
            alert("Please input a number between 8 and 128");
            return null
      }
    }

    // Confirm if user wants lowercase 
    const lowercase = window.confirm('Would you like to include Lowercase?');
    if (lowercase) {
      criteria = criteria.concat(lower);
    }

    // Confirm if user wants lowercase
    const uppercase = window.confirm('Would you like to include Uppercase?');
    if (uppercase) {
      criteria = criteria.concat(upper);
    }

    // Confirm if user wants numbers
    const numeric = window.confirm('Would you like to include Numbers?');
    if (numeric) {
      criteria = criteria.concat(numbers);
    }

    // Confirm if user wants special characters
    const special = window.confirm('Would you like to include Special Charcters?');
    if (special) {
      criteria = criteria.concat(characters);
    }

    // password is generated here based on chosen criteria
    var genpass = "";
    for(var i = 0; i < plength; i++) {
      var random = Math.floor(Math.random() * criteria.length);
      genpass = genpass + criteria[random];
    }
    // return constiable of generated password here
    return genpass;
  }
  

  


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function WritePassword () {
    const password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
    generateBtn.window.addEventListener("submit", WritePassword);
}


// Add event listener to generate button
// React.useCallback(WritePassword[generatePassword]);

// const handleKeyDown = (event) => {
//     console.log('A key was pressed', event.keyCode);
// };

// React.useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     // generatePassword();
//     // WritePassword();
//     // cleanup this component
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     //   window.removeEventListener("click", WritePassword);

//     };
//   }, []);





    return (
        <section>
            <div class="wrapper">
                <header>
                    <h1>Password Generator</h1>
                </header>
                <div class="card">
                    <div class="card-header">
                        <h2>Generate a Password</h2>
                            </div>
                    <div class="card-body">
                        <textarea
                            readOnly
                            id="password"
                            placeholder="Your Secure Password"
                            aria-label="Generated Password"
                        ></textarea>
                    </div>
                    <div class="card-footer">
                        <button type="submit" id="generate" class="btn btn-success" onSubmit={WritePassword}>Generate Password</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PWGen;