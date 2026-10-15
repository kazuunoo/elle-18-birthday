
/* =========================================
   100 REASONS — MADE FOR ELLE ♡
========================================= */

const reasons = [
  "Because you're genuinely kind. Like, naturally kind. Hindi yung kailangan mo pang pilitin sarili mo maging nice sa tao, natural kalang na mabait.",

  "Because your heart is so pure.",

  "Because you care about people so deeply.",

  "Because you always think about other people's feelings.",

  "Because you give so much of yourself to the people you love.",

  "Because kahit ikaw yung nahihirapan, you still try your best to show up for other people.",

  "Because you're so considerate na minsan ikaw pa yung unang nagtatanong kung ano yung nagawa mong mali kapag may gumawa sayo ng masama 😭✌️",

  "Because you have so much empathy for people.",

  "Because you don't need to be super close to someone to treat them kindly.",

  "Because kahit introvert ka, you somehow get along with people so naturally.",

  "Because you make people feel comfortable without even trying.",

  "Because your presence itself is comforting.",

  "Because being around you feels so easy.",

  "Because you have this softness about you that I genuinely love.",

  "Because you're so down-to-earth.",

  "Because you don't seem to realize how amazing you actually are.",

  "Because you're humble kahit ang dami mong reasons to be proud of yourself.",

  "Because you remember the kindness people give you.",

  "Because you genuinely value the people you care about.",

  "Because you have one of the most beautiful hearts I've ever gotten to know.",

  "Because you're smart as hell.",

  "Because hindi kalang matalino like you actually know how to explain things.",

  "Because you're literally my favorite review buddy.",

  "Because you would explain the lesson to me before a quiz kahit sa utak ko bagsak na ako 💔",

  "Because you somehow make complicated things make sense.",

  "Because you care about doing well.",

  "Because you're determined.",

  "Because you genuinely want to succeed.",

  "Because I know how much your family means to you.",

  "Because I admire how much you care about your mother.",

  "Because you want to succeed not just for yourself, but for the people you love.",

  "Because even when life gets difficult, you still try.",

  "Because you keep finding reasons to move forward.",

  "Because you're stronger than you give yourself credit for.",

  "Because you've gone through things that could've made you bitter, pero somehow you still have so much kindness in you 😞",

  "Because you don't let your struggles completely take away your softness.",

  "Because you're creative.",

  "Because you're artistic.",

  "Because I love seeing the way your creativity comes out in the things you do.",

  "Because your handwriting is literally a fucking canva font like teh prinint mo ba yan 🥀",

  "Because your voice is so soft-spoken and soothing.",

  "Because I swear it's impossible to be stressed around you when you're talking.",

  "Because you're funny in your own very specific Elle way.",

  "Because sometimes you say things so casually and somehow they're the funniest thing I've ever heard.",

  "Because humor is one of the ways you make difficult things feel lighter.",

  "Because I understand that sometimes joking around is your way of opening up.",

  "Because whatever way you choose to open up, I'll always hear you out.",

  "Because you're so adorable that sometimes I genuinely just want to go GRRRRRR.",

  "Because you're cute when you're excited about something.",

  "Because you're cute when you're passionate about something.",

  "Because you can be so shy at first and then boom suddenly have 500 stories to tell me.",

  "Because \"Teh andami ko kwento sayo\" is still one of my favorite things you've ever said.",

  "Because you somehow manage to be soft and strong at the same time.",

  "Because you care so much even when you pretend you don't.",

  "Because your \"wala akong pake\" moments are sometimes very obviously you caring ALLAT 😭",

  "Because you have this very specific way of expressing yourself that is just... you.",

  "Because you make even ordinary conversations memorable.",

  "Because you make people feel listened to.",

  "Because you notice details about people.",

  "Because you notice details about me.",

  "Because you're fucking pretty duh😋",

  "Because you don't even realize how pretty you are (humble asf)",

  "Because I genuinely wish you could see yourself the way I see you.",

  "Because your style is so pretty.",

  "Because you always manage to make your outfits look so you.",

  "Because I love your makeup even though I already know you're going to disagree with me.",

  "Because your contacts suit you SO WELL. It's giving natural eye color 😝",

  "Because your face has absolutely no business being that pretty.",

  "Because you have the kind of beauty that gets even prettier once someone gets to know your personality.",

  "Because you're beautiful inside and out.",

  "Because if there were actually a goddess walking around somewhere, I genuinely wouldn't be surprised if it were you.",

  "Because actually, never mind...you are my goddess (le is git yan teh mamatay man text man)",

  "Because you have the looks.",

  "Because you have the brains.",

  "Because you have the heart.",

  "Because one of my favorite memories of you is literally just us being review buddies.",

  "Because sitting in front of you somehow became one of the reasons I got to know you better.",

  "Because you explaining lessons to me before quizzes is a memory I genuinely treasure.",

  "Because you made studying feel less stressful.",

  "Because our friendship started from something so simple.",

  "Because I still remember the first time you called me \"beauty with brains.\"",

  "Because we barely even knew each other when you said that 😭✌️",

  "Because my first impression of you was already that you had a genuinely kind heart.",

  "Because looking back, I was actually right about you.",

  "Because even when we weren't close yet, you still showed me kindness.",

  "Because when I wasn't doing okay, you didn't make me feel bad for struggling.",

  "Because you reassured me instead of telling me I just needed to toughen up.",

  "Because even when I wasn't at school anymore, you still sometimes messaged me just to ask how I was.",

  "Because those little messages made me feel remembered when I really needed it.",

  "Because our legendary sleepover aka \"therapy session\" exists 😞❤️‍🩹",

  "Because we didn't even have to do anything during that sleepover. We just sat there, listened to each other, and somehow that was enough.",

  "Because I felt safe opening up to you.",

  "Because even though we weren't the closest friends yet, I didn't have that usual fear of being judged when I talked to you.",

  "Because you made me realize that friendship can actually feel safe.",

  "Because you were the first friend who made me feel loved in the way I've always yearned to be loved.",

  "Because you actually see me as a person, not just as a friend.",

  "Because you became the kind of friend I used to wish I had.",

  "Because somewhere along the way, you became one of my favorite people in the entire world.",

  "Because I want to be there for you the way you've been there for me.",

  "Because you're Elle."
];

