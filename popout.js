var newscript = document.createElement('script');
newscript.setAttribute('type', 'text/javascript');
newscript.setAttribute('src', "https://www.gstatic.com/firebasejs/4.12.1/firebase.js");
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);


firebase.initializeApp({

    databaseURL: "https://peak-age-294213.firebaseio.com/",

});






const database = firebase.database();

let fbADD = [];

function fireTest() {
    database.ref('/').once('value').then(result => {

        console.log(result.val());
    });

}

function firePut() {

    var a = String('/' + fbADD[0]);

    var myNameRef = database.ref(a);
    myNameRef.once('value', function(snapshot) {
        var bb = snapshot.val()[0].使用者圖片;
        var aa = snapshot.val()[0];
        console.log(String(aa.留言));
        document.getElementById("myImg").src = bb;
        document.getElementById('name').textContent = aa.使用者名稱;
        document.getElementById('content').innerHTML = aa.留言;

    })


}
window.addEventListener("message", getMessage, false);

var count = 0;

function getMessage(e) {
    var content = '';
    // e.data 接受傳遞訊息
    content += "Get Message =>" + e.data + '<br>';
    // e.origin 接受訊息domain
    content += "Url from " + e.origin;

    if (e.data != 0) {

        fbADD[count] = e.data;
        count++

    }

    console.log(fbADD)
        //document.getElementById("response").innerHTML = "<p>" + content + "</p>";
};

function myF() {
    var adD = fbADD[0]
    console.log(adD)
    var a = String('/' + adD);
    console.log(a)

    var myNameRef = database.ref(a);
    var table = document.getElementById("myTable");


    myNameRef.once('value', function(snapshot) {
        for (let i = 1; i < fbADD[1] + 1; i++) {

            var aa = snapshot.val()[i];
            var bb = aa.使用者圖片;


            if (bb != "") {
                document.getElementById("myImg").src = bb;
            } else {
                document.getElementById("myImg").src = "";
            }
            document.getElementById('name').textContent = aa.使用者名稱;
            document.getElementById('content').innerHTML = aa.留言;
            var row = table.insertRow(i);
            var cell5 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            


            cell1.innerHTML = aa.使用者名稱;
            cell2.innerHTML = aa.留言;
            cell3.innerHTML = aa.Like;
            cell4.innerHTML = aa.回覆;
            cell5.src = bb;


        }
    })





}
function clearA(){
    for (let i = 1; i < fbADD[1]-13; i++) {
    
        document.getElementById("myTable").deleteRow(1);

    }

}
function orderByTimeReverse() {
    var adD = fbADD[0];
    var a = String('/' + adD);
    var TimeRef = database.ref(a);
    var table = document.getElementById("myTable");

    let ij=1;
    console.log (fbADD[1])
    for(let nkj=0;nkj<2;nkj++){

    
        if(ij==1){
            for (let i = 1; i <fbADD[1]; i++) {
    
                document.getElementById("myTable").deleteRow(1);
        
            }
            
            ij++;
        }else{
            
            TimeRef.orderByChild('時間').once('value', function(snapshot) {
                var dataArr = [];
                snapshot.forEach(function(item) {
                        console.log(item.val());
                        dataArr.push(item.val());
                    })
                    //反向排序
                for (let i = 0; i < fbADD[1]; i++) {
                    var aa = dataArr.reverse()[i];
                    console.log(dataArr.reverse()[i]);
                    var bb = aa.使用者圖片;
                    if (bb != "") {
                        document.getElementById("myImg").src = bb;
                    } else {
                        document.getElementById("myImg").src = "";
                    }
                    document.getElementById('name').textContent = aa.使用者名稱;
                    document.getElementById('content').innerHTML = aa.留言;
                    var row = table.insertRow(1);
                    var cell5 = row.insertCell(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = aa.使用者名稱;
                    cell2.innerHTML = aa.留言;
                    cell3.innerHTML = aa.Like;
                    cell4.innerHTML = aa.回覆;
                    cell5.src = bb;

                }
            })
        }
    }


     


    // 路徑>>排序('屬性')>>讀取> forEach 依序撈出資料   
    /*TimeRef.orderByChild('時間').once('value', function(snapshot) {
        var dataArr = [];
        snapshot.forEach(function(item) {
                console.log(item.val());
                dataArr.push(item.val());
            })
            //反向排序
        for (let i = 0; i < fbADD[1]; i++) {
            var aa = dataArr.reverse()[i];
            console.log(dataArr.reverse()[i]);
            var bb = aa.使用者圖片;
            if (bb != "") {
                document.getElementById("myImg").src = bb;
            } else {
                document.getElementById("myImg").src = "";
            }
            document.getElementById('name').textContent = aa.使用者名稱;
            document.getElementById('content').innerHTML = aa.留言;
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = aa.使用者名稱;
            cell2.innerHTML = aa.留言;
            cell3.innerHTML = aa.Like;
            cell4.innerHTML = aa.回覆;
        }
    })*/
}