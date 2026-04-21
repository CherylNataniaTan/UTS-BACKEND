const cardsService = require("./cards-service");

async function getCards(request, response, next) {
  try {
    const cards = await cardsService.getCards();
    return response.status(200).json(cards);
  } catch (error) {
    return next(error);
  }
}

async function getCard(request, response, next) {
  try {
    const card = await cardsService.getCard(request.params.id);

    if (!card) {
      return response.status(404).json({ message: "Card not found" });
    }

    return response.status(200).json(card);
  } catch (error) {
    return next(error);
  }
}

async function createCard(request, response, next) {
  try {
    const { cardNumber, cardType, balance } = request.body;

    if (!cardNumber) {
      return response.status(400).json({ message: "Card number is required" });
    }

    if (!cardType) {
      return response.status(400).json({ message: "Card type is required" });
    }

    const card = await cardsService.createCard(
      cardNumber,
      cardType,
      balance
    );

    return response.status(201).json(card);
  } catch (error) {
    return next(error);
  }
}

async function updateCard(request, response, next) {
  try {
    const { cardNumber, cardType, balance } = request.body;

    const existing = await cardsService.getCard(request.params.id);
    if (!existing) {
      return response.status(404).json({ message: "Card not found" });
    }

    await cardsService.updateCard(
      request.params.id,
      cardNumber,
      cardType,
      balance
    );

    return response.status(200).json({ message: "Card updated successfully" });
  } catch (error) {
    return next(error);
  }
}

async function deleteCard(request, response, next) {
  try {
    const existing = await cardsService.getCard(request.params.id);
    if (!existing) {
      return response.status(404).json({ message: "Card not found" });
    }

    await cardsService.deleteCard(request.params.id);

    return response.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};


