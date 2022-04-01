# E-Commerce Back End
    
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This repository includes the back-end of an e-commerce site. With knowledge on how to use routes, the user is able to retrieve, publish, update, and delete products, product tags, and categories in their database. 

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, type the following command into the terminal:
  
  > npm init -y

  >npm i


  ## Usage
  

  After installing necessary dependencies, connect to you schema.sql through mysql, and then type npm start and press the Enter key. Testing was done in insomnia. If the user would like to test the application, they can navigate to Insomnia and select their desired route from the dropdown menu, and put https://localhost:8080/api/products in the search bar. You can replace "products" with "tags" or "categories" to search for them instead, and put "/" and a number, i.e., "/2" to retrieve the id 2 in that route.
  
 
   ## Video walkthroughs

Part 1: https://youtu.be/SQxsIjf5UWo

Part 2: https://youtu.be/-pP9zC467xc
  
  ## License

  This project is licensed under the MIT license.  

## Contributing

Pull requests are welcome. For any major changes, please open an issue first to discuss what you’d like to change. Please make sure to update tests as appropriate.

## Tests

To source sql, type in terminal:
> mysql -u root

> SOURCE db/schema.sql;

To exit mysql terminal and go back to bash, type:
> quit

To run, type into bash terminal:
> npm start

## Questions

If you have any questions, please visit https://github.com/ottercreektourism or email me at mkflynn13@gmail.com.
