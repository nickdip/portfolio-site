
function grottoDescription() {
    return (
        <>
            <p>In November 2023, I joined a team of two other software engineers to create a functional application in 48 hours. There was a simple theme: green - leaving it fairly open ended. Anything from the environment to Christmas were suggested as themes. We decided to roll with an idea that combined both the environment/sustainability and Christmas: an application that suggests environmentally sustainable Christmas presents that people can buy. The idea was that children can use the application to write a letter to Santa and this letter would be analysed and items available from the database would be suggested. This was a daunting task: new frameworks, such as NextJS and TailwindCSS, were suggested. There was a lot of learning with little time. </p>
            <p>I was particularly interested in the letter analysis so I started on this, while others focused on the frontend. </p>
            <p>To start, a database was needed. I created a database (with the assistance of AI for time reasons) that contained mock gift data. For example:</p>
            <p>
                {`{
                    "Name": "Teddy plush",
                    "Category": "animals",
                    "Image link": "https://m.media-amazon.com/images/I/61z+uFOG3AL._AC_SL1001_.jpg",
                    "Price": 1.30,
                    "Description": "This teddy is a fun and educational toy for kids, perfect for imaginative play and skill development.",
                    "Sustainability": "second hand",
                    “Associated_Words”: [
                        "teddy",
                        "teddies"
                    ]
                }`},
            </p>
            <p>Most of this was data to be displayed for the user, but it also contained useful data for the analysis, such as gift category and any associated words.</p>
            <p>Once a letter is submitted and we have a string that represented a letter to Santa, simplifying the logic I used:</p>
            <p>Split the string into an array of words. For each word, punctuation was removed and all words were that were considered to be common connectives, verbs, pronouns, articles or other non-nouns (such as “hello”) were not added to the array.</p>
            <p>Iterate through each word in the array and find matches to any items in the database. This includes finding matches for categories (i.e a child says ‘I like animals’) or matches for any associated words. </p>
            <p>Create an array of final results that generates items that are either a primary match or match a category. If there are no matches, add random toy items.</p>
            <p>I did originally implement a general natural language facility for Node called natural to also analyse for pick up typos (i.e bikr instead of bike) - unfortunately this was removed due to bugs that were unable to be fixed within the 48 hour timeframe. </p>
            <p>Once joining the frontend, learning the foundations of new techstacks such as NextJs and TailwindCSS proved challenging. Fortunately, one of the more experienced engineers had created most of the skeleton for our NextJS project so I could pick up the rest with the documentation. TailwindCSS was surprisingly smooth. I am not afraid to admit that my relationship with CSS has been rocky throughout my time as a developer and I loved what Tailwind offered. It’s still CSS at its core, but I no longer had to worry about naming variables and being able to edit attributes in the HTML file meant I could experiment with CSS with ease. I’m definitely a Tailwind convert - this site was made with Tailwind for a start.</p>
            <p>Overall, the Hackathon was a fun experience and I will absolutely be volunteering for one in the future. Is creating an application in 48 hours best practice? Probably not - but you will push yourself to the limits and meet some great people along the way. </p>    

        </>
    )

}

function shufleDescription() {
    return (
        <>
            <p>This was my final project for Northcoders bootcamp and was developed by myself and three other engineers. We had said quite early on that a machine-learning driven application was something that interested us, so after brainstorming a few ideas, we developed the concept of Shufl: an application that predicts a users favourite song based on machine-learning principles. We were pretty bold and decided to have a go at building our own neural network rather than using a library such as Pytorch. Without getting too mathematical, the basic idea included:</p>
            <p>1. Initialise the network with random weights</p>
            <p>2. Input data into the network for predictions</p>
            <p>3. Calculate the error by comparing predictions to actual values</p>
            <p>4. Adjust weights using backpropagation based on the error</p>
            <p>5. Repeat the process until the error is minimised or reaches an acceptable level. </p>
            <p>If you have a good level of understanding of mathematics and statistics, feel free to read {<a className="underline" href={"https://realpython.com/python-ai-neural-network/"}>this article</a>}, which really helped us throughout the process. </p>
            <p>To say there were some challenges was an understatement. I don’t think the neural network we built will be stolen by Spotify anytime soon, but we did show there was a statistically significant difference between the results of our network versus a random result. Further challenges included having to use two APIs for our data - this involved me developing a script that merged a large sample of the data from both APIs into our own database. We also decided to make this a mobile application and none of us had experience with mobile development. Looking back, making it a mobile application was perhaps slightly over ambitious in our time frame given our understanding, but we got it working in the end and there were absolutely no regrets. </p>
        </>
    )

}

