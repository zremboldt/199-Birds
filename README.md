### About the app

This web app is a personal project made for my family/kiddos to enjoy.
Our three year old loves the Usborne 199 Birds book and the other day we were looking up the birds on YouTube to see them in action and hear what they sound like.
I thought it'd be fun to make an easier way to find the videos without worrying about ads or reccomended videos popping up.  
Since it's just for us I didn't have to worry about browser compatability issues.

### Fun technical stuff

- Site is built using React / Gatsby.js. Styling is done in Sass.
- Gatsby Image offers a number of amazing benefits:
  - Webp images are served rather than jpgs if the browser supports them. This drastically improves data consumption and page load times.
  - Initial page load is super quick because low res images are loaded as placeholders until full res versions load and fade in to take their place. This also keeps your layout from jumping around while the images load.
  - Images below the fold are lazy loaded using an Intersection Observer. So they never load unless the user scrolls down to that position on the page. This speeds up initial page load and saves bandwidth.
- Search bar uses CSS sticky positioning to snap it to the top of the viewport.
- Search results dynamically update as you enter each character so finding the flamingo is as easy as typing "fl".
- Adding a bird is as easy as adding an object to `birdData.js`. Just give it a name and the YouTube video ID. You can also assign an optional video start and end time.
- App is designed to work great on all device sizes from desktop to mobile.
- Lighthouse score is all green. Still have a couple of tweaks I can make to further improve performance/accessibility.

