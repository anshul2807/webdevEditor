let htmlCode = document.getElementById("htmlCode");
let cssCode = document.getElementById("cssCode");
let jsCode = document.getElementById("jsCode");
let iframe = document.getElementById("preview-window");
let darksvg = document.querySelector(".navbar__darkmode")

let lists = document.querySelector('.navbar__lists li');

let toggleMode=false;

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
    var L_html='',L_css,L_js;
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

 // changeTheme

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

   toggleMode = !toggleMode; 

  // local var
  let darkNavbar = document.querySelector('.navbar');
  let darkNavbarHeading = document.querySelector('.navbar__heading');
  let darkNavbarLists = document.querySelector('.navbar__lists');
  let darkHTML = document.querySelector('#htmlCode');
  let darkCSS = document.querySelector('#cssCode');
  let darkJS = document.querySelector('#jsCode');
  let draggable = document.querySelector('.dragable');
  let darkHTMLSVG = document.querySelector('#html-svg');
  let darkCSSSVG = document.querySelector('#css-svg');
  let darkJSSVG = document.querySelector('#js-svg');
  
  if(toggleMode){
     changeColorDark(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG);
  }else{
     changeColorLight(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG);
  }  
 }

 // darkmode 

 function changeColorDark(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG){

   
   darkNavbar.classList.add('dark_navbar');
   darkNavbarHeading.classList.add('dark_heading');
   
   darkNavbarLists.classList.add('dark_navbar_lists');
   darkHTML.classList.add('dark_html-area');
   darkCSS.classList.add('dark_css-area');
   darkJS.classList.add('dark_js-area');
   draggable.classList.add('dark_dragable');
   darkHTMLSVG.classList.add('dark_refresh-svg');
   darkCSSSVG.classList.add('dark_refresh-svg');
   darkJSSVG.classList.add('dark_refresh-svg');
   
   darksvg.style.backgroundColor="rgb(39 46 56)";

   
 }

 // lightmode

 function changeColorLight(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG){
   
   darkNavbar.classList.remove('dark_navbar');
   darkNavbarHeading.classList.remove('dark_heading');
   
   darkNavbarLists.classList.remove('dark_navbar_lists');
   darkHTML.classList.remove('dark_html-area');
   darkCSS.classList.remove('dark_css-area');
   darkJS.classList.remove('dark_js-area');
   draggable.classList.remove('dark_dragable');
   darkHTMLSVG.classList.remove('dark_refresh-svg');
   darkCSSSVG.classList.remove('dark_refresh-svg');
   darkJSSVG.classList.remove('dark_refresh-svg'); 


   darksvg.style.backgroundColor="#ECECED";
 }