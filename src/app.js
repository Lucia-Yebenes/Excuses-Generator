/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let NoRandomWho = who[Math.floor(Math.random() * 4)];
  let NoRandmAction = action[Math.floor(Math.random() * 4)];
  let NoRandmWhat = what[Math.floor(Math.random() * 3)];
  let NoRandmWhen = when[Math.floor(Math.random() * 4)];
  let Excusa;
  function GeneradorExcusas() {
    Excusa =
      NoRandomWho + " " + NoRandmAction + " " + NoRandmWhat + " " + NoRandmWhen;
    return Excusa;
  }
  console.log(GeneradorExcusas());
  //Si fuera solo hasta excusas me trae desde html a java con el .InnerHTML paso desde jS a HTML
  document.getElementById("Excusa").innerHTML = Excusa;
  //para traer de html a js, importante entre parentesis se pone el nombre de la clase o el ide
  //si usas ElementsById
  //   console.log(document.getElementsByClassName("alert"));
};

// mi codigo, extrategia creo variables y despues concateno

//
