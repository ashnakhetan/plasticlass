# PlastiClass
Submitted @ Ideate2022, Hackathon hosted by DukeHacks
Hackathon Submission Link: https://devpost.com/software/plasticlass-gidasn

Try it Out: https://ashnakhetan.github.io/plasticlass/

# To Run On Your Own:
Download repo, then in the project folder, run:
- npm install
- npm start

## Inspiration
My parents have the same debate every day: can you recycle a yogurt container? Plastic saran wrap? Styrofoam containers? A recent study found that 62% of Americans are confused about how to recycle. (And 68 percent incorrectly believed you could recycle plastic utensils…). Furthermore, the EPA has gathered that only 30-40% of all plastic beverage containers are recycled. There are so many do’s and don’ts regarding recycling plastic that we can easily forget. And when in doubt, most just throw their items in the garbage. But what if we could remove this doubt with an easy, accessible web app?

## What it does
PlastiClass is an object-recognition web app that classifies any items you hold in front of the camera into 8 different categories of plastic. It then provides you with an educated answer as to where it can be recycled, if recyclable!

## How we built it
I used Google Teachable Machine to train the ML model on hundreds of images of plastic items that I collected from around my home. Then, I built a React App and integrated the model in with it, using a live video-stream and the ml5 library to properly transfer video-stream data to the model.

## Challenges we ran into
One of the biggest challenges was honestly teaching myself about the classification of all of these different plastics so that I could efficiently sort them into categories for my model! I had to become an expert on recycling before I trained AI on it. In addition, it was really interesting to work with a live video-stream. There are a lot of functions you have to set up for it (useRef, useEffect, useInterval, etc), and I learned a lot from the process.

## Accomplishments that we're proud of
I am especially proud of the layout of the final site; I believe it is simple, accessible, and informative enough for anyone to use very conveniently!

## What we learned
One of the biggest things I learned was how to market these types of projects towards younger audiences. It's really cool to use social media to advocate for global issues!

## What's next for PlastiClass
I would love to make PlastiClass every consumer's go-to for recycling information. Keeping it simplistic, I'd like to add the option to type in items to get recycling information about them (perhaps with a chatbot). I'd also love to integrate a Recycling Center Location API through the web app and perhaps even fetch information from every community's local guidelines. By forming connections in the recycling community, this app can turn into a tool to allow every consumer to reduce their carbon footprint by A LOT!

Built With
- css
- google
- google-teachable-machine
- html
- javascript
- ml5
- node.js
- react
