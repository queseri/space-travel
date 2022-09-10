# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot
![Home Desktop](./assets/preview/home.png)
![Destination Desktop](./assets/preview/destination.png)
![Crew Desktop](./assets/preview/crew.png)
![Technology Desktop](./assets/preview/tech.png)

### Links

- Live Preview url: [Live Preview Link](https://queseri.github.io/space-travel/)
- Frontend Mentor URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- the site has 4 pages which are:
1. index.html
2. destination.html
3. crew.html
4. tech.html
- each page follows a layout format where the body has one div container child with a class of `container` with the exception of the `tech.html` where the div is named `wrapper` to allow a different styling from the others.
- these containers (`container` and `wrapper`) have 3 children each , which are `header`, `main` and `footer`

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

One of the major highlights of this challenge was creating the navigation menu with some accessibility features to allow or assist people who rely on assistive technology. Some inspiration of the nav was drawn from the bootstrap implementation

```html
        <button class="navbar-toggler menu-btn-js" type="button"
             data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" aria-expanded="false"
             aria-label="Toggle menu navigation"> 
          <img class="hamburger" src="./assets/shared/icon-hamburger.svg"
            alt="">
          <img class="close hide-icon-js" src="./assets/shared/icon-close.svg"
            alt="">
        </button>        
```
- this menu button is only present on mobile view and will be hidden from medium devices and onwards. The two images are for visual presentation only and therefore the `alt` value is left empty so that screen readers can skip the images. The `aria-controls` attribute of the button here identifies the element that is controlled by the button by attaching the id of the controlled element. Pressing the button toggles the navigation `on` and `off` . When the navigation is collapsed the `aria-expanded` should be changed to `true` and back to `false` when not collapsed. That will be achieved with a little javascript.


Another aspect that was interesting to learn from this challenge was to do with the tabbed interface. Much of the implementation was drawn from Heydon Pickering's [Inclusive Components - tabbed interface](https://inclusive-components.design/tabbed-interfaces/)


```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```



### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