function nicksNewsDescription() {
    return (
        <>
          <p>Nicks News was my first full-stack project during Northcoders. I came into the bootcamp with some coding experience but I was exploring a lot of new tech stacks in this case - I had never built a server before nor had I created anything complex with React. </p>  
          <p>I really enjoyed designing the backend for this application. We had learnt about the MVC design pattern before, but this project really embedded how keeping code modularised helped with scalability. The code became particularly complex when considering the different queries a user could make to the database. I dealt with this by implementing two classes [ {<a className="underline" href={"https://github.com/nickdip/nc-news/blob/main/models/queries/query.js"}>1</a>}, {<a className="underline" href={"https://github.com/nickdip/nc-news/blob/main/models/articles.models.js"}>2</a>} ] with methods that could be accessed for certain conditions (i.e ‘limit’ or ‘offset’). I had already started to see the benefits of Object-Oriented Programming with my Connect 4 project and this really drove me to delve deeper into OOP after the course. </p>
          <p>I always thought I was a backend developer but I surprised myself with how much I enjoyed building the frontend. I started this course with the idea that ‘frontend’ meant being good at CSS and being able to create a responsive JavaScript button on your page, but I’ve realised it’s a lot more: you need a good understanding of how backend systems work, especially with integrating APIs. Frameworks like React also require a deep level of understanding and I had a fair amount of problem-solving when dealing with states. That said, I spent way too long on the CSS for this site - and I’ll be honest, I still don’t like how it looks. I definitely learnt to not underestimate CSS and I went back to basics after creating it to further my understanding of grid and flex. When I created the website you're on right now, I felt a lot more comfortable with CSS design.</p>
        </>
    )
}

function wordHuntDescription() {

    return (
        <>
        <section>
            <p>This was a project I worked on in my spare time while completing Northcoders bootcamp. I was inspired by a similar game available to play on iMessage (called ‘Word Hunt’ on game pigeon). The idea is that a player is given a board with a 2D board, with tiles of letters, the player needs to link consecutive letters up to create valid words.</p>
            <p>When playing this on my phone, I was pretty interested in how the underlying algorithm answered the following questions: how do we scan the board for all valid words? How do we check whether a board is valid? How do we check whether a word that a user guesses is ‘linked’ on the board?</p>
        </section>
        <section>
            <h2 className="text-2xl my-2">Algorithm and Strategy</h2>
            <p>For searching my board, I knew I needed a recursion strategy and decided to implement a type of backtracking. The code for searching the board is available here but I will go through the underlying logic.</p>
            <p>Let’s imagine we have a 3x3 board made with the following array:</p>
            <pre>[[“T”, “W”, “I”], 
[“M”, “H”, “T”], 
[“F”, “I”, “H”]]</pre>
            <p>The player thinks the word ‘fit’ can be found on the board (and they would be correct). A player inputs the word and the search algorithm begins. We start with looking for the letter ‘f’ on the board:</p>
            <ul className="list-disc">
                <li className="my-2">Each cell on the board is a potential starting point for a search (the letter ‘f’ in this case).</li>
                <li className="my-2">For each cell, I tried to build the target word by recursively exploring adjacent cells (horizontally, vertically, and diagonally) while maintaining a record of visited cells to avoid revisiting them (an array called ‘visited’).</li>
                <li className="my-2">If a target letter is found, this is added to a variable ‘wordTrack’ that tracks what letters we currently have. So if we have found the letter “f” and “i” on the board, wordTrack = “fi”. Once wordTrack is equal to the target word, the process stops.</li>
                <li className="my-2">This process continues until either the word is found, at which point true is returned, or all starting points and paths have been exhausted without finding the word, resulting in a false return value.</li>
            </ul>
        </section>
        <section>
            <h2 className="text-2xl my-2">Dictionary and Word Validation</h2>
            <p>You might be asking now, what if they input “twi”, this ‘word’ is on the board but it’s not a valid English word. This is where the dictionary comes in.</p>
            <p>I decided to use a Scrabble dictionary (and Scrabble scoring) that was shared on another developers<a href="https://github.com/raun/Scrabble/blob/master/words.txt"> GitHub</a>. The question was then how to best store these words. I could use a server-side solution, but I was interested in keeping this as client-side. So how best to store and look up words quickly?</p>
            <p>I did consider some different data structures, including a Trie, but figured this was an overkill and also generally a bad idea. I ended up finding an Object actually worked fine: For key values I used the first two letters of a word and then each corresponding value had an array of words with that prefix. I then used binary search to find the word in the array. This solution wasn’t perfect, it does create uneven-distribution of words, but I worked fine for this project.</p>
            <p>The client side works currently but I would love to turn this into a web-based game and plan to do so. Whether I use a different implementation for the dictionary (such as a database) is something that I’m yet to decide.</p>
        </section>
        </>
    )


}

