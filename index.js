var base;
            var playPause = 0;   
            
            function playFunc(){
                
                playPause = playPause + 1;
                
                if(playPause === 1){   
                   play();                    
                    document.getElementById("play").classList.add("pause");                   
                    $("#animateCircle").addClass("addAnimation");
                    $("#animateCircle.addAnimation").css("animation-play-state","running");
                }else if(playPause === 2){
                    document.getElementById("play").classList.remove("pause");
                    $("#animateCircle").css("animation-play-state","paused");
                    playPause = 0;
                    stop();
                }
            }
            
            function play(){
                base = setInterval(timer, 10); //millisecond
            }
            
            function stop(){
                clearInterval(base);
            }
            
            //default value
            var millisecond = 0;
            var second = 0;
            var minute = 0;
            var hour = 0;
            
            //return value
            var millisecondValue = 0;
            var secondValue = 0;
            var minuteValue = 0;
            var hourValue = 0;
            
            function timer(){
                millisecondValue = updateTime(millisecond);
                secondValue = updateTime(second);
                minuteValue = updateTime(minute);
                hourValue = updateTime(hour);
                
                millisecond = ++millisecond;
                
                if(millisecond === 100){ //millisecond
                    millisecond = 0;
                    second = ++second;
                }
                if(second === 60){
                    second = 0;
                    minute = ++minute;
                }
                if(minute === 60){
                   minute = 0;
                    hour = ++hour;
                   }
                $("#millisecond").text(millisecondVal);
                $("#second").text(secondVal);
                $("#minute").text(minuteVal);
                $("#hour").text(hourVal);
            }
            
            //update time every second millisecond
            function updateTime(i){
                if(i < 10){
                    i = "0" + i;
                }
                return i;
            }
            
            function resetFunc(){
                
                millisecond = 0;
                second = 0;
                minute = 0;
                hour = 0;
                
                $("#millisecond").text("00");
                $("#second").text("00");
                $("#minute").text("00");
                $("#hour").text("00");
                
                if(!$("#play").hasClass("pause")){
                   $("#animateCircle").removeClass("addAnimation");
                   }else{
                       $("#animateCircle").removeClass("addAnimation");
                       setTimeout(function(){
                           $("#animateCircle").addClass("addAnimation");
                       }, 10);
                   }
            }
            
            function stopFunc(){
                clearInterval(base);
                resetFunc();
                
                if($("#play").hasClass("pause")){
                   $("#animateCircle").removeClass("addAnimation");
                    playFunc();
                   }
            }
            