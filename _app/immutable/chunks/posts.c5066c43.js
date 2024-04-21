import{A as e}from"./index.c8b40efa.js";import{g as t,a as o}from"./skills.5584ed1e.js";const a=[{slug:"github-pages-to-squarespace",color:"#5e95e3",description:`
Having your own domain is like buying a house instead of renting an apartment. You get to paint the walls (metaphorically, at least), decide on the landscaping, and have full control over your digital address. In order to do this, you'll need a domain provider, and Squarespace is as good as any. True, the transition from Google Domains has made the process a bit of a pain in the arse, but hopefully, this guide will smooth out the wrinkles. So, let's get your website off GitHub Pages' standard address and settled into its own custom domain!
<br><br>
**Step 1: Laying the Foundation (Configuring GitHub Pages)**  

<br>

"Read the manual" might seem cliche, but here it's the best approach. Follow the GitHub Pages [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for configuring a custom domain, then come back here for the next steps.
<br><br>
**Step 2: Wiring Up the Utilities (Tweaking Squarespace DNS Settings)**  
<br>
Your domain currently resides with Squarespace - let's get it hooked up to your website:

-   **The CNAME Shuffle:** Add a CNAME record - think of this as adding a fancy nickname for your website. The *host* is 'www' and the *value* should be '<<user>user>.github.io' (replace '<<user>user>' with your GitHub username).

-   **IP Address Lineup:** Now for some A records - these are like the specific street addresses for your digital home. Add an A record with the host '@' for each GitHub Pages IP address. At the time of writing, these are: *186.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153*. You can also use the \`dig <user>.github.io\` command to find the current list.  
<br>  

**Step 3: The Home Inspection (Verifying Your Domain)** 
<br><br>
Think of domain verification like a handshake between your website and GitHub Pages to make sure everything's official. Here's how:

-   **GitHub's Secret Code:** Time for more instructions. Follow the GitHub Pages [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) for 'verifying a custom domain'. They'll give you a special TXT host name and value.

-   **Squarespace Gets the Memo:** Add that TXT record to your Squarespace DNS settings. Remember, you only need the host name, so don't include the domain name! Squarespace has a [guide](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain#toc-txt-records) on adding TXT records, just in case.  
<br>

**The Waiting Game**: Like any construction project, there will be delays. Tech likes to move on its own timeline, so this could take up to 72 hours (although in most cases it's nearly instantaneous). Check [whatsmydns](https://www.whatsmydns.net/) to track your domain's progress. Once all the changes are set, your custom domain should proudly display your website. A green DNS checkmark on GitHub Pages is the sign that you've nailed it!
`,shortDescription:"Having your own domain is like buying a house instead of renting an apartment. You paint the walls (metaphorically, at least)...",links:[],logo:e.GitHub,name:"From Renter to Owner: Setting Up a Custom Domain with GitHub Pages and Squarespace",period:{from:new Date(2024,1,23)},skills:t("github"),type:""},{slug:"demystifying-dns",color:"red",description:`
Following up on my [previous blog post](https://www.danielpolya.com/blog/github-pages-to-squarespace), I thought I'd write down why exactly you need to fiddle with DNS when releasing your website to the wild.  

<br><br>
**Step 1: Finding Your Perfect Digital Address (Buying a Domain)**
<br>
-   You Go Shopping: You visit a domain registrar (like GoDaddy, Namecheap, or Squarespace itself) and search for a catchy domain name (like [www.myawesomesite.com](https://www.myawesomesite.com/)).
-   Availability Check: The registrar checks if your dream domain is available. If it isn't, you might need to get creative with your name choice!
-   Claiming Your Territory: If it's available, you pay a fee to register the domain for a specific period (usually one year or more). You're basically renting that digital address.
-   Behind the Scenes: The registrar updates a massive database called the Domain Name System (DNS). Think of the DNS as the internet's giant phonebook.  
<br><br>

**Step 2: Building Your Digital House (Web Hosting)**
-   Finding a Construction Site: You need somewhere to store your website's files (text, images, code, etc.). That's where web hosting services like GitHub Pages come in. They provide server space for your site.
-   Uploading Your Blueprints: You create your website's content and upload it to your hosting service (in this case, GitHub Pages).  
<br><br>

**Step 3: Wiring the House for Visitors (DNS Configuration)**

This is where those DNS records get crucial:  
<br>

-   The Address Book Needs an Update: When you bought your domain, it came with default DNS settings. These need modification to point visitors in the right direction.
-   CNAME: Adding a Nickname: The CNAME record creates an alias or nickname. When someone types '[www.myawesomesite.com](https://www.myawesomesite.com/)', the CNAME tells the DNS to look for your site on GitHub Pages.
-   A Records: The Exact Address: A records link your domain name directly to the IP address of the server where your website files live. GitHub Pages provides these IP addresses.
<br><br>

**Step 4: The Grand Opening (Your Website Goes Live!)** 
-   Someone Types in Your Domain: A visitor enters '[www.myawesomesite.com](https://www.myawesomesite.com/)' in their browser.
-   The Internet Phonebook (DNS) Does Its Thing: The browser asks the DNS, "Hey, where can I find this website?"
-   Following the Map (DNS Records): The DNS checks your CNAME and A records, figures out the correct IP address for your GitHub Pages site, and sends the visitor's browser in that direction.
-   Pulling Up the Welcome Mat: Your GitHub Pages server receives the request and sends back your website's files.
-   Ta-Da! Your beautiful website appears in the visitor's browser.  
<br><br>

**Why All the Fuss With DNS?**  
<br>
-   Machines Need Concrete Addresses: Computers talk in numbers (IP addresses). Domains are human-friendly; DNS translates between the two.
-   Websites Can Move: If you ever change web hosts, you only need to update your DNS records. Your domain name itself stays the same, making the switch seamless for visitors.
`,shortDescription:"Following up on my previous blog post, I thought I'd write down why exactly you need to fiddle with DNS...",links:[],logo:e.GitHub,name:"Demystifying DNS: Why It's Key to Launching Your Website",period:{from:new Date(2024,1,28)},skills:t("github"),type:""},{slug:"absolute-imports-in-react-ts",color:"blue",shortDescription:"As your React TS app grows, your imports will become harder and harder to manage, resulting in a nightmarish...",links:[],logo:e.ReactJs,name:"Using Absolute Imports in React with TypeScript",period:{from:new Date(2024,2,26)},skills:t("reactjs","ts"),type:"",description:`
As your React TS app grows, your imports will become harder and harder to manage, resulting in a nightmarish scenario of paths like \`../components/MyComponent\` and \`../../util/dateUtil\`. Using these paths quickly becomes tiresome, not to mention their maintenance challenges.

<br>

[Bulletproof React](https://github.com/alan2207/bulletproof-react) is something of a holy grail when it comes to promoting best practices in a React app, and it does have a solution to the above problem: [absolute imports](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-configuration.md). This means that instead of relative imports, you create a path alias (usually '@') pointing to your 'src' folder. From then on, you can import \`MyComponent\` as \`@/components/MyComponent\` - or even add other paths where symbols point to folders other than 'src'.

<br>

In theory, to make this work, you simply have to add this to your \`tsconfig.js\` file:

<br>

\`\`\`
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
\`\`\`
<br>

...and watch the magic happen.


<br>
Unfortunately, if you used Create React App to set up your app, this will most likely result in a compile error, even if you put the path alias config into a separate file and use it in your main \`tsconfig.js\` file, as some guides suggest.
<br>
<br>

So what now? You can theoretically configure Webpack (which is used by CRA in the background) to solve this issue. However, unless your favorite pastimes are wrestling with configurations and poking needles into your eyes, you might be better off with CRACO, which allows you to configure your React app without ejecting.
<br><br>

Setting up absolute paths with [CRACO](https://www.npmjs.com/package/@craco/craco) is very straightforward:

1.  Run \`yarn add @craco/craco\` (or use npm if that's more to your taste)
2.  Put the following file in your project root: \`craco.config.js\`, and add the following to it:


\`const path = require('path');\`

3. Finally, change your scripts in your package.json:

\`\`\`
"scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test",
   "eject": "craco eject"
}
\`\`\`

And that's it, now you can use absolute imports in your React TS project!  
<br>
Still, if the above sounds like bending over backwards just to solve a relatively simple problem, you might be better off using the much more flexible [Vite](https://vitejs.dev/) to setup your project to begin with. :)
`},{slug:"what-makes-a-senior-dev",color:"yellow",shortDescription:'In the fast-paced world of software development, the term "senior developer" is thrown around a lot. But what does it truly mean?',links:[],logo:e.Opinion,name:"Senior Software Engineers: Experience Isn't Everything",period:{from:new Date(2024,3,8)},skills:o("opinion"),type:"",description:`
In the fast-paced world of software development, the term "senior developer" is thrown around a lot. But what does it 
truly mean? The answer, as many experienced programmers will attest, is far from simple.  
<br>
One person's senior developer might be another company's mid-level engineer. Years of experience don't always equal seniority, especially in environments where the focus is narrow and repetitive tasks are the norm. 
You can get stuck in a loop of doing the same thing year after year, limiting true growth. This lack of structured mentorship, so common in programming, often means even experienced developers might unknowingly perpetuate less-than-ideal practices.  
<br>
Many companies fall back on "years of experience" as the primary yardstick, a flawed approach as we've just discussed. No wonder then, that the interviewing process so frequently resembles a [bizarre hazing ritual focused on obscure algorithms](https://www.stilldrinking.org/interviewing-is-broken) - a far cry from the kind of problem-solving needed on the job.
<br><br>
**The Hallmarks of a Senior Developer (according to me, at least)**
<br><br>
I've been lucky enough to collaborate with truly exceptional developers, and from my experience, these are the qualities that separate a senior engineer from the rest:
<br><br>
-   *Autonomous Execution*: A senior developer takes ownership, delivering high-quality results on schedule with little hand-holding.
-   *Pragmatism Over Perfection*: They understand when clean code is paramount and when it's okay to make calculated trade-offs to meet deadlines.
-   *Mentorship Mindset*: They're eager to share knowledge, elevate their team, and foster growth .
-   *Exceptional Communication*: Breaking down complex technical concepts into clear, understandable terms - a vital skill in a collaborative field.
-   *Creative Problem-Solving*: Perhaps most importantly, senior developers excel at tackling the truly knotty issues - the ones where Stackoverflow shrugs its shoulders. These situations often require diving into the depths of library source code or seeking specialized support. 
<br><br>  

To illustrate the latter, let me insert a shameless plug: at one point in my career, I worked extensively with [PDFTron](https://github.com/PDFTron), a powerful library for document manipulation. Our application depended on it for converting files into PDFs, but the process had become agonizingly slow, sometimes failing entirely. Online searches were fruitless, and my seasoned colleagues were equally baffled.  Our custom wrapper around PDFTron, inherited from long-departed developers, was a labyrinth of undocumented code.
<br>Rather than give up, I took a deep dive into PDFTron's open-source code on GitHub.  Understanding the library's inner workings was key.  Combining this newfound knowledge with insights gleaned from reaching out directly to PDFTron's support team, I finally unraveled the mystery and implemented a fix.
<br><br>

**A Better Way to Gauge Seniority**
<br><br>
So, if years of experience aren't the answer, how can you know a senior developer when you interview one? Here are my tips:
<br><br>
-   *Check Their Code*: If available, examine their publicly accessible code (like on GitHub). It provides valuable insights into their approach and style.

-   *The Proof of the Pudding*: Ask them to describe how they overcame a particularly challenging problem. Listen for resourcefulness, depth of understanding, and a structured approach.

-   *Focus on Portfolio and Project-Based Evaluation*: Instead of purely theoretical grilling, have candidates showcase a portfolio of past work, explaining their thought processes, design choices, and how they tackled challenges. A small, well-defined project assignment focused on real-world problem-solving can be even more revealing.

-   *Take-Home Exercises*: Provide candidates with thoughtfully crafted take-home exercises that mimic the kinds of problems they'd encounter on the job. These exercises offer insight into their coding style, problem-solving approach, and attention to detail within a less stressful environment.
<br>
By emphasizing these alternative approaches, we shift the focus away from nerve-wracking tests toward a more holistic picture of a developer's potential. It emphasizes valuable skills like problem-solving, collaboration, and a continuous learning mindset – skills that go far beyond rote memorization of algorithms.
<br><br>  

**Final Thoughts**
<br><br>
The software industry stands to benefit immensely by evolving its understanding of a "senior software engineer". Prioritizing the qualities discussed - problem-solving, adaptability, mentorship, communication - over simple "years on the job" would bring immense value. This shift would empower developers, leading to more fulfilling careers and significantly improve the quality of software solutions developed.
<br><br>
It's time to refine our approach to identifying and fostering senior talent. By championing those who continually learn, collaborate effectively, and tackle the truly complex problems, we create a better future for the entire development community.
`},{slug:"ocd-might-be-your-winning-ticket",color:"green",shortDescription:"In the good old days, being on the spectrum was an asset for programming; today, having OCD might be the winning ticket.",links:[],logo:e.Opinion,name:"OCD might be your winning ticket",period:{from:new Date(2024,4,20)},skills:o("opinion"),type:"",description:`
In the good old days, being on the spectrum was an asset for programming; today, having OCD might be the winning ticket. The focus has shifted dramatically from raw, algorithmic problem-solving and creative innovation to meticulous code organization. The vast majority of software developers - except for those tucked away designing missile control systems - are occupied with integrating APIs. With increasingly large teams, code must be understandable to everyone, sometimes at the expense of performance or even common sense. This emphasis on universal readability demands more organizational prowess than creative thinking, especially as much of our work involves refactoring.
<br><br>
Yet, recruiters still primarily seek algorithmic problem-solving skills, a far cry from the daily grind. Problem-solving in modern development isn't about juggling complex algorithms or optimizing performance; It's deciphering the labyrinthine and often outdated documentation of APIs (and when that fails, diving into the source code). Meanwhile, developers are pulled into endless meetings, many of dubious relevance. Still, they must speak up and maintain visibility to a manager already tallying up those coveted year-end bonuses.
<br><br>
In the early days of software development, legends like John Carmack, Linus Torvalds, and Ken Thompson were revered for their technical mastery. They pushed the limits of hardware, finding ingenious ways to optimize performance within tight constraints.
<br><br>
Today's software landscape looks drastically different. With the rise of web development and large-scale projects, collaboration and code maintainability often outweigh raw efficiency. The focus is less on assembly-level optimization and more on picking the perfect variable name.
<br><br>
The majority of software development now revolves around integrating APIs, meticulously documenting code, and adhering to coding conventions. When code is finally ready for review, the real battles begin. Seemingly trivial decisions - like naming conventions or minor refactorings - can spark endless debates. This obsession with form over function is a pitfall in many development teams.
<br><br>
The cycle continues, leading to burnout, disillusionment, or a move toward less meticulous companies where quick-and-dirty solutions reign. Promised pay raises rarely arrive, leaving developers to grapple with a frustrating reality.
<br><br>
Is there a solution? Unfortunately, there's no simple answer. Software is a business, which means that, at the end of the day, profit triumphs over everything. We also work in teams, so frictions are inevitable: you, me, your colleague, your manager do things from time to time that seem insufferable to other team members. Perhaps the path forward lies in finding a healthier balance between meticulousness and innovation. This could involve dedicating time for experimentation, allowing developers to explore new approaches without compromising the clarity and maintainability of the codebase. Regular, constructive code reviews that move beyond nitpicking and focus on the bigger picture can also foster an environment where developers feel empowered to explore better solutions. While clashes and frustrations are a natural part of team dynamics, a conscious effort toward compromise and finding those sweet spots between standardization and innovation can lead to a more sustainable and enjoyable development process.
`}],r="Blog posts";export{a as i,r as t};
