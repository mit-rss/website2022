##!/usr/bin/env python3
import os
import mistune

def make_markedown(directory, filename):
    readme = os.path.join(directory, filename)
    if not os.path.isfile(readme):
        return

    # Open an output file
    f = open(os.path.join(directory, "html.txt"), 'w+')

    # Add the text from the README
    readme = os.path.join(directory, filename)
    with open(readme, 'r') as readme_f:
        renderer = mistune.Renderer(hard_wrap=False,escape=False)
        markdown = mistune.Markdown(renderer=renderer)
        data = readme_f.read()
        f.write(markdown(data))
        
if __name__ == "__main__":
    make_markedown(os.getcwd(), "README.md")
