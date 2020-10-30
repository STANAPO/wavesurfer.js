/*
 * @Describle:
 * @Author: Stan <stan4cy@gmail.com>
 * @Date: 2020-10-29 17:19:03
 * @LastEditors: Stan
 * @LastEditTime: 2020-10-30 13:47:24
 */
"use strict";

var wavesurfer;

// Init & load
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        container: "#waveform",
        waveColor: "violet",
        progressColor: "purple",
        loaderColor: "purple",
        cursorColor: "navy",
        height: 84,
        responsive: true
    };

    if (location.search.match("scroll")) {
        options.minPxPerSec = 100;
        options.scrollParent = true;
    }

    if (location.search.match("normalize")) {
        options.normalize = true;
    }

    // Init wavesurfer
    wavesurfer = WaveSurfer.create(options);

    (function callJS(message) {
        message === "true" && wavesurfer.playPause();
    })();

    /* Progress bar */
    // (function() {
    // var progressDiv = document.querySelector("#progress-bar");
    // var progressBar = progressDiv.querySelector(".progress-bar");
    // var showProgress = function(percent) {
    //     progressDiv.style.display = "block";
    //     progressBar.style.width = percent + "%";
    // };
    // var hideProgress = function() {
    //     progressDiv.style.display = "none";
    // };
    // wavesurfer.on("loading", showProgress);
    // wavesurfer.on("ready", hideProgress);
    // wavesurfer.on("destroy", hideProgress);
    // wavesurfer.on("error", hideProgress);
    // })();

    wavesurfer.load("../media/demo.wav");
});
