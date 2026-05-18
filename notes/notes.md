# Flow of angular application when run the app:

## 1. Angular Dev Server Starts
- ng serve

## 2. Browser Opens index.html

## 3. main.ts Executes

## 4. Angular Bootstraps Root Component
- AppComponent

## 5. Angular Routing Starts
- localhost:4200/example

## 6. Component Lifecycle Runs
- constructor()
- ngOnInit()
- ngAfterViewInit()

## 7. Services/API Calls Execute
- services

## 8. Change Detection Runs 


# Complete Angular Flow:

ng serve
   ↓
index.html loads
   ↓
main.ts executes
   ↓
AppComponent bootstraps
   ↓
Routing starts
   ↓
Component loads
   ↓
Service/API calls
   ↓
Data updates UI