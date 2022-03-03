function Start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QuY3oOwxM/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        
        document.getElementById("h3_hear").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("h3_accuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("h3_hear").style.color = "rgb(" + r + " ," + g + " ," + b + ")";
        document.getElementById("h3_accuracy").style.color = "rgb(" + r + " ," + g + " ," + b + ")";

        img1 = document.getElementById("download.jpg");
        img2 = document.getElementById("depositphotos_43182117-stock-illustration-funny-cat-cartoon.jpg");
        img3 = document.getElementById("download (1).jpg");
        img4 = document.getElementById("download (2).jpg");
        img5 = document.getElementById("ear_1");

        if (results[0].label == "Barking") {
            img1.src = "download.jpg";
            img2.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img3.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img4.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img5.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        } else if (results[0].label == "Meowing") {
            img1.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img2.src = "depositphotos_43182117-stock-illustration-funny-cat-cartoon.jpg";
            img3.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img4.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img5.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        } else if (results[0].label == "Roar") {
            img1.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img2.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img3.src = "download (1).jpg";
            img4.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img5.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        } else if (results[0].label == "Mooing") {
            img1.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img2.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img3.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
            img4.src = "download (2).jpg";
            img5.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        } else {
         img1.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
         img2.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
         img3.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
         img4.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
         img5.src = "kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        }
    }
}