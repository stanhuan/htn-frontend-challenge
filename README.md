# Hack the North 2018 Frontend Challenge

This is a React application created by Stanley Huang for the Hack the North team based on the instructions from [here](https://docs.google.com/document/d/18w8ONS-oVTAUs-Q-0N5LaYFC4IAewQ6VKZpNTYeswA4/preview).

I went into this project with the goal of making it a learning experience. I didn't have any knowledge of React, or any other JS UI frameworks and was able to not only learn how to use React, but complete all the base specifications.

## Setting up
You can see the application live, hosted on [my website](http://stanhuan.com/htn-frontend-challenge). Otherwise you can clone the repo and run `npm start` to view it locally

## Important Considerations
1. Is the base specification implemented?

> Yes

2. Who is your target audience for the web app, and is the app you've built usable for them?
> The target audience would be the same as the target audience for a hackathon. Typically post-secondary students who are technically inclined. The app was designed to be simple enough for anyone, including the target audience to use.

3. Does your web app have an interface that is visually appealing?

> I choose to create an interface that was not only visually appealing but adhered to the current Hack the North brand identity. This is to ensure consistency and clarity to those who use the app and simulates the real life scenario of a frontend developer working with other team members/disciplines during the job.

4. Have you used appropriate networking, JSON, etc. libraries to GET data from the external source?

> Yes, I used the fetch API to get the JSON data and stored it appropriately.

5. Does your application work well on mobile devices and web browsers alike? Is the user able to pull out their phone and quickly get an overview of what's coming up?

> The application was developed with mobile devices in mind.

6. What happens to a user's personalized activities if they refresh the page? Can you persist them locally without the use of a backend server?

> The application uses HTML 5 Web Storage so save and reload the user's selections. This means that when a user refreshes the page, their selections will persist.

7. How well does your application perform in the hectic conditions of a hackathon? Does it load fast on slow devices? What if the user loses their network connection?

> The application does not rely on many external dependencies and has a quick loading time, even on slow connections. If a user loses their network connection, the application will no longer work, with the exception of cached components. We could make this a Progressive Web App with offline capabilities in order for the app to work offline.

## Possible Extensions to the app
These are just some possible extensions that I thought of
- Ability to export personal calendar to a calendar format
- Get notifications when events that a user has added to their "personal" schedule starts
- Navigation between events
- Treasure hunt/passbook functionality that keeps track of events that users went to and allows users to obtain a prize after going to a certain number of events (some hackathons do this)
- Social media integration (tweet, "Interested" on Facebook)
- Some hackathons have food lineups based on a rolling basis, we could integrate a feature that virtually queues hackers up for food or other events that generate a high lineup, so they spend less time in line and more time hacking