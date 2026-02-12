module.exports = {
    apps: [
        {
            name: "webhook-convito-app",   // Nama aplikasi
            script: "npm",           // Menjalankan 'npm'
            args: "start",           // Jalankan perintah 'npm start'
            instances: 1,            // Jumlah instances yang ingin dijalankan
            autorestart: true,       // Autorestart aplikasi jika crash
            watch: false,            // Disable watch mode
            max_memory_restart: "2G" // Restart aplikasi jika penggunaan memori lebih dari 1GB
        }
    ]
}