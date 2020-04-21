(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"text":"I\'m a graduate student studying Master\'s in Computer Science at University of Texas at Dallas. Also I love Ramen and making applications."}]')},function(e){e.exports=JSON.parse('[{"heading":"Portfolio","time":"April 2020","about":"Developed a Portfolio website using React JS. I made this website as a side project while learning React. The website uses Bootstrap for styling and to make the website responsive for different platforms. Jquery is used for DOM tree traversal and manipulation, as well as some event handling, CSS animation, and AJAX. The text data is retrived asynchronously using AJAX calls.","link":"https://github.com/adityamathur97/Portfolio"},{"heading":"Stock Market Web Application","time":"November 2019","about":"Created a stock exchange web application that allows users to buy and sell stocks. Developed a scalable 3-tier responsive web application based on SOA principals. Also implemented backend RESTful APIs for stock trading. User profile management and Bank transactions were maintened by a MySQL database. Made asynchronous AJAX calls to Stock brokerage web services for fetching data. Also implemented distributed caching using Memcached.","link":"https://github.com/adityamathur97/StockMarketWebsite-master"},{"heading":"B+ Tree Indexing","time":"October 2019","about":"Wrote a C++ program to implement B+ tree indexing of records in a text file. The program reads the text file containing data and builds the index, treating the first n columns as the key, where n is specified by the user. The program reads block of data, manipulate it, write it back out as a block. The program uses long(8-byte) record address for pointers. The program supports following operations - create an index file, find a record by index, insert a new text record and list sequential records.","link":"https://github.com/adityamathur97/Bplus-Tree-Indexing"},{"heading":"Library Management System","time":"September 2019","about":"Designed a scaled-back library program that lets you add, change, search and delete books. GUI of the program was created using Swing widget toolkit. The program handles multiple copies of books in multiple formats. SQL injection is handled using prepared statements. Most of the constraints were set on database side. Certain validations or constraints are set on UI side like edition of a book can\'t have alphabet in it, author name doesn\'t accept numbers which is implemented using key press event capture. Also once ISBN is entered for a book it can\'t be changed. The only possible way is to remove and insert the ISBN again.","link":"https://github.com/adityamathur97/Library-Management-System"},{"heading":"Emotion & Gender Detection - Mini-Xception CNN Model","time":"May 2019","about":"Facial expressions have a higher importance than other factors like pose, speech, behavior etc since they are easily perceptible. In communicating with others humans, one can recognize emotions of another human with a considerable level of accuracy. Worked on improving the emotion detection from facial expression recognition using the latest Convolution Neural Network(CNN) architecture \u2013 Xception architecture. Using the Facial Expression Recognition (FER) dataset provided by a Kaggle challenge which consists of 48\xd748 pixel gray scale images of faces.","link":"#"},{"heading":"Emotion Detection - Comparision of SVM, CNN & ANN","time":"October 2018","about":"","link":"https://github.com/adityamathur97/Emotion-Detection-using-SVM-CNN-ANN"},{"heading":"Face Recognition Using OpenCV","time":"","about":"","link":"#"},{"heading":"MCDA Using Euclidean Distance Method","time":"","about":"","link":"#"}]')},function(e,a,t){e.exports=t(33)},,,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/code.e4c25de4.svg"},function(e,a,t){e.exports=t.p+"static/media/Resume_Aditya_Mathur.e2977c8a.pdf"},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/me.4ef62213.jpg"},function(e,a,t){e.exports=t.p+"static/media/software_engineers.392516ba.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/favicon.6e1267d9.ico"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(8),r=t.n(o),c=(t(16),t(17),t(18),t(19),t(21),t(2)),s=t(3),l=t(6),m=t(5),d=t(4),u=(t(22),t(1)),p=t.n(u),h=(i.a.Component,t(9)),f=(t(25),t(26),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){p()("#aboutMe").height()}},{key:"render",value:function(){return i.a.createElement("div",{id:"aboutMe",className:"userImageDiv"},i.a.createElement("img",{className:"userImage",src:t(27),alt:"Aditya"}))}}]),n}(i.a.Component)),g=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).loadAbout=function(){p()(h).each((function(){p()(".cardDesc").append(this.text)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.loadAbout(),p()("#changeText").fadeOut(0,(function(){p()("#changeText").fadeIn(3500,(function(){p()("#changeText").fadeOut(3500)}))}));var e,a=["Aditya Mathur","A Developer"],t=1;setInterval((function(){p()("#changeText").fadeOut(3500,(function(){p()("#changeText").empty(),e=a[t%a.length],++t===a.length&&(t=0),p()("#changeText").append(e),p()("#changeText").fadeIn(3500)}))}),7e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"card mb-3 aboutCard shadow p-3 mb-5 bg-white rounded"},i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"col-md-7 textDiv"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h1",{className:"card-title cardHeading"},"Hello Folks! I'm ",i.a.createElement("span",{id:"changeText"},"Aditya Mathur")),i.a.createElement("p",{className:"card-text cardDesc"}),i.a.createElement("button",{type:"button",className:"btn btn-lg contButton  shadow-sm"},"Resume ",i.a.createElement("i",{className:"fas fa-file-download"})))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement("img",{src:t(28),className:"card-img aboutLogo",alt:"..."}))))}}]),n}(i.a.Component),b=(t(29),i.a.Component,t(10)),v=(t(31),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){p()(b).each((function(e,a){var t='<div class="projectDiv"><h2 class="projectTitle"><a class="projectTitleLink" target="_blank" href='+a.link+">"+a.heading+'</a></h2><p class="projectDate">'+a.time+'</p><p class="projectDesc">'+a.about+"</p></div>";p()("#projectContent").append(t)}))}},{key:"render",value:function(){return i.a.createElement("div",{id:"projectLink",className:"projectsContainer shadow p-3 mb-5 bg-white rounded"},i.a.createElement("i",{className:"fas fa-project-diagram clipIcon"}),i.a.createElement("h1",{className:"projectHeading"},"Projects"),i.a.createElement("div",{id:"projectContent"}))}}]),t}(i.a.Component)),k=(t(32),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contactContainer shadow p-3 mb-5 bg-white rounded"},i.a.createElement("i",{className:"fas fa-phone clipIcon"}),i.a.createElement("h1",{className:"projectHeading"},"Get in touch"),i.a.createElement("div",{className:"allMedia"},i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:"#"},i.a.createElement("i",{className:"fas fa-envelope media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-linkedin media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-github-square media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-facebook media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-twitter-square media"})))))}}]),t}(i.a.Component));var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"bodyContent"},i.a.createElement("h1",null," Work in Progress!"),i.a.createElement(f,null),i.a.createElement(g,null),i.a.createElement(v,null),i.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b3995a68.chunk.js.map