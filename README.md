# FetchRepos

## Description

This is a simple Express.js application that fetches repositories from GitHub based on the organization name.

## Installation

1. Clone the repository:
```
https://github.com/RitikPant/FetchRepos.git
```

2. Navigate to the project directory:
```
cd FetchRepos
```

3. Install the dependencies:
```
npm install
```

4. Run the application:
```
node index.js
```

## Usage

### Home Page

Access the home page of the application by navigating to `http://localhost:8000/`. You will see the message "Home page" displayed.

### Fetching Repositories

To fetch repositories from a specific GitHub organization, use the following endpoint:
```
GET /:org
```

Replace `:org` with the name of the organization you want to fetch repositories from. For example, to fetch repositories from the "openai" organization, use `http://localhost:8000/openai`.

The application will retrieve the repositories and display their names as a response.

## Dependencies

This application uses the following dependencies:

- express: `4.17.1`
- node-fetch: `2.6.1`

These dependencies are automatically installed when following the installation steps mentioned above.
