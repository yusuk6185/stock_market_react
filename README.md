# Introduction
## Local Environment

1. Clone the project
2. Run the following commands

```
cd stock_market_react
npm install
npm start
```

3. You should be able to access the website on `localhost:3000`

## Purpose & description 
The purpose of this report is to provide information about the **mobile application** developed using **React-native** and **JavaScript**. The mobile application shows the list of the stocks in NASDAQ, but only three hundred stocks which include an alphabet ‘A’ for the performance in queries. 
The application allows user to navigate between search page and stocks page. In the search page, the list of the stocks is displayed in ascending order of alphabet. The search bar can be utilized to search specific stock by the name or symbol and the stocks can be stored in the watch list when clicked. In the stocks page, the user can check the stocks on watch list and clicking a stock will enable toggle to show the detail information and a chart which displays the daily price of the stock.

![image](https://user-images.githubusercontent.com/35501963/144550882-b29132c9-a140-460c-b83d-2f1abc72489e.png)
![image](https://user-images.githubusercontent.com/35501963/144550889-bcd92d8e-9527-4918-ab5f-cc24999eafe9.png)

# Technical Description
## API Used
As the mobile application is fetching the list of stocks from the stocks API, an appropriate API should be selected. The API selected for this project was **‘Financial Modeling Prep’** which is the same API used for the web application project. FMP is adapted because it provides a number of end points according to the purpose of its usage. For this application, ticker search end point is used for the search page because it was required to search with the symbol and name at the same time. Also, company profile and quote APIs are implemented to fetch the detail information.
Another API used in this application is **‘react-native-chart-kit’**. This API is used to draw the chart in the stock detail toggle when specific stock is clicked in the stocks page. A line chart was implemented to display the daily open prices of the stock.

# Navigation and Layout 
Since the skeleton of the mobile application is provided, the navigation followed to the existing bottom tab navigation. The navigation only includes two pages, search page and stocks page. <br/>

![image](https://user-images.githubusercontent.com/35501963/144550961-7a0709d0-2a7d-420c-a33a-2f468e1b59b3.png)

This layout design is implemented because the mobile application functions only two simple things to be shown straight forward. The search page is required only to display the list of all stocks and search specific stocks while stocks page can enable user to save stocks to the watch list and show detail information and the chart of the stock.
The layouts for the search page and stocks page are exactly same as described in the project specification. They look similar to the Stocks application in Apple Appstore. The background color is black, and the font color is white to give contrast. The following figures displays the layout designs for both pages. <br/>

![image](https://user-images.githubusercontent.com/35501963/144550978-0da4cc8c-91a3-471d-81eb-b8d8a3791b7f.png)
![image](https://user-images.githubusercontent.com/35501963/144550981-e51588d3-5c2e-49b9-92be-3f486a5d7c85.png)

# Architecture 
The architecture of this mobile application project followed common react-native application architecture. There are not many things to identify the difference in the architecture of it. The picture below displays the application-level architecture. <br/>

![image](https://user-images.githubusercontent.com/35501963/144551041-bc4c3f8a-3d3d-45a1-a534-2d68c793d82e.png)

# Difficulties 
Since the server-side task was out of my project scope, the back-end database system to backup the watch list or user management system are not implemented in this mobile application. I tried to implement the server-side and figured out that it would take more time than I can spend on this project to learn backend coding. This is because I did not have any experience on building a server before. Other than the not implemented function, all the developed functions work great without any trouble. The data flow is not tricky to understand. 
