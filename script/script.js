let htmlCode = document.getElementById("htmlCode");
let cssCode = document.getElementById("cssCode");
let jsCode = document.getElementById("jsCode");
let iframe = document.getElementById("preview-window");
let darksvg = document.querySelector(".navbar__darkmode")

let lists = document.querySelector('.navbar__lists li');

// local var
let html,css,js;
let key='WEBDEVEDITOR';





 const showPreview = () => {
     html = htmlCode.value;
     css = "<style>"+cssCode.value+"</style>";
     js = "<script>"+jsCode.value+"</script>";

   

    var frame = iframe.contentWindow.document;
    
    frame.open();
    frame.write(html+css+js);
    frame.close();

    localStorage.setItem(`${key}HTML`,html);
    localStorage.setItem(`${key}CSS`,cssCode.value);
    localStorage.setItem(`${key}JS`,jsCode.value);

  }
  const clearSection = (key) =>{
     switch (key) {
        case 'html':
           htmlCode.value = '';
           break;
        case 'css':
           cssCode.value = '';
           break;
        case 'js':
           jsCode.value = '';
           break;
                
     
        default:
           break;
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

  // drag cursor

  const resizer = document.getElementById('dragable');
  let code_area = document.querySelector('.code-area');

  resizer.addEventListener("mousedown", (event) => {
   document.addEventListener("mousemove", resize, false);
   document.addEventListener("mouseup", () => {
     document.removeEventListener("mousemove", resize, false);
   }, false);
 });
 
 function resize(e) {
   const size = `${e.x}px`;
   code_area.style.width = size;
 }
 window.onload=()=>{
    var L_html,L_css,L_js;
    if(localStorage.getItem(`${key}HTML`)){
      L_html = localStorage.getItem(`${key}HTML`);
      htmlCode.innerHTML = L_html
    }

    if(localStorage.getItem(`${key}CSS`)){
       L_css=localStorage.getItem(`${key}CSS`);
      cssCode.innerHTML = L_css;
    }

    if(localStorage.getItem(`${key}JS`)){
       L_js = localStorage.getItem(`${key}JS`);
      jsCode.innerHTML = L_js;
    }

    L_html = L_html;
    L_css = "<style>"+L_css+"</style>";
    L_js = "<script>"+L_js+"</script>";

    var frame = iframe.contentWindow.document;
    
    frame.open();
    frame.write(L_html+L_css+L_js);
    frame.close();
 }