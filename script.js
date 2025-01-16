const images = [
    { src: "/img/บทที่1.jpg", sound: "/sound/บทที่1.mp3", text: "" },
    { src: "/img/บทที่2.webp", sound: "/sound/บทที่2.mp3", text: "" },
    { src: "/img/บทที่3.jpg", sound: "/sound/บทที่3.mp3", text: ""},
    { src: "/img/บทที่4.jpg", sound: "/sound/บทที่4.mp3", text: ""},
    { src: "/img/บทที่5.jpg", sound: "/sound/บทที่5.mp3", text: ""},
    { src: "/img/บทสรุป1.jpg", sound: "/sound/บทสรุป1.mp3", text: ""},
    { src: "/img/ตอนจบ.jpg", sound: "/sound/บทสรุป2.mp3", text: ""},
    { src: "", sound: "", text: "จบเเล้วว...ขอบคุณที่รับชมค้าบบบ"}
];


let currentIndex = 0;
const storyImage = document.getElementById("story-image");
const descriptionText = document.querySelector(".description-text");

let audio = null

// ฟังก์ชันสำหรับแสดงรูป, ข้อความ และเล่นเสียง
function playStory() {
    const currentItem = images[currentIndex];
    storyImage.src = currentItem.src;
    descriptionText.textContent = currentItem.text;

    const audio = new Audio(currentItem.sound);
    audio.play()
        .then(() => {
            console.log("เสียงกำลังเล่น");
        })
        .catch((error) => {
            console.error("ไม่สามารถเล่นเสียงได้:", error);
        });

    audio.onended = () => {
        audio.pause();
        audio.currentTime = 0;
        currentIndex = (currentIndex + 1) % images.length;
        playStory();
    };
}

// เริ่มการเล่นเมื่อผู้ใช้คลิกปุ่ม
document.getElementById("start-button").addEventListener("click", () => {
    playStory(); // เริ่มเล่นเมื่อคลิกปุ่ม
});
