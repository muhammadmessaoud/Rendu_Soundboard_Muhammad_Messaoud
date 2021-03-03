
export function brief() {
    
document.addEventListener('keydown', maFonction ) //window.addEventListener

function maFonction(event){
    
      let code = event.keyCode;
     // let tabKey = [65,90,69,82,84,89,85,73,79]; 
     // tabKey.includes(code) ? play(code) : "";
      

       switch (code) {
            case 65: 
            case 90:
            case 69:
            case 82:
            case 84:
            case 89:
            case 85:
            case 73:
            case 79:
            play(code);
                  break;
            default:
                  break;
      } 
}

function play(code) {
      let son = document.getElementById(code);
      son.load();
      son.play();
      console.log(son.previousElementSibling);
      son.previousElementSibling.classList.add("sound-active");
      son.addEventListener("ended", (event)=>{
        son.previousElementSibling.classList.remove("sound-active")
      }
      )
}


}
