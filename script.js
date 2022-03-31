let main = document.getElementById("main");

const api = "https://movie-fake-server.herokuapp.com/data ";
try {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return appendData(data);
    });
} catch {
  console.log(err);
}

const appendData = (arr) => {
  main.innerHTML = "";
  arr.map((e) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = e.image_url;

    let genre = document.createElement("p");
    genre.innerText = e.genre;

    let rating = document.createElement("p");
    rating.innerText = e.rating;

    let movie_name = document.createElement("p");
    movie_name.innerText = e.movie_name;

    let release_date = document.createElement("p");
    release_date.innerText = e.release_date;

    div.append(img, movie_name, genre, rating, release_date);
    main.append(div);
  });
};

function sortRating() {
  let selected = document.getElementById("sortRating").value;

  try {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (selected == "high") {
          data = data.sort((a, b) => b.rating - a.rating);
          appendData(data);
        } else if (selected == "low") {
          data = data.sort((a, b) => a.rating - b.rating);
          appendData(data);
        } else {
          appendData(data);
        }
      });
  } catch {
    console.log(err);
  }
}
function sortbyDate() {
  let selected = document.getElementById("sortbyDate").value;

  try {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (selected == "oldest") {
            data = data.sort((a, b) => new Date(a.release_date).setHours(0, 0, 0, 0) - new Date(b.release_date).setHours(0, 0, 0, 0))
          appendData(data);

        } else if (selected == "latest") {
            data = data.sort((a, b) => new Date(b.release_date).setHours(0, 0, 0, 0) - new Date(a.release_date).setHours(0, 0, 0, 0))
          appendData(data);

        } else {
          appendData(data);
        }
      });
  } catch {
    console.log(err);
  }
}

function filterGenre() {
  let selected = document.getElementById("filterGenre").value;
  try {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (selected == "drama") {
          data = data.filter((e) => e.genre == "Drama");
          appendData(data);
        } else if (selected == "adventure") {
          data = data.filter((e) => e.genre == "Adventure");
          appendData(data);
        } else if (selected == "comedy") {
          data = data.filter((e) => e.genre == "Comedy");
          appendData(data);
        } else if (selected == "thriller") {
          data = data.filter((e) => e.genre == "Thriller");
          appendData(data);
        } else if (selected == "documentary") {
          data = data.filter((e) => e.genre == "Documentary");
          appendData(data);
        } else {
          appendData(data);
        }
      });
  } catch {
    console.log(err);
  }
}
