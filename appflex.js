appReady = function(){
  $(document).ready( function() {

    var $app = $('#app');
    var $nav = $('<div id="nav"></div>');
    var $row2 = $('<div id="row2"></div>');
    var $row3 = $('<div id="row3"></div>');
    var $title = $('<h1>SQUAWK</h1>');
    var $feedMe = $('<div id="feed"></div>');
    var $feedButtons = $('<div id="feedButton"></div>')
    var $feedUpd = $('<div><button id="update-feed">Feed Update</button></div>');
    var $create = $('<div id = "form2" ><div id = "mess"><button id = "create">Create Message</button></div></div>');
    var $form = $('<div id="form"></div>')
    var $settings = $('<div id ="settings"><span>Settings</span><div id ="dropdown">Account</div></div>');
    var $opener = $('<h2>Your Thoughts, Your Ideas, Your Self</h2>');
    var $friendsList = $('<div id="friendsListTitle">Friends List</div>');
    var $friendsAdapt = $('<div id="friendsListAdapt">Error</div>');

    $app.html('');

    $form.appendTo($create);
    $feedUpd.appendTo($feedButtons);
    $create.appendTo($feedButtons);
    $feedButtons.appendTo($row2);

    $title.appendTo($nav);
    $opener.appendTo($nav);
    $settings.appendTo($nav);
    $nav.appendTo($app);


    $friendsList.appendTo($row2);
    $row2.appendTo($app);

    $feedMe.appendTo($row3);
    $friendsAdapt.appendTo($row3);
    $row3.appendTo($app);


    var $feed = $('#feed');
    var $friendsAdaptme = $('#friendsListAdapt');
    var $formMe = $('#form');
    var $mess= $('#mess');

    document.getElementById("form").style.display = "none";


    varSupp1 = function(ele, x, y) {
      x.text(ele);
      x.appendTo(y);
    };

    varFriends = function() {
      var varData = new Set();
      $friendsAdaptme.html('');
      var $fList = $('<div id ="fList"></div>');
      $fList.appendTo($friendsAdaptme);
      var index = streams.home.length - 1;
      while(index >= 0) {
        var tweet = streams.home[index];
        console.log(tweet.user);
        varData.add(tweet.user);
        index--;
      }
      varData = Array.from(varData);
      console.log(varData);
      for (var i = 0; i < varData.length; i++) {
        var $fListHold = $('<div id ="fListH"></div>');
        var $friend = $('<div class="mate usr"></div>');
        if (true) {
          var $status = $('<img id="status" src="assets/icons/greenbox.png"></img>')
        }
        console.log(varData[i]);
        $friend.text('@' + varData[i]);
        $status.appendTo($fListHold);
        $friend.appendTo($fListHold);
        $fListHold.appendTo($fList);
      }
    };

    varTweet = function() {
      $formMe.html('');
      $('#form').draggable();
      var $usrInput = $('<label for="fname" id="fnameL">Username:</label>' +
      '<input type="text" id="fname" name="fname"  placeholder = "@example"><br><br>');

      var $submitInput = $('<label for="message" id = "messInputL">Message:</label>' +
      '<textarea id="messInput" name="message" placeholder = "Your Thoughts, Your Ideas, Your Words" value=""></textarea><br><br>');

      var $messageInput = $('<input id = "submit" type="submit" value="Submit">');

      var $profpic = $('<div id="pic"></div>');
      var $profpicL = $('<div id="picL">Click to Change<br>Profile Picture</div>');
      var $profpicH = $('<div id="picH"><button id="picHB"></button></div>');
      var $triangle = $('<div id="triangle"></div>');

      var $profpicB = $('<div id="picB">'+
      '<button id="picB1"></button><button id="picB2"></button><button id="picB3"></button>' +
      '<button id="picB4"></button><button id="picB5"></button><button id="picB6"></button>'+
      '<button id="picB7"></button><button id="picB8"></button><button id="picB9"></button>'+
      '</div>');

      $profpic.append($triangle);
      $profpic.append($profpicB);
      $profpic.append($profpicL);

      $profpic.append($profpicH);

      $formMe.append($profpic);
      $formMe.append($usrInput);
      $formMe.append($submitInput);
      $formMe.append($messageInput);
      $mess.html('<button id="create2">Cancel Message</button>');
      document.getElementById("form").style.display = "block";
    };

    closeTweet = function() {
      $mess.html('<button id="create">Create Message</button>');
      document.getElementById("form").style.display = "none";
    }

    infoTweet = function() {
      var usrInfo = document.getElementById("fname").value;
      var messInfo = document.getElementById("messInput").value;
      console.log(usrInfo, messInfo);
      var tweet = {};
      tweet.user = usrInfo;
      tweet.message = messInfo;
      tweet.createdAt = new Date();
      tweet.profilePhotoURL = './assets/img/visitor.png';

      var username = tweet.user;
      if (!streams.users[username]) {
        streams.users[username] = [];
      }
      streams.users[username].push(tweet);
      streams.home.push(tweet);

      squawks();
    }

    squawks = function(event) {
      //console.log(event);
      $feed.html('');

      var index = streams.home.length - 1;
      if (event === undefined || event === 'Feed Update' || event === 'Back') {
        event === 'Back' ? $feedUpd.html('<div><button id="update-feed">Feed Update</button></div>') : false;
        while(index >= 0){
          var icit = '1';
          var tweet = streams.home[index];
            switch (tweet.user) {
              case 'shawndrost':
                icit = '0';
                break;
              case 'sharksforcheap':
                icit = '1';
                break;
              case 'mracus':
                icit = '2';
                break;
              case 'douglascalhoun':
                icit = '3';
                break;
            }

            var $tweet = $('<div class="tweet"></div>');
            var $photo = $('<img class="profile-photo" src="assets/img/user-' + icit +'.png"></img>');
            var $usr = $('<div class="username usr"></div>');
            var $message = $('<div class="message"></div>');
            var $time = $('<div class = "timestamp"></div>');
            var $icons = $('<div class = "icon"></div>');
            var $comment = $('<i class="comment fa-solid fa-comments"></i>');
            var $retweet = $('<i class="retweet fa-solid fa-retweet"></i>');
            var $like = $('<i class="like fa-solid fa-heart"></i>');
            var $share = $('<i class="share fi fi-sr-share"></i>');



            $comment.appendTo($icons);
            $retweet.appendTo($icons);
            $like.appendTo($icons);
            $share.appendTo($icons);



            $usr.text('@' + tweet.user);
            $message.text(tweet.message);
            $time.text(jQuery.timeago(tweet.createdAt));

            $photo.appendTo($tweet);
            $usr.appendTo($tweet);
            $message.appendTo($tweet);
            $time.appendTo($tweet);
            $icons.appendTo($tweet);

            $tweet.appendTo($feed);

            index -= 1;
        }
        varFriends();
      } else {
        event = event.slice(1);
        while(index >= 0){

          var icit = '1';
          var tweet = streams.home[index];
          //console.log(event, tweet.user);
          if (tweet.user === event) {
            //console.log('Compiling')
            switch (tweet.user) {
              case 'shawndrost':
                icit = '0';
                break;
              case 'sharksforcheap':
                icit = '1';
                break;
              case 'mracus':
                icit = '2';
                break;
              case 'douglascalhoun':
                icit = '3';
                break;
            }

            var $tweet = $('<div class="tweet"></div>');
            var $photo = $('<img class="profile-photo" src="assets/img/user-' + icit +'.png"></img>');
            var $usr = $('<div class="username usr"></div>');
            var $message = $('<div class="message"></div>');
            var $time = $('<div class = "timestamp"></div>');
            var $icons = $('<div class = "icon"></div>');
            var $comment = $('<i class="comment fa-solid fa-comments"></i>');
            var $retweet = $('<i class="retweet fa-solid fa-retweet"></i>');
            var $like = $('<i class="like fa-solid fa-heart"></i>');
            var $share = $('<i class="share fa-solid fa-share"></i>');


            $comment.appendTo($icons);
            $retweet.appendTo($icons);
            $like.appendTo($icons);
            $share.appendTo($icons);



            $usr.text('@' + tweet.user);
            $message.text(tweet.message);
            $time.text(jQuery.timeago(tweet.createdAt));

            $photo.appendTo($tweet);
            $usr.appendTo($tweet);
            $message.appendTo($tweet);
            $time.appendTo($tweet);
            $icons.appendTo($tweet);

            $tweet.appendTo($feed);
          }
          index -= 1;
        }
        varFriends();
      }
    };

    squawks();
    // varFriends();


    $feedUpd.on("click", function(event) {
      console.log(event);
      squawks(event.target.innerText);
    });

    $(document).ready(function(){
      $(document).on("click", ".usr",function() {
        //console.log(event);
        squawks(event.target.innerText);
        $feedUpd.html('<div><button id="update-feed">Back</button></div>')
      });
    });

    $(document).ready(function(){
      $(document).on("click", "#dropdown",function() {
        alert('Test1');
        prompt('Enter Test1:')
      });
    });

    $(document).ready(function(){
      $(document).on("click", "#create",function() {
        varTweet();
      });
    });

    $(document).ready(function(){
      $(document).on("click", "#create2",function() {
        closeTweet();
      });
    });

    $(document).ready(function(){
      $(document).on("click", "#submit",function() {
        infoTweet();
        closeTweet();
      });
    });

    $(document).ready(function(){
      $(document).on("click", "#picHB",function() {
        if (document.getElementById("picB").style.display === "none") {
          document.getElementById("picB").style.display = "block";
          document.getElementById("triangle").style.display = "block";
        } else {
          document.getElementById("picB").style.display = "none";
          document.getElementById("triangle").style.display = "none";
        }
      });
    });


    window.isItBeautifulYet = true

  });
};

