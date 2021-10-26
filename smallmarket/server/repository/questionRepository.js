import { Question } from '../model/question.js';
import { User } from '../model/user.js';
import SQ from 'sequelize';

const Sequelize = SQ.Sequelize;

const INCLUDE_USER = {
  attribute: [
    'id',
    'text',
    'createAt',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attribute: [],
  },
};

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return Question.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return Question.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username }
    },
  });
}

export async function getById(id) {
  return Question.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(title, content, userId) {
  return Question.create({ title ,content, userId })
    .then((data) => this.getById(data.dataValues.id));
}

export async function update(id, content) {
  return Question.findByPk(id, INCLUDE_USER)
    .then((question) => {
      question.content = content;
      return question.save();
    }
  );
}

export async function remove(id) {
  return Question.findByPk(id)
    .then((question) => {
      question.destroy();
    }
  );
}