# Introduction
### Demonstration Video
https://www.youtube.com/watch?v=yMPZYnghxCk

## Local Environment

1. Clone the project
2. Run the following commands

```
cd stock_market_react
npm install
npm start
```

3. You should be able to access the website on `localhost:3000`

### Overview 
Please check the user guide below to watch full screenshots of the actual application.

![image](https://user-images.githubusercontent.com/35501963/144552841-15c5924b-cfcb-488c-a7d0-d9f5a797648f.png)

## Purpose & description 
The purpose of this project is to demonstrate the use of React and JavaScript by developing a client-side web application that allows the user to work with each of the endpoints. Various queries and their responses are formed in order to provide data input and response with components to the users.
The web application is basically providing the overview information of the Nasdaq 100 companies and their historical price data with the filtering options for the users. The user can explore through the website with the navigation bar located at the top of every page. The user interface is designed simple and straight forward to let users avoid feeling awkward when using the web application. Several modules such as ag-grid and chart.js are adapted to increase the visuality of the tables and chart in the web application. Also, react modules including react-select and react-router-dom are used to develop the application in more efficient way. React-select is used when building a dropdown filter for the industry filter, while react-router-dom is used to develop router and navigation setting of the web application. Lastly, react-date-picker module is used to create date filter for the table with enhanced usability.

# Completeness and Limitations 
According to the project specification, the required tasks can be listed as landing page, navigation, table, char, and search function. In the web application that was developed, every requirement are met and working without bug. In addition, a number of modules are generated to create and display the components in the application with better visual design. For example, ag-grid module is successfully applied to create the tables displaying stock list and chartJS has been used for chart that shows closing prices of stock history. It is assumed that every requirement and beyond expectation works are done without error and running in the web application. 

# Use of APIs 
## Financial Modeling Prep
Even though Alpha Vantage was recommended to use in the project, it has flaw in that the API only allows 5 API requests per minute and 500 requests per day. Also, the stock fundamental data that Alpha Vantage provides only displays company overview of only one specific stock while this project requires the symbol, name, and industry of multiple companies. Thus, Financial Modeling Prep was selected for the stock API for this project because its documentation provides list of Nasdaq 100 companies with their symbol, name, and industry at the same time.
## Use of End Points of the chosen Stock API 
Within the document of selected stock API (Financial Modeling Prep), the Market Indexes about List of Nasdaq 100 companies are used as end point for displaying stocks’ symbol, name, and industry (which is indicated as sector for this API).  This URL is used to fetch company overview with API key. (https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=9ab08009fbd5fad2a8563e517f485116) In addition, to gather the historical stock information of the stocks, 4 Hours historical stock prices with volume end point is selected. This end point is considered more usable because the JSON response is in the same format with the alpha advantage while Historical Daily Prices end point has different JSON format. Regardless of the end pointed chosen, the table and chart for historical stock prices are displayed in daily manner.
(https://financialmodelingprep.com/api/v3/historical-chart/4hour/${stockProps}?apikey=9ab08009fbd5fad2a8563e517f485116)
### 4 Hours Historical Stock Prices with Volume
### Quote Endpoint
### List of Nasdaq 100 Companies

## Modules Used 
### Ag-grid-react
Module to provide fully-featured table components, including sorting and filtering. 
https://www.ag-grid.com/react-grid/
### Chart.JS
Module to provide various chart options including bar chart and plot chart in simple and fluent way.
https://github.com/chartjs/Chart.js
### React Date Picker
Module to create calendar and select date in simple and visual way.
https://www.npmjs.com/package/react-datepicker
### React Select
Module to enable select option in easier and more efficient way.
https://www.npmjs.com/package/react-select
### React Router Dom
Module to build router or navigation of the web application in easier and more efficient way.
https://www.npmjs.com/package/react-router-dom

# Application Design
## Navigation and Layout 
For the navigation of the stock price web application, react-router-dom module is used for efficient setting of router. Since most of the functions can be approached by the end points, only two buttons which link to homepage that displays the landing page and Stocks page, which displays the list of stocks, are included in the navigation bar. The layout of the web application is simple designed to perform required functions for better user interface. The link buttons have transition animation when hovered for enhanced usability. Other functions such as quotes and historical prices are not included in the navigation because they are going to be performed when selected inside Stocks page as mentioned above.<br/>

![image](https://user-images.githubusercontent.com/35501963/144552558-7c8063ad-d4e6-429c-83de-a9500b0cb32e.png)

The usability of these designs is simple as it only displays only the components which execute required functions. It will be easy to use because the layout is straight forward to identify which component will execute which function. It might be awkward to use when the user wants to move to Stocks Detail page because the only way to move to the Stocks Detail page is to click the symbol of specific stock in the table of Stocks page. Even though the instruction is described in the homepage, it might be difficult to identify it. So, it would be better to make a button to move to Stocks Detail page with better interface. <br/>

![image](https://user-images.githubusercontent.com/35501963/144552590-ef3945a4-d506-40d4-a3f8-781635edfbc2.png)

To explain the process of the usage, the user gets to the homepage as the landing page. Then, the user would read the introduction written in the home page. Next, the only thing the user would do is to click Stocks button on the right top side to access Stocks page. In the Stocks page, the list of 100 Nasdaq companies is rendered automatically. The user can search stock symbol with search bar or industry filter to filter the stocks list. If the user clicks any specific symbol in the table, the Stocks Detail page is loaded for the selected stock. <br/>

![image](https://user-images.githubusercontent.com/35501963/144552615-d608c2fa-f6dc-4d6a-b95f-a9328c16f0f9.png)

In the Stocks Detail page, there is a date picker which user can manipulate the start date of filtering the historical prices of the specific stock. When selected, the information about historical prices will show up in the table starting from the selected date to current date. At the same time, the closing price of the same period will be drawn in the chart right below the table. 

# Technical Description 
## Architecture 
The architecture of this web application project followed common react application architecture. There are not many things to identify the difference in the architecture of it. The picture below displays the application-level architecture. <br/>

![image](https://user-images.githubusercontent.com/35501963/144552644-36f6fd0f-4b9a-4120-8807-b81b4ccc6471.png)

Inside the src directory, there are two folders which are components and images folders. In the components folder, the pages such as Home, Stocks, and Stocks Detail pages are included. On the other hand, the images folder include image files such as logo.svg. Other JavaScript files are left in the src folder.
Just like common react applications, this application works with the App.js, which is rendered in index.js. In the App.js, the components such as Home, Stocks, and Stock Detail pages are imported and routed with the navigation. The stocks data is fetched in Stocks and Stocks Detail pages and manipulated inside those components. The react-router-dom module was used to manage the routing of application in the efficient way. The specific detail is displayed in the figure below.

# Difficulties
One of the difficulties that I remind is about using the stock API.  At first, I tried to make table with Alpha Vantage API. In the Stocks page, I had to display symbol, name, and industry of various stocks. However, the Alpha Vantage Company Overview end point only provides the information about one specific company when fetched using an URL. So, I had to fetch and hit the server five times whenever I load the data of five stocks (which is required number of stocks to display). In addition, I had trouble creating table with the fetched stock data because they are stored in the different state. 
Then, I checked the announcement in the Blackboard. It was announced that, thankfully, another peer student found better stock API to use in this project. The Financial Modeling Prep API had end point which includes the symbol, name, and industry of 100 Nasdaq companies at the same time. Using this API instead of Alpha Vantage enabled the problem that I was having to be solved. 

# User guide 

 ![image](https://user-images.githubusercontent.com/35501963/144552746-2688d77c-045d-4b25-ac07-6371e987f99b.png)

When accessed http://localhost:3000/, the home page will appear. The home page is basically showing the logo, title, and the introducing description of the web application. The only thing that user can do is to click Stocks button on the right top side to move to the Stocks page. 

 ![image](https://user-images.githubusercontent.com/35501963/144552753-a0116284-2fb6-4e61-9548-a62cdce7f637.png)

In the Stocks page, the user can see the list of Nasdaq 100 companies which is listed inside the table. The symbol, name, and industry of all listed stocks can be seen. The pagination is enabled which let user to explore throughout the pages in the table. Then, the user can utilize search bar to filter the stocks by symbol. Simply putting symbol inside the search bar and click search button to execute the query. Then, erase the search bar and click search button to reset the query. In addition, the user can filter the table by the industry using the dropdown selecting filter on the right. When selected a specific industry, the table will display the stocks only with the selected industry. Last function in this page is to click the specific symbol of a stock which will navigate the page to Stocks Detail Page. 

 ![image](https://user-images.githubusercontent.com/35501963/144552759-93fdd716-ebe4-49ab-b935-70c4e5843e78.png)

In the Stocks Detail Page, the user can explore the historical stock details of the selected stock. In the table, date, open, high, low, close, and volume of selected stock are displayed. The user can filter date with the date picker on the righthand side. By clicking the date bar, a calendar pops out and the user can select the specific date as the starting date of the query. Finally, among the filtered stock details data, the closing prices of the stock is visualized in the plot chart below the table. The user can change filter to check different time period.

 ![image](https://user-images.githubusercontent.com/35501963/144552765-9f8b9f48-00a9-4034-8970-119a25681a42.png)

Lastly, the user can click Stocks button on the top right to go back to the Stocks page to select other stocks to access their Stock Details page. Otherwise, the user can click Home button located next to the Stocks button to access the landing page.
