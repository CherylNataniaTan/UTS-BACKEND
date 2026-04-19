const cardsRepository = require("./cards-repository");

async function getCards() {
  return cardsRepository.getCards();
}

async function getCard(id) {
  return cardsRepository.getCard(id);
}

async function createCard(cardNumber, cardType, balance) {
  return cardsRepository.createCard(cardNumber, cardType, balance);
}

async function updateCard(id, cardNumber, cardType, balance) {
  return cardsRepository.updateCard(id, cardNumber, cardType, balance);
}

async function deleteCard(id) {
  return cardsRepository.deleteCard(id);
}

module.exports = {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};