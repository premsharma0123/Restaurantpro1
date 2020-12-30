$(document).ready(function(){
    $(".item1").click(function(){
        $("#id04").fadeToggle("slow");
      });
      $(".item2").click(function(){
        $("#id05").fadeToggle("slow");
      });
      $(".item3").click(function(){
        $("#id06").fadeToggle("slow");
      });
      $(".item4").click(function(){
        $("#id07").fadeToggle("slow");
      });
      $(".item5").click(function(){
        $("#id08").fadeToggle("slow");
      });
      $(".Btn1").click(function(){
        $(".Pop_up_wrapper").fadeToggle("slow");
        $(".Pop_up_wrapper2").css("display","none");
      });
      $(".Btn2").click(function(){
        $(".Pop_up_wrapper2").fadeToggle("slow");
        $(".Pop_up_wrapper").css("display","none");
      });
      $(".main-bar").click(function(){
        $("#main03").css("display","none");
      });
    //----sign-up--//
    $(".Log").click(function(){
      $(".Pop_up_wrapper").fadeToggle("slow");
      $(".Pop_up_wrapper2").css("display","none");
    });
 //----log-in--//
 $(".Sign").click(function(){
  $(".Pop_up_wrapper2").fadeToggle("slow");
  $(".Pop_up_wrapper").css("display","none");
});
  // add & Remove class
  $(".List_cmn1").click(function () {
    if(!$(this).hasClass('List_active'))
    {    
        $(".List_cmn1.List_active").removeClass("List_active");
        $(this).addClass("List_active");        
    }
  });
  
  //---end--here---//
    // add & Remove class
    $(".tab1").click(function () {
      if(!$(this).hasClass('Sub_active_tab1'))
      {    
          $(".tab1.Sub_active_tab1").removeClass("Sub_active_tab1");
          $(this).addClass("Sub_active_tab1");        
      }
    });
       // add & Remove class
       $(".tab2").click(function () {
        if(!$(this).hasClass('Sub_active_tab2'))
        {    
            $(".tab2.Sub_active_tab2").removeClass("Sub_active_tab2");
            $(this).addClass("Sub_active_tab2");        
        }
      });
        // add & Remove class
    $(".tab3").click(function () {
      if(!$(this).hasClass('Sub_active_tab3'))
      {    
          $(".tab3.Sub_active_tab3").removeClass("Sub_active_tab3");
          $(this).addClass("Sub_active_tab3");        
      }
    });
         // add & Remove class
         $(".tab4").click(function () {
          if(!$(this).hasClass('Sub_active_tab4'))
          {    
              $(".tab4.Sub_active_tab4").removeClass("Sub_active_tab4");
              $(this).addClass("Sub_active_tab4");        
          }
        });
    //---end--here---//
        // add & Remove class
        $(".tab5").click(function () {
          if(!$(this).hasClass('Sub_active_tab5'))
          {    
              $(".tab5.Sub_active_tab5").removeClass("Sub_active_tab5");
              $(this).addClass("Sub_active_tab5");        
          }
        });
    //---end--here---//
            // add button & Remove class
            $(".logbtn").click(function () {
              if(!$(this).hasClass('btn_active'))
              {    
                  $(".logbtn.btn_active").removeClass("btn_active");
                  $(this).addClass("btn_active");        
              }
            });
        //---end--here---//
                // add button & Remove class
                $(".head_a1_cmn").click(function () {
                  if(!$(this).hasClass('btn_active'))
                  {    
                      $(".head_a1_cmn.btn_active").removeClass("btn_active");
                      $(this).addClass("btn_active");        
                  }
                });
                //----table---toggle---//

                $(".head--a1").click(function(){
                  $(".Table_wrp").fadeToggle("slow");
                  $("#Table_wrp2").css("display","none");
                })
                $(".head--a2").click(function(){
                  $("#Table_wrp2").fadeToggle("slow");
                  $(".Table_wrp").css("display","none");
                })
            //---end--here---//

                // //// submit pop up 
        
  

      //---end--here---//

// -------------*****************--------------------///
//                Home-page   slider
///--------------*****************-------------------///

$('.slider1').owlCarousel({
  loop: true,
  margin: 0,
  //autoplay: true,
  nav: true,
  autoplayTimeout: 4000,
  smartSpeed: 1500,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

//---slider--2
$('.slider2').owlCarousel({
  loop: true,
  margin: 0,
  //autoplay: true,
  nav:true,
  autoplayTimeout: 4000,
  smartSpeed: 1500,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items:2
      },
     767: {
        items:2
      },
      800: {
        items:3
      },
      1000: {
          items: 5
      }
  }
});

});



