# How To Run 

1.- Create an SQL db
<br />
<img src="https://raw.githubusercontent.com/javiG808/PaylocityBenefitsCalculatorSeed/master/addDb.png" width="500">
<br />
<br />
2.- Get the connection string(execute provided query in .sql file on new db)
<br />
<img src="https://raw.githubusercontent.com/javiG808/PaylocityBenefitsCalculatorSeed/master/getConnectionString.png" width="500">
<br />
<br />
3.- Paste connection string in appsettings
<br />
<img src="https://raw.githubusercontent.com/javiG808/PaylocityBenefitsCalculatorSeed/master/appSettings.png" width="800">

4.- Run .NET appliction

NOTE: I did not add seed data, however, this json could be pasted in swagger to Add Employee and generate 26 paychecks for Homer Simpson

```javascript
{
  "firstName": "Homer",
  "lastName": "Simpson",
  "salary": 100000,
  "dateOfBirth": "1950-12-12T23:12:51.672Z",
  "dependents": [
    {
      "firstName": "Bart",
      "lastName": "Simpson",
      "dateOfBirth": "2000-12-12T23:12:51.672Z",
      "relationship": 3
    },
	{
      "firstName": "Marge",
      "lastName": "Simpson",
      "dateOfBirth": "2000-12-12T23:12:51.672Z",
      "relationship": 1
    }
  ],
  "salaryNote": "new hire"
}
```
<br />
# Missing
<br />
1.- Cant post new employee from frontend(getting a fetch issue?)<br />
2.- Cant edit employee from frontend <br />
