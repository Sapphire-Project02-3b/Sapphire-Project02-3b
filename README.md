# Group 3b - Project #2 - Sapphire Division

| Role | Name |
| --------------- | ------------- |
| Project Manager | Shane Barrera |
| Scrum Master | Paige Reeves |
| Developer | Max Plummer |
| Developer | Pablo Gonzalez |

### Project Description
This team will be responsible for a new gallery-like feature for users to share, find, and edit other users’ work. They will be in charge of figuring out how to share users’ relevant galleries as well as permit access to specific information based on access type. Ultimately, the gallery works to help users share and draw inspirations from other classroom submissions, as well as build a sense of community within the app. Thus, accommodating a fluid display, search mechanism, and filtering method pertaining to users’ works is aimed to facilitate a seamless user experience.

## Project Features Implemented

### Grid Gallery
- We developed a new navigation bar component to route to a multi-level ‘Gallery’ page. Correspondingly, a gridded display of projects is rendered to the screen with a search bar and privacy filters - Public, Classroom, Organization, and My Likes. Respectively, these buttons allow one to filter workspaces/submissions by name, user type, and likes. As a result, a unit, activity, and thumbnail appears in real-time on their display.

<img width="783" alt="image1" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/e7214f13-2ab1-42da-94c5-decb5d32ae05">

### Project Page
- Clicking on a gallery invokes a pop-up menu which displays: unit, activity name, description, and author. Additional categories include “related works” and a “discussion forum,” which respectively allow users to compare galleries and share information pertaining to their work.

<img width="856" alt="image4" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/381cc78a-2e94-4e4b-a898-6a90ca53e376">

### Edit Mode
- Clicking on the edit/copy button invokes another popup window of the most recently saved activity; students may edit blocks on this copy (sandbox) and save the session to their gallery.

<img width="687" alt="image13" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/4eaf9698-7da8-4ad9-80c6-f8c49f03a335">


### Like Feature
- Clicking the heart button on a gallery project “likes” the item and saves it to the user’s “My Likes” page. Correspondingly, users may filter gallery submissions that they’ve liked persistently.

<img width="902" alt="image14" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/68038653-2623-490d-a208-5ee0a6ebc8fc">


### Privacy Settings
- The user can filter the listed gallery projects by clicking one of the privacy buttons at the top of the page.
  
![image5](https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/5e3b7e59-de94-4625-9811-e3381e932d21)

## How to run the application
> Instructions to load the local server and docker are below (under CASMM).

### `develop`
- The develop branch holds all updated and functioning code that can be pulled from to load all the features

## Backend Updates
- We created a new “Gallery” endpoint in Strapi and provided corresponding entries with refined authorization for specific roles based on user-type. This involved implementing new “requests.js” in addition to previously existing ones, and validating using Swagger documentation.

<img width="885" alt="image11" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/78ba4980-9e19-4c0c-857a-ccfe0750449a">
<img width="737" alt="image12" src="https://github.com/Sapphire-Project02-3b/Sapphire-Project02-3b/assets/100697257/7835eaba-c95d-4090-b4c4-a61b933327c8">

## Test Credentials for Code-Sparks Repo

### Strapi Admin:
- username: superadmin@mail.com
- password: TN9q6RZhDaw6

### Default Accounts:

Content Creator
- username: contentcreator
- password: easypassword
  
Teacher (has access to all classrooms)
- username: teacher
- password: easypassword

Researcher
- username: researcher
- password: easypassword

### Teachers

MissFrizzle
- username: MissFrizzle
- password: easypassword
  
JohnKeating
- username: JohnKeating
- password: easypassword

AlbusDumbledore
- username: AlbusDumbledore
- password: easypassword

### Class Codes
- 2005 (5th grade)
- 1997 (6th grade)
- 1994 (5th grade)
- 2017 (6th grade)
- 1988 (5th grade)
- 1989 (6th grade)

# CaSMM

> Computation and Science Modeling through Making

Cloud-based programming interface

![Deploy Staging](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Staging/badge.svg)
![Deploy Production](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Production/badge.svg)

<br/>

## Application

