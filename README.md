# The Shoppies

![Screenshot 01](screenshots/the-shoppies-demo.gif "The Shoppies Demo")

## Project Description

The Shoppies is a movie nomination application created as part of the application process for the Shopify Fall 2021 Frontend Developer Internship. This app allows users to search for films and save their favorite films that they feel should be up for nomination. When they have selected 5 nominees, they should be notified that they are finished.

## The Shoppies Live Link

Please check out the live link for The Shoppies here: [The Shoppies](https://the-shoppies-priceless-kare.netlify.app/ "The Shoppies")

## Table of Contents
* [The Challenge](#The-Challenge)
* [My Approach](#My-Approach)
* [Technologies Used](#Technologies-Used)
* [Extra Features](#Extra-Features)

## The Challenge

Create a webpage that can search OMDB for movies, and allow the user to save their favorite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

### Requirements

* Simple to use interface
* Search OMDB's API and display the results (movies only)
* Add a movie from the search results to the nomination list
*	View the list of films already nominated
*	Remove a nominee from the nomination list
*	Each search result should list at least its title, year of release, and a button to nominate that film
*	Updates to the search terms should update the result list
*	If a search result has already been nominated, disable its nominate button
*	Display a banner when the user has 5 nominations

### Extras

Improvements to design and functionality are allowed. Crafting a nicer design, or improving the app by adding new features can be added to best showcase your passion and skills. The following image was provided as a reference:

![Screenshot 02](screenshots/reference-image-screenshot.png "Reference Image")

[Back To Top](#Table-of-Contents)

## My Approach

### Organization

In creating this app, I began with the overall structure and organization of the folder structure. Since I knew I was going to use React, I created a **components** folder where the components would go. Inside the **components** folder, I also created a **misc** folder for other components, like the loading spinner. I also created a **utilities** folder inside for the useDebounce Hook that I used for debouncing to prevent API calls from being fired on every keystroke. As I decided to use CSS Modules for the styling, I created a separate styles folder inside the **src** folder and created a separate CSS file for each component. I also created a separate **img** folder for the images used, as well as the spinner gif. I began with the functionality of the app (e.g., fetching the data, dsiplaying the data, nominating a movie, etc.), only adding styling as needed in the beginning. As I continued to get more of the functionality working, I moved more and more to the layout and the styling. As I completed the functionality, I focused more on the styles and details of the design.

### Design

For the design, I wanted to keep it within family of the existing brand. That way, the application would have the trust of the Shopify brand, and the winner would carry more impact. For this, I referred to the [Shopify](https://www.shopify.com/ "Shopify's Homepage") website in order to see what kind of layout, color, logos, and typograpy were used. In creating the design for my application, I used this as a reference in the selection of colors, font style, etc. used in my application. I focused on the details, by using the same logo used as the favicon, as well as creating an image on [Canva](https://www.canva.com/ "Canva") using the same logo and font to use for the Open Graph Meta Tag image.

### Development

In terms of developing the application, I decided to build the app using React and CSS Modules. I decided to use pure CSS, instead of using frameworks, and used Flexbox and media queries to create an application that would be responsive on both desktop and mobile devices. To provide a better user experience, I used minimal animations from React Transition Group and Animista.

[Back To Top](#Table-of-Contents)

## Technologies Used

* React (Hooks)
* OMDB API
* Flexbox
* Local Storage
* React Transition Group
* Animista
* CSS
* SweetAlert2
* Google Fonts
* Facebook Developer Tools (Sharing Debugger)
* Canva
* Netlify

[Back To Top](#Table-of-Contents)

## Extra Features

### Debounce

To prevent API calls from being fired on every keystroke, I used a debounce custom hook in conjunction with useEffect to delay the API call until the user finished typing. This ensures that expensive operations, as in the API calls here, are not executed too frequently. The improvement can be seen when looking at the Network tab in the console when making the API calls. In this first example, debouncing is not used. As you can see, API calls are being made with every keystroke. This can be clearly seen in the network tab. In addition to causing issues with performance, having new information appear with every keystroke can be chaotic and inefficient.

![Screenshot 03](screenshots/withoutDebounce.gif "Without Debouncing")

In comparison, you can see the improvement in the Network tab when debouncing is used. As you can see, although the same API call is being made (i.e., searching for "harry potter"), the API calls are not executed as frequently as when debouncing is not used. Instead of making API calls with every keystroke, the debounce hook forces the function that is fetching the data to wait a certain amount of time (500ms) before running again. The hook, then, limits the number of times the function is called. As you can see in the Network tab in the example below, this is much more efficient.

![Screenshot 04](screenshots/withDebounce.gif "With Debouncing")

### Local Storage

The provide for a better user experience, movies that are nominated by a user are stored in local storage, so that the nominated movies are preserved in local storage whether they are nominated and added to the Nominations list, or removed from the list. That way, when a user refreshes the page, the information is not lost.

```
const App = () => {
  return (
    <div>
    	<Password
        buttonFont="'Quicksand', sans-serif"
        buttonColor="orange"
        buttonTextColor="#000000"
        inputFont="'Quicksand', sans-serif"
      />
    </div>
  );
};

export
