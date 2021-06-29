# weather-app


## About the application and features implemented:

* The application is made to the get the weather information for multiple cities. 

* The user will be able to select multipe cities from the list provided in the home page.  
 
* Then the user will be directed to the weather details page.


## Handled cases:

* Responsiveness for different screen sizes have been taken care of.

* If there are no cities selected, then we alert the user with custom alert message as snack bar popup.

* If any user is trying to access the URL direclty for the weather details page, without actually selecting cities, they will be navigated back to homepage to select  cities.

* If we fail to get the weather data from API, since it is 3rd party, and can fail to give response, if server is down, then we show the alert with required message, to try later.

* In the weather details page, if the user is searching cities, which are not present in the selected city list, it will give them the no results found message. 


## Other Aspects :

* Currently the cities are hardcoded. for future enhancements, we can use any API to fetch the cities for any given country as input, for those cities we can show the weather details.

* The weather data for collection of cities is coming in small numbers, if the collection will be huge, we can have API for pagination to get the data in small chunks, and implement pagination in front end. So this we can take as further enhancement, based on current application requirment, this has not been handled also the API is not as per pagination for bulk request.

* UI can be enhanced, for different kind of results available in the API response, also they can be helpful for filtering the cities weather data for different fields, this can be taken future enhancement.

## How to install

You should have angular cli and Node.js installed in your system.

clone the project.

Run the below command to run the application

```npm install```

```ng serve``` 





