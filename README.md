# Workday Scheduler 

## About the Project
This project is an app that helps you plan your day by allowing you to plan for the hourly blocks of time.  The user can save text. The information typed by the user is stored and displayed when the user visits the webpage again. I developed this application during the third week of the coding bootcamp experience at Columbia University, NY. Date of publication: 11/01/2020

[Link to the Work Day Scheduler](https://jidrees.github.io/Work-Day-Scheduler--JQUERY-Bootstrap/) <br />
[Video Demo]()<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JIDREES](https://github.com/jidrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Programming Competencies](#programming-competencies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Copyright](#copyright)


## User Story

I am an employee at a large firm and every day is busy. I am looking for a new app that can help me organize my day and keep track of the various tasks and meetings. I am specifically looking for an app that can enable me to organisze my daily tasks/commitments with the flexibility to do in an hourly fashion.
 



## Technologies used

![Bootstrap](https://img.shields.io/badge/Bootstrap-blueviolet?style=for-the-badge&logo=bootstrap)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)



## Packages used



## Applied Programming Skills

This project demonstrates command over the following programing skills: 

- Using bootstarp flex-box grid system to create units of 1hr blocks consisting of hr tag, text area to store information and a save button

- Using Javascript to obtain current date and displaying information into jumbotron

- Using JQUERY to change the color of hr block text box dynamically based on the present hr (green), previous hr(blue) and future hr (pink)

- Saving user text typed in hourly text blocks into local storage by creating an object

- Note that the save buttons have been assigned a unique id (each) which is specific to the hour blocks and then JQUERY is used to pair the user text in individual hr blocks to the unique id of their corresponding save buttons. In this way each unique text string from an hr block is uniquily identifyable using the ids drived from a corresponding buttons.

- Storing strings of text from hr blocks into an object in which each text string is identifyable by a unique id

- Using JSON Parsing when retrieving data from local storage and using JSON Stringify to store data into local storage

- Linking CDNs for using Google fonts and font Awesome in HTML

- Note how the JQUERY foreach method is used to target each of the 1hr blocks using their id, then these ids are converted to integer using parsInt. Each of the textareas in the 1hr block component are uniquely id'ed but using the hr they represent. For example for the hr block 9am the id is '9'. This number can be matched with the current hr infomation and then determining present, past and future to decide relevant color scheme.

- Note that whenever I want to target multiple textareas for a common task I am targeting them by the common class they share ".textarea", and when I want to target each one of them individually I am targeting them using the unique id. 

- Customising bootstrap classes by adding CSS classes under <style> in HTML for color change based on time

- Using bootstrap to generate a mobile responsive webpage

- Adjusting spacing with manipulation of padding, margine, border, radius

- Using JQUERY to dynamically manipulate classes for HTML elements

- Using JQUERY to target multiple buttons as event listeners. In particular being able to target each button uniquely as well as all buttons as a group, depending on the task

## Key files in the repository

index.html <br />
script.js


## Installation

None

## Usage

Please visit the weblink (https://jidrees.github.io/Work-Day-Scheduler--JQUERY-Bootstrap/)


## Testing

None

## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copyright 2020-present. Jay Idrees


