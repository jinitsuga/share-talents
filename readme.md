### Run the project

In order to run the project locally, clone the repo, use the terminal to cd into its directory and make sure you install all of its dependencies by running `npm install`, then start the project by running the command `npm run dev`.

#### The idea

The idea behind this project is to bring a tool to my Warcraft friends where they'll be able to save as many talent builds as they want, since in-game they're only limited to 10 loadouts. After saving a set of however many talent builds you want, you can then generate a unique url that you'll link to that list of builds, enabling the user to keep track, share, and edit their sets of builds this way.

### The tools

Throughout this project I intend to learn and practice:
-Typescript --> everything points to TS being the future of any Javascript based tech, plus it's starting to feel really nice and convenient to use as I slowly get more and more into it

-TailwindCSS --> Earlier I've debated between Tailwind and styled-components for styling, and having already done two projects using styled-components, it is time for Tailwind! Since I'll be taking it slow while also incorporating TS, it seemed like a good opportunity to also begin my Tailwind journey.

-Vite: been trying to step away from create-react-app for a multitude of reasons, so this is the first project that I'll be starting with Vite! It seems super fast and covenient so far, and it's been an extremely easy install.

Feel free to drop suggestions or ideas to add to this project if you have some :)

#### Update and thoughts:

React Query + React Router loaders (no more fetching through useEffect):

- After understanding how it works, React Query sort of blew my mind at how much it simplifies the entire process of making any sort of request, and how much it helps the code and functionality of the app be not only cleaner, but easier to understand, think around, and edit. Combined it with (another first timer) react-router's "loaders" and loaderData hook, to pass data to a route before the route loads its component through its URL params, so the component can make use of this data right away. This made accessing the unique links for each set of builds extremely simple and easy. So far really liking React Query. React-router has also been helpful, but their docs haven't been the most clear to navigate, but nothing that can't be worked around by some testing of our own!

TS:

- Loving most of Typescript so far, despite slowing down the whole building process, mostly because it's my first time doing a project with it, but I can see how helpful it is to give the wild landscape of JavaScript some structure. I think it also makes code better and more accessible to read by other people, since it can be much easier to recognize what a declaration is when you see its type, or when you're reading a components' props with their types, you can already tell the purpose of each prop.

Tailwind:

- Great: extremely fast way to style elements as you like. Probably the best documentation I've ever read, with a search keybind and functionality that is just a pleasure to use. Seems like it can also be great for bigger teams, since there's a lot of potential with the extentions you can customize and build on the tailwind config file.
- Not so great: the inline CSS makes the JSX part of the component look awful and more difficult to read (feeling this even more coming from style-components), and it's almost certain that there'll be code repetition, which isn't necessarily that bad when it comes to some in-line CSS, but it can get out of control.

Vite:

- I'm no bundler expert, but I'm impressed at how fast Vite generally is, and how easy it was to set up a project using Typescript from the start. They also have descriptive documentation that was quite easy to navigate. The built in support for environment variables for both development and production has been really nice.
