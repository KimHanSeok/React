import {} from 'express-async-errors';
import * as questionRepository from '../repository/questionRepository.js';

export async function getQuestions(request, response) {
  const username = request.query.username;
  const data = await (username 
    ? questionRepository.getAllByUsername(username)
    : questionRepository.getAll());
  response.status(200).json(data);
}

export async function getQuestion(request, response) {
  const id = request.params.id;
  const question = await questionRepository.getById(id);
  
  if(question) {
    response.status(200).json(question);
  } else {
    response.status(404).json({ message: `Question board id (${id}) not found...` });
  }
}

export async function createQuestion(request, response) {
  const title = request.body.title;
  const content = request.body.content
  const question = await questionRepository.create(title, content, request.userId);
  response.status(201).json(question);
}

export async function updateQuestion(request, response) {
  const id = request.params.id;
  const content = request.body.content;
  const question = await questionRepository.getById(id);
  
  if(!question) {
    return response.stats(404).json({ message: `Cannot find question: ${id}` });
  }

  if(question.userId !== request.userId) {
    return response.sendStatus(403);
  }

  const updated = await questionRepository.update(id, content);
  response.status(200).json(updated);
}

export async function deleteQuestion(request, response) {
  const id = request.params.id;
  const question = await questionRepository.getById(id);

  if(!question) {
    return response.status(404).json({ message: `Cannot find question: ${id}` });
  }

  if(question.userId !== request.userId) {
    return response.sendStatus(403);
  }

  await questionRepository.remove(id);
  response.status(204);
}