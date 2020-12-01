document.addEventListener('DOMContentLoaded', function(dcle) {
    document.addEventListener("keydown", keydown);



    function keydown(event) {
        //表示監聽鍵盤所發生的事件，同時傳遞參數event
        if (event.keyCode === 13) {
            myFunction();
        }
    }

    function myFunction() {
        var x = document.getElementById("myURL").value;
        alert(`你輸入的網址是${x}`);

    }


});

var newscript = document.createElement('script');
newscript.setAttribute('type', 'text/javascript');
newscript.setAttribute('src', "https://www.gstatic.com/firebasejs/4.12.1/firebase.js");
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);


firebase.initializeApp({

    databaseURL: "https://peak-age-294213.firebaseio.com/",

});






const database = firebase.database();
let fNodename;
let nextN;


function myFunction() {


    var youtubeurl = document.getElementById("myURL").value;
    var de = youtubeurl
    const searchTerm = 'v=';
    const searchTerm2 = '&';
    const indexOfFirst = de.indexOf(searchTerm);
    const indexOfFirst2 = de.indexOf(searchTerm2);

    if (indexOfFirst2 === -1) {
        fNodename = de.slice(indexOfFirst + 2);

    } else {
        fNodename = de.slice(indexOfFirst + 2, indexOfFirst2);

    }

    return (fNodename);

}



function dataLoad(comment, comment_id, reply_count, like_count, canReply, name, comment_Time, comImage, i) {

    var uComment = {
        使用者名稱: name,
        使用者ID: comment_id,
        使用者圖片: comImage,
        留言: comment,
        Like: like_count,
        回覆: reply_count,
        是否可回覆: canReply,
        時間: comment_Time


    }



    var aDDRESS = String(myFunction() + '/' + i)

    database.ref(aDDRESS).set(uComment);


}



function loadClient() {
    gapi.client.setApiKey("AIzaSyCYM8fb8W0zQKMgCMTgj4bKvT0cWvao4Z0");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() {
                console.log("GAPI client loaded for API");
            },
            function(err) {
                console.error("Error loading GAPI client for API", err);
            });
}



function execute() {

    return gapi.client.youtube.commentThreads.list({
            "part": [
                "snippet"

            ],
            "moderationStatus": "published",
            "order": "time",
            "textFormat": "html",
            "maxResults": 100,
            "videoId": myFunction()
        })
        .then(function(response) {

                console.log("Response", response);



                var testcode = response.result.items;

                console.log(testcode.length);
                var comment
                var comment_id
                var reply_count
                var like_count
                var canReply
                var name
                var comment_Time
                var comImage








                database.ref().remove();
                database.ref(myFunction()).set('');
                for (var i = 0; i < testcode.length; i++) {


                    comment = response.result.items[i].snippet.topLevelComment.snippet.textDisplay;
                    comment_id = response.result.items[i].snippet.topLevelComment.id;
                    reply_count = response.result.items[i].snippet.totalReplyCount;
                    like_count = response.result.items[i].snippet.topLevelComment.snippet.likeCount
                    canReply = response.result.items[i].snippet.canReply
                    name = response.result.items[i].snippet.topLevelComment.snippet.authorDisplayName
                    comment_Time = response.result.items[i].snippet.topLevelComment.snippet.updatedAt
                    comImage = response.result.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl
                    dataLoad(comment, comment_id, reply_count, like_count, canReply, name, comment_Time, comImage, i)



                }





                console.log('set data successful');





                var tk888 = response.result;
                var ih = 1;
                var nextN = 99;

                function nextPage() {
                    ih++




                    if (tk888.hasOwnProperty('nextPageToken')) {

                        return gapi.client.youtube.commentThreads.list({
                            "part": "snippet",
                            "moderationStatus": "published",
                            "order": "time",
                            "textFormat": "html",
                            "maxResults": 100,
                            "videoId": myFunction(),
                            "pageToken": tk888.nextPageToken

                        }).then(function(response) {


                            console.log("Response" + ih, response);
                            tk888 = response.result
                            testcode = response.result.items


                            console.log(nextN)


                            for (var i = 0; i < testcode.length; i++) {

                                nextN++
                                comment = tk888.items[i].snippet.topLevelComment.snippet.textDisplay;
                                comment_id = tk888.items[i].snippet.topLevelComment.id;
                                reply_count = tk888.items[i].snippet.totalReplyCount;
                                like_count = tk888.items[i].snippet.topLevelComment.snippet.likeCount
                                canReply = tk888.items[i].snippet.canReply
                                name = tk888.items[i].snippet.topLevelComment.snippet.authorDisplayName
                                comment_Time = tk888.items[i].snippet.topLevelComment.snippet.updatedAt
                                comImage = tk888.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl
                                dataLoad(comment, comment_id, reply_count, like_count, canReply, name, comment_Time, comImage, nextN)




                            }



                            console.log('set data successful');



                        }).then(function(e) {

                            nextPage()
                        });



                    } else {
                        console.log(nextN)
                        if (ih == 2) {
                            nextN = testcode.length;
                            var message = nextN;
                            var domain = window.location.origin;
                            // post message
                            createWindow.postMessage(message, domain);
                            // focus windowOpen
                            createWindow.focus();
                        } else {
                            var message = nextN;
                            var domain = window.location.origin;
                            // post message
                            createWindow.postMessage(message, domain);
                            // focus windowOpen
                            createWindow.focus();
                        }

                    }





                }

                nextPage()








            },
            function(err) {
                console.error("Execute error", err);
            });
}






function iJump() {

    //window.location.href = 'popout.html';
    console.log(fNodename)


}


var createWindow;
document.getElementById('openWindow').addEventListener('click', function(e) {
    // 將變數 assign window open 物件
    loadClient();


    createWindow = window.open("./index07.html");
});
document.getElementById('postWindow').addEventListener('click', function(e) {
    sendMsg();
    execute();
});

function sendMsg() {
    var message = myFunction();
    var domain = window.location.origin;
    // post message
    createWindow.postMessage(message, domain);
    // focus windowOpen
    createWindow.focus();

}






gapi.load('client');