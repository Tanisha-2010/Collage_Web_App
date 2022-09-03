var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();

function start() {
    document.getElementById("textbox").value = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var content = event.result[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    ///Project - 100
    if (content == "take my selfie") {
        speak();
    }
    speak();
}

///Project-99
function speak() {
    synth = window.speechSynthesis;
    speakData = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    webcam.attach(camera);
    ///Project-100
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 90,
});

camera = document.getElementById("camera");

///Project-100

function take_snapshot() {
    webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = "<img id='selfie' src='" + data_uri + "'>"
    });
}