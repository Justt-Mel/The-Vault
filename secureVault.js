/*
  1. Create A String Welcoming User
  2. Create A String Letting The user Know The New Vault Code
  3. Print Out The Greeting
  4. Create Variables For The Combonation
  5. Create 3 Mathematical Calculations To Create The Combonation
  6. Print Out The COde Result To the User
  7. Create a Dialog Box That Prints Out The Greeting And The Code For The User

  
*/

// Greeting Message For The New Vault Code User
const greet = "Hello New Vault User!!! You have recived this message to open the Vault, "
console.log(greet)

// Variables containing Code Results
const num1 = 65/5   //Gives the first digit of the combination = 13
const num2 = 4*17   //Gives the Second digit of the combination = 68
const num3 = 14+22  //Gives the Third digit of the combination = 36

//String Created to Let The User Know That They Are Now Being Given The Code 
const SecretCombo = "Master Vault Code: "

console.log(num1, num2, num3)

const enter = " Enter code below!!!"

//Dialog Box Containing The Message And The Vault Code Decided To Use Prompt Instead Of Alert
prompt(`${greet} ${SecretCombo} ${num1}, ${num2}, ${num3} ${enter}`)