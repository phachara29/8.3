// ตัวแปรสำหรับเก็บข้อมูลภาพ เสียง และข้อความ
const images = [
    { src: "/img/บทที่1.jpg", sound: "/sound/บทที่1.mp3", text: "ข้อความบรรยายบทที่ 1" },
    // ... เพิ่มข้อมูลภาพ เสียง และข้อความอื่นๆ
  ];
  
  let currentIndex = 0;
  const storyImage = document.getElementById("story-image");
  const descriptionText = document.querySelector(".description-text");
  let audio = new Audio();
  
  // ฟังก์ชันสำหรับเล่นภาพและเสียง
  function playStory() {
    const currentItem = images[currentIndex];
    storyImage.src = currentItem.src;
    descriptionText.textContent = currentItem.text;
    audio.src = currentItem.sound;
    audio.play();
    // เพิ่มโค้ดสำหรับจัดการเมื่อเสียงจบ
  }
  
  // เริ่มเล่นเมื่อคลิกปุ่ม
  document.getElementById("start-button").addEventListener("click", playStory);
