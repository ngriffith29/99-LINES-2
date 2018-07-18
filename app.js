



document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("BUTTON")
    let btnText = document.createTextNode("SING!!!!!!!!")
    document.body.appendChild(btnText)
    button.appendChild(btnText)
    document.body.appendChild(button)
    let friends = ['Isaac', 'Clay', 'Dave', 'Ava', 'Erica']
    // buttonFunctionsToTrigger99Lines
    button.addEventListener('click', function (){
        fiveDivs()
    })
    //
    function fiveDivs() {
        for (let i = 0; i < friends.length; i++) {
            let div = document.createElement("DIV")
            div.className = (`${friends[i]}`)
            document.body.appendChild(div)
            let h3 = document.createElement("h3")
            let h3T = document.createTextNode(`${friends[i]}`)
            h3.appendChild(h3T)
            document.body.appendChild(h3)
            for (init=99; init>0; init--){

                if (init>1){
                    let p1 = document.createElement("p")
                    let p1t = document.createTextNode(`${init} lines of code in the file, ${init} lines of code; ${friends[i]} strikes out, clears it all out ${init - 1} lines of code in the file`)
                    document.body.appendChild(p1)
                    p1.appendChild(p1t)
                    p1.className=(`${friends[i]}`)
                } else {
                    let p2 = document.createElement("p")
                    let p2t = document.createTextNode(`${init} line of code in the file ${init} line of code; ${friends[i]} strikes out clears it all out, no more lines of code in the file`)
                    document.body.appendChild(p2)
                    p2.appendChild(p2t)
                    p2.className=(`${friends[i]}`)
                }
            }
        }
    }
















})

































