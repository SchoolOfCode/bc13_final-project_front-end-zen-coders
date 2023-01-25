# final-project_front-end

# Hobi

Hobi is a community sharing platform for people to be able to share their skills and learn new things.

This project is coded in Nextjs, it uses Auth0, Tailwind and ...libraries
* ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)
* <img style="height:40px" src="https://cdn.auth0.com/oss/badges/a0-badge-light.png"/>


Unit and E2E testing is done using
* ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
* ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

# Getting Started
- To Install
    1. Clone the repository;
    2. Run $ npm install
    ```bash
$ npm install

```
    3. Create .env.local file in the root of the project
    4. ".env.local" must have the following variables:
    5. Below you can find what variables you should
<details>
  <summary>Content of .env.local</summary>
  <ol>
    <li>
     MONGODB_DATA_API_KEY='Enter yours'
     </li>
     <li>
      MONGODB_DATA_API_URL='Enter yours'
      </li>
    <li>
    MONGODB_DATA_SOURCE=Enter yours
     </li>
       <li>
AUTH0_SECRET='Enter yours
      </li>
        <li>
AUTH0_BASE_URL='Enter yours'
      </li>
    <li>
 AUTH0_ISSUER_BASE_URL='Enter yours'
         </li>
      <li>
   AUTH0_CLIENT_ID='Enter yours'
      </li>
      <li>
  AUTH0_CLIENT_SECRET='Enter yours'
      </li>
      <li>
DATABASE_URL='Enter yours'
      </li>
      <li>
  DATABASE_URL_SKILL='Enter yours'
      </li>
  </ol>
</details>


Attention: the server side has its own repository and you must install the server side first.

<a href="https://github.com/SchoolOfCode/bc13_final-project_back-end-zen-coders" >Click to access backend repository </a>


#The project is deployed on AWS Amplify
