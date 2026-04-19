const securityService = require("./security-service");

async function getAll(request, response, next) {
  try {
    const data = await securityService.getAll();
    return response.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

async function getById(request, response, next) {
  try {
    const data = await securityService.getById(request.params.id);

    if (!data) {
      return response.status(404).json({ message: "Security data not found" });
    }

    return response.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

async function create(request, response, next) {
  try {
    const { userId, pin, verification, status } = request.body;

    // Validasi
    if (!userId) {
      return response.status(400).json({ message: "User ID is required" });
    }

    if (!pin) {
      return response.status(400).json({ message: "PIN is required" });
    }

    if (pin.length < 4) {
      return response.status(400).json({ message: "PIN must be at least 4 digits" });
    }

    const success = await securityService.createSecurity(
      userId,
      pin,
      verification,
      status
    );

    if (!success) {
      return response.status(422).json({ message: "Failed to create security data" });
    }

    return response.status(201).json({ message: "Security created successfully" });
  } catch (error) {
    return next(error);
  }
}

async function update(request, response, next) {
  try {
    const { userId, verification, status } = request.body;

    // cek data ada
    const existing = await securityService.getById(request.params.id);
    if (!existing) {
      return response.status(404).json({ message: "Security data not found" });
    }

    if (!userId) {
      return response.status(400).json({ message: "User ID is required" });
    }

    const success = await securityService.updateSecurity(
      request.params.id,
      userId,
      verification,
      status
    );

    if (!success) {
      return response.status(422).json({ message: "Failed to update security data" });
    }

    return response.status(200).json({ message: "Security updated successfully" });
  } catch (error) {
    return next(error);
  }
}

async function remove(request, response, next) {
  try {
    const success = await securityService.deleteSecurity(request.params.id);

    if (!success) {
      return response.status(422).json({ message: "Failed to delete security data" });
    }

    return response.status(200).json({ message: "Security deleted successfully" });
  } catch (error) {
    return next(error);
  }
}

//return

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};