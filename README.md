ES6 - JS 

1. template string 
2. fat arrow functions
3. destructions
4. set and map
5. promise - async
6. for of loop 

--------------------------
need of javascript
: to write a server side code

nodejs - package manager
//javascript.info for reference
--------------------------

Typescript install
npm install -g typescript
tsc -v

typescript->
superset of JS
.ts
tsc(ts->js)

tsc hello.ts
hello.js

Datatypes:
Number
String
Boolean
Any
Enum

1. static typings - available in only TS

2. class and objects - TS, ES6.0
tsc - uses ES5 by default to compile
to use ES6 featues->
tsc -t ES6 employee.ts (we can use ES3 to ES6)

3. Inheritance -  TS,ES6.0
4. Interface - TS
5. Union Types - TS
6. Generics - TS

--------------------------

npm install -g @angular/cli

---------------------------

Features of Angular 2

1. Two way data binding
2. Powerful routing support
3. expressive html - templates
4. Modular by design
5. Built in Back End Support(Database, log, Websupport)
6. Active community

Key differences between angular 1 and 2
1. support of ES6
2. components are new controllers
3. Directive *ngFor
4. Data bindings
5. $scopes are out
6. Filters are renamed to pipes
7. platform specific bootstrap
8. services - factory,abstract factory, untilities,singleton
9. mobile support
---------------------------

Angular architecture:

The Class Decorators

1. Module is a combination of -
	@NgModule
	
1. Components - Root, Feature - tag
	@Component
	
2. Directives - *ngFor, *ngIf, *ngIf else, *ngSwitch + Custom Directives
	@Directive
 - used to manipulate DOM
 
3. Services - can be shared among multiple components, Singleton by default, Share the services object
	@Injectable
	
4. Pipes - + Custom Pipes
	@Pipe & interface PipeTransform

------------------------------

Angular 2
AngularCLI

Istall angular cli:
npm install -g @angular/cli

ng -v

Create a Project Structure
ng new storeapp

github - angularcli

cd storeapp

code .
-----------------------
package.json
- scripts 
- dependencies
- devdependecies

added
   "bootstrap": "4.0.0-alpha.4",
    "font-awesome": "4.7.0"
	
angular.cli.json	
added in styles
../node_modules/bootstrap/dist/css/bootstrap.min.css

../node_modules/font-awesome/css/font-awesome.min.css

start the server
(Angular by default uses webpack server running on 4200)
ng server

webpack 
gulp
- these are two module loaders + servers
-----------------------------------

 1. package.json
 
 2. tslint.json
	static code analyzer
 
 3. tsconfig.json (tsc)
	typescript
 
 4. karma.conf.js
 - Karma Framework

 5. protractor.conf.js
 - Protractor (e2e test) F/W
 
 5. angular-cli.json
 
 -----------------------------
 
---------------------------

Angular architecture:

The Class Decorators

1. Module is a combination of -
	@NgModule
	
	declaration
	// components,directives,pipes
	
	providers
	//services
	//singleton
	//shared
	//Dependency injection 
	
	exports
	// components,directives,pipes - to reuse in other modules
	
	imports
	// import the other module
	
	bootstrap
	// specify name of root component
	// in main.ts root module is specified
	
	Root Module, Feature Module
	Root Component, Feature Component

2. Components - Root, Feature - tag
	@Component
	
	Selector - name of tag
	templateUrl 
	styleUrls
		
3. Services - can be shared among multiple components, Singleton by default, Share the services object
	@Injectable()
	
4. Pipes - + Custom Pipes
	@Pipe & interface PipeTransform
	
5. Directives - *ngFor, *ngIf, *ngIf else, *ngSwitch + Custom Directives
	@Directive
 - used to manipulate DOM
 
 _____________________________________________
 
 webpack - commonjs
 gulp - requirejs

------------------------------------------
compopnent - view 
view - component

Data Binding
1. Interpolation (component-view)
{{}}

2. Event Binding (view - component)
()

--------------------
DirectivesL
*ngFor

----------
How to pass data from outer component to inner component?

--------------
Root component should be used only once

main.ts - <app-root>
- AppModule (import - ProductModule)
- AppCompponent 
	- appComponent.html - <app-productlist>
	
ProductModule
- ProductComponent (declaration,exports)
	- product.component.html
- ProductService (provider)

ModelModule
- ModelService

---------------------------------
version2.angular.io
nx.angular.io
-----------------------------

Subcomponents -

Data Binding:
1. One way binding
Interpolation {{}} - component to view
Event () view to component
property binding [] - component - view
------------------

Routing:
1. Define routes
/product - ProductComeponent (html)
/cart - CartDetailsComponent (html)
/checkout - CheckoutComponent (html)

RouteModule:
2. Add tag <router-outlet>
2. navigate to the URL

programatic:
RouterModule - Router (Service)
- navigateByUrl

declarative:
routerLink
Note: RouteModule import is necessary

--------------------------------------

Two way binding:(banana in a box)
[()]

Note:you have to import FormsModule, model object

2 ways of form:
1. Template driven - [()] - e.g. [(ngModel)]
2. Reactive forms

----------------------------------------------------

HttpModule

REST: (Resource)
Roy Fielding
ics.uci.edu

3 Principles
1. Addressibility
2. Uniform constrained interface
GET, POST, PUT, HEAD, TRACE OPTIONS DELETE .. HTTP 1.0/1.1 - latest 2.0
3. HATEOAS

--------------

/products  - GET
/products/1 - GET
/products {} - POST
/products/1 {} - PUT
/products/1 - DELETE

/orders  - GET
/orders/1 - GET
/orders {} - POST
/orders/1 {} - PUT
/orders/1 - DELETE


Jaxrs
sprint REST
play

Note:http://goo.gl/RqYp7s

JSON Server - javascript plugin
JSON - expose - REST Services
id attribute is compulsory

--------------
AJAX call

HttpModule
Http - services
get,post,put,delete etc

----------------------------------

swagger -doc,testing
------------------

Reactive forms:

-------------------------
Module, Component, Service, Directive(Structural,attribute), Pipe
BrowserModule-CommonModule
RoutesModule
FormsModule
HttpModule

----------------
ng new myproject

ng serve 
- webpack - dev

Debugtool:
Augury

ng build
AOT Compiler - Ahead of Time Compilation

ng build -target=production

------------------------

Monolithic Application

difference between containerization and virtualization


-------------------
Docker

docker build . -t storeapp -f Dockerfile

docker run -p 3000:3000 -p 3500:3500 storeapp


----------------------------------------
links

https://vsavkin.com/migrating-angular-1-applications-to-angular-2-in-5-simple-steps-40621800a25b


https://codecraft.tv/courses/angular/unit-testing/overview/


https://auth0.com/blog/angular2-series-working-with-pipes/


-----------------------------------------------------


manpreet.bindra@vinsys.com

9595526693

