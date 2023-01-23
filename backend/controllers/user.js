import userModel from '../models/user.js';

class userController {
   static getAllUsers = async (req, res) => {
      try {
         const allUsers = await userModel.find({});
         if (allUsers)
            return res.status(200).json(allUsers);
      }
      catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static createUser = async (req, res) => {

      let { name, email, age } = req.body;
      try {
         if (name && email && age) {
            const newUser = userModel({
               name: name,
               email: email,
               age: age,
            });
            const savedUser = await newUser.save();
            if (savedUser)
               return res.status(201).json(savedUser)
            else
               return res.status(400).json({ message: "something wrong happened" })

         } else {
            return res.status(403).json({ message: "All Fields Are Required" })
         }
      }
      catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static getSingleUser = async (req, res) => {
      const { id } = req.params;
      try {
         if (id) {
            const getSingleUser = await userModel.findById(id);
            return res.status(200).json(getSingleUser);
         }
         else {
            return res.status(400).json({ message: 'Id not Found' })
         }

      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static updateUser = async (req, res) => {
      const { id } = req.params;
      try {
         if (id) {
            const getUpdatedUser = await userModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json(getUpdatedUser);
         }
         else {
            return res.status(400).json({ message: 'Id not Found' })
         }

      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static deleteUser = async (req, res) => {
      const { id } = req.params;
      try {
         if (id) {
            const getDeletedData = await userModel.findByIdAndDelete(id);
            return res.status(200).json(getDeletedData);
         }
         else {
            return res.status(400).json({ message: 'Id not Found' })
         }

      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

export default userController;