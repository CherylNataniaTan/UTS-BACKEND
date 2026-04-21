// const { errorResponder, errorTypes } = require('../../../core/errors');

// async function getAllAccounts(request, response, next) {
//   try {
//     const accounts = await accountsService.getAllAccounts();
//     return response.status(200).json({
//       success: true,
//       total_data: accounts.length,
//       data: accounts,
//     });
//   } catch (error) {
//     return next(error);
//   }
// }

// async function getAccountById(request, response, next) {
//   try {
//     const { id } = request.params;
//     const account = await accountsService.getAccountById(id);

//     if (!account) {
//       // Pake NOT_FOUND sesuai template lu
//       throw errorResponder(errorTypes.NOT_FOUND, 'Rekening gak ketemu cok');
//     }

//     return response.status(200).json({
//       success: true,
//       data: account,
//     });
//   } catch (error) {
//     return next(error);
//   }
// }

// async function createAccount(request, response, next) {
//   try {
//     const { accountName, ownerName } = request.body;

//     if (!accountName || !ownerName) {
//       // Pake VALIDATION sesuai template lu
//       throw errorResponder(
//         errorTypes.VALIDATION,
//         'Nama rekening ama owner harus diisi!'
//       );
//     }

//     const newAccount = await accountsService.createAccount(request.body);

//     return response.status(201).json({
//       success: true,
//       message: 'Berhasil buat rekening baru',
//       data: newAccount,
//     });
//   } catch (error) {
//     return next(error);
//   }
// }

// module.exports = {
//   getAllAccounts,
//   getAccountById,
//   createAccount,
// };

const errorTypes = {
  VALIDATION: {
    description: 'Invalid request',
    status: 400,
    code: 'VALIDATION_ERROR',
  },
  NOT_FOUND: {
    description: 'Empty response, not found',
    status: 404,
    code: 'NOT_FOUND_ERROR',
  },
  SERVER: {
    description: 'Server error occurred',
    status: 500,
    code: 'SERVER_ERROR',
  },
  // ... lu bisa tambahin lagi tipe lainnya dari template sebelumnya di sini
};

const errorResponder = (errorType, message = '') => {
  const error = new Error(message);
  if (errorType) {
    error.code = errorType.code || 'UNKNOWN_ERROR';
    error.status = errorType.status || 500;
    error.description = errorType.description || 'Unknown error occurred';
  }
  return error;
};

module.exports = {
  errorTypes,
  errorResponder,
};