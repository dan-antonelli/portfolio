import{A as e}from"./index.b87c64c9.js";import{g as t}from"./skills.c5d4507b.js";const a=[{slug:"github-pages-to-squarespace",color:"#5e95e3",description:`
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
<br>
Think of domain verification like a handshake between your website and GitHub Pages to make sure everything's official. Here's how:

-   **GitHub's Secret Code:** Time for more instructions. Follow the GitHub Pages [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) for 'verifying a custom domain'. They'll give you a special TXT host name and value.

-   **Squarespace Gets the Memo:** Add that TXT record to your Squarespace DNS settings. Remember, you only need the host name, so don't include the domain name! Squarespace has a [guide](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain#toc-txt-records) on adding TXT records, just in case.  
<br>

**The Waiting Game**: Like any construction project, there will be delays. Tech likes to move on its own timeline, so this could take up to 72 hours (although in most cases it's nearly instantaneous). Check [whatsmydns](https://www.whatsmydns.net/) to track your domain's progress. Once all the changes are set, your custom domain should proudly display your website. A green DNS checkmark on GitHub Pages is the sign that you've nailed it!



`,shortDescription:"Having your own domain is like buying a house instead of renting an apartment. You paint the walls (metaphorically, at least), decide on the landscaping, and have full control...",links:[],logo:e.GitHub,name:"From Renter to Owner: Setting Up a Custom Domain with GitHub Pages and Squarespace",period:{from:new Date(2024,2,23),to:new Date(2024,2,23)},skills:t("github"),type:""}],i="Blog posts";export{a as i,i as t};