// ----increement---add--item---//
var i = 0;
function increment() {
  i++;
  var demo = (document.getElementById("counter").innerHTML = i);
}
function  decrement() {
  i--;
  var demo = (document.getElementById("counter").innerHTML = i);
}



// -------nav---part----//
function openNav() {
  var sidebar =  document.querySelectorAll("#sidebar");
  // var c2 = document.querySelectorAll(".CampL2");
  var sift  =    document.getElementById("Sift1");
    sidebar[0].style = "width:250px !important";
   // debugger
  //   c2.style.padding="2rem 0 0 1rem";
    sift.style ="margin-left :250px";
    
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  var sift  =  document.getElementById("Sift1");
  //    sift.style ="padding-top : 0rem !important";
     sift.style = "margin-left : 13px"
  }



//----open_list------//

  function openList(ListName) {
    var i;
    var x = document.getElementsByClassName("List_cmn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  //----end---here----//




    //----Sub---open_list------//

    function openSubList1(ListName) {
      var i;
      var x = document.getElementsByClassName("child_cnt_commn1");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(ListName).style.display = "block";  
    }
  
    //----end---here----//


    //----Sub---open_list------//

    function openSubList2(ListName) {
      var i;
      var x = document.getElementsByClassName("child_cnt_commn2");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(ListName).style.display = "block";  
    }
  
    //----end---here----//
      //----Sub---open_list------//

  function openSubList3(ListName) {
    var i;
    var x = document.getElementsByClassName("child_cnt_commn3");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  //----end---here----//
        //----Sub---open_list------//

function openSubList4(ListName) {
var i;
var x = document.getElementsByClassName("child_cnt_commn4");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
document.getElementById(ListName).style.display = "block";  
}

//----end---here----//
      //----Sub---open_list------//

  function openSubList5(ListName) {
    var i;
    var x = document.getElementsByClassName("child_cnt_commn5");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }
 //----end---here----//

 /////----form----sectionn---//

 $(function(){
  $('.text input').focusin(function(){
    $(this).addClass('focus');
  });
  $('.text input').focusout(function(){
    if($(this).val() == "")
    $(this).removeClass('focus');
  });
});




// -------nav---part----//
function openNav() {
  var sidebar =  document.querySelectorAll("#sidebar");
  //  var c3 = document.getElementsByClassName("spn01");
  var sift  =    document.getElementById("Sift1");//.style.marginLeft = "250px";
    sidebar[0].style = "width:250px !important";
   // debugger
    sift.style ="margin-left :250px";
    // c3.style = "display: none";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";//"50px";
//  var c3 = document.getElementsByClassName("spn01");
  var sift  =  document.getElementById("Sift1");//.style.marginLeft= "13px";
  //    sift.style ="padding-top : 0rem !important";
     sift.style = "margin-left : 155px";
    //  c3.style = "display: none";
  }




  // pop---up----//
  
  function mSubmit() {
    var x = document.getElementById("main02");
    if (x.style.display === "block") {
     x.style.display = "none";
    } else {
     x.style.display = "block";
    }
}
function itemSubmit() {
  var x = document.getElementById("main03");
  if (x.style.display === "block") {
   x.style.display = "none";
  } else {
   x.style.display = "block";
  }
}