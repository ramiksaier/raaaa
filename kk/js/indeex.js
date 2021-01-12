//console.log("testing");
let plus =(document.querySelectorAll(".plus"));
let plus1 = document.querySelectorAll(".plus1");
let imagesf = document.querySelectorAll(".image3");
let qte = document.getElementsByClassName("qte");
let plus3 = document.querySelectorAll(".plus3");
let qte3 = document.getElementsByClassName("qte3");
let qte2=document.getElementsByClassName("qte2");
let pri= document.getElementById("prix");
let image =Array.from(document.querySelectorAll(".image"));
let price= document.getElementById("price-total");
let btnprice=document.getElementById("bprice");
let del= Array.from(document.querySelectorAll(".btn-dark"));
let sup=Array.from(document.querySelectorAll(".col-lg-4"));
let coulmn1 = document.querySelector(".sec1");
let favs = Array.from(document.querySelectorAll(".fa-grin-hearts"))




console.log(image);
console.log(btnprice);
console.log(del,"hello rami");



//changer le couleur en noir et en rouge 
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}

//add bouton 1
let result=100;
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {

        qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
        result+=100;
        document.getElementById("prix-quantite").value=result;
        
    });

    }

    //add bouton2
    let result2=150;
    for (let i = 0; i < plus1.length; i++) {
        plus1[i].addEventListener("click", function () {
    
         qte2[i].innerHTML = Number(qte2[i].innerHTML) + 1;
           result2+=150;
        document.getElementById("prix-quantite2").value=result2;
            
            
        });
    
        }
//add bouton3
        let result3=200;
    for (let i = 0; i < plus3.length; i++) {
        plus3[i].addEventListener("click", function () {
    
            qte3[i].innerHTML = Number(qte3[i].innerHTML) + 1;
            result3+=200;
        document.getElementById("prix-quantite3").value=result3;
            
            
        });
     //moin1
        }
    let moin = document.querySelectorAll(".moin");
    for (let i = 0; i < moin.length; i++) {
        moin[i].addEventListener("click", function () {
    
            if (qte[i].innerHTML>1) {
           
                qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
                result-=100;
        document.getElementById("prix-quantite").value=result;
            }
            else {
alert("il nya pas un panier negative")     }});
    
        }

        //moin 2
        let moin2 = document.querySelectorAll(".moin2");
        for (let i = 0; i < moin2.length; i++) {
            moin2[i].addEventListener("click", function () {
        
                if (qte2[i].innerHTML>1) {
               
                    qte2[i].innerHTML = Number(qte2[i].innerHTML) - 1;
                    result2-=150;
            document.getElementById("prix-quantite2").value=result2;
                }
                else {
    alert("il nya pas un panier negative")     }});
        
            }

            //moin3
            let moin3 = document.querySelectorAll(".moin3");
            for (let i = 0; i < moin3.length; i++) {
                moin3[i].addEventListener("click", function () {
            
                    if (qte3[i].innerHTML>1) {
                   
                        qte3[i].innerHTML = Number(qte3[i].innerHTML) - 1;
                        result3-=200;
                document.getElementById("prix-quantite3").value=result3;
                    }
                    else {
        alert("il nya pas un panier negative")     }});
                    }

                    //resultat final
                    resfinal=0;
                     document.getElementById("prix-quantite2").value=result2
                    document.getElementById("prix-quantite").value=result
                      document.getElementById("prix-quantite3").value=result3
                        btnprice.addEventListener("click", function () {

                     resfinal=result3+result+result2 +" Dinars ";
                     document.getElementById("price-total").value=resfinal;

                        });
                    
                        //bouton delete 
                        for (let i in del) {
                            del[i].addEventListener("click", function () {
                                del[i].parentNode.parentNode.remove()
                                //sup[i].remove()
                               
                            })
                        }
                        
  



                    
