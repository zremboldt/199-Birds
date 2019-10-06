import React from "react";

const About = () => {
  return (
    <div className="pageWrap">
      <div className="pageAbout">
        <section>
          <h2>About the app</h2>
          <p>
            This web app is a personal project made for my family/kiddos to
            enjoy. Our three year old loves the{" "}
            <a href="">Usborne 199 Birds book</a> and the other day we were
            looking up the birds on YouTube to see them in action and hear what
            they sound like. I thought it'd be fun to make an easier way to find
            the videos without worrying about ads or reccomended videos popping
            up.
          </p>
        </section>

        <section>
          <h2>Fun technical stuff</h2>
          <ul>
            <li>
              Site is built using React / Gatsby.js. Styling is done in Sass.
            </li>
            <li>Gatsby Image offers a number of amazing benefits:</li>
            <ul>
              <li>
                Webp images are served rather than jpgs if the browser supports
                them. This drastically improves data consumption and page load
                times.
              </li>
              <li>
                Initial page load is super quick because low res images are
                loaded as placeholders until full res versions load and fade in
                to take their place. This also keeps your layout from jumping
                around while the images load.
              </li>
              <li>
                Images below the fold are lazy loaded using an Intersection
                Observer. So they never load unless the user scrolls down to
                that position on the page. This speeds up initial page load and
                saves bandwidth.
              </li>
            </ul>
            <li>
              Search bar uses CSS sticky positioning to snap it to the top of
              the viewport.
            </li>
            <li>
              Search results dynamically update as you enter each character so
              finding the flamingo is as easy as typing "fl".
            </li>
            <li>
              Adding a bird is as easy as adding an object to a file called
              birdData.js. Just give it a name and the YouTube video ID. You can
              also assign an optional video start and end time.
            </li>
            <li>
              App is designed to work great on all device sizes from desktop to
              mobile.
            </li>
            <li>
              Lighthouse score is all green. Still have a couple of tweaks I can
              make to further improve performance/accessibility.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
