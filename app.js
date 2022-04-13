const randomColor = document.querySelector(".random-color");
const textColor = document.querySelector(".text-color");
const audiobtn = document.querySelector('.audio')
const audio = document.querySelector('#audio')
const count = '0'



randomColor.addEventListener("click", () => {
    const values = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      
      function randomColour() {
        let sign = "#";
      
        for (let i = 0; i < 6; i++) {
          const random = Math.floor(Math.random() * values.length);
          const color = values[random];
          sign += color;
        }
      
        return sign;
      }
      


      let color1 = randomColour();
      let color2 = randomColour();
      
      const deg = Math.floor(Math.random() * 360);

  document.querySelector(
    "body"
  ).style.background = `linear-gradient(${deg}deg, ${color1}, ${color2})`;

  textColor.innerHTML = `linear-gradient(${deg}deg, ${color1}, ${color2})`
});



