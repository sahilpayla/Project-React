const authController = require('express').Router();
const user = require('../models/user.js');
const bcrypt = require('bcrypt');

