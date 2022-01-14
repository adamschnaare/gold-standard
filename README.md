# gold standard

## The Gordon Manifesto

> I (adamschnaare) just copied this from a slack convo. But it says all the things...

Preface: To me, there’s a clear/obvious/awesome dev workflow between graphql/typescript/react that we still haven’t really been able to leverage. That frustrates me. It taints peoples opinion of our tech…people start thinking that the way we’re currently doing things is how we’re supposed to be doing things…and we never get to that “gold standard” that I feel like would make a lot of these “velocity” issues disappear.


Here’s me trying to describe a bit of what that “gold standard” looks like in my head.


A “component” has a few different sections:
- styling (styled components)
- the main logic/code for the component
- a graphql fragment or query for the data that the component needs.


So, pretend you’re at another random company (forget our business logic / constraints for a second), and imagine you have a figma design similar to that team member card we went over today in demo…you start off by looking at the card and imagining what data it will need…
You start writing a query in your editor…

```js
query USER_CARD_DATA {
  
}
```

you know you need data for a user, so you hit `ctrl` + `space` in your editor and all the available queries for our API pop up in an autocomplete box just like you’d expect for methods/properties on an object or class.
You see there’s a user query, so you select that guy…you notice it takes an id input, so you add that as a param for your query:

```js
query USER_CARD_DATA(id: ID!) {
  user(id: 'user_id_1') {
    
  }
}
```

you know you need a name, so you hit ctrl + space in your editor, and now the autocomplete shows all the available fields returned for that query.
you see `firstName` and `lastName` so you add them to the query. You notice there’s a field named social so you try adding that

```js
query USER_CARD_DATA($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
    social {

    }
  }
}
```

And….autocomplete again in that social field and boom, there’s calendlyUrl and twitterUrl…you add them to the query as well:

```js
query USER_CARD_DATA(id: ID!) {
  user(id: 'user_id_1') {
    id
    firstName
    lastName
    social {
      calendlyUrl
      twitterUrl
    }
  }
}
```

And now you have the exact shape of the data the component will receive, in all its typesafe glory.

You start a basic functional component below and get to work:

```js
const UserCard = ({ user }) => {

  return (
    <Card>
      <Typography>{user.firstName} {user.lastName}</Typography>
      <Button onClick={/* ...*/}>Create a Calendly Metting!</Button>
    </Card>
  )
}
```

You get autocomplete of all the fields on that user object out of the box, linting errors if you try to access fields that don’t exist, linting warnings if the API marks a field as deprecated, etc.


The next day, someone dipshit backend engineer pushes a change that removes the firstName and lastName fields because he just wants a single name field….the build immediately fails because those fields no longer exist and the linter throws a fit before the unit tests can even run. Crisis averted!


So the dipshit backend engineer leaves the firstName and lastName fields there, but marks them as @deprecated(reason: "use 'name' field")…success! And now there are properly yellow squiglies under {user.firstName} and {user.lastName} in our component that warn us that the field is deprecated and that we should use name instead.

-----------------

There are more scenarios (for instance, updating that card with some new requirements) that I can think of to showcase what the workflow should look like and why it’s great, but I’ll stop there so I can move on (edited) 


## So….actual idea here:
I want to make a super simple “example” app with:
- vite front-end react app
- latest/greatest graphql backend
- (both of these in typescript)

…basically set up a project that focuses on getting that workflow nailed down with all the trappings and niceties it’s supposed to have like type safety, autocomplete, linting, etc.


And then I want to take that and actually live-code demo implementing some example feature in the app