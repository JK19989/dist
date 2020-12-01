<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Our CSS Template 03</title>
    <meta charset="utf-8">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--<link rel="stylesheet" type="text/css" href="index.css">-->
    <link rel="stylesheet" type="text/css" href="popout.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  
   


<!--〈script language="javascript"〉
　　function openwin() {
  　　window.open ("popup.html", "newwindow", "height=100, width=400,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no")
  　　//寫成一行
  　　}〈/script>
-->

    <style>

      * {
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      /* Style the header */
      header {
        background-color: #52545E;
        padding: 5px;
        text-align: center;
        font-size: 35px;
        color: white;
      }

      /* Create two columns/boxes that floats next to each other */
      nav {
        float: left;
        padding: 20px;
        width: 20%;
        height: 100%; /* only for demonstration, should be removed */
        background: #D4E6F8;
      }

      /* Style the list inside the menu */
      nav ul {
        list-style-type: none;
        padding: 0;
      }

      article {
        float: left;
        padding: 20px;
        width: 80%;
        background-color: #f1f1f1;
        /*height: 300px; /* only for demonstration, should be removed */
      }
      article01 {
        float: left;
        padding: 20px;
        width: 70%;
        background-color: #f1f1f1;
        /*height: 300px; /* only for demonstration, should be removed */
      }
      article02 {
        float: left;
        padding: 20px;
        width: 30%;
        background-color: #f1f1f1;
        /*height: 300px; /* only for demonstration, should be removed */
      }
      /* Clear floats after the columns */
      section:after {
        content: "";
        display: table;
        clear: both;
      }

      /* Style the footer */
      footer {
        background-color: #CBB29D;
        padding: 5px;
        text-align: center;
        color: white;
      }

      /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
      @media (max-width: 1050px) {
        nav, article {
          width: 100%;
          height: auto;
        }
      }

      @media (min-width: 1100px){

          nav{
          width: 220px;
          height: auto;}
          article{
          width:calc(100% - 220px);
          height: auto;
          }
      }
      @media (max-width: 1050px) {
        article01, article02 {
          width: 100%;
          height: auto;
        }
      }

      .video-container
      {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 30px; 
      height: 0; 
      overflow: hidden;
      }
            
      .video-container iframe,
      .video-container object,
      .video-container embed
      {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0 none;
      }


      .word{
        font-family: 'Grandstander','Staatliches', cursive;
                  
        font-size:64px;
        color:#ff8080;
        font-weight:bolder; 
      }

      .font01{
        font-family: 'Leckerli One', cursive;
        color:#7401f8;
        font-weight:bold; 
        font-size:30px;
      }
      .font11{
        font-family: 'Leckerli One', cursive;
        color:#a7460e;
        font-weight:bold; 
        font-size:20px;
      }
      .font21{
        font-family: 'Leckerli One', cursive;
        color:#a7460e;
      }
      .font02{
        font-family: 'Reenie Beanie', cursive;
        color:#f801e4;
      }
      .font03{
        font-family: 'Schoolbell', cursive;
      }
      .font04{
        font-family: 'Italianno', cursive;
      }


        @import url('https://fonts.googleapis.com/css2?family=Grandstander&family=Staatliches&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Italianno&family=Leckerli+One&family=Nerko+One&family=Reenie+Beanie&family=Sansita+Swashed:wght@800&family=Schoolbell&display=swap');
        /*字體的網址*/
        
      

           /*  
           font-family: 'Italianno', cursive;
             font-family: 'Leckerli One', cursive;
        font-family: 'Nerko One', cursive;
              font-family: 'Reenie Beanie', cursive;
        font-family: 'Sansita Swashed', cursive;
              font-family: 'Schoolbell', cursive;
        
        */

        #titleground
        {
          color:black;
          background-color:red;
          text-align:center;
          width:100%;
        }

      .btn[database]
			{
				width:70px;
				height:20px;
				text-align:center;
				line-height:20px;
				padding:initial;
        margin-left:15px;
        margin-bottom:0;
				border-radius:500px;/*圓角弧度*/
				color:#fff;
				font-size:6px;
				background:#db4437;
				flex-shrink:0;
				white-space:nowrap;
				vertical-align:middle;
				cursor:pointer;
				border:1px solid transparent;
        user-select:none;
        
      }
      
      .btn02
			{
				width:70px;
				height:70px;
				text-align:center;
				line-height:20px;
				padding:initial;

        border-radius:500px; /*圓角弧度*/
/*//位置
        position: absolute; 
        bottom: 50px; 
        right: 60px;
*/
        
				font-size:25px;
				background:#3700ff;
				flex-shrink:0;
				
				white-space:nowrap;
				vertical-align:middle;
				cursor:pointer;
				border:1px solid transparent;
        user-select:none;
        
        font-family: 'Reenie Beanie', cursive;
        color:#f88d01;
        font-weight:bold;
      }
      

      .btn-color
			{
				width:40px;
				height:30px;
				text-align:center;
				line-height:00px;
				padding:initial;

        border-radius:500px; /*圓角弧度*/

				font-size:17px;
				background:#016b25;
				flex-shrink:0;
				
				white-space:nowrap;
				vertical-align:middle;
				cursor:pointer;
				border:1px solid transparent;
        user-select:none;
        
        font-family: 'Reenie Beanie', cursive;
        color:#f88d01;
      }



        table,
        td {
            border: 1px solid black;
        }
    

    .data-content tr:nth-child(odd){
      background-color: #f6f9fdfb;
    }
    .data-content tr:nth-child(even){
      background-color: #FFFFFF;
    }


    </style>
  </head>





  <!--<body onload="openwin()">-->
  <body>

    <header>
      <h2 class=" word" align="center"><img src="pic/yt06.jpg" height="60px">
        Youtube comment helper
      </h2>
    </header>



    <section>
      <nav>

        
        <!--<div style="margin:0px 5px 0px 5px;">-->
        <!--
          <font size="4" class="font01" >背景換色</font>
          
          <button onclick="mycolor00()"class="btn-color">預設</button>
          <p class="font11">上方欄<br>
            <button onclick="mycolor01()"class="btn-color">紅色</button>
            <button onclick="mycolor02()"class="btn-color">白色</button>
            <button onclick="mycolor03()"class="btn-color">灰色</button>
          <br>搜尋欄<br>
            <button onclick="mycolor11()"class="btn-color">紅色</button>
            <button onclick="mycolor14()"class="btn-color">橘色</button>
            <button onclick="mycolor13()"class="btn-color">灰色</button>
          <br>中間欄<br>
            <button onclick="mycolor21()"class="btn-color">紅色</button>
            <button onclick="mycolor24()"class="btn-color">橘色</button>
            <button onclick="mycolor23()"class="btn-color">灰色</button>          
          <br>留言欄<br>
            <button onclick="mycolor31()"class="btn-color">紅色</button>
            <button onclick="mycolor34()"class="btn-color">橘色</button>
            <button onclick="mycolor33()"class="btn-color">灰色</button>
          <br>下方資訊欄<br>
            <button onclick="mycolor41()"class="btn-color">紅色</button>
            <button onclick="mycolor44()"class="btn-color">橘色</button>
            <button onclick="mycolor43()"class="btn-color">灰色</button>
          </p>
          <hr>
        -->




          <form>
            <div align="left">
              <font size="4" class="font01" >YouTube網址 </font>
              <form>
                <input id="myURL" type="url" placeholder="請輸入youtube影片網址"style='width:90%; height:30px;'>
              </form>
              <!--<input class="aa" id=loginAccount type=text class="txtbox" placeholder="請輸入youtube網址" style='width:90%; height:30px;' onkeypress='m_loginEnter(event)'>
              -->
              
              <button  database="???" type="submit" class="btn">GO</button>

              <button id="openWindow" type="button" class="btn btn-info">開啟視窗</button>
              <button id="postWindow" class="btn btn-info btn-outline-secondary" type="button">送出訊息</button>
              <button id="gogoWindow" class="btn btn-info btn-outline-secondary" type="button" class="btn btn-info">開啟視窗+送出訊息</button>
            </div>


            







            <hr>

            <div id="searchsetingground">
              <font size="5" class="font01" >留言設定 </font>
              <div database3="" database4="" class="listui">
                <!--<div database3="" class="title">
                
                </div>-->
                  <!--data-v-42d8d0d7  == database3-->
                  <!--data-v-043298fe  == database4-->
                  <!--
                    <div database3="" class="ui time">
                      <div database3="" class="start">
                        活動起始時間
                        <div database3="" class="vdatetime datetime">
                          <input type="text" class="d_input">
                        </div>
                      </div>
                      
                      <div database3="" class="end">
                        活動結束時間
                        <div database3="" class="vdatetime datetime">
                          <input type="text" class="d_input"> 
                        </div>
                      </div>
                    </div>
                  -->
                <div>

                  <p>
                    
                    <font class="font11">搜尋留言</font>
                    <input type="text" class="font21" placeholder="搜尋關鍵字" style='width:150px; height:25px;'>
                  </p>
                  
                  <label>
                    <div>
                    
                      <font class="font11">搜尋姓名</font>
                      <input type="text" class="font21"placeholder="搜尋姓名" style='width:150px; height:25px;'>
                    </div>
                  </label>
                  
                  <label>
                    <p>
                    
                      <font class="font11">搜尋時間</font>
                      <input type="text" class="font21" placeholder="搜尋時間" style='width:150px; height:25px;'>
                    </p>
                  </label>
                  <!--<div database3="" class="howmany">
                      抓取人數
                      <input database3="" type="number" id="howmany">
                    </div>
                  -->
                  <button database3="???" type="submit" name="button" id="btn_choose" >進行抓取</button>
                </div>
              </div>
            </div>
          
          
          
          
    

          <button  type="submit" class="btn"onclick=orderByLike()>Like</button>

          <button  type="submit" class="btn"onclick=orderByLikeReverse()>LikeReverse</button>
  
          <button  type="submit" class="btn"onclick=orderByTimeReverse()>TimeReverse</button>
          
          
          
          
          
          
          <div id="Sidebar">
              <hr>
              <p id="usedground">
                <big>用途：</big>
                <br>
                此網頁是用來展現YouTube留言搜索的功能。
               </p>
            </div>

          </form>
        <!--</div>-->
      </nav>
      
      
      
      
      
      <article>
        <article01>
     
          <div class="video-container" controls>
            <iframe width=100% 
            src="https://www.youtube.com/embed/2thjvsYiIt4" frameborder="0" allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"> 
            </iframe>
          </div>


<p>00002</p>
          <iframe width=100%
           id="youtube" src='https://www.youtube.com/embed/Ix7b7FjwJ0A' onclick="myfunction()">
          </iframe>
<!--會有錯
  <p>00003</p>
  
            <iframe width=100%
            id="youtube" src='https://www.youtube.com/watch?v=Ix7b7FjwJ0A' onclick="change()"> 
          </iframe>
        -->
          <!--
            共11碼的yt-id
            ex:
              Ix7b7FjwJ0A
              2thjvsYiIt4
              .
              .
              .
          

          -->


          <!--原始版 
            <iframe width=100%
            id="youtube" src='https://www.youtube.com/watch?v=Ix7b7FjwJ0A' onclick="change()"
 
         frameborder="0" allowFullScreen allow="accelerometer; autoplay;
          encrypted-media; gyroscope; picture-in-picture;"> 
             </iframe>
-->




<!--

          <object width="100%" height="500px" data="x" id="demo"></object>


          <div class="video-container">
            <iframe width=100% 
            src="x" frameborder="0" allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"> 
            </iframe>
          </div>

            <p>Click the button to display the URL of the document.</p>

            <button onclick="myFunction()">Try it</button>
            <button onclick="myFunction02()">Try it</button>
            <button onclick="myFunction03()">Try it</button>


              <p id="demo"></p>
              <iframe style="width:70%; height:100%;" id="demo"> </iframe> 
              
              <div id="demo">
                <iframe style="width:70%; height:100%;" src="x"> </iframe> 
              <div>

                <p>Click the button to display the entire URL of the current page.</p>

          
              <p id="demo1"></p>
              <p var y></p>
            <script>
                function myFunction03() {
                  var y = document.URL;
                  //document.getElementById("demo3").innerHTML = y;
                  y.style.search.URL;
                }
                function myFunction() {
                  var x = document.URL;
                  //var x = innerHTML.URL;
                  document.getElementById("demo").innerHTML = x;
                  //document.getElementById("demo").innerHTML = x;
                }
            </script>

          <iframe style="width:70%; height:100%;" src="./popout.html"> </iframe> 
-->


        </article01>
        

        
        <article02>  

          <h1>London</h1>
          <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <!--舊版
              <div class="shadowbox">
              <div class="photo"><img id="myImg" src=""></div>
          
              <div class="intro">
                <p id="name">綠色</p>
              </div>
              <div>
                  <p>留言:</p>
                  <p id="content"></p>
              </div>
              </div>
              <button onclick="fireTest()">測試</button>
              <button onclick=" firePut()">輸出</button>
              <img id="myImg" src="">
              <pre id="content"></pre>
              <p class="lead">
                <h2 id="response"></h2>
              </p>
            
        -->
            <div class="shadowbox">
              <div class="photo"><img id="myImg" src=""></div>
      
              <div class="intro">
                  <p id="name">綠色</p>
              </div>
              <div>
                  <p>留言:</p>
                  <p id="content"></p>
              </div>
          </div>
          <button onclick="fireTest()">測試</button>
          <button onclick=" firePut()">輸出</button>
          <img id="myImg" src="">
          <pre id="content"></pre>
          <p class="lead">
              <h2 id="response"></h2>
          </p>
      
      
          <p>Click the button to add a new row at the first position of the table and then add cells and content.</p>
          <div class="data-content">
            <table id="myTable">
                <tr>
                    <td>頭像</td>
                    <td>使用者名稱</td>
                    <td>留言</td>
                    <td>Like</td>
                    <td>回覆</td>
                    
                </tr>
        
            </table>
            <br>
        
            <button type="button" onclick="myF()">Try it</button>
          </div>>



             
        </article02>
      </article>
    </section>

    <footer>
      <p>Footer</p>



      <div>
        <a href="https://www.youtube.com/about/">關於</a>
        <a href="https://www.youtube.com/about/press/">新聞中心</a>
        <a href="https://www.youtube.com/about/copyright/">版權</a>
        <a href="https://www.youtube.com/t/contact_us">與我們聯絡</a>
        <a href="https://www.youtube.com/creators/">創作者</a>
        <a href="https://www.youtube.com/ads/">廣告</a>
        <a href="https://developers.google.com/youtube">yt開發人員</a>
      </div>

      
        <p>© 2020 Google LLC</p>


    </footer>



   

  









		<script src="https://apis.google.com/js/api.js"></script>
		<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
    <script src="popout.js"></script>
    

    <script src="index07.js"></script>

    <!--<script src="popup.js"></script>-->
  </body>
</html>
