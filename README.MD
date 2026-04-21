URL pada accounts
Post (http://localhost:3000/accounts) untuk membuat akun baru dengan format sebagai berikut:
{
  "accountName": "Tabungan A",
  "ownerName": "Wilbert",
  "accountType": "Tabungan"
}


Get (http://localhost:3000/accounts) untuk melihat semua akun yang terdaftar

Get(http://localhost:3000/accounts/:id) untuk mencari salah satu akun berdasarkan id
contoh id : 69e77fe10f3e60da1f849baf