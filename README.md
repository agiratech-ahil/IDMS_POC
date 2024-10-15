# Getting started with this repo
Once you cloned the repo, run the following commands to get the project running:

```bash
npm install

vite
```

if you get an error with vite, try running:

```bash
npm install -g vite
```
now your code should be served. Unlike CRA based servers, Vite does not open the browser automatically.

You need to manually open the browser and enter the URL and port displayed in the terminal. After than, you cant start coding and see your changes in an instant.

# Branching strategy

We are using GitFlow branching strategy. This means that we have two main branches:

- main
- development

Main will only be used for production builds. Development will be used for development purposes.

For each new feature or fix, we will create a new branch from the development branch. Make sure to name the branch to include the Jira ticket number.

Once you are done with your changes, create a PR to the development branch.

Once a PR is merged, delete the feature branch unless told otherwise by the lead or the PR creator. But default should be to delete the branch after merging.

*PLEASE DO NOT PUSH TO MAIN AND DEVELOPMENT BRANCH DIRECTLY.*
*PLEASE DO NOT MERGE A PULL REQUEST WITHOUT CODE REVIEW.*

# General best practices

- Always use functional components and hooks.
- Follow best practices from Agira for React, there should be a repo of it.
- Follow generic best practices for React, TypeScript, and Ant design.
- Consider minimising the CSS and JS we deliver to the browser without sacrificing functionality. The less, the better.
- Don't fix multiple bugs or features ina single PR.
- Don't force push to a branch that has been pushed to the remote repository.
- If you're stuck with git, ask for help.
- Rebase your branch with development regularly to avoid conflicts.
- If you're using a different editor, make sure to install the plugins for linting and formatting.
- Don't push your formatting changes to the remote repository.
- Only push changes that are related to the actual issues you're working on
- If you want to change formatting, refactor, etc. Create a new branch and make the changes.
- Don't write if conditions without braces.
- Don't write switch cases without defaults and breaks.

Keep this document updated with the latest changes.