# AspNetCoreAngularApp

**AspNetCoreAngularApp** is a full-stack web application built with ASP.NET Core 8 and Angular. It leverages SQL Server for database management and Entity Framework Core for ORM. This project includes a RESTful API and a responsive frontend using Bootstrap.

## Features

- **ASP.NET Core 8**: Backend API development
- **Angular**: Frontend development
- **SQL Server**: Database management
- **Entity Framework Core**: ORM for database operations
- **Bootstrap**: Modern UI styling

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/vzapata007/aspnetcore-angular-app.git
   cd aspnetcore-angular-app
   ```

2. **Backend Setup**

- Navigate to the ASP.NET Core project directory:

   ```bash
   cd AspNetCoreAngularApp.Server
   ```
- Restore the NuGet packages and build the project:
 
  ```bash
  dotnet restore
  dotnet build
  ```

- Update the connection string in appsettings.json to match your SQL Server instance.

- Apply migrations to set up the database:

```bash
dotnet ef database update
```

3. **Frontend Setup**

- Navigate to the Angular project directory:

```bash
cd ../AspNetCoreAngularApp.Client
```
- Install the project dependencies:

```bash
npm install
```

**Project Structure**
- AspNetCoreAngularApp.Server: Contains the ASP.NET Core backend with API controllers, models, and database context.
- AspNetCoreAngularApp.Client: Contains the Angular frontend with components, services, and styles.
