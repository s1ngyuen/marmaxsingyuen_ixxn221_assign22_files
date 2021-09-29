var ComplaintTitle = document.getElementById("complaint-title");
var Complaint1 = document.getElementById("complaint-page-1");
var Complaint2 = document.getElementById("complaint-page-2");

function Complaint1Forward() {
    Complaint1.style.display = "none";
    Complaint2.style.display = "grid";
    ComplaintTitle.innerHTML = "COMPLAINT RECIEVED";
}