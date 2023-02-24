# RSS Team Website Template

This is a generic template for your team website hosted on github pages.

## Modifying the template

You can change the template design as much as you want - this website is pretty boring right now. Use pictures, videos, gifs and stories from your RSS experience to make this website pop! There are a couple constraints however. First, your lab reports must remain accessible at these links:

    https://rss2023-[TEAM_NUMBER].github.io/website/labs/[LAB_NUMBER]

Also for the sake of the graders, please make sure that the text remains **black on white**.

And finally **don't add too much javascript/bloat**. We're going to need to go through a whole bunch of these websites rapidly and we don't want it to be too slow to load.

## Setting up the template

You will be hosting this template using [github pages](https://pages.github.com/).
If you haven't already done so, have your team make an organization on [github.com](https://github.com). Make sure your organization is named ```rss2023-#``` where "#" is your team number (not your car number!). Do not pad the number with zeros.

Then fork this repo into your organization, and rename the repo to just `website`. In the settings page of the forked repo scroll down to the "Github Pages" section. Under "Source", click the dropdown menu and select "master branch" then hit save. You should now be able to see the template if you navigate to:

    https://rss2023-[TEAM_NUMBER].github.io/website/

Now in order to modify the template, clone your fork and read on to the next section.

## Using the template for lab reports

**You must follow the instructions given in `/latex_report/latex_report.pdf` for your lab reports. This document outlines the expectations for the reports as well as an outline of the required sections.**

The template has a home page written in html at `/index.html`. It also has a labs page at `/labs/index.html`. You will add folders for each of your labs inside the `/labs` folder, and each one will need to have a corresponding `index.html` file as well as any supporting files (images, etc.). You can take a look at the `/labs/example_lab` section. There are several options for how to generate your lab report as a PDF, but at minimum you must provide links to your briefing slides and a download of your report in PDF format, as well as embedding the slides and report as shown in `/labs/example_lab/index.html`. You can see how this example lab is rendered at 
https://mit-rss.github.io/website2023/labs/example_lab/

**To embed your slideshow onto the page** as is shown in the link above, go on your Google Slides page, then click File > Publish to the Web. Then, select the Embed tab. After selecting the options you'd like for the slides, it should give you HTML code which can be pasted into your HTML file to add your slides to the page.

One simple way to generate this PDF would be to use a LaTeX tool such as [Overleaf](https://www.overleaf.com/) (think google docs for LaTeX) to collaborate with your team. You can use the file `/latex_report/latex_report.tex` as a starter template - it was used to produce the lab report instructions at `/latex_report/latex_report.pdf` if you want to see how the corresponding LaTeX code renders in a PDF. It also has examples of how to create elements like tables, figures, pseudocode, and code blocks in LaTeX.

To view local changes that are made to your website repo on github pages, commit them and refresh the page. You might need to do a hard refresh depending on your browser / cookie settings.

## Optional

If you would like more creative freedom, you are also welcome to render your report directly in HTML in addition to your PDF.

Another option is to write your report in markdown and then run the provided `md_make.py` script, which will generate an `html.txt` file with your report translated into HTML. To render this on your website, paste the contents of `html.txt` into your `index.html` file (see `/labs/example_lab/index.html` for where to paste). You will have to edit `md_make.py` to read from the correct filename where you have your markdown. **Again, note that these methods are optional, but providing a download link and embedding a PDF of your report is required.**

If you do want to use `md_make.py`, you should first install mistune:
```
    sudo apt-get install python3-pip
    sudo pip3 install mistune
```

If you want to make your report fancier you can also modify md_mark.py with [custom options](http://www.discoversdk.com/blog/custom-markdown-parsing-with-mistune-and-python), and if you want to generate a pdf from markdown you can install pandoc and run
```
    pandoc lab_report.md -o lab_report.pdf
```

The website template also supports $\LaTeX$ via mathjax (this is a script at the beginning of the html lab files)! For inline math use single dollar signs and for multiline math use use double dollar signs like this:

$$
\begin{align}
  e^{i\pi} + 1 = 0
\end{align}
$$

If you want to use markdown, you can use the file `markdown_report/markdown_report.md` as a starter template - it has examples of headers and text formatting as well as how to create elements like tables, figures, and code blocks in markdown.
