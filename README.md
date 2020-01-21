### Doggywood Vet Data Tracker

### Veterinarian Data Services Application

### URL: 
http://doggywood.s3-website-us-east-1.amazonaws.com/

### AUTHORS:
-Brendan Wilson
-Davis Cowles
-Ruben Colons
-Thomas Maestas

### APPLICATION PURPOSES:
The mission of the app is to organize and persist health and appointment information relating to clients and the client's pets. We implement a service-based design facilitating both customers' and receptionists' data-related tasks. The system maintains vaccination records dynamically by tracking expiration dates, with notifications to customers of upcoming vaccination expiries and other information. The veterinarians are able to record notes based off the clients visits, and those notes will be tied to the client's animal in the graphical user interface. The goal of this application is to reduce the workload of data entry on the employees, as well as maintain a structured note system and portable vaccination record for the pets that visit the practice using an intuitive interface.

### TECHNOLOGIES
| Fx | Tools | URLS |
|------------|:------------:|---------:|
| Database | Oracle SE 11 | [Oracle]  | 
| Cloud Data | Amazon RDS |  [AWS] | 
| Cloud ASsets | Amazon S3 |  [S3]  |
| User Data | Angular 8 |  [Angular]  |
| UI/UX | Angular-Bootstrap |  [BS4] |
| E2E Testing | Selenium | [Selenium] |
| CI/CD | Jenkins | [Jenkins] |
| Pipeline | AWS Codebuild | [CodeBuild] |
   
##### Testing Libraries:
```json
"Jenkins" : "2.0",
"codelyzer": "^5.0.0",
"jasmine-core": "~3.4.0",
"jasmine-spec-reporter": "~4.2.1",
"karma": "~4.1.0",
"karma-chrome-launcher": "~2.2.0",
"karma-coverage-istanbul-reporter": "~2.0.1",
"karma-jasmine": "~2.0.1",
"karma-jasmine-html-reporter": "^1.4.0",
"protractor": "~5.4.0",
"ts-node": "~7.0.0",
"tslint": "~5.15.0",
''' 
   

** Software **

* [Oracle]: <https://www.oracle.com/database/technologies/112010-win64soft.html>
* [AWS-RDS]: <https://aws.amazon.com/rds/>
* [AWS-S3]: <https://aws.amazon.com/s3/>
* [Angular]: <https://angular.io/>
* [BS4]: <https://numpy.org/>
* [Selenium]: <https://selenium.dev/documentation/en/>
* [Jenkins]: <https://jenkins.io/> 
* [CodeBuild]:<https://aws.amazon.com/codebuild/> 
   
  website: [doggywood.io](http://doggywood.s3-website-us-east-1.amazonaws.com/t)
 

### URLS for Angular/Material:
### https://material.io
### https://angular.io 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21. 


### INSTRUCITONS:  Development server
 
## JSON SERVER
npm install -g json-server
json-server info.json --watch

 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

 
