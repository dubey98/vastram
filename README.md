# VASTRAM

Vastram is an ecommerce application built wtih the help of react, bulma and supported with nodejs and express on the backend

## Build Stack

Following libraries are used for building this project -

- **React**: This app uses react to achieve superpowers. the whole website is broken down into standalone modular components, which are re-used.
- **Axios**: Axios is used for fetching data from the backend. using axios implemented axios intercepter for intercepting request and attaching tokens to them.
- **Bulma**: The frontend is designed using Bulma CSS only library.

The project uses react-hooks for maintaining state, react context for maintaining context for various self contained components.

### Authentication

Authentication is implemented with JWT, using axios interceptor, token is attached with outgoing request. all the components required for authentication live inside `/src/auth/`. A custom
hook is implemented wrapping around the entire application so that we can instantiate and use authentication in any desired component.

### Navigation

navigation around the app is built using react-router. as all the sensitive data is fetched after the component loads, and all request carry token with them, navidating to any protected route will not get you access to the data.

### Listing products

Products are listed using flexbox and columns, so the number of products we can fit on a page size is first determined using functions of the react-responsive library. This way, we only request the data we need and reduce bandwidth uses. We also determine the total number of products we can have to show the page numbers, determining which products will be displayed next.

We also use client-side routing on the application. As we apply filters on the page, the address is updated to sync the displayed product list. This functionality makes the link shareable so that other users can land on the same list of products as you.

From the list of products, a short description of the product, including price, is displayed. Clicking on the product takes you to the product detail page, where you can see the detailed summary of the product and add them to the cart.

### Orders

The complete order functionality is implemented under one order context to synchronize orders, addresses, and payments. You can modify your Order (such as quantity and items), and using the context, sync this with the Order total component. By using one context and updating data only when necessary, we save bandwidth.

## How to Install And Run

if you want to run this project locally. clone this repository and run `npm install` to install dependancies. run `npm start` to start the react app. you will also need the backend repository [ecom-backend](https://github.com/dubey98/ecom-backend) to have an endpoint for your frontend APIs. visit the github page for documentation on how to install this project.

for your APIs to work on local server change the baseURL variable in `/src/services/axios.intercepter.js` to the URL where your backend is hosted.
