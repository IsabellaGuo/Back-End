# Back-End
https://med-cabinet2.herokuapp.com/


| Method | URL                    | Description                                                |
| ------ | ---------------------- | ---------------------------------------------------------- |
| POST   | /api/users/register    | Creates a user using the data inside the request body      |
| POST   | /api/users/login       | Auth user with credentials given in the request body       |
| PUT    | /api/users/:id/email   | Updates users email given in the request body              |
| POST   | /api/users/:id/strains | Adds selected strain with the given id in the request body |
| GET    | /api/users/:id/strains | Gets a list of saved strains for that specified user       |
| DELETE | /api/users/:id/strains | Deletes a strain from users saved strains list             |
|     GET   |   /api/strains                     |       Get an array of strains                                                     |
|    GET	    |        /api/strains/:id	                |    Get a specific strain with the provided id in URL
                                                        |

Endpoint usage

POST

/api/users/register - register users with the following object model:

Endpoint usage

POST

/api/users/register - register users with the following object model:

```
{
    username: isa2
    email: 'isa@yahoo.com',
    password: '123'
}

POST

/api/users/login - login users with the following object model:

{
    email: 'isa@yahoo.com',
    password: '123'
}


