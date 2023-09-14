let sauceSchema = new mongoose.Schema
({
    userId : { type : String },
    name : {type : String },
    manufacturer : {type : String },
    description : {type : String },
    mainPepper : {type : String },
    imageUrl : {type : String },
    heat : {type : Number, min : 0 },
    likes : {type : Number, min : 0  },
    dislikes : {type : Number, min : 0  },
    usersLiked : {type : String [user] },
    usersDisliked : {type : String [user] }
});

const Sauce = mongoose.model('Sauce', sauceSchema);

