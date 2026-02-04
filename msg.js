$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

// jhjhjhjhjh
$(document).ready(function () {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");

  // ලියුම විවෘත කිරීම
  btn_open.click(function () {
    envelope.addClass("open").removeClass("close");
  });

  // ලියුම වසා දැමීම
  btn_reset.click(function () {
    envelope.addClass("close").removeClass("open");
  });

  // Emojis ජනනය කිරීමේ function එක
  function createHeart() {
    const emojis = ["❤️", "💗"];
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    const duration = Math.random() * 3 + 4 + "s";
    heart.style.animationDuration = duration;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }

  // සෑම තත්පර 0.4 කට වරක් හාර්ට් එකක් සාදයි
  setInterval(createHeart, 400);
});
