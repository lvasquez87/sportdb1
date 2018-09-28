var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
//var xmlhttp1 = new XMLHttpRequest();
var myObj;
var x;
var date;
var details;
var arraydetails=[];
//var idteams;

//var idteam;
function TeamDetails(idteam) {
  let xmlhttp1 = new XMLHttpRequest();
  //console.log(idteam);
  xmlhttp1.open("GET", "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id="+idteam, true);
  xmlhttp1.onreadystatechange = function () {
  if (xmlhttp1.readyState === XMLHttpRequest.DONE && xmlhttp1.status === 200) {
      details = JSON.parse(xmlhttp1.responseText);
      var td = document.getElementById(idteam);
      td.style.backgroundImage="url("+details.teams[0].strTeamBadge+")";
  } };
  xmlhttp1.send();
};

function cargarLogos() {
  arraydetails.forEach(function(element) {
    TeamDetails(element);
  });
  };

function LoadEvDayBasket() {
  eliminartabla();
  arraydetails= [];
  date = document.getElementById("date").value;
  //console.log(date);
  xmlhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d="+date+"&s=Basketball", true);
  xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    if (myObj.events!==null) {
    for (x in myObj.events) {
      tableCreate();
    }
    cargarLogos();
  }
  else {
    alert("El dia seleccionado no tiene registrado partidos de Basket");
  }
  }
};
xmlhttp.send();
};

function LoadEvDaySoccer() {
  eliminartabla();
  arraydetails= [];
  date = document.getElementById("date").value;
  //console.log(date);
  xmlhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d="+date+"&s=Soccer", true);
  xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    if (myObj.events!==null) {
    for (x in myObj.events) {
      tableCreate();
    }
    cargarLogos();
  }
  else {
    alert("El dia seleccionado no tiene registrado partidos de Soccer");
  }
  }
};
xmlhttp.send();
};

function LoadEvDayBaseball() {
  eliminartabla();
  arraydetails= [];
  date = document.getElementById("date").value;
  //console.log(date);
  xmlhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d="+date+"&s=Baseball", true);
  xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    if (myObj.events!==null) {
      for (x in myObj.events) {
        tableCreate();
      }
      cargarLogos();
    }
    else {
      alert("El dia seleccionado no tiene registrado partidos de Baseball");
    }
  }
};
xmlhttp.send();
};

function tableCreate() {
        //body reference 
    var body = document.getElementById("tablas"); //elemento padre de las tablas
    var tbl = document.createElement("table"); //creo la tabla
    tbl.id=myObj.events[x].idEvent; //le doy un id a cada tabla evento por si a caso
    tbl.setAttribute('class', 'z-depth-2 section');
    var tblBody = document.createElement("tbody"); //cuerpo de la tabla
    var TR= document.createElement("tr"); //fila home
    tblBody.setAttribute('style', 'border: 1px solid;');
    var TR1= document.createElement("tr"); //fila visitante
    var THD= document.createElement("th"); //cabecera de la tabla
    THD.setAttribute('style', 'border: 1px solid; text-align:center; background-color:#b39ddb');
    THD.colSpan=2;
    var TD1=document.createElement("td"); //equipo de casa
    TD1.width=200;
    TD1.setAttribute('style', 'background-size: 17%; background-repeat: no-repeat; background-position: right;');
    var TD2=document.createElement("td");//logro equipo de casa
    var TD11=document.createElement("td");//equipo visitante
    TD11.setAttribute('style', 'background-size: 17%; background-repeat: no-repeat; background-position: right;');
    var TD12=document.createElement("td");//logro equipo visitante
    THD.innerHTML=myObj.events[x].strTime+"      "+myObj.events[x].strLeague; //cabecera de la tabla
    TD1.innerHTML=myObj.events[x].strHomeTeam;
    TD1.id = myObj.events[x].idHomeTeam;

    arraydetails.length=arraydetails.push(myObj.events[x].idHomeTeam);
    TD2.innerHTML=myObj.events[x].intHomeScore;
    TD2.setAttribute('style','text-align: right;');
    TD11.innerHTML=myObj.events[x].strAwayTeam;
    TD11.id = myObj.events[x].idAwayTeam;

    arraydetails.length=arraydetails.push(myObj.events[x].idAwayTeam);
    TD12.innerHTML=myObj.events[x].intAwayScore;
    TD12.setAttribute('style','text-align: right;');
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR1.appendChild(TD11);
    TR1.appendChild(TD12);
      //Por ultimo asignamos nuestro TR a la tabla con id tablaProductos
    tblBody.appendChild(TR);
    tblBody.appendChild(TR1);
    tbl.appendChild(THD);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    //tbl.setAttribute("border", "3"); 
};

function eliminartabla() {
    var span=document.getElementsByTagName("span");
    var table=document.getElementsByTagName("table");
    //console.log(span);
    //console.log(table);
    if (span.length != null) {
      //.parentNode.removeChild(tablas);
      while (table.length>0) {
        table[0].parentNode.removeChild(table[0]);
      }
    }
  };

/*var today = new Date().toISOString().slice(0, 10);
document.getElementById("index.html/date").value=today;
//console.log(today);

const Calender = document.querySelector('.datepicker');
M.Datepicker.init(Calender,{
  autoClose:true,
  setDefaultDate:true,
  defaultDate:today 
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});*/


