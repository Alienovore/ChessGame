/* eslint-disable require-jsdoc */

function highScore(score) {
  const name = document.querySelector('#username').value;
  fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'user': name,
      'score': score,
    },
    ),
  })
      .then((res) => res.json())
      .then((res) => {
        scoreTable = JSON.parse(res.scoreTable);
        console.log(scoreTable);
        console.log();
        const table = document.createElement('table');
        scoreTable.forEach((element) => {
          const tr = document.createElement('tr');

          for (const [key, value] of Object.entries(element)) {
            const td = document.createElement('td');
            td.innerHTML = value;
            tr.appendChild(td);
          }
          table.appendChild(tr);
        });
        document.body.innerHTML = '';
        document.body.appendChild(table);
      });
}