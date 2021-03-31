**Team # + Names**

**Class**

**Date**

# Lab # Report: Title

(no more than 4500 words total, not including Lessons Learned; each team member should contribute approximately equal amounts to the writing of this report)

## Requirements

### Audience
RSS faculty and staff, hypothetical managers, and professionals in the field (including your potential employers).

### Purpose
Write a persuasive argument demonstrating to faculty that you understand the Lab content and how it fits into the context of the class, and that the algorithmic solution you designed is sound and works well in experiments or simulations.  Make claims for your work, supported by detailed technical explanation, justification, and experimental analysis that would be persuasive to a hypothetical manager unfamiliar with the Lab.

### Rubric
See “Rubric for reports” on Canvas (Modules section).

### Visuals
All visual support (graphs, charts, images, clips, tables, etc.) must be numbered, titled, captioned, and cross-referenced in-text. See the "Formatting examples for figures, pseudocode, etc" section below for examples on how to do this using markdown.

### Style
You can modify your report to make it visually compelling, bearing in mind that ease of reading is a paramount consideration.

### Other
Label each section with the author’s name.

Technical grades will be team-based; CI grades will be individual.

You may peer review each other’s sections for the purpose of learning from each other.

The report as a whole should be edited for consistency and clarity; the editor’s name should appear at the top, and editing tasks should be shared over all the Reports.

### Required Sections
Use the outline of numbered sections below - if using markdown, you can make a copy of this .md document and fill in the blanks.

## 1. Introduction
Motivates and contextualizes this lab’s goals (i.e., identifies **what** you have designed in this lab and **how** that fits among the other RSS labs or how it contributes to developing an autonomous system). Presents an overview of the **purpose** and **specifications** of this lab. Provides a short and informal summary of the **technical problem** and introduces a bird’s-eye view of your technical solution.

(no more than 500 words)

## 2. Technical Approach
Formally presents the **technical problem** you have to solve in the lab.

Describes your team’s **initial set-up**, **technical approach**, and **ROS implementation**. Discusses the different building blocks of your technical approach.

Introduces required mathematical symbols and reports key mathematical relations to present the approach.

In addition to reporting on the **technical solution** you devised in response to the technical problem posted in this lab, this section explains the **how** of your approach, and should **justify** your team’s design choices and the rationale behind any tradeoffs. (Why these and not other choices?)

Any subsection must be numbered and start with a high-level overview that orients the reader.

Finally, remember to use figures to help the reader understand your approach.

(no more than 2250 words)

## 3. Experimental Evaluation
The purpose of this section is to **provide evidence of the functionality** of your design, and to **document your experimental evaluation**. The section should explain both:
- **what** was tested and **why**, and **how** those tests were performed (Technical Procedures, including a clear definition of the performance metrics used in the analysis),
- and **discuss the result** of those tests to arrive at an assessment of the functionalities you implemented in this lab (Results).

**You can find ideas and suggestions in the “Good Experimental Evaluation” Recitation on Canvas (Modules section).**

(no more than 1250 words)

## 4. Conclusion
Summarizes what you have achieved in this design phase, and notes any work that has yet to be done to complete this phase successfully, before moving on to the next. May make a nod to the next design phase.

(no more than 500 words)

## 5. Lessons Learned
Presents individually authored self-reflections on technical, communication, and collaboration lessons you have learned in the course of this lab.

## Formatting examples for figures, pseudocode, etc

### Tables   

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

### Images/Videos   

Make sure you place images in the right folders for them to actually be rendered in html  
![alt text](https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/3061105551624-1  "Iron Man")   
Why is the image so large? Because you have to manual resize if you use markdown... try using html to include the image like this one

| <img src="http://www.storywarren.com/wp-content/uploads/2016/09/space-1.jpg" width="50%"> |
|:--:|
| This is a caption for our image! Ooo, Ahhh **SPACE** |  

Look at this https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet  

### LaTeX

$$
\begin{bmatrix}
  \lambda&0\\ 0&\lambda
\end{bmatrix}=\lambda I
$$

This is inline latex $6=\sqrt{42}$

### Code Blocks

```json
{
  "6.141": "normal",
  "16.405": "woke",
  "no_sleep": "spoke"
}
```

```python
{
def do_something_productive():
  if not_productive:
    do_work()
  else:
    cry()
}
```
