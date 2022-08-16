appReady = function(){
  $(document).ready( function() {

    var $app = $('#app');
    var $title = $('<h1>SQUAWK</h1>');
    var $feedMe = $('<div id="feed"></div>');
    var $feedUpd = $('<div><button id="update-feed">Feed Update</button></div>');
    var $settings = $('<div id="settings">Settings</div>');
    var $opener = $('<h2>Your Thoughts, Your Ideas, Your Words</h2>');
    var $friendsList = $('<div id="friends">Friends List</div>');
    $app.html('');
    $title.appendTo($app);
    $feedUpd.appendTo($app);
    $settings.appendTo($app);
    $opener.appendTo($app);
    $friendsList.appendTo($app);
    $feedMe.appendTo($app);
    var $feed = $('#feed');

    squawks = function(event) {
      console.log(event);
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
            var $usr = $('<div class="username"></div>');
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

            index -= 1;
        }
      } else {
        event = event.slice(1);
        while(index >= 0){

          var icit = '1';
          var tweet = streams.home[index];
          console.log(event, tweet.user);
          if (tweet.user === event) {
            console.log('Compiling')
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
            var $usr = $('<div class="username"></div>');
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
      }
    };

    squawks();

    $feedUpd.on("click", function(event) {
      console.log(event);
      squawks(event.target.innerText);
    });

    $(document).ready(function(){
      $(document).on("click", ".username",function() {
        console.log(event);
        squawks(event.target.innerText);
        $feedUpd.html('<div><button id="update-feed">Back</button></div>')
      });
    });

    window.isItBeautifulYet = true

  });
};

