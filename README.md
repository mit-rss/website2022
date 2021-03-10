# RSS Team TA!

Gabe Margolis (gmargo@mit.edu), Liam Ackerman (liamack@mit.edu), Lisa Peng (lisapeng@mit.edu), Mubarik Mohamoud (mohamoud@mit.edu), Tanya Smith (tanika@mit.edu), Valerie Chen (vkchen@mit.edu), William Chen (verityw@mit.edu), Leilani Trautman (trautman@mit.edu)

## Modifying the template

You can change the template design as much as you want - in fact we want you to!
This website is pretty boring right now. Use pictures, videos, gifs and stories from your racecar experience to make this website pop!

There are a couple constraints however. First, your lab reports must remain accessible at these links:


    https://github.mit.edu/pages/rss2021-[TEAM_NUMBER]/website/labs/[LAB_NUMBER]


Also for the sake of the graders, please make sure that the text remains **black on white**.


And finally don't add too much javascript/bloat.
We're going to need to go through a whole bunch of these websites rapidly
and we don't want it to feel like learning modules.


## Setting up the template

You will be hosting this template using [github pages](https://pages.github.com/).
If you haven't already done so, have your team make an organization on [github.mit.edu](github.mit.edu).
Make sure your organization is named ```rss2021-#``` where "#" is your team number (not your car number!). Do not pad the number with zeros.


Then fork this repo into your organization.
In the settings page of the forked repo scroll down to the "Github Pages" section. Under "Source", click the dropdown menu and select "master branch" then hit save.
You should now be able to see the template if you navigate to:


    https://github.mit.edu/pages/rss2021-[TEAM_NUMBER]/website/


Now in order to modify the template, clone your fork and read on to the next section.


## Using the template

We've made this template as straightforward as we could to use.
You can edit this directly using HTML if you want (recommended to at least to attempt to change html things, but do not break the paths of the website). We also proved a file md_make.py which allows you to write things in markdown and converts into HTML for you to copy and put into your website.

    https://github.mit.edu/pages/rss2021-[TEAM_NUMBER]/website/my/directory


Running the python script requires a small library for converting markdown, so first run:


    sudo apt-get install python3-pip
    sudo pip3 install mistune


Then, if for example you wanted to edit your lab 3 report you would do the following:


### To Edit labs
1. Make a markdown file for your lab three
2. Edit the md_make.py to read this file and save it to the output
3. Take that output and copy it into the relative lab index.HTML
4. To view changes that are made to your website commit them and refresh the page


The template also supports $\LaTeX$ via mathjax (this is a script at the beginning of the html lab files)! For inline math use single dollar signs  and for multiline math use use double dollar signs like this:

$$
\begin{align}
  e^{i\pi} + 1 = 0
\end{align}
$$
