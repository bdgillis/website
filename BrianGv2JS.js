

    var itemList = document.getElementsByTagName("LI");
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].className && itemList[i].className !== "subject") {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u2713");
            span.className = "complete";
            span.appendChild(txt);
            itemList[i].appendChild(span);
        }

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(txt);
        itemList[i].appendChild(span);
    }

    var remove = document.getElementsByClassName("remove");
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    function completed() {
        var complete = document.getElementsByClassName("complete");
        for (i = 0; i < complete.length; i++) {
            complete[i].onclick = function () {
                this.style.display = "none";
                var item = this.parentElement;
                item.className = "checked";
                startConfetti();
                window.scrollTo({
                    top: 600,
                    left: 0,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                }, 3000);


                var stop = document.createElement("SPAN");
                txt = document.createTextNode("Back to Work");
                stop.className = "stopConfetti";
                stop.appendChild(txt);
                item.appendChild(stop);

                endCelebrate();
            }
        }

    }

    function endCelebrate() {
        var endCelly = document.getElementsByClassName("stopConfetti");
        for (i = 0; i <= endCelly.length; i++) {
            endCelly[i].onclick = function () {
                stopConfetti();
                this.style.display = "none";
            }
        }
    }

    completed();


    function addTask() {

        var inputValue = document.getElementById("myInput").value;
        if (document.getElementById("date").value) {
            var date = document.getElementById("date").value;
            date = "2022," + date;
            var isDate = true;
            date = new Date(date);
            var today = new Date();
            var isMonth;

            if (date.getMonth() === today.getMonth()) {
                var daysUntil = date.getDate() - today.getDate();
                isMonth = true;
            } else {
                isMonth = false;
            }
        }

        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("date").style.display = "none";
            document.getElementById("addDateBtn").style.display = "inline";

            var li = document.createElement("li");
            var subjects = document.getElementsByTagName("UL");
            li.className = "task";
            document.getElementById("myInput").value = "";

            if (isDate) {
                if (isMonth) {
                    var span = document.createElement("SPAN");
                    var txt = document.createTextNode("" + (date.getMonth() + 1) + "/" + date.getDate() + " - " + daysUntil + " Days");
                } else {
                    var span = document.createElement("SPAN");
                    var txt = document.createTextNode("" + (date.getMonth() + 1) + "/" + date.getDate());
                }
                span.className = "dueDate";
                span.appendChild(txt);
                li.appendChild(span);
            }
            isDate = false;
            document.getElementById("date").value = "";


            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u2713");
            span.className = "complete";
            span.appendChild(txt);
            li.appendChild(span);

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "remove";
            span.appendChild(txt);
            li.appendChild(span);
            var display = ""

            if (inputValue.includes("131")) {
                var intent = inputValue.indexOf("131") + 3;
                display = inputValue.substring(0, intent - 3);
                var t = document.createTextNode(display);
                li.appendChild(t);
                for (const sub of subjects) {
                    if (sub.id === inputValue.substring(intent, inputValue.length)) {
                        sub.appendChild(li);
                    }
                }
            } else {
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                subjects[0].appendChild(li);
            }

            for (i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
        completed();


    }

    function addSubject() {
        var inputValue = document.getElementById("myInput").value;

        if (inputValue === '') {
            alert("You must write something!");
        } else {

            var ul = document.createElement("UL");
            ul.id = inputValue;
            document.getElementById("container").appendChild(ul);
            var li = document.createElement("li");
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById(inputValue).appendChild(li);

            document.getElementById("myInput").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "remove";
            span.appendChild(txt);
            li.appendChild(span);
            li.className = "subject";

            for (i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }

    }
    function typeDate() {
        document.getElementById("addDateBtn").style.display = "none";
        document.getElementById("date").style.display = "inline";
    }

    function dbox(msg) {
        if (msg != undefined) {
            document.getElementById("txt").innerHTML = msg;
            document.getElementById("txtBackground").classList.add("show");
        } else {
            document.getElementById("txtBackground").classList.remove("show");
        }
    }
    var recent;
    function nameFeeder() {
        var names = ["Tim", "Tabbs", "Sammy Rob", "Isaac", "Joe", "Mom", "Dad", "Maeve", "Paul", "Teresa", "Eshan"];
        var choice = Math.floor(Math.random() * names.length);
        recent = "name";
        
        dbox(names[choice]);
        if (names[choice] == "Tim") {
            dbox(names[choice] + "<br><br> That hits different doesn't it");
        }
    }
    function activity() {
        var activities = ["Read a chapter of Siddartha", "Touch grass", "read an article", "tap into your watch later on youtube", "Go sit in someone's room", "Journal", "Go to the Gym", "CoRec Basketball", "3v3 Baskeball outtside", "Yoga", "Go for a run", "play guitar"];
        var choice = Math.floor(Math.random() * activities.length);
        recent = "activity";

        dbox(activities[choice]);

    }
    function quote() {
        var quotes = ["I Guess thats better than a grave and a hearse <br><br>- Houndmouth","Anything but stop halfway, that was the most sensible course of all, not only in business, but anywhere at any time.<br><br> - franz Kafka", "Finish strong, Boston Strong, Brian strong. Neil Armstrong. <br><br> - Dad", "I get knocked down, but I get up again, You are never gonna keep me down <br><br> - Chumbawumba", "All of the stories, the hero gets lonely, Now is the time to show what you're made of<br><br>- Kid Cudi", "Tough times never last, only tough people<br><br> - Anonomous"];
        var choice = Math.floor(Math.random() * quotes.length);
        document.getElementById("close").innerHTML = "Let's Fucking Ride"
        recent = "quote";

        dbox(quotes[choice]);
    }

    function studySpot() {
        var studySpots = ["WALC (big room)", "Study room", "Krach", "Tony stark building", "Underground Library", "Krannert", "Stewart Library", "Lawson basement", "WALC empty room"];
        var choice = Math.floor(Math.random() * studySpots.length);
        recent = "study";

        dbox(studySpots[choice]);
    }

    function reshuffle() {
        switch (recent) {
            case "name" :
                nameFeeder();
                break;
            case "activity" :
                activity();
                break;
            case "quote" :
                quote();
                break;
            case "study" : 
                studySpot();
                break;
        }
    }
    var calendarShowing;
    var newIframe;

    function calendar() {
        
        const newIframe = document.createElement("iframe");
        //newIframe.innerHTML = "src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FIndiana%2FIndianapolis&mode=WEEK&showPrint=0&src=Z2lsbGlzYnJpYW5kQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679' style='border:solid 1px #777' width='1000' height='600' frameborder='0' scrolling='no'"
        newIframe.setAttribute("src","https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FIndiana%2FIndianapolis&mode=WEEK&showPrint=0&src=Z2lsbGlzYnJpYW5kQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679");
        newIframe.setAttribute("style", "border:solid 1px #777" );
        newIframe.setAttribute("width","1000" );
        newIframe.setAttribute("height","600" );
        newIframe.setAttribute("frameborder","0");
        newIframe.setAttribute("scrolling","no");
        newIframe.setAttribute("id", "calendar")
        document.getElementById("features").replaceWith(newIframe);
        
        var title = document.getElementById("showCalendar").textContent;
        console.log(title);

        if (title == "Show Calendar") {
            title = "Hide Calendar";
        }
        //document.getElementById("container").appendChild(newIframe);
    }

