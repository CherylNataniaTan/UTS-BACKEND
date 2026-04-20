const usersService = require('./users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword, passwordMatched } = require('../../../utils/password');

async function getUsers(request, response, next) {
  try {
    const users = await usersService.getUsers();
    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUser(request, response, next) {
  try {
    const user = await usersService.getUser(request.params.id);

    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function createUser(request, response, next) {
  try {
    const {
      email,
      password,
      full_name: fullName,
      phone_number: phoneNumber,
      confirm_password: confirmPassword,
    } = request.body;

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }

    if (!fullName) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Full name is required');
    }

    if (!password) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password is required');
    }

    if (!confirmPassword) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Confirm password is required');
    }

    if (await usersService.emailExists(email)) {
      throw errorResponder(errorTypes.EMAIL_ALREADY_TAKEN, 'Email already exists');
    }

    if (password.length < 8) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Password must be at least 8 characters long'
      );
    }

    if (password !== confirmPassword) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Password and confirm password do not match'
      );
    }

    const hashedPassword = await hashPassword(password);

    const accountNumber = usersService.generateAccountNumber();

    const success = await usersService.createUser(
      email,
      hashedPassword,
      fullName,
      phoneNumber || null,
      accountNumber
    );

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to create user');
    }

    return response.status(201).json({
      message: 'User created successfully',
      account_number: accountNumber,
    });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(request, response, next) {
  try {
    const {
      email,
      full_name: fullName,
      phone_number: phoneNumber,
    } = request.body;

    const user = await usersService.getUser(request.params.id);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }

    if (!fullName) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Full name is required');
    }

    if (email !== user.email && (await usersService.emailExists(email))) {
      throw errorResponder(errorTypes.EMAIL_ALREADY_TAKEN, 'Email already exists');
    }

    const success = await usersService.updateUser(
      request.params.id,
      email,
      fullName,
      phoneNumber || user.phoneNumber
    );

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to update user');
    }

    return response.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function changePassword(request, response, next) {
  try {
    const id = request.params.id;
    const {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    } = request.body;

    const user = await usersService.getUser(id);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    if (!oldPassword) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Old password is required');
    }
    if (!newPassword) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'New password is required');
    }
    if (!confirmNewPassword) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Confirm new password is required'
      );
    }

    const { getUserByEmail } = require('./users-repository');
    const userWithPassword = await getUserByEmail(user.email);

    const isOldPasswordCorrect = await passwordMatched(
      oldPassword,
      userWithPassword.password
    );
    if (!isOldPasswordCorrect) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        'Old password is incorrect'
      );
    }

    if (newPassword.length < 8) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'New password must be at least 8 characters long'
      );
    }

    if (newPassword === oldPassword) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'New password must be different from old password'
      );
    }

    if (newPassword !== confirmNewPassword) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'New password and confirm new password do not match'
      );
    }

    const hashedNewPassword = await hashPassword(newPassword);

    const success = await usersService.changePassword(id, hashedNewPassword);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to change password'
      );
    }

    return response.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    const user = await usersService.getUser(request.params.id);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    const success = await usersService.deleteUser(request.params.id);

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to delete user');
    }

    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};