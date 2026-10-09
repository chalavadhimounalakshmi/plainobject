//1
let product = {
    name: "Laptop",
    brand: "HP",
    price: 60000
};
console.log("Before  individual property");
console.log(product);
console.log("After  individual property");
// Read individual properties
console.log(product["name"]);
console.log(product["brand"]);
console.log(product["price"]);

// Create
product["quantity"] = 2;
console.log(product["quantity"]);

// Update
product["price"] = 55000;
console.log(product["price"]);

// Delete
delete product["brand"];
console.log(product);
////________________________________________________________________________________________________________________________________________________////
//2.using Nested loops
let company = {
    companyName: "TCS",
    location: "Hyderabad",

    employee: {
        name: "Lakshmi",
        role: "Software Engineer",
        salary: 35000
    }
};
console.log(company.employee);


console.log("Individual properties for outer object");
console.log(company["companyName"]);
console.log(company["location"]);

console.log("Individual properties for Inner object");
console.log(company["employee"]["name"]);
console.log(company["employee"]["role"]);
console.log(company["employee"]["salary"]);


// CREATE
company["employees"] = 500;
company["employee"]["experience"] = "Fresher";

console.log("After Create");
console.log(company["employees"]);
console.log(company["employee"]["experience"]);


// READ
console.log("After Read");
console.log(company["companyName"]);
console.log(company["employee"]["name"]);


// UPDATE
company["location"] = "Bangalore";
company["employee"]["salary"] = 40000;

console.log("After Update");
console.log(company["location"]);
console.log(company["employee"]["salary"]);


// DELETE
delete company["employees"];
delete company["employee"]["role"];

console.log("After Delete");

// Outer object
console.log(company["companyName"]);
console.log(company["location"]);

// Inner object
console.log(company["employee"]["name"]);
console.log(company["employee"]["salary"]);
console.log(company["employee"]["experience"]);
////____________________________________________________________________________________________________________________________________________////
//3.using Nested loops
let bank = {
    bankName: "SBI",
    branch: "Hyderabad",

    account: {
        holderName: "Lakshmi",
        accountType: "Savings",
        balance: 25000
    }
};
console.log(bank.account);


console.log("Individual properties for outer object");
console.log(`Bank Name: ${bank["bankName"]}`);
console.log(`Branch: ${bank["branch"]}`);


console.log("Individual properties for Inner object");
console.log(`Holder Name: ${bank["account"]["holderName"]}`);
console.log(`Account Type: ${bank["account"]["accountType"]}`);
console.log(`Balance: ${bank["account"]["balance"]}`);


// CREATE
bank["ifscCode"] = "SBIN0001234";
bank["account"]["accountNumber"] = "1234567890";

console.log(" ...AFTER CREATE.... ");

console.log(`IFSC Code: ${bank["ifscCode"]}`);
console.log(`Account Number: ${bank["account"]["accountNumber"]}`);


// READ
console.log(" ...AFTER READ.... ");

console.log(`Bank Name: ${bank["bankName"]}`);
console.log(`Holder Name: ${bank["account"]["holderName"]}`);


// UPDATE
bank["branch"] = "Vijayawada";
bank["account"]["balance"] = 30000;

console.log("...AFTER UPDATE... ");

console.log(`Branch: ${bank["branch"]}`);
console.log(`Updated Balance: ${bank["account"]["balance"]}`);


// DELETE
delete bank["ifscCode"];
delete bank["account"]["accountType"];

console.log("...AFTER DELETE...");

// Outer object
console.log(`Bank Name: ${bank["bankName"]}`);
console.log(`Branch: ${bank["branch"]}`);

// Inner object
console.log(`Holder Name: ${bank["account"]["holderName"]}`);
console.log(`Balance: ${bank["account"]["balance"]}`);
console.log(`Account Number: ${bank["account"]["accountNumber"]}`);