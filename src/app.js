/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function domainNameGenerator() {
    let pronoun = ["the", "our", "mine", "your"];
    let adj = ["great", "big", "small", "pretty"];
    let noun = ["jogger", "racoon", "elephant", "door"];

    let pronounNumber = Math.floor(Math.random() * 4);
    let adjNumber = Math.floor(Math.random() * 4);
    let nounNumber = Math.floor(Math.random() * 4);

    let domainName =
      pronoun[pronounNumber] + adj[adjNumber] + noun[nounNumber] + ".com";
    return domainName;
  }
  console.log(domainNameGenerator());
};
