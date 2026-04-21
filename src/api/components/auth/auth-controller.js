const authService = require('./auth-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAuthSessions(request, response, next) {
  try {
    const sessions = await authService.getAuthSessions();
    return response.status(200).json(sessions);
  } catch (error) {
    return next(error);
  }
}

async function getAuthSession(request, response, next) {
  try {
    const session = await authService.getAuthSession(request.params.id);

    if (!session) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Auth session not found'
      );
    }

    return response.status(200).json(session);
  } catch (error) {
    return next(error);
  }
}

async function login(request, response, next) {
  try {
    const { email, password } = request.body;

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }
    if (!password) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password is required');
    }

    const loginResult = await authService.checkLogin(email, password);

    if (!loginResult) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        'Wrong email or password'
      );
    }

    return response.status(200).json(loginResult);
  } catch (error) {
    return next(error);
  }
}

async function updateAuthSession(request, response, next) {
  try {
    const session = await authService.getAuthSession(request.params.id);

    if (!session) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Auth session not found'
      );
    }

    const success = await authService.updateAuthToken(
      request.params.id,
      session.email
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update auth session'
      );
    }

    return response.status(200).json({ message: 'Auth session updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteAuthSession(request, response, next) {
  try {
    const session = await authService.getAuthSession(request.params.id);

    if (!session) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Auth session not found'
      );
    }

    const success = await authService.deleteAuthSession(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete auth session'
      );
    }

    return response.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    return next(error);
  }
}

async function testProtected(request, response, next) {
  try {
    return response.status(200).json({ message: 'OK' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAuthSessions,
  getAuthSession,
  login,
  updateAuthSession,
  deleteAuthSession,
  testProtected,
};