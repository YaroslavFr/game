window.onload = function() {
document.onkeydown  = checkKeyDown;
        document.onkeyup  = checkKeyUp;
        let mainDuration = 1;
        let tl = gsap.timeline();
        let easeValue = "sine";
        let intViewportWidth = window.innerWidth;
        let windowCenter = intViewportWidth *0.5;
        let person = document.getElementById("person");
        document.body.style.backgroundPositionX = -1+'px';

        let tweenLegFirst = gsap.to("#legFirst", {
            keyframes:{
            "50%" : {
                rotation: 34,
                    x: -3,
                    y: 5, 
                },
            "75%" : {
                y: 0
            },
            "100%" : {
                rotation: -10,
                    x: 13,
                    y: 2, 
                }
            },
            ease: easeValue,
            duration: mainDuration
        });
        
        let tweenLegSecond = gsap.to("#legSecond", {
            keyframes:{
            "50%" : {
                rotation: -22,
                    x: 4,
                    y: -2, 
                },
            "75%" : {
                y: 5
            },
            "100%" : {
                    rotation: 24,
                    x: -14,
                    y: 3, 
                }
            },
            ease: easeValue,
            duration: mainDuration
        })

        tweenLegFirst.repeat(-1);
        tweenLegSecond.repeat(-1);

        function checkKeyUp(e){
            e = e || window.event;
            if (e.keyCode == '39' || e.keyCode == '68') {
                tweenLegFirst.pause(0);
                tweenLegSecond.pause(0);
            }
        }

        function checkKeyDown(e) {

            e = e || window.event;
            console.log(e.keyCode);
            if (e.keyCode == '38') {
                // up arrow
            }
            else if (e.keyCode == '40') {
                // down arrow
            }
            else if (e.keyCode == '37' || e.keyCode == '65') {  // left arrow 

                tweenLegFirst.play();
                tweenLegSecond.play();

                let tweenPerson = gsap.to(
                    "#person", 
                    {
                        x: "-=60",
                        ease: "none"
                    }
                )
            }else if (e.keyCode == '39' || e.keyCode == '68') {  // right arrow 

                tweenLegFirst.play();
                tweenLegSecond.play();

                let xpersonCoords = person.getBoundingClientRect().x;
                if(xpersonCoords <= windowCenter-330){  
                    let tweenPerson = gsap.to(
                        "#person", {
                            x: "+=60",
                            ease: "none"
                        }
                    )
                }else{
                    let bodyBGcurPos = parseInt(document.body.style.backgroundPositionX);
                    document.body.style.backgroundPositionX = bodyBGcurPos - 3+"px";
                }
            }
        }
    // идем вперед , если прибавлять + 20 до - 110, если по прежнему нажата клавиша возвращать
}