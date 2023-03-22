
export default {
    getAllPersons: "SELECT * from Persons",
    addNewPerson: "INSERT INTO Persons (lastName, firstName, address, city) VALUES (@lastName, @firstName, @address, @city)",
    getPersonById: "SELECT * from Persons Where PersonID = @PersonID",
    deletePerson: "DELETE from [SedatSan].[dbo].[Persons] Where PersonID = @PersonID",
    updatePersonById: "UPDATE Persons SET Lastname = @lastName, FirstName = @firstName, Address = @address, City = @city Where PersonID = @PersonID"
}