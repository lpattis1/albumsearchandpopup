const albums = document.querySelectorAll(".album");
const search = document.querySelector("#search");
const modal = document.querySelector(".modal");
const largeAlbum = document.querySelector(".large-album");
const largeAlbumText = document.querySelectorAll(".large-album-text");

const albumInfo = [
  {
    place: "one",
    title: "Brand New Eyes",
    description:
      "Brand New Eyes is the third studio album by American rock band Paramore, released on September 29, 2009, through Fueled by Ramen in the United States and Canada. The album was produced by Rob Cavallo and recorded in Hidden Hills, California from January to March 2009.",
  },

  {
    place: "two",
    title: "Oh, Inverted World",
    description:
      "Oh, Inverted World is the debut studio album by American indie rock band The Shins, released on June 19, 2001 to critical acclaim. Omnibus Records put out an initial run of vinyl distributed by Darla. Sub Pop Records reprinted the vinyl, but the Sub Pop logo only appears on later pressings.",
  },

  {
    place: "three",
    title: "Blue",
    description:
      "Blue is the second studio album by American rock band Third Eye Blind, released on November 23, 1999. The album's creation was difficult, namely due to power struggles and arguments between frontman Stephan Jenkins and lead guitarist Kevin Cadogan, leading to a quick but isolated recording experience between members.",
  },

  {
    place: "four",
    title: "The Queen Is Dead",
    description:
      "The Queen Is Dead is the third studio album by English rock band the Smiths. Released on 16 June 1986 in the United Kingdom by Rough Trade Records, and on 23 June 1986 in the US by Sire Records, it spent 22 weeks on the UK Albums Chart, peaking at number two.",
  },

  {
    place: "five",
    title: "Visions",
    description:
      "Visions is the third studio album by Canadian singer and songwriter Grimes, released on January 31, 2012. Her first since signing with 4AD, the album was recorded entirely on Apple's GarageBand software in Grimes' apartment over a three-week period.",
  },

  {
    place: "six",
    title: "Ten",
    description:
      "Ten is the debut studio album by American rock band Pearl Jam, released on August 27, 1991, through Epic Records. Following the dissolution of their previous band Mother Love Bone in 1990, bassist Jeff Ament and guitarist Stone Gossard began rehearsing with guitarist Mike McCready.",
  },

  {
    place: "seven",
    title: "No. 4",
    description:
      "No. 4 is the fourth studio album released by American rock band Stone Temple Pilots, released on October 26, 1999, by Atlantic Records. The album was a return to the band's earlier hard rock roots, while also blending elements of heavy metal, psychedelic rock, and alternative rock.",
  },

  {
    place: "eight",
    title: "Nevermind",
    description:
      "Nevermind is the second studio album by American rock band Nirvana, released on September 24, 1991 by DGC Records. Produced by Butch Vig, it was Nirvana's first release on the DGC label, as well as the first to feature drummer Dave Grohl.",
  },

  {
    place: "nine",
    title: "The Rising Tide",
    description:
      "The Rising Tide is the fourth and final studio album by American rock band Sunny Day Real Estate. Following the release of Live, the group left independent label Sub Pop for major label Time Bomb Recordings, and changed from a quartet to a trio.",
  },

  {
    place: "ten",
    title: "With Teeth",
    description:
      "With Teeth is the fourth studio album by American industrial rock band Nine Inch Nails, released by Nothing Records and Interscope Records on May 3, 2005. The album was produced by Nine Inch Nails frontman Trent Reznor and long-time collaborator Alan Moulder.",
  },

  {
    place: "eleven",
    title: "Among My Swan",
    description:
      "Among My Swan is the third studio album by American band Mazzy Star, released on October 29, 1996. Although Among My Swan did not contain any US Billboard Hot 100 hits like its predecessor, So Tonight That I Might See, this album garnered the band its highest-ranking single on the UK Singles Chart, when Flowers in December reached No. 40 in November 1996.",
  },

  {
    place: "twelve",
    title: "Purple Rain",
    description:
      "Purple Rain is the sixth studio album by American recording artist Prince, released on June 25, 1984, by Warner Bros. Records. The soundtrack to the 1984 film of the same name, it is the first album where his band the Revolution is billed.",
  },

  {
    place: "thirteen",
    title: "Kid A",
    description:
      "Kid A is the fourth studio album by the English rock band Radiohead, released on 2 October 2000 by Parlophone. It was recorded with producer Nigel Godrich in Paris, Copenhagen, Gloucestershire and their hometown Oxford, England.",
  },

  {
    place: "fourteen",
    title: "Rumors",
    description:
      "Rumours is the eleventh studio album by British-American rock band Fleetwood Mac, released on 4 February 1977 by Warner Bros. Records. Largely recorded in California in 1976, it was produced by the band with Ken Caillat and Richard Dashut.",
  },

  {
    place: "fifteen",
    title: "Bryter Layter",
    description:
      "Bryter Layter, recorded in 1970 and released in March 1971, is the second of three albums by British singer/songwriter Nick Drake.",
  },

  {
    place: "sixteen",
    title: "Jagged Little Pill",
    description:
      "Jagged Little Pill is the third studio album by Canadian singer Alanis Morissette, released on June 13, 1995, through Maverick. It was her first album to be released worldwide. It marked a stylistic departure from the dance-pop sound of her first two albums, Alanis and Now Is the Time.",
  },

  {
    place: "seventeen",
    title: "Surrealistic Pillow",
    description:
      "Surrealistic Pillow is the second album by the American rock band Jefferson Airplane, released by RCA Victor on February 1, 1967. It is the first album by the band with vocalist Grace Slick and drummer Spencer Dryden.",
  },

  {
    place: "eighteen",
    title: "The Clash",
    description:
      "The Clash is the self-titled debut studio album by English punk rock band the Clash. It was released on 8 April 1977 through CBS Records. Written and recorded over three weeks in February 1977 for £4,000, it would go on to rank as one of the greatest punk albums of all time.",
  },

  {
    place: "nineteen",
    title: "Lemonade",
    description:
      "Lemonade is the sixth solo studio album by American singer Beyoncé. It was released on April 23, 2016 by Parkwood Entertainment and Columbia Records, accompanied by a sixty-five-minute film of the same title on HBO.",
  },

  {
    place: "twenty",
    title: "Slowdive",
    description:
      "Slowdive is the fourth studio album by English rock band Slowdive. It was released on 5 May 2017 by the record label Dead Oceans. It is Slowdive's first studio album in 22 years, following Pygmalion (1995). It is also the band's first album since Souvlaki (1993) to feature Simon Scott as a member.",
  },

  {
    place: "twentyone",
    title: "The Stone Roses",
    description:
      "The Stone Roses is the debut studio album by English rock band the Stone Roses. It was recorded mostly at Battery Studios in London with producer John Leckie from June 1988 to February 1989 and released in May of that year by Silvertone Records.",
  },
];

function searchAlbums() {
  search.addEventListener("keyup", function (e) {
    let userSearch = e.target.value.toLowerCase();
    albums.forEach((album) => {
      let foundAlbum = album.children[1].textContent.toLowerCase();
      if (foundAlbum.indexOf(userSearch) === -1) {
        album.classList.add("hidden");
      } else {
        album.classList.remove("hidden");
        album.animate(
          [{ transform: "scale(0.5)" }, { transform: "scale(1)" }],
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
    });
  });
}

function openAlbum() {
  albums.forEach((album) => {
    album.addEventListener("click", function (e) {
      let albumAlt = album.children[0].getAttribute("alt");

      if (e.target) {
        modal.classList.add("open");
        largeAlbum.classList.add("enlarge");
        largeAlbum.style.background = `url(/img/${albumAlt}.jpg)`;
        albumInfo.forEach((info, idx) => {
          if (album.classList.contains(info.place)) {
            for (let i = 0; i < largeAlbumText.length; i++) {
              largeAlbumText[i].children[0].textContent = info.title;
              largeAlbumText[i].children[1].textContent = info.description;
            }
          }
        });
      }
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("open");
        largeAlbum.classList.remove("enlarge");
      }
    });
  });
}

searchAlbums();
openAlbum();
