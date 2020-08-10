import express from 'express';
import Account from '../models/accountModel.js';
import { getToken, isAuth } from '../tokenVerification.js';

const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
  try{
    const userId = req.params.id;
    const user = await Account.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    }
  }catch(err){
    console.log('check errors in account found flow',err);
    res.status(404).send({ message: 'Account Not Found' });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const signinUser = await Account.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    }
  } catch (err) {
    console.log('Error in sign in module',err);
    res.status(401).send({ message: 'Invalid credentials, please check email or password.'});
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = new Account({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    }
  } catch (err) {
    if (err.name == "MongoError") {
      res.status(409).send({ message: "There was conflict creating account, please check credentials." });
    } else {
      res.status(401).send({ message: "There was error in creating data.Invalid Account Data." });
    }
  }
});

router.get('/createadmin', async (req, res) => {
  try {
    const user = new Account({
      name: 'testforBest',
      email: 'four@example.com',
      password: '1234',
      isAdmin: true,
    });
    const newUser = await user.save();
    //res.send(newUser);
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: true,
      token: getToken(newUser),
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;
