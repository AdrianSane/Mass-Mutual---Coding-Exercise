$(document).ready(function(){

  // check to see if lib has loaded
  if(window.$){
    console.log("jquery loaded");
  }

  // get and render JSON Data
  $.getJSON("data/data.json", function(data){
    var outPut = data.response.docs;

    // ------------- main story
    // article title
    $(".mainTitle").children()[0].innerHTML =  outPut[0].headline.main;
    // article main context
    $(".mainContext").children()[0].innerHTML =  outPut[0].lead_paragraph;

    // ------------- side stories
    // side story 1
    $(".first").children()[0].innerHTML =  outPut[1].headline.main;
    // side story 2
    $(".second").children()[0].innerHTML =  outPut[2].headline.main;

    // ------------- archive stories
    // first archive title and story
    $(".archive-1").children()[0].innerHTML =  outPut[3].headline.main;
    $(".archive-1").children()[1].innerHTML =  outPut[3].snippet;

    // second archive title and story
    $(".archive-2").children()[0].innerHTML = outPut[4].headline.main;
    $(".archive-2").children()[1].innerHTML =  outPut[4].snippet;

    // third archive title and story
    $(".archive-3").children()[0].innerHTML = outPut[5].headline.main;
    $(".archive-3").children()[1].innerHTML =  outPut[5].snippet;

    // fourth archive title and story
    $(".archive-4").children()[0].innerHTML = outPut[6].headline.main;
    $(".archive-4").children()[1].innerHTML =  outPut[6].snippet;

    // fifth archive title and story
    $(".archive-5").children()[0].innerHTML = outPut[7].headline.main;
    $(".archive-5").children()[1].innerHTML =  outPut[7].snippet;

    // sixth archive title and story
    $(".archive-6").children()[0].innerHTML = outPut[8].headline.main;
    $(".archive-6").children()[1].innerHTML =  outPut[8].snippet;

    // seventh archive title and story
    $(".archive-7").children()[0].innerHTML = outPut[9].headline.main;
    $(".archive-7").children()[1].innerHTML =  outPut[9].snippet;

  });// main JSON request


  // redirect to article partial pages on click
  $(".hit").on("click", function(){

    switch($(this).attr("id")){

      // on click, get partials page for article-1
      case "article-1":
      $("#content").load("partials/article-1.html");
      break;

      // on click, get partials page for article-2
      case "article-2":
      $("#content").load("partials/article-2.html");
      break;

      // on click, get partials page for article-3
      case "article-3":
      $("#content").load("partials/article-3.html");
      break;

      // on click, get partials page for article-4
      case "article-4":
      $("#content").load("partials/article-4.html");
      break;

      // on click, get partials page for article-5
      case "article-5":
      $("#content").load("partials/article-5.html");
      break;

      // on click, get partials page for article-6
      case "article-6":
      $("#content").load("partials/article-6.html");
      break;

      // on click, get partials page for article-7
      case "article-7":
      $("#content").load("partials/article-7.html");
      break;

      // on click, get partials page for article-8
      case "article-8":
      $("#content").load("partials/article-8.html");
      break;

      // on click, get partials page for article-9
      case "article-9":
      $("#content").load("partials/article-9.html");
      break;

      // on click, get partials page for article-10
      case "article-10":
      $("#content").load("partials/article-10.html");
      break;
    };

  });// hit

});// onready
