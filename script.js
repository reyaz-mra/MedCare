        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }


        function navRemove(){
            menu.click();
        }
/*
function heart(){
            document.getElementsById("diabetes-detail").style.display = "none";
            
            

        }
        function diabetes(){
            document.getElementsById("heart-detail").style.display = "none";


        }
*/ 
        function heart(){
            document.getElementById("diabetes-detail").style.display = "none";
            document.getElementById("heart-detail").style.display = "flex";
            document.getElementById("diabetes-btn").style.backgroundColor = "white";
            document.getElementById("heart-btn").style.backgroundColor = "rgb(53, 188, 255)";            
        }
        function diabetes(){
            document.getElementById("heart-detail").style.display = "none";
            document.getElementById("diabetes-detail").style.display = "flex";
            document.getElementById("heart-btn").style.backgroundColor = "white";
            document.getElementById("diabetes-btn").style.backgroundColor = "rgb(53, 188, 255)";   
        }


        function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 110;

                if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                } else {
                reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);





