# Front End Design

## The Front End is Built in React

The front end of this page is built using ReactJS and is styled with Material UI. There is a single main display, much like a facebook feed, that will show posts added to the site in chronological order beginning with the most recent. The page will load the first 10 posts and will show options to load more into the page. Each post will consist of:

- A title
- A date
- Text Content

Optional content will include:

- An image/video
- Embedded map / location
- Comments and Replies to the text content

Visitors to the site will be able to:

- react / like a post
- search by keyword for a post
- search by date for a post (Month, Year)

Members of the site will be able to:

- Comment on a post

A person becomes a member if they sign up for the email list. Simple login with password.

### Data and UI Shape

Given the simplicity of this site, a context API is not needed. The site will contain only one top level stateful component, `Posts.js` and the children components will be functional. Each child that takes in data (the searchbar within Nav, for example), will pass that data back up the chain via callback functions that are passed down as props. The parent component will store all data within state as well as many of the UI parameters needed for rendering.

<hr>

State shape:

- The data the app will collect includes:

  - The 10 most recent posts, `posts:Array`
  - Search parameters, `searchParams:String`
  - Search Results, `searchResults:Array`
  - User email, `email:String`
  - User password, `shiboleth:String`

- The UI will need the following:
  - User permissions, `permission:Number`
  - Hide/Show a modal toggle, `isModalShowing:Boolean`

# Back End Design

## The Server is build in Express

# Database Design

This is a pro-bono site. To keep costs down, a pseudo-db is used, leveraging the NodeJS file system utilities (fs, path, etc.) for the storage of posts, replies, and reactions. Emails sent by the site are also archived. At such a time when storage space becomes hard to allocate, data migration may be necessary. A route has been established for admin of the site to pull down data copies to their hard-drive. It is recommended that this action be carried out on a regular monthly basis.

Data is stored in several trees, viz Posts, Members, Emails. Each of these trees is repreneted by a model - a set of pure functions that manipulate the data within each. Models are accesssed via API calls to the server. Each item in a tree can be fully CRUDed. There is no achival process in place apart from the route to download an entire copy of a given data tree.

### Posts Shape

```js
{
  posts: [
    {
      title: String,
      date: String,
      content: String,
      mediaType: String,
      url: String,
      location: {
        lat: Number,
        long: Number
      },
      replies: [
        {
          email: String,
          content: String
        }
      ],
      reactions: [
        {
          emoji: String,
          count: Number
        }
      ]
    }
  ];
}
```

### Members Shape

```js
{
  members: [
    {
      email: String,
      signupDate: String,
      token: String,
      verified: Boolean
    }
  ];
}
```

### Emails Shape

```js
{
  emails: [
    {
      sent: String,
      to: [email<String>],
      subject: String,
      content: String,
      sendLog: Object
    }
  ];
}
```
