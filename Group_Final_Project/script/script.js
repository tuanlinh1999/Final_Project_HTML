window.onload = function()
{
            
            document.getElementById('close').onclick = function(){
                document.getElementById('overlay').classList.toggle('showoverlay');
            }
            
            document.getElementById('registration').onclick = function(){
                document.getElementById('overlay').classList.toggle('showoverlay');
            }

            document.getElementById('submit').onclick = function(){
                alert("Thank You, Your Table has been registered..");
            }
};