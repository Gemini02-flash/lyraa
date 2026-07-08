window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1200);

});

const typingText = "Hey Lyraa 👋";

let i = 0;

function typeWriter() {

    const heading = document.getElementById("typing");

    if (i < typingText.length) {

        heading.textContent += typingText.charAt(i);

        i++;

        setTimeout(typeWriter, 100);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 1300);

});
const startBtn = document.getElementById("startBtn");
const welcomeCard = document.getElementById("welcomeCard");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const finalScene = document.getElementById("finalScene");
const finalText = document.getElementById("finalText");
const finalSignature = document.getElementById("finalSignature");
const app = document.getElementById("app");
const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const finalMessage = `130 days ago...

I met someone
I thought I'd only tease. 😌

Then came Jackroo. 🎮

Then UNO. 🃏

Then random conversations.💬

Then weekends started feeling incomplete
without our games
and our random chatpati baatein.🤭

Some people become memories.🌙

Some become habits.🌸

And a very few...

become a beautiful part
of your everyday life.🤍

For me...

you became one of those people.
💞

🎂 Happy Birthday,

Rishika.💖

Thanks for making
these 130 days unforgettable.🥳

I hope today
you laugh a little louder,

smile a little more,✨

and overthink a little less.💫

Stay exactly the way you are.🌼

Aur haan...

Skylaaa...😆

Aaj birthday privilege hai.

Kal se...

"Kyun nahi ho para kya?" 😂🎮`;
function typeFinalMessage(text){

    finalText.textContent = "";
    finalText.classList.add("typing");

    let index = 0;

    function type(){

        if(index < text.length){

            finalText.textContent += text.charAt(index);

            const box = document.querySelector("#finalScene .glass");
            box.scrollTop = box.scrollHeight;

            index++;

            setTimeout(type,75);

        } else {

            finalSignature.style.display = "block";

            setTimeout(() => {

                finalSignature.style.opacity = "1";

                const box = document.querySelector("#finalScene .glass");
                box.scrollTop = box.scrollHeight;

            },300);

        }

    }

    type();

}
let currentScene = 1;
const totalScenes = 8;
function updateProgress(scene){
    progress.textContent =
        `${String(scene).padStart(2,"0")} / ${String(totalScenes).padStart(2,"0")}`;
}
function showScene(scene){

    updateProgress(scene);
    welcomeCard.classList.remove("fade-in");
void welcomeCard.offsetWidth;
welcomeCard.classList.add("fade-in");

title.classList.remove("text-pop");
subtitle.classList.remove("text-pop");

void title.offsetWidth;

title.classList.add("text-pop");
subtitle.classList.add("text-pop");

    if(scene===2){

        title.textContent = "💙 Today's Mission";

subtitle.textContent =
"Aaj ka mission simple hai...\n\n✔ Smile 😄\n✔ Enjoy 🥳\n✔ Overthinking ❌\n\nBas itna hi.";

startBtn.textContent = "Mission Accepted 🚀";

    }
else if(scene===3){

    title.textContent = "🏆Jackroo moments";

subtitle.textContent =
"Jackroo ki jeet acchi lagti hai...\n\nLekin usse bhi zyada maza tab aata hai jab jeetne ke baad sirf ek line bolne ka chance milta hai...\n\n😏 'Skylaa... kyun nahi ho para kya iss baar?'";

startBtn.textContent = "Rematch 🎮";

}

else if(scene===4){

    title.textContent = "🃏 UNO Investigation";

subtitle.textContent =
"UNO ki history ke mutabik...\nHar baar haarne wali ek hi suspect mili hai... 👀";

startBtn.textContent = "Objection! 😂";

}

else if(scene===5){

    title.textContent = "📂 Secret File";

subtitle.textContent =
"130 days pehle...\nEk unknown player mili thi...\nAur maine usse itna tease kiya ki shayad woh block bhi kar sakti thi. 😭";

startBtn.textContent = "Continue 😅";

}
else if(scene===6){

    title.textContent = "🌤 Plot Twist";

subtitle.textContent =
"Pata hi nahi chala...\nTeasing se daily conversations kab start ho gayi.";

startBtn.textContent = "True 💙";

}
else if(scene===7){

    title.textContent = "☀️ Best Part";

subtitle.textContent =
"Saturday...\nSunday...\nAfternoon games...\nRandom bakchodi...\nAur wahi sabse accha part ban gaya. 🤍";

startBtn.textContent = "Last One ✨";

}
else if(scene===8){

    title.textContent = " 💐Before You Go...";

subtitle.textContent =
"Before this little journey ends...\n\nI just wanted to say a few things.\n\nNothing fancy.\n\nJust something straight from the heart. ❤️";

startBtn.textContent = "Open My Letter 💌";

}
}
startBtn.addEventListener("click", () => {
    clickSound.currentTime = 0;
clickSound.play().catch(() => {});

if (navigator.vibrate) {
    navigator.vibrate(20);
}

if (bgMusic.paused) {

    bgMusic.volume = 0;

    bgMusic.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.01;

        if (volume >= 0.18) {

            volume = 0.18;

            clearInterval(fade);

        }

        bgMusic.volume = volume;

    }, 120);

}
 
    welcomeCard.classList.add("hide");

    setTimeout(() => {

        if(currentScene < 8){

            currentScene++;

            showScene(currentScene);

            welcomeCard.classList.remove("hide");

        } else {

            document.getElementById("scene1").style.display = "none";

            finalScene.classList.add("show");

            typeFinalMessage(finalMessage);

        }

    },700);

});

showScene(1);
