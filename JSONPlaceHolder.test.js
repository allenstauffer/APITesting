const request = require('supertest');
const express = require('express');

var app = require('./index.js');


describe('Sample Test', () => {
  afterEach(() => {
    app.close();
  });
    // it('', async () => {
    //     var test = await request(app).get('/posts/1/comments').expect(200)
    //     // /.expect('Content-Type', /json/);
    //     //done();
    //  })

     
  it('responds with a 200 and json content type', (done) => {

    test = request(app).get('/posts/1/comments').expect(200,{
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }, done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/posts/comments').expect(404,done)

  })

  it('responds with a 404 when no comments', (done) => {

    test = request(app).get('/posts/1').expect(404,done)

  })


  it('responds with a 200 and json content type', (done) => {

    test = request(app).get('/albums/1/photo').expect(200,{
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/albums/photo').expect(404,done)

  })

  it('responds with a 404 when no photo', (done) => {

    test = request(app).get('/albums/1').expect(404,done)

  })

  it('responds with a 200 and json content type-almbums', (done) => {

    test = request(app).get('/users/1/albums').expect(200,{
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/users/albums').expect(404,done)

  })

  it('responds with a 404 when no photo', (done) => {

    test = request(app).get('/users/1').expect(404,done)

  })

  it('responds with a 200 and json content type', (done) => {

    test = request(app).get('/users/1/todos').expect(200,{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/users/todos').expect(404,done)

  })

  it('responds with a 200 and json content type', (done) => {

    test = request(app).get('/users/1/posts').expect(200,{
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/users/posts').expect(404,done)

  })

  it('responds with a 404 when no id', (done) => {

    test = request(app).get('/users/1/badFlag').expect(201, done)

  })

  it('Register no username or email', (done) => {
    request(app).post('/users').expect(404, done);
  })

  it('Register no username', (done) => {
    request(app).post('/users/fakename').expect(404, done);
  })

  it('Register no email', (done) => {
    request(app).post('/users/fakeemail@email.com').expect(404, done);
  })

  it('Register', (done) => {
    request(app).post('/users/fakename/fakeemail@email.com').expect(200,done);
  })

});
