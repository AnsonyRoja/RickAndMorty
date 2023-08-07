

let myFavorites = [];


const postFav = (req, res) => {

    try {

        const character = req.body;

        const characterFound = myFavorites.find(fav => fav.id === character.id)

        if (characterFound) throw Error('This character exist');

        myFavorites.push(character);

        return res.status(200).json(myFavorites);



    } catch (error) {

        return res.status(400).send(error.message);

    }



}

const deleteFav = (req, res) => {

    const id = Number(req.params.id);

    myFavorites = myFavorites.filter((favorite) => favorite.id !== id);

    return res.status(200).json(myFavorites);

};





module.exports = {

    postFav,
    deleteFav

}