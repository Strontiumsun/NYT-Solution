$(document).ready(function () {

    $("#clear-button").on("click", function (event) {
        event.preventDefault();
        console.log("we clicked clear!")
        $("#inputSearchTerm").val(" ");
        $("#inputRecords").val(1);
        $("#inputStartYear").val(" ");
        $("#inputEndYear").val(" ");
    })


    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var searchTerms = $("#inputSearchTerm").val()
        var numRecords = $("#inputRecords").val();
        var inputStart = $("#inputStartYear").val();
        var inputEnd = $("#inputEndYear").val();
        var startYear = `&begin_date=${inputStart}0101`;
        var endYear = `&end_date=${inputEnd}1231`;
        var myAPIKey = "IIwsc94emfwRN390N0OwJVj9UdxxPsA7";
        var queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerms}&api-key=${myAPIKey}`;
        newUrl = queryUrl + endYear + startYear;
        console.log(newUrl);

        $.ajax({
            url: newUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response.response);  // gives us the article summary
            var headline = $("<p>").text(response.response.docs[0].headline.print_headline);
            var link = $("<a>")
            link.text(response.response.docs[0].web_url);
            link.attr("href", response.response.docs[0].web_url);
            var snippet = $("<p>").text(response.response.docs[0].snippet);

            $("#results-here").append(headline, link, snippet);

        });

    });

});
