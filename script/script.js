let htmlCode = document.getElementById("htmlCode");
let cssCode = document.getElementById("cssCode");
let jsCode = document.getElementById("jsCode");
let iframe = document.getElementById("preview-window");
let darksvg = document.querySelector(".navbar__darkmode")

let lists = document.querySelector('.navbar__lists li');


 const showPreview = () => {
    var html = htmlCode.value;
    var css = "<style>"+cssCode.value+"</style>";
    var js = "<scri"+"pt>"+jsCode.value+"</scri"+"pt>";
    var frame = iframe.contentWindow.document;
    
    frame.open();
    frame.write(html+css+js);
    frame.close();
  }
  const clearSection = (element) =>{
    
     if(element == 'html')
     {
        htmlCode.value = '';
     }
     if(element == 'css')
     {
        cssCode.value = '';
     }
     if(element == 'js')
     {
        jsCode.value = '';
     }
     
     showPreview()
  }


  const changeTheme = () =>{
   
    if(darksvg.alt === "dark")
    {
        darksvg.src = "static/lightmode.svg"
        darksvg.alt = "light"
    }
    else
    {
        darksvg.src = "static/darkmode.svg"
        darksvg.alt = "dark"
    }
       
  }
  const listunstyle = () =>{
   let darksvg = document.querySelector("navbar__lists li");
   darksvg.style.border = "none";
   darksvg.style.color = "black";
   darksvg.style.margin = "0px";
  }

  const listsStyle = (params) =>{
   listunstyle();
   let darksvg = document.querySelector(`.navbar__lists__${params}`);
   darksvg.style.borderBottom = "2px solid #1a73e8";
   darksvg.style.color = "#1a73e8";
   darksvg.style.marginBottom = "-2px";
   
  }