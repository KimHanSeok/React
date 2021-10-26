import { Item } from '../model/item.js';

export async function findByName(itemName) {
  return Item.findOne({ where: { itemName } });
}

export async function findById(id) {
  return Item.findByPk(id);
}

export async function findAll() {
  return Item.findAll();
}