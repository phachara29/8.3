const images = [
    {
      src: "img/บทที่1.jpg",
      sound: "sound/บทที่1.mp3",
      text: [
        "ณ ป่าใหญ่แห่งหนึ่ง มีกระต่ายตัวหนึ่งมั่นใจในความเร็วของฝีเท้าตัวเองมาก",
        "และมักพูดโม้โอ้อวดว่าไม่มีใครเทียบเทียมได้",
        "จนวันหนึ่ง เจ้ากระต่ายได้พบกับเต่าที่กำลังเดินต้วมเตี้ยมผ่านมา",
        "เมื่อเห็นดังนั้น เจ้ากระต่ายก็หัวเราะเยาะและพูดล้อเลียนว่า",
        "นี่เจ้าเต่า มัวแต่เดินอืดอาดอย่างนี้ แล้วเมื่อไรจะถึงบ้านกันล่ะเนี่ย",
        "ต่อให้เจ้าเดินนำหน้าไปก่อนครึ่งวัน ข้ายังตามเจ้าทันเลย"
      ],
      textDuration: [6000, 3500, 6000, 4500, 5500, 4000]
    },
    // ข้อมูลบทอื่น ๆ 
];

const textContainer = document.getElementById("text-container");
const storyImage = document.getElementById("story-image");
let currentIndex = 0;
let audio = new Audio();

// ปิดการทำงานของปุ่มเมื่อเริ่มเรื่องราว
document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("start-button").disabled = true; // ปิดปุ่มเมื่อเริ่มเล่น
    showImageThenPlaySound(); // แสดงภาพก่อน แล้วเล่นเสียงหลังจากนั้น
});

// ฟังก์ชันแสดงภาพก่อน แล้วจึงเล่นเสียงและข้อความ
function showImageThenPlaySound() {
    if (currentIndex >= images.length) {
      textContainer.textContent = "เรื่องราวจบแล้ว!";
      return;
    }

    const currentItem = images[currentIndex];

    // หยุดเสียงถ้ามีเสียงเล่นอยู่
    audio.pause();
    audio.currentTime = 0;

    // โหลดและแสดงภาพ
    storyImage.src = currentItem.src;

    // ตั้งเวลาเพื่อให้ภาพแสดงก่อน (2 วินาทีหรือเวลาที่ต้องการ)
    setTimeout(() => {
        playStoryWithText(); // เริ่มเล่นเสียงและข้อความหลังจากแสดงภาพแล้ว
    }, 2000); // ปรับเวลาตามต้องการ (2 วินาทีในตัวอย่างนี้)
}

// ฟังก์ชันเล่นเสียงและแสดงข้อความทีละกลุ่ม
function playStoryWithText() {
    const currentItem = images[currentIndex];

    // โหลดเสียงและเล่น
    audio.src = currentItem.sound;
    audio.onplay = () => {
        textContainer.textContent = "";
        typeTextGroup(); // เริ่มแสดงข้อความเมื่อเสียงเล่น
    };

    audio.onended = () => {
        currentIndex++;
        showImageThenPlaySound(); // เรียกเพื่อแสดงภาพและเริ่มบทถัดไป
    };

    audio.play();

    // พิมพ์ข้อความทีละกลุ่ม
    let groupIndex = 0;
    function typeTextGroup() {
        if (groupIndex < currentItem.text.length) {
            textContainer.textContent = currentItem.text[groupIndex];
            setTimeout(() => {
                groupIndex++;
                typeTextGroup();
            }, currentItem.textDuration[groupIndex]);
        }
    }
}
