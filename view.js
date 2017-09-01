

var matcherView = {

	model: matcherModel,

	init: function(  ) {
		this.$grid = $('#matcher-grid');
		this.addCardsToGrid();
		var width = 100.0 / this.model.size - 2;
		$('.card').css({
			width: width + "%"
		});

		$('.card').click( function(e) {
			matcherController.selectCard( $(this).data('card-id') );
		});

	},

	revealCard: function( id ) {
		$('#card-' + id).addClass('revealed');
	},

	setCorrect: function( id ) {
		$('#card-' + id).off('click');
		$('#card-' + id).addClass('correct');
	},

	hideCards: function(  ) {
		$('.card').not('.correct').removeClass('revealed');
	},

	addCardsToGrid: function(  ) {
		for( var i = 0; i < this.model.cards.length; i++ ) {
			var card = this.model.cards[i];
			var $cardDiv = $("<div><div class='name'>" + card.value + "</div></div>");
			$cardDiv.addClass('card');
			$cardDiv.data('card-id', card.id);
			$cardDiv.attr('id','card-' + card.id);
			this.$grid.append($cardDiv);
		}
	},

	updateGameView: function(  ) {
		$('#game-state-text').text( this.model.gameStateText );
		$('#num-guesses').text( this.model.numGuesses );
		$('#total-cards').text( this.model.totalCards );
		$('#matched-cards').text( this.model.matchedCards );
	},
	
	
};