// Keep track of letters opened during this visit.
const openedReasons = new Set();

const grid = document.getElementById("envelopes-grid");
const overlay = document.getElementById("letter-overlay");
const closeButton = document.getElementById("close-letter");
const doneButton = document.getElementById("letter-done");
const numberLabel = document.getElementById("letter-number");
const message = document.getElementById("letter-message");
const openedCount = document.getElementById("opened-count");
const counterNote = document.getElementById("counter-note");

let lastFocusedEnvelope = null;

function updateCounter() {
  const count = openedReasons.size;

  openedCount.textContent = count;

  if (count === 100) {
    counterNote.textContent = "you opened every little letter ♡";
  } else if (count === 0) {
    counterNote.textContent = "take your time, birthday girl ♡";
  } else {
    counterNote.textContent = "every letter is a little piece of love ♡";
  }
}

function closeLetter() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedEnvelope) {
    lastFocusedEnvelope.focus();
  }
}

function openLetter(index, envelope) {
  lastFocusedEnvelope = envelope;

  numberLabel.textContent =
    `LETTER NO. ${String(index + 1).padStart(3, "0")}`;

  message.textContent = reasons[index];

  if (!openedReasons.has(index)) {
    openedReasons.add(index);
    envelope.classList.add("opened");
    envelope.setAttribute("aria-label",
      `Reason ${index + 1}, already opened`);
    envelope.setAttribute("aria-pressed", "true");
    updateCounter();
  }

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  closeButton.focus();
}

function createEnvelopes() {
  const fragment = document.createDocumentFragment();

  reasons.forEach((reason, index) => {
    const envelope = document.createElement("button");

    envelope.type = "button";
    envelope.className = "envelope";
    envelope.setAttribute(
      "aria-label",
      `Open reason ${String(index + 1).padStart(3, "0")}`
    );
    envelope.setAttribute("aria-pressed", "false");

    const number = document.createElement("span");
    number.className = "envelope-number";
    number.textContent = String(index + 1).padStart(3, "0");

    const heart = document.createElement("span");
    heart.className = "envelope-heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♡";

    envelope.append(number, heart);

    envelope.addEventListener("click", () => {
      openLetter(index, envelope);
    });

    fragment.appendChild(envelope);
  });

  grid.appendChild(fragment);
}

closeButton.addEventListener("click", closeLetter);
doneButton.addEventListener("click", closeLetter);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeLetter();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    overlay.classList.contains("active")
  ) {
    closeLetter();
  }
});

createEnvelopes();
updateCounter();
