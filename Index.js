var characterArr = [
  {
    href: "#",
    title: "Eren Jaeger (Anime)",
    alt: "Eren Jaeger",
    src: "./Charlogo11.png",
  },
  {
    href: "#",
    title: "Mikasa Ackermen(Anime)",
    alt: "Mikasa Ackermen",
    src: "./Charlogo8.png",
  },
  {
    href: "#",
    title: "Armin Arlelt (Anime)",
    alt: "Armin Arlelt",
    src: "./Charlogo1.png",
  },
  {
    href: "#",
    title: "Conny Springer (Anime)",
    alt: "Conny Springer",
    src: "./Charlogo2.png",
  },
  {
    href: "#",
    title: "Historia Reiss (Anime)",
    alt: "Historia Reiss",
    src: "./Charlogo5.png",
  },
  {
    href: "#",
    title: "Jean Kirschtein (Anime)",
    alt: "Jean Kirschtein",
    src: "./Charlogo6.png",
  },
  {
    href: "#",
    title: "Reiner Braun (Anime)",
    alt: "Reiner Braun",
    src: "./Charlogo9.png",
  },
  {
    href: "#",
    title: "Hange Zoë (Anime)",
    alt: "Hange Zoë",
    src: "./Charlogo4.png",
  },
  {
    href: "#",
    title: "Levi Ackermen (Anime)",
    alt: "Levi Ackermen",
    src: "./Charlogo7.png",
  },
  {
    href: "#",
    title: "Falco Grice (Anime)",
    alt: "Falco Grice",
    src: "./Charlogo13.png",
  },
  {
    href: "#",
    title: "Zeke Jaeger (Anime)",
    alt: "Zeke Jaeger",
    src: "./Charlogo10.png",
  },
  {
    href: "#",
    title: "Gabi Braun (Anime)",
    alt: "Gabi Braun",
    src: "./Charlogo14.png",
  },
  {
    href: "#",
    title: "Pieck Finger (Anime)",
    alt: "Pieck Finger",
    src: "./Charlogo15.png",
  },
  {
    href: "#",
    title: "Porco Galliard (Anime)",
    alt: "Porco Galliard",
    src: "./Charlogo16.png",
  },
  {
    href: "#",
    title: "Colt Grice (Anime)",
    alt: "Colt Grice",
    src: "./Charlogo12.png",
  },
  {
    href: "#",
    title: "Erwin Smith (Anime)",
    alt: "Erwin Smith",
    src: "./Charlogo20.png",
  },
  {
    href: "#",
    title: "Sasha Braun (Anime)",
    alt: "Sasha Braun",
    src: "./Charlogo17.png",
  },
];

var charContainer = document.getElementById("charContainer");
characterArr.forEach((item, index) => {
  let div = document.createElement("div");
  div.className = "d-inline-block position-relative";

  let a = document.createElement("a");
  a.href = item.href;
  a.title = item.title;

  let img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  let p = document.createElement("p");
  p.innerHTML = item.alt;
  p.className = "CharTitle m-0";
  a.appendChild(img);
  div.appendChild(a);
  div.appendChild(p);
  charContainer.appendChild(div);
});