### `client` 
[client](/client#client) is the frontend of the application. It is powered by [React](https://reactjs.org/) and [Blockly](https://developers.google.com/blockly).

### `server`

[server](/server#server) is the web server and application server. It is powered by [Node](https://nodejs.org/en/) and [Strapi](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html).

### `compile`

  [compile](/compile#compile) is an arduino compiler service. It is an unofficial fork of [Chromeduino](https://github.com/spaceneedle/Chromeduino).

<br/>

## Environments

> The project is divided into three conceptual environments.

### Development
#### Structure

The development environment is composed of five servers. The first one is run with the [Create React App](https://create-react-app.dev/docs/getting-started/) dev server. The later four are containerized with docker and run with [docker compose](https://docs.docker.com/compose/).

* `casmm-client-dev` - localhost:3000

* `casmm-server-dev` - localhost:1337/admin

* `casmm-compile-dev` 

* `casmm-db-dev` - localhost:5432

  > The first time the db is started, the [init_db.sh](/scripts/init_db.sh) script will run and seed the database with an environment specific dump. Read about Postgres initialization scripts [here](https://github.com/docker-library/docs/blob/master/postgres/README.md#initialization-scripts). To see how to create this dump, look [here](https://github.com/DavidMagda/CaSMM_fork_2023/blob/develop/scripts/readme.md).

* `casmm-compile_queue-dev`

#### Running

`casmm-client-dev`

1. Follow the [client](/client#setup) setup
2. Run `yarn start` from `/client`

`casmm-server-dev`, `casmm-compile-dev`, `casmm-db-dev`, and `casmm-compile_queue-dev`

1. Install [docker](https://docs.docker.com/get-docker/)

2. Run `docker compose up` from `/`

   > Grant permission to the **scripts** and **server** directories if you are prompted
   

### Staging

#### Structure

The staging environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm-staging` - [casmm-staging.herokuapp.com](https://casmm-staging.herokuapp.com/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm-staging` is automatically built from the latest commits to branches matching `release/v[0-9].[0-9]`. Heroku runs the container orchestration from there.

### Production

#### Structure

The production environment is a Heroku app. It is composed of a web dyno, compile dyno, Heroku Postgres add-on, and Heroku Redis add-on.

* `casmm` - [www.casmm.org](https://www.casmm.org/)
  * The web dyno runs `server`
  * The compile dyno runs `compile`

#### Running

`casmm` is automatically built from the latest commits to `master`. Heroku runs the container orchestration from there.

<br/>

## Maintenance

All three components of the application have their own dependencies managed in their respective `package.json` files. Run `npm outdated` in each folder to see what packages have new releases. Before updating a package (especially new major versions), ensure that there are no breaking changes. Avoid updating all of the packages at once by running `npm update` because it could lead to breaking changes. 

### Strapi

This is by far the largest and most important dependency we have. Staying up to date with its [releases](https://github.com/strapi/strapi/releases) is important for bug/security fixes and new features. When it comes to actually upgrading Strapi make sure to follow the [migration guides](https://docs-v3.strapi.io/developer-docs/latest/update-migration-guides/migration-guides.html#v3-guides)!

<br/>

## CI/CD

All of the deployments and releases are handled automatically with [GitHub Actions](https://docs.github.com/en/actions). The workflows implement custom [Actions](https://github.com/STEM-C/CaSMM/actions) that live in the [auto](https://github.com/STEM-C/auto) repo.

<br/>

## Contributing

### Git Flow 

> We will follow this git flow for the most part — instead of individual release branches, we will have one to streamline staging deployment 

![Git Flow](https://nvie.com/img/git-model@2x.png)

### Branches

#### Protected

> Locked for direct commits — all commits must be made from a non-protected branch and submitted via a pull request with one approving review

- **master** - Production application

#### Non-protected

> Commits can be made directly to the branch

- **release** - Staging application
- **develop** - Working version of the application
- **feature/<`scaffold`>-<`feature-name`>** - Based off of develop
  - ex. **feature/cms-strapi**
- **hotfix/<`scaffold`>-<`fix-name`>** - Based off of master
  - ex. **hotfix/client-cors**

### Pull Requests

Before submitting a pull request, rebase the feature branch into the target branch to resolve any merge conflicts.

- PRs to **master** should squash and merge
- PRs to all other branches should create a merge commit
