let htmlCode = document.getElementById("htmlCode");
let cssCode = document.getElementById("cssCode");
let jsCode = document.getElementById("jsCode");
let iframe = document.getElementById("preview-window");
let darksvg = document.querySelector(".navbar__darkmode")

let lists = document.querySelector('.navbar__lists li');

let toggleMode=true;   // darkmode and lightmode

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
   
    changeConsoleStatus(status_checker(jsCode.value));
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

 // Window ONLOAD

 window.onload=()=>{

   
    var L_html='',L_css,L_js;
    var TOGGLE;
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
    if(localStorage.getItem(`${key}TOGGLE`)){
      TOGGLE = localStorage.getItem(`${key}TOGGLE`);
      toggleMode = TOGGLE;
      // console.log(toggleMode);
      TOGGLEDARKMODE(TOGGLE);
    }

    L_html =L_html;
    L_css = "<style>"+L_css+"</style>";
    L_js = "<script>"+L_js+"</script>";

    var frame = iframe.contentWindow.document;
    
    frame.open();
    frame.write(L_html+L_css+L_js);
    frame.close();
 }

 // changeTheme

 const changeTheme = () =>{

    
    toggleMode = !toggleMode; 
    localStorage.setItem(`${key}TOGGLE`,toggleMode);
   
   TOGGLEDARKMODE(toggleMode);
 
 }

 // DARKMODE VARIABLE 

 function TOGGLEDARKMODE(toggleEle){

   if(toggleEle)
   {
       darksvg.src = "static/lightmode.svg"
       darksvg.alt = "light"
   }
   else
   {
       darksvg.src = "static/darkmode.svg"
       darksvg.alt = "dark"
   }
   
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
      let darkSetting = document.querySelector('#navbar__setting_svg');

      if(toggleEle){
         changeColorDark(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG,darkSetting);
      }else{
         changeColorLight(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG,darkSetting);
      }  
 }

 // darkmode 

 function changeColorDark(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG,darkSetting){

   
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
   darkSetting.classList.add('darkNavbar__setting')
   
   darksvg.style.backgroundColor="rgb(39 46 56)";
   
 }

 // lightmode

 function changeColorLight(darkNavbar,darkNavbarHeading,darkNavbarLists,darkHTML,darkCSS,darkJS,draggable,darkHTMLSVG,darkCSSSVG,darkJSSVG,darkSetting){
   
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
   darkSetting.classList.remove('darkNavbar__setting')


   darksvg.style.backgroundColor="#ECECED";
 }

 //Expanded Console

 let consoleToggle = false;

 function expanded(){
   
   let Expandpreview = document.querySelector('.preview-area');
   let ExpandConsole = document.querySelector('.console');
   let ExpandInner = document.querySelector('.console__inner');
   
   consoleToggle = !consoleToggle;
   if(consoleToggle){
      Expandpreview.classList.add('expanded__preview-area');
      ExpandConsole.classList.add('expanded__console');
      ExpandInner.classList.remove('hidden');
      // showConsoleValue();
   }else{
      
      Expandpreview.classList.remove('expanded__preview-area');
      ExpandConsole.classList.remove('expanded__console');
      ExpandInner.classList.add('hidden');   
   }

 }


// Setting toggle
let ToggleSetting=false;
function ToggleSettingfunction(){
   ToggleSetting=!ToggleSetting;
   let modal = document.querySelector('#modal');
   let body = document.querySelector('.Body');
   let navbar = document.querySelector('.navbar')

   if(ToggleSetting){
      YesToggleSetting(modal,body,navbar);
   }
   else{
      NoToggleSetting(modal,body,navbar);
   }

}

function YesToggleSetting(modal,body,navbar){
   modal.classList.add('modal');
   body.style.opacity='0.7';
   navbar.style.opacity='0.7';
   
}
function NoToggleSetting(modal,body,navbar){
   modal.classList.remove('modal');
   body.style.opacity='1';
   navbar.style.opacity='1';
   
}

function RemoveToggleSetting(){
   let modal = document.querySelector('#modal');
   let body = document.querySelector('.Body');
   let navbar = document.querySelector('.navbar')
   
   if(ToggleSetting){
      NoToggleSetting(modal,body,navbar);
      
   }
   ToggleSetting=false;
}


function SaveSettings(){
   let html = document.querySelector('#htmlCode');
   let css = document.querySelector('#cssCode');
   let js = document.querySelector('#jsCode');
   
   let settingFont = document.querySelector('#modal__setting__font');

   html.style.fontSize=`${settingFont.value}px`;
   css.style.fontSize=`${settingFont.value}px`;
   js.style.fontSize=`${settingFont.value}px`;
   
}

// Console log
const consoleInput = document.querySelector(".console__Inputzone input");
const historyContainer = document.querySelector(".console__Scrollzone");

function addResult(inputAsString, output){
   const outputAsString = output instanceof Array ? `[${output.join(", ")}]` : output.toString();
  const inputLogElement = document.createElement("p");
  const outputLogElement = document.createElement("p");

  inputLogElement.classList.add("console-inputLog");
  outputLogElement.classList.add("console-outputLog");

  inputLogElement.textContent = `> ${inputAsString}`;
  outputLogElement.textContent = outputAsString;

  historyContainer.append(inputLogElement, outputLogElement);
}

consoleInput.addEventListener("keyup", (e) => {
   const code = consoleInput.value.trim();
 
   if (code.length === 0) {
     return;
   }
 
   if (e.key === "Enter") {
     try {
       addResult(code, eval(code));
     } catch (err) {
       addResult(code, err);
     }
 
     consoleInput.value = "";
     historyContainer.scrollTop = historyContainer.scrollHeight;
   }
 });
 function status_checker(exp){
   //  console.log("Inside -> status_checker");
    let ans=true;
    try{
      eval(exp);
    }catch(e){
      ans=false;
    }
    return ans;
 }
 function changeConsoleStatus(satus){
   // console.log("Inside -> changeConsoleStatus");
    let statt=document.querySelector('.console--statusP');
    if(satus==true)statt.textContent="OK";
    else statt.innerHTML="Error"
 }