const Card = require('../../models/cards-schema');

async function getCards() {
  return Card.find({});
}

async function getCard(id) {
  return Card.findById(id);
}

async function createCard(cardNumber, cardType, balance) {
  return Card.create({
    cardNumber,
    cardType,
    balance,
  });
}

async function updateCard(id, cardNumber, cardType, balance) {
  return Card.updateOne(
    { _id: id },
    { $set: { cardNumber, cardType, balance } }
  );
}

async function deleteCard(id) {
  return Card.deleteOne({ _id: id });
}

module.exports = {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};