

        var highScoreDisplay = document.getElementById("score-page")

        var getStorage = JSON.parse(localStorage.getItem("scores"))
        getStorage.sort(function(a, b) {
            return b.score - a.score ;
          });

          for (let i = 0; i < getStorage.length; i++) {
            var highScoreLi = document.createElement("li")
            highScoreDisplay.append(highScoreLi);
           
            highScoreLi.textContent = getStorage[i].initials + " " + getStorage[i].score
            highScoreLi.className = "highscore-li-style"
          }