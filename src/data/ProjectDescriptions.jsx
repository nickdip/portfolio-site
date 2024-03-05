
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

export default function ProjectDescriptions() {
    return {
        "grotto": grottoDescription(),
        "shufl": shufleDescription(),
        "nicksnews": nicksNewsDescription()
    }
}