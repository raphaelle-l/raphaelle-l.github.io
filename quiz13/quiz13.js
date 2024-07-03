<!DOCTYPE html>
<html lang="en">
     <head>
          <meta charset="utf-8" />
          <title>JSON: Task 1</title>
          <style>
               p {
                    color: purple;
                    margin: 0.5em 0;
               }

               * {
                    box-sizing: border-box;
               }
          </style>
          <link rel="stylesheet" href="../styles.css" />
     </head>

     <body>
          <section class="preview"></section>
     </body>
     <script>
          let motherInfo = "The mother cats are called ";
          let kittenInfo = "Their kittens are called ";

          fetch("mothercatSample.json")
               .then((response) => response.text())
               .then((text) => displayCatInfo(text));

          function displayCatInfo(catString) {
               let total = 0;
               let male = 0;

               // Add your code here
               let cats = JSON.parse(catString);

               for (let i = 0; i < cats.length; i++) {
                    if (i === cats.length - 1) {
                         motherInfo += `and ${cats[i].name}.`;
                    } else {
                         motherInfo += `${cats[i].name}, `;
                    }

                    let babies = cats[i].kittens;
                    for (let j = 0; j < babies.length; j++) {
                         total++;
                         kittenInfo += `${babies[j].name}, `;
                         if (babies[j].gender === "m") {
                              male++;
                         }
                    }
               }
               kittenInfo =
                    kittenInfo.substring(0, kittenInfo.length - 2) + ".";
               insertAnd = kittenInfo.lastIndexOf(",");
               kittenInfo =
                    kittenInfo.substring(0, insertAnd) +
                    " and" +
                    kittenInfo.substring(insertAnd + 1, kittenInfo.length - 1) +
                    ". ";

               kittenInfo += `There are ${total} kittens, ${
                    total - male
               } females and ${male} males.`;
               // Don't edit the code below here!

               para1.textContent = motherInfo;
               para2.textContent = kittenInfo;
          }

          const section = document.querySelector("section");

          let para1 = document.createElement("p");
          let para2 = document.createElement("p");
          section.appendChild(para1);
          section.appendChild(para2);
     </script>
</html>
