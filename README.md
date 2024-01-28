## This is a simple project about search functionality of Hotel and Flight search

Node Version : 18.18.2

This project made with NextJs 14.1

### Steps to run it locally

- Clone the repository
- `nvm use` (Node version mentioned in .nvmrc file)
- `npm install`
- `npm run dev`

### What I have done in this project ?

- Render different search form according to radio button.
- Dynamic Form validation with proper error message.
- Show search result in a modal.

### What I have to implemet in future ?

- Implement sort and filter functionality.
- Use a functionality rich api with search, filter and sorting query.
- Implement language and light-dark theme functionality.

I can not found any available open API for Hotel and Flight search. Though I found some source but the process of using their API is time consuming and not easy and I found that I have to join their affiliet program to use their API or have to pay.

I have developed a very simple API for Hotel and Flight data.

For hotel's data, the API URL is

[https://dull-gray-blazer.cyclic.app/hotels](https://dull-gray-blazer.cyclic.app/hotels)

For flight's data, the API URL is

[https://dull-gray-blazer.cyclic.app/flights](https://dull-gray-blazer.cyclic.app/flights)

## Places / City

I kept only the division of Bangladesh as a City. We can find the list in form's datalist input.

## Flight Departure date and Return date

I kept very small amount of flight data, According to my data every flight starts from Dhaka and land on another city except Dhaka. If we use other combination, we will get no result. And another issue is every flight starts from 20-02-2024 to 25-02-2024 or 25-02-2024 to 28-02-2024. If we use other combination, we will get no result.

I have implemented the search functionality which is works with every combination of search. But due to lack of enough data, we have to search according to my instuction that I mentioned above.
