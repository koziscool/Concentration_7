

var matcherModel = {

	size: 4,
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
	cards: [],
	totalCards: 0,
	currentId: 1,
	numGuesses: 0,
	gameStateText: "You haven't won yet, keep going.",
	matchedCards: 0,
	selectedCard: null,


	init: function( size ) {
		this.size = size || this.size;	
		var totalPairs = Math.pow( this.size, 2)/2;
		for( var i = 0; i < totalPairs ; i++ ) {
			this.addPair();
		}
		this.shuffle();
	},

	checkGuess: function( id ) {
		this.numGuesses++;
		var correct = this.selectedCard.value === this.getCard(id).value;
		if( correct ) this.matchedCards += 2;
		this.selectedCard = null;
		if( this.matchedCards === this.totalCards  ){
			this.gameStateText = "Congratulations, you win.";
		}
		return correct;
	},

	getCard: function( id ) {
		for( var index in this.cards ){
			if( this.cards[index].id === id ){
				return this.cards[index];
			}
		}
		return null;
	},

	setSelectedCard: function( id ) {
		var card = this.getCard(id);
		if(card) this.selectedCard = card;
	},

	sameCard: function( id ) {
		return this.selectedCard && this.selectedCard.id === id;
	},

	getId: function( args ) {
		var id = this.currentId;
		this.currentId++;
		return id;
	},

	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},
	
	randomValue: function(  ) {
		return this.cardValues[ Math.floor( Math.random() * this.cardValues.length )];	
	},

	addPair: function(  ) {
		var value = this.randomValue();	
		this.cards.push( new this.Card( this.getId(), value ) );
		this.cards.push( new this.Card( this.getId(), value ) );
		this.totalCards += 2;
	},

	shuffle: function( args ) {
		var currentIndex = this.cards.length, temp, rand;

		while( currentIndex > 0 ){
			rand = Math.floor( Math.random() * currentIndex );
			currentIndex--;
			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

};