function connect4Description() {
    return (
        <>
        <section>
        <h2 className="text-2xl my-2">Motivation</h2>
        <p>
            Connect-4 was my final project for Harvard CS50’s final course. I chose this because when I first played around with Python a few years prior, I started learning how to create a naughts and crosses game, which I then developed into a Connect-4 game as an extension. I had attempted to develop this into a version where you can play against a computer, but ended up lost in a mess of code and never managed to get it fully working. This was a good opportunity to try and get a working game and even develop it into a web app using Flask.
        </p>
    </section>

    <section>
        <h2 className="text-2xl my-2">Logic</h2>
        <p>
            One of the big breakthroughs with this project was coming to appreciate the use of classes and objects. I first considered a Connect 4 board to be a simple matrix, using a similar idea that we would use for naughts and crosses (an “X” or “O” for a player's counters). For example:
            {`
[
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "X", "_", "_", "_"],
  ["_", "_", "O", "X", "_", "_", "_"],
  ["_", "X", "X", "O", "O", "_", "_"],
  ["O", "X", "O", "X", "O", "X", "_"]
]`}
        </p>
        <p>
            This works great when playing against two human players but when it came to playing against a computer, I needed to consider a lot of information about a particular position. For each position, I wanted to consider the different ‘states’ that this would leave the board in (see here for more details). Creating a board class was a far more organised way of keeping track of all this board data.
        </p>
    </section>

    <section>
        <h2 className="text-2xl my-2">Using Game Theory</h2>
        <p>
            For the AI, I needed to calculate scores for a potential move. Suppose a computer is considering playing in column 1, I needed to consider the consequences of this. For instance, can player 1 (human) win on the next go? This would give player 1 a very high score and player 2 (the computer) a very slow score.
        </p>
        <p>
            For anyone who isn’t aware, Connect 4 is a strongly solved strategy game. I wish I could say that the AI I built to play against a computer plays perfectly, but it does not. The issue was purely down to computational complexity; evaluating every possible move in an exponentially growing game-tree was not possible*.  I used my own version of minimax (<a href="https://en.wikipedia.org/wiki/Minimax">https://en.wikipedia.org/wiki/Minimax</a>) and alpha-beta pruning (<a href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning">https://en.wikipedia.org/wiki/Alpha–beta_pruning</a>) to calculate the best move for the computer, limited to only a few moves ahead.
        </p>
    </section>
    <section>
        <h2 className="text-2xl my-2">Reflection</h2>
        <p>
            As I write this, I have a lot more knowledge about coding. In a way, I should look back at this project with frustration: there is no testing, I did not use git or any form of version control and parts are overengineered to say the least. Knowing what regex was would have seriously helped with how I designed my AI logic - I effectively wrote functions to find match patterns within the code. However, I probably felt more satisfaction from completing this project than any other. It took a lot of headaches, and a few times to restart, but I managed to get this all working with very little guidance.
        </p>
        <p>
            *While near the end of my project I did find a developer who has created a Connect 4 game where the computer plays perfectly using C++ (<a href="http://blog.gamesolver.org/solving-connect-four">link</a>). At one point I did consider re-evaluating my game to use his logic, as I believe the same principles should also work fine with Python. However, I did want to create the logic myself, even if it wasn’t perfect and this developer dealt with a lot of concepts, such as bitmaps, that I didn’t want to delve into at this point.
        </p>
    </section>
        </>
    )
}


export default function ProjectDescriptions() {
    return {
        "grotto": grottoDescription(),
        "shufl": shufleDescription(),
        "nicksnews": nicksNewsDescription(),
        "wordhunt": wordHuntDescription(),
        "connect4": connect4Description()
    }
}