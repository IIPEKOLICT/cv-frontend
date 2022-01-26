#API Reference

### Get all cvs
Returns json data about all cvs in db.

<details>

* **URL**

    /api/cv

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "cvs": [
          {
            "id": 1, 
            "name": "Ivan Ivanov", 
            "job": "Fullstack Assembler Developer", 
            "about": "some about me", 
            "contacts": [5, 4, 3, 2], 
            "educations": [1, 2, 3], 
            "english": "A2", 
            "technologies": [2, 1], 
            "projects": [1]
          }
        ]
      }
    ```
</details>


### Get current cv
Returns json data about cv in db.

<details>

* **URL**

    /api/cv/`id`

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "cv": {
          "id": 1, 
          "name": "Ivan Ivanov", 
          "job": "Fullstack Assembler Developer", 
          "about": "some about me", 
          "contacts": [5, 4, 3, 2], 
          "educations": [1, 2, 3], 
          "english": "A2", 
          "technologies": [2, 1], 
          "projects": [1]
        }
      }
    ```
</details>


### Get technologies
Returns json data about technologies in db.

<details>

* **URL**

    /api/technology

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "technologies": [
          {
            "id": 2, 
            "name": "Angular", 
            "logo": "https://sheet.com/assets/technologies/ng.png"
          }
        ]
      }
    ```
</details>


### Get educations
Returns json data about educations in db.

<details>

* **URL**

    /api/education

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "educations": [
          {
            "id": 1, 
            "place": "Minsk Radio Engineering College", 
            "speciality": "Electronics technician", 
            "years": "2015 - 2019"
          }
        ]
      }
    ```
</details>



### Get employments
Returns json data about employments in db.

<details>

* **URL**

    /api/employment

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "employments": [
          {
            "id": 1, 
            "place": "Epam", 
            "desc": "Assembler developer", 
            "period": "Jul 2019 - now"
          }
        ]
      }
    ```
</details>



### Get projects
Returns json data about projects in db.

<details>

* **URL**

    /api/project

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "projects": [
          {
            "id": 1, 
            "name": "Sheet", 
            "description": "Fullstack assembler app", 
            "techs": [2, 1], 
            "deploy": "https://sheet.com", 
            "repo": "https://lol.com", 
            "date": "2022-01-26T18:03:41.906615Z"
          }
        ]
      }
    ```
</details>


### Get contacts
Returns json data about contacts in db.

<details>

* **URL**

    /api/contact

* **Method:**

    `GET`

* **Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "contacts": [
          {
            "id": 5, 
            "name": "Gmail", 
            "icon": "https://sheet.com/assets/contacts/gmail.png", 
            "link": "http://lol@gmail.com"
          }
        ]
      }
    ```
</details>
