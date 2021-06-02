   //لفتح القائمة الجانبية 
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  //لغلق القائمة الجانبية 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  $(function() {
    var header = $("#headerr");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeAttr('id','headerr').attr('id', 'header');
            $("#branding").removeAttr("style");
        } else {
            header.removeAttr('id','header').attr('id', 'headerr');
            $("#branding").attr("style","flex-grow:8;");
        }
    });
});