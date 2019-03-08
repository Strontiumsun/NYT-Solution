$(document).ready(function () {


    $("#search-button").on("click", function (event) {
        event.preventDefault();
        console.log("we clicked search!")
        var searchTerm = $("#inputSearchTerm").val();
        var records = $("#inputRecords").val();
        var startYear = $("#inputStartYear").val();
        var endYear = $("#inputEndYear").val();
        console.log(searchTerm, records, startYear, endYear);
    })

    $("#clear-button").on("click", function (event) {
        event.preventDefault();
        console.log("we clicked clear!")
        $("#inputSearchTerm").val(" ");
        $("#inputRecords").val(1);
        $("#inputStartYear").val(" ");
        $("#inputEndYear").val(" ");

    })




});