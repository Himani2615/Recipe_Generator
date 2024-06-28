# Recipe Generator

Live Demo: https://recipe-generator0.netlify.app/

Recipe Generator is a web application that allows users to search for recipes based on cuisine type, meal type, and/or ingredients. It utilizes the Edamam API to fetch recipe data and dynamically displays recipes on the user interface.

![Screenshot (282)](https://github.com/Himani2615/Recipe_Generator/assets/143219485/46a0c11d-3120-4d2e-b13a-b987379173c2)
![Screenshot (280)](https://github.com/Himani2615/Recipe_Generator/assets/143219485/fe4b200f-ade9-47a1-ac08-7b1a364eaf4a)


# Features

   Search by Criteria: Users can specify cuisine type, meal type, and ingredients to find recipes.
   
   Random Recipes: Displays a selection of randomly generated recipes.
   
   Clickable Recipes: Each recipe displayed is clickable, directing users to the full recipe details on a new tab.

# Technologies Used

    Frontend: HTML, CSS, JavaScript
    Backend: Netlify Functions (Serverless)
    API: Edamam API for recipe data

# Installation

To run this project locally, follow these steps:

  1.Clone the repository:

    git clone https://github.com/Himani2615/Recipe_Generator
    cd Recipe_Generator

  2.Install dependencies:
        No additional dependencies are required for the frontend setup.

  3.Set up environment variables:
        Ensure you have set API_ID and API_KEY environment variables in your Netlify project settings. These variables should correspond to your Edamam API credentials.

  4.Deploy to Netlify:
        Push your changes to a Git repository connected to Netlify. Netlify will automatically deploy the application and configure the serverless functions.

# Usage

  1.Accessing the Application:
        Once deployed, access the application through the provided Netlify domain or custom domain if configured.

  2.Searching for Recipes:
        Use the search form to specify cuisine type, meal type, and ingredients. Clicking on the search button will fetch and display matching recipes.

  3.Viewing Random Recipes:
        Randomly generated recipes are displayed by default on the homepage. Click on any recipe to view its details.

# Security Considerations

  API Key Handling: API keys (API_ID and API_KEY) are securely handled using Netlify environment variables and fetched via serverless functions (getApiKeys.js). This prevents direct exposure of keys in client-side     JavaScript.

# Contributing

Contributions to improve and enhance the Recipe Generator project are welcome! Please follow these steps to contribute:

  1.Fork the repository and create a new branch.
  
  2.Make your changes and test thoroughly.
  
  3.Commit your changes with descriptive commit messages.
  
  4.Push your changes to your fork and submit a pull request.


# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
