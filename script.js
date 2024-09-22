    //Initial Ratings
    const ratings = {
        sony: 4.7,
        samsung: 3.4,
        vizio: 2.3,
        panasonic: 3.6,
        phillips: 4.1
    }

    //Total Stars
    const starsTotal = 5;


    //Run getRating when dom loads
    document.addEventListener('DOMContentLoaded', getRatings)

    //Get ratings 
    function getRatings() {
      for(let rating in ratings) {
        //Get percenage
        const starPercentage = (ratings[rating] / starsTotal) *100;

        //Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        console.log(starPercentageRounded);
      }
    }
