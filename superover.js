<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Stylesheet" href="superover.css">
    <title>Super-Over</title>
</head>
<body>
   
    <header>
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-logo.png" alt="logo" width="150px">
    </header>

    <div class="match">
        <div class="score" id="team1">
            <h1>IND</h1>
            <div class="balls"id="ind">
                <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
             <div class="ball"></div>
             <div class="ball"></div>
             <div class="ball"></div>
            </div>
        
           

           
           <div class="scoreboard">
               <span id="score-ind">0</span>
               <span>/</span>
               <span id="wickets-ind">1</span>
           </div>
        </div>
        
        <div class= "score" id="team2">
            <h1>PAK</h1>
            <div class="balls"id="pak">
                <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
             <div class="ball"></div>
             <div class="ball"></div>
             <div class="ball"></div>
            </div>
           
            
           <div class="scoreboard">
               <span id="score-pak">0</span>
               <span>/</span>
               <span id="wickets-pak">1</span>
           </div>
        </div>
        </div>
    </div>

    <section id="buttons">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-strike-button.png" id="strike" alt="strike">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-reset-button.png"  id="reset" alt="reset">
    </section>
    <script src="./superover.js"></script>
</body>
</html>
