const Tanya = {
    id: "1",
    name: "Tanya Sinclair",
    job: "UX Designer",
    img_url: "/img/image-tanya.jpg",
    quote: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "
}

const John = {
    id: "2",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img_url: "/img/image-john.jpg",
    quote: " If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a profesionnal developer. "
}


function loadStudent(student) {
    $("img").attr("src", student.img_url);
    $(".name").text(student.name);
    $(".job").text(student.job);
    $(".quote").text(student.quote);
    /*     document.getElementsByTagName("img").src = student.img_url;
        document.getElementsByClassName("name")[0].innerText = student.name;
        document.getElementsByClassName("job")[0].innerText = student.job;
        document.getElementsByClassName("quote")[0].innerText = student.job; */
}

$(document).ready(function() {

    //On click on previous
    $(".previous").click(function() {
        if ($(".name").text() == "John Tarkpor") {
            loadStudent(Tanya)
        } else {
            loadStudent(John)
        }
    });

    //On click on next
    $(".next").click(function() {
        console.log("Next");
        if ($(".name").text() == "John Tarkpor") {
            loadStudent(Tanya)
        } else {
            loadStudent(John)
        }
    });

    //Handle change with key arrows
    $(document).keydown(function(e) {
        if (e.keyCode == 39)  {
            $(".next").click();
        } else if (e.keyCode == 37) {
            $(".previous").click();
        }

    });

});