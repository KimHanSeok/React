import {} from 'express-async-errors';
import * as itemRepository from '../repository/itemRepository.js';

export async function getAllItems(request, response) {
  const items = await itemRepository.findAll();

  if(!items) {
    return response.status(401).json({ message: "You can't find any items..." });
  }

  response.status(200).json({ items });
}

export async function getItemDetails(request, response) {
  const { id } = request.body;
  const item = await itemRepository.findById(id);

  if(!item) {
    return response.status(401).json({ message: "You can't find item details..." });
  }

  response.status(200).json({ item });
}